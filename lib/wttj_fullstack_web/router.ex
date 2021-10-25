defmodule WttjFullstackWeb.Router do
  use WttjFullstackWeb, :router

  pipeline :browser do
    plug(:accepts, ["html"])
    plug(:fetch_session)
    plug(:fetch_flash)
    plug(:protect_from_forgery)
    plug(:put_secure_browser_headers)
  end

  pipeline :api do
    plug(:accepts, ["json"])
  end

  scope "/", WttjFullstackWeb do
    pipe_through(:browser)
    get("/", HomeController, :index)
  end

  scope "/api", WttjFullstackWeb do
    pipe_through(:api)

    resources("/job", JobController, only: [:index]) do
      resources("/candidacy", CandidacyController, only: [:index, :update])
    end
  end

  scope "/test", WttjFullstackWeb do
    pipe_through(:api)

    resources("/db", TestDbController, only: [:create])
  end
end
