# Coach and Focus 2024  
Chris Brooksbanks 2024 Coach And Focus project  

Technology stack will be dotnet 8 and Angular.  

Everything else to be decided.  

# Pipeline for Deploying Coach And Focus 2024 Angular App to Azure  

## Introduction
This document provides a guide on my CoachAndFocus Angular/C# application which is deployed to Azure using CI/CD pipelines. 

The application is built, tested, and deployed to Azure automatically whenever a branch is merged into the main branch.

## Repository and Technology Stack

The application's source code is publicly available on GitHub. 

You can find the repository here: [ChrisBrooksbank/coachandfocus](https://github.com/ChrisBrooksbank/coachandfocus).

The application uses the .NET 6 and Angular technology stack.

## Angular Application and Dependencies

The Angular application, located in the `CoachAndFocus.Web.UI` project, has several dependencies :

- Angular
- Bootstrap
- jQuery

Development dependencies:

- Angular CLI
- Jasmine
- Karma
- TypeScript

## Hosting
The website is [hosted here] (https://coachandfocus.azurewebsites.net/)

Its hosted on Azure under my subscription, e6ba8781-b352-41d3-acd1-2d969d978b38, linked to brooksbankc@parliament.uk

## App Service
I created a Azure App Service (Web App) named coachandfocus. 

Publishing model is code and the runtime stack is Dotnet -v6.0.

The default domain has been set to coachandfocus.azurewebsites.net

Deployment Center has a Deployment provider of GitHubAction.

[deployment logs](https://portal.azure.com/#@hopuk.onmicrosoft.com/resource/subscriptions/e6ba8781-b352-41d3-acd1-2d969d978b38/resourceGroups/coachandfocus_group/providers/Microsoft.Web/sites/coachandfocus/vstscd)

I am using a Free App Service Plan.

## Pipeline
Continuous Integration / Continuous Deployment

The pipeline/workflow is defined in a yaml file.

[Pipeline definition](https://github.com/ChrisBrooksbank/coachandfocus/blob/main/.github/workflows/main_coachandfocus.yml)

The pipeline has a build job and a deploy job. These jobs are run when a new commit is pushed to the main branch of the repository(Push Event). They can also be triggered manually (Workflow Dispatch Event).

The build job runs on a Windows runner. It checks out the code, sets up Node.js and .NET Core, installs Angular CLI and npm dependencies, runs Angular tests, builds and publishes the .NET application, and uploads the artifact named '.net-app'.

The deploy job runs on a Windows runner after the build job. It downloads the '.net-app' artifact and deploys it to an Azure Web App named 'coachandfocus' in the 'Production' slot.

This yaml file is a key part of the pipeline, so I have included it here.

```yaml
# Docs for the Azure Web Apps Deploy action: https://github.com/Azure/webapps-deploy
# More GitHub Actions for Azure: https://github.com/Azure/actions

name: Build and deploy ASP.Net Core app to Azure Web App - coachandfocus

on:
  push:
    branches:
      - main
  workflow_dispatch:

jobs:
  build:
    runs-on: windows-latest

    steps:
      - uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18.10.x'
          
      - name: Install Angular CLI
        run: npm install -g @angular/cli

      - name: Install npm dependencies
        run: cd CoachAndFocus.Web.UI/ClientApp && npm install  

      - name: Run Angular tests
        run: cd CoachAndFocus.Web.UI/ClientApp && ng test --watch=false --browsers=ChromeHeadless               

      - name: Set up .NET Core
        uses: actions/setup-dotnet@v1
        with:
          dotnet-version: '6.0.x'
          include-prerelease: true

      - name: Build with dotnet
        run: dotnet build --configuration Release

      - name: dotnet publish
        run: dotnet publish -c Release -o ${{env.DOTNET_ROOT}}/myapp

      - name: Upload artifact for deployment job
        uses: actions/upload-artifact@v2
        with:
          name: .net-app
          path: ${{env.DOTNET_ROOT}}/myapp

  deploy:
    runs-on: windows-latest
    needs: build
    environment:
      name: 'Production'
      url: ${{ steps.deploy-to-webapp.outputs.webapp-url }}

    steps:
      - name: Download artifact from build job
        uses: actions/download-artifact@v2
        with:
          name: .net-app

      - name: Deploy to Azure Web App
        id: deploy-to-webapp
        uses: azure/webapps-deploy@v2
        with:
          app-name: 'coachandfocus'
          slot-name: 'Production'
          publish-profile: ${{ secrets.AZUREAPPSERVICE_PUBLISHPROFILE_4D0A280361254F92BDE6BE46701D08BB }}
          package: .
```

The publish profile is a [secret] (https://github.com/ChrisBrooksbank/coachandfocus/settings/secrets/actions) which is available, for use, in github actions, to anyone with collaborator access to the repo.

## Unit Tests
The project has unit tests written in Jasmine which can be run in the Karma test runner.

Currently there are no dotnet unit tests.

## Azure Devops Pipeline
I also experimented with setting up a pipeline on Azure devops.

[azure pipeline](https://github.com/ChrisBrooksbank/coachandfocus/blob/main/azure-pipelines.yml)

To date I have been able to build the code using this method, but not deploy it.

[devops page](https://dev.azure.com/brooksbankc/)

I initially got the error message, when running the pipeline : No hosted parallelism has been purchased or granted. To request a free parallelism grant, please fill out the following form https://aka.ms/azpipelines-parallelism-request

I completed the form and was given a free parallelism grant after a couple of days.