# Copyright 2019 Volvo Cars
#
# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# ”License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#  http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# “AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.

defmodule Client do

  require Logger
  use GenServer

  defmodule State, do: defstruct [
    :sink, :socket, buffer_message: ""
  ]

  def start_link(sink) do
    GenServer.start_link(__MODULE__, sink)
  end

  def stop(pid, reason \\ :normal, timeout \\ :infinity) do
    GenServer.stop(pid, reason, timeout)
  end

  def send_json_command(pid, json_command) do
    GenServer.call(pid, {:api_call, json_command})
  end
  #####
  # GenServer implementaion

  def init(sink) do
    socket = connect()
    Logger.debug "Start SocketHolder pid: #{inspect self()} socket: #{inspect socket}"
    {:ok, %State{sink: sink, socket: socket, buffer_message: ""}}
  end


  def connect() do
    signal_server =
      case System.get_env("SIGNAL_SERVER_HOST_NAME") do
        nil -> '127.0.0.1'
        value -> to_charlist(value)
      end

    options = [:binary, reuseaddr: true]
    {:ok, socket} = :gen_tcp.connect(signal_server, 4040, options)
    Logger.debug "client is connected"
    socket
  end

  def disconnect(pid) do
    GenServer.cast(pid, {:disconnect})
  end

  def handle_call({:api_call, json_command}, _from, state) do
    # Logger.debug "called handle_call with #{inspect json_command}"
    send_over_socket(state.socket, json_command <> "\n")
    {:reply, :ok, state}
  end

  # this is where we get messages which we dispatch to the web client (socket)
  def handle_info({:tcp, _port, message}, state) do
    concat_message = state.buffer_message <> message;

    pieces = String.split(concat_message, "\n")
    Enum.drop(pieces, -1)
    |> Enum.filter(fn(x) ->
      String.length(x) > 0
    end)
    |> Enum.map(fn(x) ->
      send(state.sink, {0, 0, x})
    end)
    [remaining] = Enum.take(pieces, -1)

    {:noreply, %State{state | buffer_message: remaining}}
  end

  def handle_info({:tcp_closed, port}, state) do
    Logger.debug "handle info, port closed pid: #{inspect self()} socket: #{inspect state.socket} message: #{inspect port}"
    send(state.sink, {0, 0, "signal server disconnected\n"})
    disconnect(self())
    {:noreply, state}
  end

  def handle_cast({:disconnect}, state) do
    :gen_tcp.close(state.socket)
    Logger.debug "terminating process #{inspect self()}"
    {:stop, :normal, state}
  end

  def send_over_socket(socket, payload) do
    :gen_tcp.send(socket, payload)
  end


end
