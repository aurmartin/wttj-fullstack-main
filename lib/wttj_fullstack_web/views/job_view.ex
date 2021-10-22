defmodule WttjFullstackWeb.JobView do
  use WttjFullstackWeb, :view

  def render("jobs.json", %{jobs: jobs}) do
    %{
      jobs: render_many(jobs, __MODULE__, "job.json")
    }
  end

  def render("job.json", %{job: job}) do
    %{
      id: job.id,
      name: job.name
    }
  end
end
