# MyAngularApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

src/
├── app/
│   ├── core/          # Core module (singleton services, global utilities)
│   ├── shared/        # Shared module (shared components, directives, pipes)
│   ├── feature1/      # Feature module 1
│   ├── feature2/      # Feature module 2
│   ├── app.module.ts  # Root module

 ng g --help
ng generate

Generates and/or modifies files based on a schematic.

Commands:
  ng g <schematic>              Run the provided schematic.                                                    [default]
  ng g app-shell                Generates an application shell for running a server-side version of an app.
  ng g application [name]       Generates a new basic application definition in the "projects" subfolder of the
                                workspace.                                                                [aliases: app]
  ng g class [name]             Creates a new, generic class definition in the given project.              [aliases: cl]
  ng g component [name]         Creates a new, generic component definition in the given project.           [aliases: c]
  ng g config [type]            Generates a configuration file in the given project.
  ng g directive [name]         Creates a new, generic directive definition in the given project.           [aliases: d]
  ng g enum [name]              Generates a new, generic enum definition in the given project.              [aliases: e]
  ng g environments             Generates and configures environment files for a project.
  ng g guard [name]             Generates a new, generic route guard definition in the given project.       [aliases: g]
  ng g interceptor [name]       Creates a new, generic interceptor definition in the given project.
  ng g interface [name] [type]  Creates a new, generic interface definition in the given project.           [aliases: i]
  ng g library [name]           Creates a new, generic library project in the current workspace.          [aliases: lib]
  ng g module [name]            Creates a new, generic NgModule definition in the given project.            [aliases: m]
  ng g pipe [name]              Creates a new, generic pipe definition in the given project.                [aliases: p]
  ng g resolver [name]          Generates a new, generic resolver definition in the given project.          [aliases: r]
  ng g service [name]           Creates a new, generic service definition in the given project.             [aliases: s]
  ng g service-worker           Pass this schematic to the "run" command to create a service worker
  ng g web-worker [name]        Creates a new, generic web worker definition in the given project.

Arguments:
  schematic  The [collection:schematic] to run.                                                                 [string]

Options:
      --help         Shows a help message for this command in the console.                                     [boolean]
      --interactive  Enable interactive input prompts.                                         [boolean] [default: true]
  -d, --dry-run      Run through and reports activity without writing out results.            [boolean] [default: false]
      --defaults     Disable interactive input prompts for options with a default.            [boolean] [default: false]
      --force        Force overwriting of existing files.                                     [boolean] [default: false]