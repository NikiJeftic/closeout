import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/table/table.component').then(
        (m) => m.TableComponent
      ),
  },
  {
    path: 'notes',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./components/notes/notes.component').then(
        (m) => m.NotesComponent
      ),
  },
];
