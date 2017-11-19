import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";
import {UserService} from "../user.service";
import {UserComponent} from "../user/user.component";
import {IUser} from "../user.model";

@Component({
  selector: 'dk-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  formObj: IUser = <IUser>{};
  @ViewChild('myform') myform;

  constructor(private router: Router, private userService: UserService, private parent: UserComponent) { }

  cancel() {
   this.router.navigateByUrl('/user');
  }

  addUser() {
    this.userService.add(this.formObj)
      .subscribe(newUser => {
        this.parent.refresh()
        this.router.navigateByUrl('/user');
      });
  }

  // this never gets called, but would if not in a child route, i.e. works if you put the form in userComponent
  // the complaint is that form isn't attached to document or something, then never calls its sumbit event, weird
  submit(e) {
    e.preventDefault();
  }
}
