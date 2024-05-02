import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddNewsEditComponent } from './add-news-edit/add-news-edit.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EDUpdateStatusNewsComponent } from './ed-update-status-news/ed-update-status-news.component';
import { EdGetnewsComponent } from './ed-getnews/ed-getnews.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AddNewsEditComponent,
    EDUpdateStatusNewsComponent,
    EdGetnewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FontAwesomeModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
