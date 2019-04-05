defmodule ServiceClient.Application do
  # See http://elixir-lang.org/docs/stable/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  def start(type, args) do
    CowboyElixirExample.start(type, args)
  end
end
