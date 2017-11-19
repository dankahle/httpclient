import {Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";

@Component({
  selector: 'dk-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.scss']
})
export class ErrorModalComponent {
  error: {message: string, status?:number, json?:any};
  constructor(public dialogRef: MdDialogRef<ErrorModalComponent>, @Inject(MD_DIALOG_DATA) data: any) {
    this.error = data.error.error;
    if (this.error.status >= 500) {
      this.error = {message: 'Well, this is embarrassing.'}
    }
  }

}
