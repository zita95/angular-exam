import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PetListingComponent } from './pet-listing/pet-listing.component';
import { PetComponent } from './pet/pet.component';
import { BackGroundDirective } from './back-ground.directive';
import { TooLongPipe } from './too-long.pipe';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PetListingComponent,
    PetComponent,
    BackGroundDirective,
    TooLongPipe,
    AddComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
