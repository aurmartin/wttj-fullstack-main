defmodule WttjFullstackWeb.JobChannel do
  use WttjFullstackWeb, :channel

  def join("job:" <> _id, _payload, socket) do
    {:error, socket}
  end
end
