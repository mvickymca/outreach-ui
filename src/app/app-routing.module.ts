import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { OvmDashboardComponent } from './ovm-dashboard/ovm-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'reports',
        component: ReportComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'dashboard',
        component: OvmDashboardComponent,
        children: [
           {
             path: '',
             redirectTo: '/dashboard/(menu:dashboardMenu)',
             pathMatch:'full'
           },
          {
            path: 'dashboardMenu',
            outlet: 'menu',
            component: DashboardComponent
          },
          {
            path: 'admin',
            outlet: 'menu',
            component: AdminComponent
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
