defmodule WttjFullstackWeb.CandidacyView do
  use WttjFullstackWeb, :view

  def render("candidacies.json", %{candidacies: candidacies}) do
    %{
      candidacies:
        candidacies
        |> Enum.sort_by(& &1.position)
        |> render_many(__MODULE__, "candidacy.json")
    }
  end

  def render("candidacy.json", %{candidacy: candidacy}) do
    %{
      id: to_string(candidacy.id),
      jobId: to_string(candidacy.job_id),
      email: candidacy.email,
      state: candidacy.state,
      position: candidacy.position
    }
  end

  def render("error.json", %{changeset: changeset}) do
    %{
      errors: Ecto.Changeset.traverse_errors(changeset, &translate_error/1)
    }
  end
end
