import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import {TabsPage} from './tabs.page';

const routes: Routes = [
        {
            path: '',
            component: TabsPage,
            children: [
                { path: 'realprofile', loadChildren: '../realprofile/realprofile.module#RealprofilePageModule' },
                { path: 'main', loadChildren: '../main/main.module#MainPageModule' },
                { path: 'questions', loadChildren: '../questions/questions.module#QuestionsPageModule' },
            ]
        }

];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class TabsRoutingModule { }