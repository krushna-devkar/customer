import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './component/customer-list/customer-list.component';
import { AddCutomerComponent } from './component/add-cutomer/add-cutomer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UpdateCutomerComponent } from './component/update-cutomer/update-cutomer.component';
import { LoginSignupComponent } from './component/login-signup/login-signup.component'
@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    AddCutomerComponent,
    UpdateCutomerComponent,
    LoginSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
