defmodule WttjFullstackWeb.TestDbController do
  use WttjFullstackWeb, :controller

  def create(conn, _params) do
    WttjFullstack.Repo.delete_all(WttjFullstack.Ats.Candidacy)
    WttjFullstack.Repo.delete_all(WttjFullstack.Ats.Job)

    job = %WttjFullstack.Ats.Job{
      name: "Full stack developer",
      candidacies: [
        %WttjFullstack.Ats.Candidacy{
          email: "john@doe.com",
          state: "new",
          position: 1
        },
        %WttjFullstack.Ats.Candidacy{
          email: "al@capone.com",
          state: "new",
          position: 2
        },
        %WttjFullstack.Ats.Candidacy{
          email: "steve@jobs.com",
          state: "new",
          position: 3
        },
      ]
    }

    WttjFullstack.Repo.insert!(job)

    send_resp(conn, 200, "")
  end
end
