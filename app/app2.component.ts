import {Component} from 'angular2/core';

@Component({
  selector: 'my-app2',
  template: `
    <ul>
      <li *ngFor="#text of texts">{{text}}</li>
    </ul>
  `
})
export class AppComponent2 {
  texts: string[] = [];

  constructor() {
    (async () => {
      this.texts.push('start async');

      await new Promise(resolve => {
        setTimeout(() => {
          this.texts.push('this message should be shown between "start" and "end".');
          resolve();
        }, 2000);
      });

      this.texts.push('end async');
    })();
  }
}
