import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { SummryPipe } from './Pipes/summry.pipe';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './directives/input-format.directive';
import { LoginComponent } from './login/login.component';
import { CustomFormsModule } from 'ng2-validation';
import { HttpClientModule } from '@angular/common/http';
import { HttpApiComponent } from './http-api/http-api.component';

@NgModule({
  declarations: [
    XyzComponent,
    AppComponent,
    SummryPipe,
    PanelComponent,
    InputFormatDirective,
    LoginComponent,
    HttpApiComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CustomFormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
