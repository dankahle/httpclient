import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {UserModule} from "./user/user.module";
import {SharedModule} from "./shared/shared.module";
import {RouterModule, Routes} from "@angular/router";
import {InitializationGuard} from "./initialization.guard";
import {PageNotFoundComponent} from './shared/components/page-not-found/page-not-found.component';
import 'hammerjs';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/user', pathMatch: 'full', canActivate: [InitializationGuard] },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    SharedModule,
    UserModule
  ],
  providers: [InitializationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
