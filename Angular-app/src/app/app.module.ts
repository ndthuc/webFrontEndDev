import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { EmployeesComponent } from './components/employees/employees.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgetPassComponent } from './components/forget-pass/forget-pass.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navBar/navigation/navigation.component';
import { SidebarComponent } from './navBar/sidebar/sidebar.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ToastrModule } from 'ngx-toastr';


import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBarModule} from '@angular/material/snack-bar';


import { HomeComponent } from './components/home/home.component';
import { LoginIconComponent } from './components/login-icon/login-icon.component';
import { ListProductComponent } from './components/product/list-product/list-product.component';
import { ProductComponent } from './components/product/product/product.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { UserComponent } from './components/user/user.component';
import { MembersComponent } from './components/members/members.component';
import { ProductService } from './shared/services/product.service';
import { AuthService } from './shared/services/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    DashboardComponent,
    ProfileComponent,
    SettingsComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPassComponent,
    NavigationComponent,
    SidebarComponent,
    HomeComponent,
    LoginIconComponent,
    ListProductComponent,
    ProductComponent,
    VerifyEmailComponent,
    UserComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,

    MatIconModule,

    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    ToastrModule.forRoot(),

    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatTableModule,
    MatDatepickerModule,
    MatSnackBarModule
  ],
  providers: [ProductService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
