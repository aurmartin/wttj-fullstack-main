defmodule WttjFullstack.Ats.Candidacy do
  use Ecto.Schema
  import Ecto.Changeset

  alias WttjFullstack.Ats.Job

  @cast_fields [:position, :state]
  @required_fields [:position, :state]

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

  def move_candidacy(candidacies, %{state: old_state} = candidacy, position, new_state) do
    # Create a list by candidacy state. Sort each list by candidacy.position
    # Then, insert on new state's list the candidacy, and remove it from old state's list
    # Finally, recalculate positions based on each candidacy index in lists

    candidacies
    |> Enum.group_by(& &1.state)
    |> Map.put_new(new_state, [])
    |> Enum.flat_map(fn
      {^new_state, candidacies} ->
        candidacies
        |> Enum.filter(& &1.id != candidacy.id)
        |> Enum.sort_by(& &1.position)
        |> List.insert_at(position, %{candidacy | state: new_state})
        |> Enum.with_index()
        |> Enum.map(fn {candidacy, index} -> change(candidacy, position: index) end)

      {^old_state, candidacies} ->
        candidacies
        |> Enum.filter(& &1.id != candidacy.id)
        |> Enum.sort_by(& &1.position)
        |> Enum.with_index()
        |> Enum.map(fn {candidacy, index} -> change(candidacy, position: index) end)

      {_, _} ->
        []
    end)
  end
end
