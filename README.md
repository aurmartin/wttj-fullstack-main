# WttjFullstack

A live demo is available on AWS EC2 : http://ec2-13-37-229-106.eu-west-3.compute.amazonaws.com/

## Installation

Install npm packages :
```
cd assets
npm install
```

Start Phoenix :
```
mix deps.get
mix ecto.setup
mix phx.server
```

## Tests

Cypress is used for E2E testing.

To run a specific test case :
```
cd  assets
npx cypress run --spec test/cypress/integration/home_page_spec.js
```

To use the cypress UI :

```
cd assets
npx cypress open
```

## CI/CD

Docker and CircleCI are used to automatically deploy the application on AWS EC2.

The CircleCI configuration is in the `.circleci` folder.

## Todo

### Devops

- Launch tests in CircleCI workflow
- Fix docker volume on postgres to avoid losing data at each deploy :D
- Add a nginx container in docker-compose to have a reverse proxy
- Deploy multiple instances
- Use a load balancer : the one from AWS or a custom one using nginx

### Dev

- Implements elixir unit tests
- Use websocket to move a candidacy ?
- Add job selection to frontend using a navbar
- Add authentification
- Improve design
