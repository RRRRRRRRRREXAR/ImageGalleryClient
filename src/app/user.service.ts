import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterBindingModel } from './models/RegistrationBindingModel';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UserModel } from './models/UserModel';
import { LoginModel } from './models/LoginModel';
import { DataSharingService } from './data-sharing.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public API='https://localhost:44327/api/Account';
  public ACCOUNT_API=`${this.API}/Account`;
  constructor(private http:HttpClient,private dataSharingService:DataSharingService) { }

  login(user :LoginModel):Observable<UserModel>
  {
    let result:Observable<UserModel>;
    
    let body = `username=${user.username}&password=${user.password}&grant_type=password`;
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };
    result=this.http.post<UserModel>("https://localhost:44327/Token",body,options);
    return result;
  }
  logout(){
    
    localStorage.removeItem("currentUser");
    this.dataSharingService.isUserLoggedIn.next(false);

  }
  register(user:RegisterBindingModel):Observable<UserModel>{
    let result:Observable<UserModel>;
    

    let body = `username=${user.Email}&password=${user.Password}&grant_type=password`;
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };
    user.FirstName="123";
    console.log(user);
    result=this.http.post<UserModel>("https://localhost:44327/api/Account",user,options);
   return result;
  }
}
