import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import {AboutComponent } from './about/about.component';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CategoryComponent } from 'src/index section/category/category.component';
import { RegistationComponent } from 'src/index section/registation/registation.component';
import { TeamComponent } from 'src/index section/team/team.component';
import { ListLabourComponent } from './list-labour/list-labour.component';
import { LabourDetailComponent } from 'src/index section/labour-detail/labour-detail.component';
import { DescriptionComponent } from './Labour/description/description.component';



const routes: Routes = [
  {path:"",component:MainPageComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'category', component:CategoryComponent},
  {path: 'about', component: AboutComponent},
  {path: 'main-page', component: MainPageComponent},
  {path: 'team',component:TeamComponent},
  {path: 'Registation',component: RegistationComponent},
  {path: 'list_labour',component:ListLabourComponent},
  {path: 'labourDetail',component:LabourDetailComponent},
  {path:'Description',component:DescriptionComponent},
  {path:'registaion',component:RegistationComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
