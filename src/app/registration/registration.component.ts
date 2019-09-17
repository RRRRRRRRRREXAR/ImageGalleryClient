import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../user.service';
import { RegisterBindingModel } from '../models/RegistrationBindingModel';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private service:UserService) { }

  profileForm= new FormGroup({
    Email:new FormControl(''),
    Password:new FormControl(''),
    ConfirmPassword:new FormControl(''),
  });
  ngOnInit() {
  }
  onSubmit(){
    let obj= new RegisterBindingModel();
    obj.Email=this.profileForm.get('Email').value;
    obj.Password=this.profileForm.get('Password').value;
    obj.ConfirmPassword=this.profileForm.get('ConfirmPassword').value;
    this.service.register(obj).subscribe();
    console.log(obj);
  }
}
