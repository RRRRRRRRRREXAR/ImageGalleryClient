import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ImagesComponent } from './images/images.component';
import { UploadimageComponent } from './uploadimage/uploadimage.component';


const routes: Routes = [
  {path:"Register",component:RegistrationComponent},
  {path:"Login",component:LoginComponent},
  {path:"Images",component:ImagesComponent},
  {path:"UploadImage",component:UploadimageComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
