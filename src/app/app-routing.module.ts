import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { RoutesList } from '../routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: RoutesList.Home,
    pathMatch: 'full',
  },
  {
    path: RoutesList.Home,
    loadChildren: () => import('../app/home/home.module').then(m => m.HomeModule),
    pathMatch: 'full',
  },
  {
    path: RoutesList.Dashboard,
    loadChildren: () => import('../app/dashboard/dashboard.module').then(m => m.DashboardModule),
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: RoutesList.Register,
    loadChildren: () => import('../app/auth/register/register.module').then(m => m.RegisterModule),
    pathMatch: 'full',
  },
  {
    path: RoutesList.NotFound,
    loadChildren: () => import('../app/404/not-found.module').then(m => m.NotFoundModule),
    pathMatch: 'full',
  },
  {
    path: '**',
    loadChildren: () => import('../app/404/not-found.module').then(m => m.NotFoundModule),
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
