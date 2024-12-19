import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'tabs', loadChildren: () => import('./TabsMENU/tabs.module').then(m => m.TabsPageModule) },
  { path: 'login/login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: '', redirectTo: 'login/login', pathMatch: 'full' }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
