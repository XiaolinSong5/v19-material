import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {DetailTreeComponent} from './detail-tree/detail-tree.component';

@Component({
  selector: 'app-root',
  imports: [MatSlideToggleModule, DetailTreeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'v19-material';
}
