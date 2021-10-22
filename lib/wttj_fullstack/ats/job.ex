defmodule WttjFullstack.Ats.Job do
  use Ecto.Schema
  import Ecto.Changeset

  alias WttjFullstack.Ats.Candidacy

  schema "jobs" do
    field(:name, :string)
    has_many(:candidacies, Candidacy)

    timestamps()
  end

  @doc false
  def changeset(job, attrs) do
    job
    |> cast(attrs, [:name])
    |> validate_required([:name])
  end
end
