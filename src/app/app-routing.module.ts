import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { validadorGuard } from './guards/validador.guard';
import { StockComponent } from './stock/stock.component';
import { validarolGuard } from './guards/validarol.guard';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [validadorGuard],
  },
  {
    path: 'stock',
    component: StockComponent,
    pathMatch: 'full',
    canActivate: [validadorGuard, validarolGuard],
  },

  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
