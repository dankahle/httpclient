import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IUser} from "../user.model";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'dk-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
  user: Observable<IUser>;
  constructor(route: ActivatedRoute) {
    route.data.subscribe(data => {
      return this.user = data.user;
    });
  }

}
