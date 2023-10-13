import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { DepartmentsComponent } from './departments/departments.component';
import { HealthTechnologiesComponent } from './health-technologies/health-technologies.component';
import { CentresComponent } from './centres/centres.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {
    path: '', component: MainContentComponent
  },
  {
    path : 'departments', component: DepartmentsComponent
  },
  {
    path : 'technologies', component: HealthTechnologiesComponent
  },
  {
    path : 'centres', component : CentresComponent
  },
  {
    path : 'contactUs', component : ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
