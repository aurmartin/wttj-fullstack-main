defmodule WttjFullstack.Ats do
  @moduledoc """
  The Ats context.
  """

  import Ecto.Query, warn: false
  alias WttjFullstack.Repo

  alias WttjFullstack.Ats.{Job, Candidacy}

  @doc """
  Returns the list of jobs.

  ## Examples

      iex> list_jobs()
      [%Job{}, ...]

  """
  def list_jobs do
    Repo.all(Job)
  end

  @doc """
  Gets a single job.

  Raises `Ecto.NoResultsError` if the Job does not exist.

  ## Examples

      iex> get_job!(123)
      %Job{}

      iex> get_job!(456)
      ** (Ecto.NoResultsError)

  """
  def get_job!(id), do: Repo.get!(Job, id)

  @doc """
  Creates a job.

  ## Examples

      iex> create_job(%{field: value})
      {:ok, %Job{}}

      iex> create_job(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_job(attrs \\ %{}) do
    %Job{}
    |> Job.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a job.

  ## Examples

      iex> update_job(job, %{field: new_value})
      {:ok, %Job{}}

      iex> update_job(job, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_job(%Job{} = job, attrs) do
    job
    |> Job.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a Job.

  ## Examples

      iex> delete_job(job)
      {:ok, %Job{}}

      iex> delete_job(job)
      {:error, %Ecto.Changeset{}}

  """
  def delete_job(%Job{} = job) do
    Repo.delete(job)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking job changes.

  ## Examples

      iex> change_job(job)
      %Ecto.Changeset{source: %Job{}}

  """
  def change_job(%Job{} = job) do
    Job.changeset(job, %{})
  end

  @doc """
  Returns the list of candidacies.

  ## Examples

      iex> list_candidacies()
      [%Candidacy{}, ...]

  """
  def list_candidacies do
    Repo.all(Candidacy)
  end

  @doc """
  Gets a single candidacy.

  Raises `Ecto.NoResultsError` if the Candidacy does not exist.

  ## Examples

      iex> get_candidacy!(123)
      %Candidacy{}

      iex> get_candidacy!(456)
      ** (Ecto.NoResultsError)

  """
  def get_candidacy!(id), do: Repo.get!(Candidacy, id)

  @doc """
  Creates a candidacy.

  ## Examples

      iex> create_candidacy(%{field: value})
      {:ok, %Candidacy{}}

      iex> create_candidacy(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_candidacy(attrs \\ %{}) do
    %Candidacy{}
    |> Candidacy.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a candidacy.

  ## Examples

      iex> update_candidacy(candidacy, %{field: new_value})
      {:ok, %Candidacy{}}

      iex> update_candidacy(candidacy, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_candidacy(%Candidacy{} = candidacy, attrs) do
    candidacy
    |> Candidacy.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a Candidacy.

  ## Examples

      iex> delete_candidacy(candidacy)
      {:ok, %Candidacy{}}

      iex> delete_candidacy(candidacy)
      {:error, %Ecto.Changeset{}}

  """
  def delete_candidacy(%Candidacy{} = candidacy) do
    Repo.delete(candidacy)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking candidacy changes.

  ## Examples

      iex> change_candidacy(candidacy)
      %Ecto.Changeset{source: %Candidacy{}}

  """
  def change_candidacy(%Candidacy{} = candidacy) do
    Candidacy.changeset(candidacy, %{})
  end
end
