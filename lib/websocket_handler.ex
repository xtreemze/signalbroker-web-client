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

defmodule WebsocketHandler do
  @behaviour :cowboy_websocket

  require Logger

  # We are using the regular http init callback to perform handshake.
  #     http://ninenines.eu/docs/en/cowboy/2.0/manual/cowboy_handler/
  #
  # Note that handshake will fail if this isn't a websocket upgrade request.
  # Also, if your server implementation supports subprotocols,
  # init is the place to parse `sec-websocket-protocol` header
  # then add the same header to `req` with value containing
  # supported protocol(s).
  def init(req, _) do
    {:ok, client_pid} = Client.start_link(self())
    {:cowboy_websocket, req, client_pid}
  end

  # Put any essential clean-up here.
  def terminate(_reason, _req, client_pid) do
    Client.disconnect(client_pid)
    :ok
  end

  # websocket_handle deals with messages coming in over the websocket,
  # including text, binary, ping or pong messages. But you need not
  # handle ping/pong, cowboy takes care of that.
  def websocket_handle({:text, content}, req, client_pid) do
    Client.send_json_command(client_pid, content)
    reply = ~s({"reply" : "command sent"})
    {:reply, {:text, reply}, req, client_pid}
  end

  # Fallback clause for websocket_handle.  If the previous one does not match
  # this one just ignores the frame and returns `{:ok, state}` without
  # taking any action. A proper app should  probably intelligently handle
  # unexpected messages.
  def websocket_handle(_frame, _req, client_pid) do
    {:ok, client_pid}
  end

  # websocket_info is the required callback that gets called when erlang/elixir
  # messages are sent to the handler process. In this example, the only erlang
  # messages we are passing are the :timeout messages from the timing loop.
  #
  # In a larger app various clauses of websocket_info might handle all kinds
  # of messages and pass information out the websocket to the client.
  def websocket_info({_timeout, _ref, msg}, req, client_pid) do
    message = msg
    { :reply, {:text, message}, req, client_pid}
  end

  # fallback message handler
  def websocket_info(_info, _req, client_pid) do
    Logger.debug "recieved message2"
    {:ok, client_pid}
  end

end
