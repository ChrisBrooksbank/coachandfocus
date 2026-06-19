# Coach and Focus

An ASP.NET Core and Angular application for the Coach and Focus project.

The application combines a .NET 8 backend with an Angular 17 client app and is deployed to Azure through GitHub Actions.

## Technology stack

- .NET 8
- ASP.NET Core
- Angular 17
- TypeScript
- Bootstrap
- Azure App Service
- GitHub Actions

## Project structure

- `CoachAndFocus.Web.sln` - Visual Studio solution.
- `CoachAndFocus.Web.UI/` - ASP.NET Core application.
- `CoachAndFocus.Web.UI/ClientApp/` - Angular client application.
- `.github/workflows/` - build and deployment workflow definitions.

## Run locally

Restore and run the .NET application:

```bash
dotnet restore CoachAndFocus.Web.sln
dotnet run --project CoachAndFocus.Web.UI/CoachAndFocus.Web.UI.csproj
```

Run the Angular client directly during frontend development:

```bash
cd CoachAndFocus.Web.UI/ClientApp
npm install
npm start
```

The Angular development server is configured to run on port `44422`.

## Build

```bash
dotnet build CoachAndFocus.Web.sln
```

To build the Angular client:

```bash
cd CoachAndFocus.Web.UI/ClientApp
npm run build
```

## Tests

Angular tests can be run from the client app:

```bash
cd CoachAndFocus.Web.UI/ClientApp
npm test
```

## Deployment

The repository contains a GitHub Actions workflow for building the application and deploying it to Azure App Service when changes are pushed to `main`.

Deployment-specific credentials and subscription details should be stored in GitHub Actions secrets or Azure configuration, not in the README.
