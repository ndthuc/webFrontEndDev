import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { ProductsComponent } from './components/products/products.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ForgetPassComponent } from './components/forget-pass/forget-pass.component';


const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "login",
    component: LoginComponent
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
    path: "products",
    component: ProductsComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "help",
    component: ForgetPassComponent
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
