# Todo-Application

- Todo application for SQA assignment 2

## <ins>Project Description</ins>

- desc of project
- features
- snapshots of ui

## <ins>Team Description</ins>

- names of people involved
- roles/responsibilities
- percentage contribution

## <ins>Tools Used</ins>

- version control
- testing
- test code coverage
- frameworks and libraries

### _Linters_

_ESLint_

This project utilisies ESLint for analysing JavaScript code for potential errors, styling issues, and adherence to coding standards.
ESLint rules have been defined by the team in the .eslintrc.js file, in rukles for errors, warnings and styling have been customised.
ESLint has been integrated in the `package.json` file to run after each commit and after each push.
To manually run the linter on the code, run the command:

```
npx eslint .
```

- project management tools
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

## <ins>Standards</ins>

- description of a standard (like IEEE730)
- reason for choosing the standard
- key features of standard applied

## <ins>Performance and Accessibility Audit</ins>

- tools used to check performance and accessibility of application
- snapshots of key results
- analyse results
