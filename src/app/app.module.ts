import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserHomeComponent } from './StudentComponents/user-home/user-home.component';
import { EditComponent } from './StudentComponents/edit/edit.component';
import { ExtraActivityComponent } from './StudentComponents/extra-activity/extra-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    UserHomeComponent,
    EditComponent,
    ExtraActivityComponent
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
