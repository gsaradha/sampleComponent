import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '../LoginComponent/login.component';
import { ServersComponent } from 'src/ServersComponent/Servers.component';
import { ServerComponent } from 'src/ServerComponent/Server.component';
import { FormsModule } from '@angular/forms';
import { userInputComponent } from 'src/UserInputComponent/userinput.component';
import { DirectiveComponent } from 'src/DirectiveComponent/directive.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ServersComponent,
    ServerComponent,
    userInputComponent,
    DirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
