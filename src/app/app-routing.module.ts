import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibronauticaBooksComponent } from './libronautica-books/libronautica-books.component';
import { LibronauticaContactComponent } from './libronautica-contact/libronautica-contact.component';

const routes: Routes = [
  { path: '',
    redirectTo:'books',
    pathMatch: 'full'
  },
  {
    path: 'books',
    component: LibronauticaBooksComponent
  },
  {
    path: 'contact',
    component: LibronauticaContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
