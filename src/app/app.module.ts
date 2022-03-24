import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginForm } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserService } from './user-service.service';
import { FileService } from './file-service.service';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FileViewerComponent } from './file-viewer/file-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginForm,
    FileUploaderComponent,
    FileViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [
    UserService,
    FileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
