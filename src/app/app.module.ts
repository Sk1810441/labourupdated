import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from 'src/index section/header/header.component';
import { SliderComponent } from 'src/index section/slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from 'src/index section/category/category.component';
import { RegistationComponent } from 'src/index section/registation/registation.component';
import { PriceComponent } from 'src/index section/price/price.component';
import { FooterComponent } from 'src/index section/footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { OurserviceComponent } from 'src/index section/ourservice/ourservice.component';
import { TeamComponent } from 'src/index section/team/team.component';
import { ListLabourComponent } from './list-labour/list-labour.component';
import { LabourDetailComponent } from 'src/index section/labour-detail/labour-detail.component';
import { DescriptionComponent } from './Labour/description/description.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    HeaderComponent,
    SliderComponent,
    HomeComponent,
    CategoryComponent,
    RegistationComponent,
    PriceComponent,
    FooterComponent,
    MainPageComponent,
    OurserviceComponent,
   TeamComponent,
   ListLabourComponent,
   LabourDetailComponent,
   DescriptionComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
