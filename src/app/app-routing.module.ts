import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewsEditComponent } from './add-news-edit/add-news-edit.component';
import { AppComponent } from './app.component';
import { EdGetnewsComponent } from './ed-getnews/ed-getnews.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
