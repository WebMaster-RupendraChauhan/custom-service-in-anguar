import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstRoutingModule } from './first-routing.module';
import { AboutusComponent } from './aboutus/aboutus.component';
import { InstituteComponent } from './institute/institute.component';
import { ItupworksComponent } from './itupworks/itupworks.component';
import { ProgramComponent } from './program/program.component';
import { StudyComponent } from './study/study.component';


@NgModule({
  declarations: [AboutusComponent, InstituteComponent, ItupworksComponent, ProgramComponent, StudyComponent],
  imports: [
    CommonModule,
    FirstRoutingModule
  ]
})
export class FirstModule { }
