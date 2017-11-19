import {HttpClient, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import * as _ from 'lodash';
import {DataCategories} from "../core/services/data-categories.service";
import {IUser} from "./user.model";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

@Injectable()
export class UserService {
  prefix = 'http://localhost:3005';
  instance: IUser;

  constructor(private http: HttpClient, private dataCategories: DataCategories) {
  }

  setInstance(user) {
    this.instance = user;
  }

  toUI(user) {
    this.addDc(user);
    return user;
  }

  toApi(user: IUser) {
    return this.removePropertiesForApi(user);
  }

  addDc(user) {
    return this.dataCategories.getAll()
      .map(dcs => {
        user.dc = _.find(dcs, {id: user.dcId}) || null;
      });
  }

  removePropertiesForApi (user) {
    return _.omit(user, ['dc']);
  }

  getAll() {
    const params = new HttpParams().set('hideSpinner', 'true');
    return <Observable<IUser[]>>this.http.get<IUser[]>(this.prefix + '/api/users', {params: params})
      .map(users => users.map(user => this.toUI(user)));
  }

  getOne(id:number, setInstance?: boolean): Observable<IUser> {
    return this.http.get<IUser>(this.prefix + '/api/users/' + id)
      .delay(200)
      .map(data => {
        const user = this.toUI(data);
        if (setInstance) {
          this.setInstance(user);
        }
        return user;
      });
  }

  add(user: IUser) {
    return this.http.post<IUser>(this.prefix + '/api/users', this.toApi(user))
      .map(data => this.toUI(data));
  }

  update(user: IUser) {
    return this.http.put<IUser>(this.prefix + '/api/users/' + user.id, this.toApi(user))
      .map(data => this.toUI(data));
  }

  delete(id:number) {
    return this.http.delete(this.prefix + '/api/users/' + id);
  }

}



