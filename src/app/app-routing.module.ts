import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'detail-list', loadChildren: () => import('./details/details.module').then(m => m.DetailsModule) },
  { path: 'user-list', loadChildren: () => import('./components/user/user.module').then(m => m.UserModule) },
  { path: 'custom-data', loadChildren: () => import('./components/custom/custom.module').then(m => m.CustomModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
