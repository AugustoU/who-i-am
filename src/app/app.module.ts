import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { EducationComponent } from './education/education.component';
import { EducationItemComponent } from './education-item/education-item.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { WorkExperienceItemComponent } from './work-experience-item/work-experience-item.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    AboutMeComponent,
    EducationComponent,
    EducationItemComponent,
    WorkExperienceComponent,
    WorkExperienceItemComponent,
    MySkillsComponent,
    MyProjectsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
