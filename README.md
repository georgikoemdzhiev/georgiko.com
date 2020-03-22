# Serverless Angular Template

This is a template for deploying a [Angular](https://angular.io) application onto a serverless website via the Website Component. The project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.7

The Serverless Website Component sets up everything you need within seconds. It uses AWS S3 for hosting, AWS Cloudfront for a blazing fast CDN, AWS Route 53 to configure your custom domain and an AWS ACM Certificate to secure your with with SSL.

Overall, this infrastructure stack is perhaps the cheapest possible way to deploy a front-end application, that is massively scalable, and performant.

&nbsp;

1. [Install](#1-install)
2. [Develop](#2-develop)
3. [Deploy](#3-deploy)
4. [Notes](#4-notes)


## 1. Install

Install the [Serverless Framework](https://www.github.com/serverless/serverless):

```console
$ npm i -g serverless
```

Add the access keys of an AWS IAM Role with `AdministratorAccess` in a `.env` file, using this format:

```bash
AWS_ACCESS_KEY_ID=1234
AWS_SECRET_ACCESS_KEY=1234
```

Install the project dependencies

```
npm install
```

Or, you can set these as environment variables manually before deploying.

## 2. Develop

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## 3. Deploy

Deploy via the `serverless` command:

```console
$ serverless
```

Use the `--debug` flag if you'd like to learn what's happening behind the scenes:

```console
$ serverless --debug
```

## 4. Notes

If you aren't using a custom domain, AWS Cloudfront and `HTTPS://` will not be set up. Instead, you will receive an `HTTP://` domain from AWS S3.

When you add a custom domain, AWS Cloudfront and `HTTPS://` will be set up automatically with it.

Remember, once you deploy with a custom domain for the first time, it may take up to an hour for DNS servers to propagate that change.

## New to Serverless Framework Components?

Checkout the [Serverless Components](https://github.com/serverless/components) repo for more information.
