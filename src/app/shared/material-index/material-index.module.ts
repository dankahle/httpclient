import { NgModule } from '@angular/core';
import {MdButtonModule, MdDialogModule, MdInputModule, MdProgressBarModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [BrowserAnimationsModule, MdButtonModule, MdProgressBarModule, MdDialogModule, MdInputModule],
  exports: [BrowserAnimationsModule, MdButtonModule, MdProgressBarModule, MdDialogModule, MdInputModule],
})
export class MaterialIndexModule { }
