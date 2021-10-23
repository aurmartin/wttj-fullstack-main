defmodule WttjFullstackWeb.JobChannel do
  use WttjFullstackWeb, :channel

  def join("job:" <> id, _payload, socket) do
    {:ok, assign(socket, :job_id, id)}
  end
end
