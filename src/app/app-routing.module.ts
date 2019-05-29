import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'addrecipe', loadChildren: './addrecipe/addrecipe.module#AddrecipePageModule' },
  { path: 'myrecipes', loadChildren: './myrecipes/myrecipes.module#MyrecipesPageModule' },
  { path: 'comments/:id', loadChildren: './comments/comments.module#CommentsPageModule' },
  { path: 'addquestions', loadChildren: './addquestions/addquestions.module#AddquestionsPageModule' },
  { path: 'answers/:id', loadChildren: './answers/answers.module#AnswersPageModule' },
  { path: 'livechat', loadChildren: './livechat/livechat.module#LivechatPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
