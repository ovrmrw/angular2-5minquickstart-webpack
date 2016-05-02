import {Component} from '@angular/core';
import {AppComponent2} from './app2.component'; // async/await sample.

@Component({
  selector: 'my-app',
  template: `
    <h1>My First Angular 2 App</h1>
    <my-app2></my-app2>
  `,
  directives: [AppComponent2]
})
export class AppComponent { }

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/