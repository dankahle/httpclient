import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class DataCategories {

  constructor() { }

  getAll() {
    return Observable.of([
      {id: 4, name: 'Shipment4'},
      {id: 5, name: 'Shipment5'},
      {id: 6, name: 'Shipment6'},
    ]);
  }

}
