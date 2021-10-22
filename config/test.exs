use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :wttj_fullstack, WttjFullstackWeb.Endpoint,
  http: [port: 4001],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
config :wttj_fullstack, WttjFullstack.Repo,
  adapter: Ecto.Adapters.Postgres,
  database: "wttj_fullstack_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox
