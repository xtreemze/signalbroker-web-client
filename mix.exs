defmodule ServiceClient.Mixfile do
  use Mix.Project

  def project do
    [app: :service_client,
     version: app_version(),
     elixir: "~> 1.4",
     build_embedded: Mix.env == :prod,
     start_permanent: Mix.env == :prod,
     deps: deps()]
  end

  # Configuration for the OTP application
  #
  # Type "mix help compile.app" for more information
  def application do
    # Specify extra applications you'll use from Erlang/Elixir
    [extra_applications: [:logger, :cowboy, :ranch],
    mod: {ServiceClient.Application, []}]
  end

  defp app_version do
      with {out, 0} <- System.cmd("git", ~w[describe], stderr_to_stdout: true) do
        version =
        out
        |> String.trim()
        |> String.split("-")
        |> Enum.take(2)
        |> Enum.join(".")
        |> String.trim_leading("v")
        case Integer.parse(String.at(out, 0)) do
          # describe returned another tag.
          {_number, _} -> version
          _ -> "0.1.0-#{String.replace(version, "_", "-")}"
        end
      else
        _ -> "0.1.0"
      end
  end

  # Dependencies can be Hex packages:
  #
  #   {:my_dep, "~> 0.3.0"}
  #
  # Or git/path repositories:
  #
  #   {:my_dep, git: "https://github.com/elixir-lang/my_dep.git", tag: "0.1.0"}
  #
  # Type "mix help deps" for more examples and options
  defp deps, do: [
    { :cowboy, github: "ninenines/cowboy", tag: "2.0.0-pre.3" },
    {:poison, "~> 3.1"},
    {:distillery, "~> 2.0.12", runtime: false},
  ]
end
