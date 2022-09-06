# universal-data

This is the data contract repository.

## Stories
1. As an architect, I want to establish the data model at design stage, so that frontend and backend development can be proceeded without dependency
2. As a backend developer, I want to test my API against the swagger model (or mock response if framework allowed) at build stage, so that I can perform contract testing in either TDD and BDD manner for quality assurance.
3. As a frontend developer, I want to build my data layer, domain layer and application layer without the backend deployment, so that I can work independently.
4. As a platform engineer, I want to type a data model in declarative language, so that our deployment is always in compliance.

## Usage
1. Update the response in mock-api/*.json
2. Update the swagger at mock-api/swagger.json
3. Execute `node index.js`
4. The axios client interface will be ready in `./service` folder
5. Speak with your frontend guru for further action