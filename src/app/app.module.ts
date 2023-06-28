import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { ResourceComponent } from './components/resource/resource.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReqRespInterceptor } from './services/req-resp.interceptor';
import { AlphaNumericDirective } from './services/alpha-numeric.directive';
import { MobilePaternPipe } from './services/mobile-patern.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    UserComponent,
    ResourceComponent,
    AlphaNumericDirective,
    MobilePaternPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: ReqRespInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
