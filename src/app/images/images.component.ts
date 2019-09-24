import { Component, OnInit } from '@angular/core';
import { ImageModel } from '../models/ImageModel';
import { ImageService } from '../image.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';
import { filter } from 'minimatch';



export interface DialogData {
  id: string;
}
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  constructor(private imageService:ImageService,private router:Router,public dialog: MatDialog) { }
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
  onImageClick(id:string){
    
    const dialogRef = this.dialog.open(ImageDialogComponent, {
      width: '50%',
      height: '50%',
      data:this.imageList.filter(img=>img.id==id)[0]
    });
  }
  rotateImage(id:string){
    this.imageService.rotateImage(id).subscribe();
  }
  
}
