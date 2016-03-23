import { Component } from 'angular2/core';
import { Keg } from './keg.model.ts';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Skeleton Angular2 App!</h1>
    </div>
  `
})

export class AppComponent {
  public kegs: Keg[];
  constructor() {
    this.kegs = [
      new Keg("Sculpin", "Ballast Point", "IPA", 6.00, 7.0),
      new Keg("Farmhouse Ale", "Commons", "Belgian", 5.00, 5.3),
      new Keg("White Rascal", "Avery", "White Ale", 5.00, 6.2)
    ]
  }
}
