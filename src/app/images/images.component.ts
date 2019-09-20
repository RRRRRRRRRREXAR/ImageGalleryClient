import { Component, OnInit } from '@angular/core';
import { ImageModel } from '../models/ImageModel';
import { ImageService } from '../image.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  constructor(private imageService:ImageService,private router:Router) { }
  imageList:Array<ImageModel>;
  ngOnInit() {
    this.imageService.getImages().subscribe(value=>
      {
        this.imageList=value;
      });
  }
  deleteImage(id:string){
  this.imageService.deleteImage(id).subscribe();
  this.imageList= this.imageList.filter(img=>img.id!=id);

  }

}
