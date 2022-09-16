import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

@NgModule({
  imports: [BrowserModule, FormsModule, BrowserModule, ReactiveFormsModule],
  declarations: [AppComponent, HelloComponent, UserRegistrationComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
