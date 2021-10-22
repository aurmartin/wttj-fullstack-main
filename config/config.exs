# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :wttj_fullstack,
  ecto_repos: [WttjFullstack.Repo],
  locked_after: 4

# Configures the endpoint
config :wttj_fullstack, WttjFullstackWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "svqSRdYYcf3Nm8BI3XwQJJvNsydLw4M4trm8T+vqvUzXGtWVy9+usJENd7FMiJ9t",
  render_errors: [view: WttjFullstackWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: WttjFullstack.PubSub, adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
