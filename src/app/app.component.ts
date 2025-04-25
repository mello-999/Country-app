import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { FooterComponent } from "./shared/components/footer/footer.component";


@Component({
  selector: 'app-root',
  imports: [RouterModule, FooterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}


