import { Component } from '@angular/core';

@Component({
    selector: 'meu-app',
    template: `
      <nav>
        <div class="nav-wrapper green darken-2">
          <a class="brand-logo center">{{titulo}}</a>          
        </div>
      </nav>
      <div class="container">
        <estoria_board></estoria_board>
      </div>`,
})
export class AppComponent {
  titulo: string = "TaskBoard";
}