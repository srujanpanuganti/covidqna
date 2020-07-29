import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TopicsComponent } from './topics/topics.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AlltopicsComponent } from './alltopics/alltopics.component';
import { InspiredComponent } from './inspired/inspired.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"topics",
    component:AlltopicsComponent
  },
  {
    path:"topics/:id",
    component:TopicsComponent
  },
  {
    path:"aboutus",
    component:AboutusComponent
  },
  {
    path:"getinspired",
    component:InspiredComponent
  },
  {
    path:"gethelp",
    component:HelpComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
