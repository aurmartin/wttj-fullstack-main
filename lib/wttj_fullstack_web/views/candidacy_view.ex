defmodule WttjFullstackWeb.CandidacyView do
  use WttjFullstackWeb, :view

  def render("candidacies.json", %{candidacies: candidacies}) do
    %{
      candidacies: render_many(candidacies, __MODULE__, "candidacy.json")
    }
  end

  def render("candidacy.json", %{candidacy: candidacy}) do
    %{
      candidacy: %{
        id: candidacy.id,
        email: candidacy.email,
        state: candidacy.state,
        position: candidacy.position
      }
    }
  end

  def render("error.json", %{changeset: changeset}) do
    %{
      errors: Ecto.Changeset.traverse_errors(changeset, &translate_error/1)
    }
  end
end
