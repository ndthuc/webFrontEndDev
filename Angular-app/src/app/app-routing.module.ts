import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ForgetPassComponent } from './components/forget-pass/forget-pass.component';
import { HomeComponent } from './components/home/home.component';

import { AuthenticationGuard } from '../app/guards/authentication.guard';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { ProductComponent } from './components/product/product/product.component';
import { MembersComponent } from './components/members/members.component';
import { ListProductComponent } from './components/product/list-product/list-product.component';

const routes: Routes = [

  {
    path: "admin",
    component: HomeComponent,
    canActivate: [AuthenticationGuard],
    children:[
      {
        path: "admin",
        component: HomeComponent
      },
      {
        path: "register",
        component: RegisterComponent
      },
      {
        path: "settings",
        component: SettingsComponent
      },
      {
        path: "employees",
        component: EmployeesComponent
      },
      {
        path: "profile",
        component: ProfileComponent
      },
      {
        path: "products",
        component:DashboardComponent
      },
      {
        path: "members",
        component:MembersComponent
      },
      {
        path: "",
        component: ListProductComponent
      }
    ]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "forgetpass",
    component: ForgetPassComponent
  },
  {
    path:"verify-email",
    component:VerifyEmailComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
