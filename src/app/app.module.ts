import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CowlistComponent } from './cowlist/cowlist.component';
import { SpotlightComponent } from './spotlight/spotlight.component';
import { CowComponent } from './cow/cow.component';
import { FormComponent } from './form/form.component';
import { CowsService } from './cows.service';

@NgModule({
  declarations: [
    AppComponent,
    CowlistComponent,
    SpotlightComponent,
    CowComponent,
    FormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CowsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
