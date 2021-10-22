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
    %WttjFullstack.Ats.Candidacy{
      email: "bill@gate.com",
      state: "new",
      position: 4
    },
    %WttjFullstack.Ats.Candidacy{
      email: "albert@einstein.com",
      state: "new",
      position: 5
    }
  ]
}

WttjFullstack.Repo.insert!(job)
