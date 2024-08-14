import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataMonitoringComponent } from './data-monitoring/data-monitoring.component';
import { LangchainComponent } from './langchain/langchain.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'data-monitoring', component: DataMonitoringComponent },
  { path: 'langchain', component: LangchainComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];
