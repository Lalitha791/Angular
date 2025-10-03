 Angular

* **Angular** is a **TypeScript-based front-end framework** developed by Google.
* It’s used to build **single-page applications (SPAs)** with structured, scalable, and maintainable code.
* It follows the **component-based architecture**: everything is a component.

---

### ⚡ Key Features

1. **Components** – building blocks of Angular apps.
2. **Modules** – group related functionality.
3. **Templates** – HTML + Angular syntax.
4. **Data Binding** – one-way & two-way (`[(ngModel)]`).
5. **Directives** – like `*ngIf`, `*ngFor` to change DOM behavior.
6. **Services & Dependency Injection** – share data & logic across components.
7. **Routing** – for navigation between views.
8. **RxJS & Observables** – reactive programming support.
9. **Forms** – template-driven & reactive forms.
10. **CLI (Angular CLI)** – to generate, build, test, and deploy apps.

---

### 🚀 Angular Project Flow

1. Install Angular CLI

   ```bash
   npm install -g @angular/cli
   ```
2. Create new project

   ```bash
   ng new my-app
   ```
3. Run the project

   ```bash
   ng serve -o
   ```
4. Build & deploy

   ```bash
   ng build --prod
   ```

---







# Angular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.4.

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
