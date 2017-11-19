import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {UserComponent} from "./user/user.component";
import {AppModule} from "../app.module";
import {CoreModule} from "../core/core.module";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {UserService} from "./user.service";
import {RouterModule, Routes} from "@angular/router";
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {UserResolve} from "./user.resolve";
import {InitializationGuard} from "../initialization.guard";
import {AddUserComponent} from "./add-user/add-user.component";
import {SharedModule} from "../shared/shared.module";

export const userRoutes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    canActivate: [InitializationGuard],
    children: [
      {
        path: 'add',
        component: AddUserComponent
      }
    ]
  },
  {
    path: 'user/:id',
    component: UserDetailComponent,
    canActivate: [InitializationGuard],
    resolve: {
      user: UserResolve
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CoreModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild(userRoutes),
    SharedModule
  ],
  providers: [UserService, UserResolve],
  declarations: [UserComponent, UserDetailComponent, AddUserComponent],
  exports: [UserComponent, RouterModule],
})
export class UserModule { }
