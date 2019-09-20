import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImageModel } from './models/ImageModel';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http:HttpClient) { }
  
  public uploadImage(image: File): Observable<any> {
    let token =JSON.parse(localStorage.getItem("currentUser"));
    let options = {headers: new HttpHeaders().set("Authorization", "Bearer "+token.token.access_token)};
    const formData = new FormData();
    formData.append('image', image);
    return this.http.post("https://localhost:44327/api/Image", formData,options);
  }
  public getImages():Observable<Array<ImageModel>>{
    let result:Observable<Array<ImageModel>>;
    let token =JSON.parse(localStorage.getItem("currentUser"));
    let options = {headers: new HttpHeaders().set("Authorization", "Bearer "+token.token.access_token)};
    result=this.http.get<Array<ImageModel>>("https://localhost:44327/api/Image",options);
    return result;
  }
  public deleteImage(id:string){
    let result:Observable<any>;
    let params = new HttpParams()
    .set('id',id );
    let token =JSON.parse(localStorage.getItem("currentUser"));
    let options = {headers: new HttpHeaders().set("Authorization", "Bearer "+token.token.access_token),params:params};
    result=this.http.delete("https://localhost:44327/api/Image",options);
    return result;
  }
  public rotateImage(){
    
  }
}
