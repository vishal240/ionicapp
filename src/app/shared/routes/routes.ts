import { Routes } from '@angular/router';

export const content: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('../../components/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: '**',
    redirectTo: 'admin'
  }
];
