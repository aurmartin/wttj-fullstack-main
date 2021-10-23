defmodule WttjFullstackWeb.JobController do
  use WttjFullstackWeb, :controller

  alias WttjFullstack.Ats

  def index(conn, _) do
    jobs = Ats.list_jobs()
    render(conn, "jobs.json", jobs: jobs)
  end
end
