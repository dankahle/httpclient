import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, Resolve} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {UserService} from "./user.service";
import {IUser} from "./user.model";

@Injectable()
export class UserResolve implements Resolve<IUser> {

  constructor(private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> {
    // console.log('user resolve start');
    return this.userService.getOne(route.params.id)
      .map(user => {
        // console.log('user resolve end');
        return user;
      })
  }

}
