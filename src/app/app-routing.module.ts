import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FileViewerComponent } from './file-viewer/file-viewer.component';
import { LoginForm } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginForm },
  { path: 'files', component: FileViewerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
