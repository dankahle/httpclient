import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/mergeMap';
import {Init1, Init2, Init3, Init4, Init5} from "./core/services/init-services";
import {merge} from "rxjs/observable/merge";

@Injectable()
export class InitializationGuard implements CanActivate {
  initialized = false;

  constructor(
    private init1: Init1,
    private init2: Init2,
    private init3: Init3,
    private init4: Init4,
    private init5: Init5,
    ) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.init();
  }

  canActivateChild(next: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.init();
  }

    init() {
      if (this.initialized) {
        return true;
      }
      // console.log('init guard start');
      return Observable.forkJoin(this.init1.get(), this.init2.get())
        .mergeMap(x => {
          return Observable.forkJoin(this.init3.get(), this.init4.get());
        })
        .mergeMap(x => {
          return Observable.forkJoin(this.init5.get());
        })
        .map(x => {
          // console.log('init guard end');
          this.initialized = true;
          return true;
        });
    }

}
