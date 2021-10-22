defmodule WttjFullstack.Ats.Candidacy do
  use Ecto.Schema
  import Ecto.Changeset

  alias WttjFullstack.Ats.Job

  @cast_fields [:email]
  @required_fields [:email]

  schema "candidacies" do
    field(:email, :string)
    field(:state, :string)
    field(:position, :integer)
    belongs_to(:job, Job)

    timestamps()
  end

  @doc false
  def changeset(candidacy, attrs) do
    candidacy
    |> cast(attrs, @cast_fields)
    |> validate_required(@required_fields)
  end
end
