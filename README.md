# Todo-Application

- Todo application for SQA assignment 2

## <ins>Project Description</ins>

- desc of project
- features
- snapshots of ui

## <ins>Team Description</ins>
Our team consisted of only two members. Due to this, each member undertook multiple roles in the team.

**Abdul-Subhan Latif** - Abdul-Subhan was the lead QA tester on the team. His role in the project entailed writing tests for the application and ensuring SQA practices were implemented throughout the project lifecycle. Alongside this Abdul was heavily involved in the planning stage, designing the initial figma for the Front-End and outlining the functional and non-functional requirements for the project.

Abdul-Subhan Key Roles:
- Writing Tests
- Implementing linting checks
- Implementing code formatter
- SQA practices
- Reviewing Pull Requests
- Smoke testing Pull Requests
- Lead designer
  
**Sumair Ruhani** - Sumair was the lead developer on the team. He designed and implemented the core functionality for the To-Do app, alongisde styling it based on the figma designs. Alongside this, Sumair was responsible for ensuring CI/CD practices were implemented in the project, by writing GitHub actions and Git Hooks. 

Sumair Key Roles:
- Writing the program
- Implementing branch naming conventions
- Implementing Automated testing
- CI/CD practices
- Reviewing Pull Requests
- Smoke testing Pull Requests
- Project Manager
  
Both members of the team evenly split the workload between themselves, with one primarily focused on developing the app and implementing CI/CD practices, while the other was focused on writing tests and ensuring SQA practices where met. Therefore, the contribution from each member was 50% each.

**It's worth noting that the line contributions cannot be used as an accurate reference for the amount of contributions from each member, due to an error where the `node_modules` (installed prewritten packages) where accidently committed alongside the rest of the code, causing the lines committed for one member of the team to be significantly more than it should be. Therefore, it would be better to go through the merged pull requests, to view contributions from each member. This can be done using the search filter on the pull requests tab of the repository and setting the filter to: `is:pr is:merged`**

## <ins>Tools Used</ins>

- version control - GitHub
- testing - Jest / React Testing Library
- test code coverage
- frameworks and libraries - React / MUI

### _Linters_

_ESLint_

This project utilisies ESLint for analysing JavaScript code for potential errors, styling issues, and adherence to coding standards.
ESLint rules have been defined by the team in the .eslintrc.js file, in rukles for errors, warnings and styling have been customised.
ESLint has been integrated in the `package.json` file to run after each commit and after each push.
To manually run the linter on the code, run the command:

```
npx eslint .
```

- project management tools (JIRA)
- performance and accessibility audit

## <ins>Instructions to Run the Application</ins>

- how the project can be cloned and run
- how to use the application

### _Branch naming conventions_

Branches should be identified as feature|task|bugfix|hotfix, followed by the JIRA task id and a description, for example:

```
feature/TODO-999_enforce_branch_naming_conventions
```

To ensure that branch names adhere to the specified conventions, we have set up a Git hook. Follow the steps below to set up the hook in your local repository.

Make the script file executable:

```
chmod +x setup-hooks.sh
```

Run the script file to download and set up the git hook:

```
./setup-hooks.sh
```

## <ins>Project Workflow</ins>

### _Git Hooks_

Git hooks are scripts that Git automatically executes primarily on a local machine before or after events (like committing, pushing, pulling, etc).
These hooks tailor the Git workflow to project-specific needs by enforcing coding standards, running tests, and preventing commits that don't meet predefined criteria.
Default Git hooks are stored in `./.git/hooks`.
Created hooks are kept in `./git-hooks`
The hooks created for this project are:

- Branch naming convensions

- project management strategies
- ceremones
- retrospectives
- agile practices
- kanban board

## <ins>Test Methodologies and Tools</ins>

- test methodologies applies (TDD, BDD)
- types of testing done (UI testing, unit, code coverage, smoke, integration, e2e)
- evidence of test methods and tools (tables of tests, snapshots, code coverage)

## <ins>Coding Best Practices</ins>

- best coding practices applied

## <ins>CI Pipeline</ins>

- how the CI pipelines were set up
- snapshots of test sui results
- PR strategies applied

### _GitHub Actions_

GitHub Actions are workflows defined in code, stored alongside the code in a repository.
GitHub Actions automate the SDLC, from building and testing to deploying.
They are triggered by events, and executed in GitHub-hosted runners, allowing easy integration with GitHub repositories. Likewise, they sit directly in the GitHub Pipeline, dictating what can be merged into the codebase, based on their outcomes.
The GitHub Actions integrated in this repository are:

- **Automatic Reviewer assign** - Whenever a pull request is created, an appropriate reviewer is assigned. Since our project had two members, whenever one member created a pull request, the action automatically assigned the other member as a required reviewer. The reviewer recieves an email notification that they need to review the pull request. This removes the need for the developer to manually add reviewers. Likewise, this prevents the situation where users forget to assign reviewers to their pull request, resulting in it sitting and becoming stale, which is bad practice.

- **Automatic author assign** - Whenever a pull request is created, the creator of it is automatically assigned as the author. This removes the mundane step for developers to manually assign themselves as an author (which is often forgotten about) and ensures the reviewer knows who was responsible for the pull request

- **Automated testing** - An Action has been written to run all tests within the codebase in the pipeline automatically. This includes all unit tests and integration tests. The action is triggered whenever a pull request is created, or updated. It runs using NodeJS in the GitHub pipeline and will log all of the tests that have successfully passed or failed during the testing process. If any tests fail, they are logged, and merging will be blocked until it is fixed. This ensures that only high quality code that passes the tests are merged.

## <ins>Standards</ins>

- description of a standard (like IEEE730)
- reason for choosing the standard
- key features of standard applied

## <ins>Performance and Accessibility Audit</ins>

- tools used to check performance and accessibility of application
- snapshots of key results
- analyse results
