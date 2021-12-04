import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchModule } from 'src/app/@components/search/search.module';

const routes :Routes=[
  {
    path:'',
    redirectTo:'list',
    pathMatch:'full',
  },
  {
    path:'list',
    component:StudentsComponent
  }
]

@NgModule({
  declarations: [
    StudentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SearchModule
  ]
})
export class StudentsModule { }
