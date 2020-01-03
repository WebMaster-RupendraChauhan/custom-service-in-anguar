import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ AboutusComponent} from'./aboutus/aboutus.component';
import{ InstituteComponent} from'./institute/institute.component';
import{ ItupworksComponent} from'./itupworks/itupworks.component';
import{ ProgramComponent} from'./program/program.component';
import{ StudyComponent} from'./study/study.component';


const routes: Routes = [
  { path:'aboutus', component:AboutusComponent},
  { path:'institute', component:InstituteComponent},
  { path:'itupworks' , component:ItupworksComponent},
  { path:'program', component:ProgramComponent},
  { path:'study' , component:StudyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstRoutingModule { }
