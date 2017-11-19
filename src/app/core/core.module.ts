import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataCategories} from "./services/data-categories.service";
import {Init1, Init2, Init3, Init4, Init5} from "./services/init-services";
import {ProgressService} from "./services/progress.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {SpinnerInterceptor} from "./interceptors/spinner.interceptor";
import {TimingInterceptor} from "./interceptors/timing.interceptor";
import {ErrorInterceptor} from "./interceptors/error.interceptor";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [DataCategories, Init1, Init2, Init3, Init4, Init5, ProgressService,
    {provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: TimingInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
    ]
})
export class CoreModule { }
