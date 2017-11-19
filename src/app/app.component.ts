import { Component } from '@angular/core';
import {ProgressService} from "./core/services/progress.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  _toggleProgress = false;

  constructor(private progressService: ProgressService) {}

  toggleProgress() {
    this._toggleProgress = !this._toggleProgress;
    this.progressService.showProgressBar(this._toggleProgress);
  }
}

