defmodule WttjFullstack.Repo.Migrations.CreateCandidacies do
  use Ecto.Migration

  def change do
    create table(:candidacies) do
      add(:email, :string)
      add(:state, :string)
      add(:position, :integer)
      add(:job_id, references(:jobs), on_delete: :delete_all)

      timestamps()
    end
  end
end
