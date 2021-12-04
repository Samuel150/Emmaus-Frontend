import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { NavbarModule } from 'src/app/@components/navbar/navbar.module';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {
    path:'',
    component:AdminComponent,
    children:[
      {
        path:'',
        redirectTo:'students',
        pathMatch:'full'
      },
      {
        path:'students',
        loadChildren:()=>import('../students/students.module').then(m=>m.StudentsModule)
      }
    ]
  }
]

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    NavbarModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
