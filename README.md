# ACME Learning Center Web Application

## Summary
ACME Learning Center Application, illustrating CRUD behavior and in-app navigation, with Angular Material and Angular Router. It also uses a JSON Server Fake API.

## Features
- Material Design
- JSON Server Fake API
- CRUD operations
- In-app navigation


## Dependencies
- Angular Material
- Angular Router
- JSON Server
- HttpClient
- Reactive Forms

## Commands
```
> ng new learning-center --no-standalone --routing
> ng add @angular/material
> ng generate environments
> ng g s shared/services/Base
> ng g class learning/model/Student
> ng g s learning/services/Students
> ng g c public/pages/About
> ng g c public/pages/Home
> ng g c public/pages/PageNotFound
> ng g c learning/pages/Students
> ng g c learning/components/StudentForm

> npm i -g json-server@0.17.4
> json-server --watch db.json --routes routes.json
```
