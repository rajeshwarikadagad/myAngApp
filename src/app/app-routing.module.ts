import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ResourceComponent } from './components/resource/resource.component';
import { UserComponent } from './components/user/user.component';
import { AuthgaurdService } from './services/authgaurd.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home', 
    component: HomeComponent,
    canActivate: [AuthgaurdService]
  },
  {
    path: 'user', 
    component: UserComponent,
    canActivate: [AuthgaurdService]
  },
  {
    path: 'resources',
    component: ResourceComponent,
    canActivate: [AuthgaurdService]
  },

  { path: '**', redirectTo: 'login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
