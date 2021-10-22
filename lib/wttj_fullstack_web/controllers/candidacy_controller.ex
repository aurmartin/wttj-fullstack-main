defmodule WttjFullstackWeb.CandidacyController do
  use WttjFullstackWeb, :controller

  alias WttjFullstack.Ats
  alias WttjFullstack.Ats.Candidacy

  def index(conn, %{"job_id" => job_id}) do
    %Ats.Job{candidacies: candidacies} =
      Ats.get_job!(job_id)
      |> WttjFullstack.Repo.preload(:candidacies)

    render(conn, "candidacies.json", candidacies: candidacies)
  end

  def update(conn, %{"id" => id} = params) do
    candidacy = Ats.get_candidacy!(id)

    case Ats.update_candidacy(candidacy, params) do
      {:ok, %Candidacy{} = candidacy} ->
        render(conn, "candidacy.json", candidacy: candidacy)

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "error.json", changeset: changeset)
    end
  end
end
