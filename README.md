# Dokkan

Product CRUD application using Angular10 and json-server to get and post data.
You can add categories and its items, view by category, view all items, update items and delete items.
Limit the viewed items number, and pagination.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Reminder
1. used json server to make api local .. assets/jsondata/db.json .. to to file in cmd and write "json-server --watch .\db.josn"
2. made items module lazy loading
3. side menu is another module for the side menu categories and it's add category button
4. at first I created 2 separate comp for every CRUD process but to use dialoge popup I added All in view-item comp 
5. importent note: json server deafult path is localhost/{{anyname}}/id .. as id is one of info,, to change to index for example: json-server --id index --watch db.json ... still id can be duplicated by post http method .. so i changed every index to id and id (used to refer to category id to connect) to cat

https://my-json-server.typicode.com/isalma/productsapi


