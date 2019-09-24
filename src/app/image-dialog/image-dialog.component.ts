import { Component, OnInit, Inject, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../images/images.component';
import { ImageService } from '../image.service';
import { ImageModel } from '../models/ImageModel';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.css']
})
export class ImageDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ImageModel,private imageService:ImageService) {
      this.image=data;
    }
    resizeForm= new FormGroup({
      width:new FormControl(''),
    height:new FormControl(''),
    });
  image:ImageModel;
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(){
    
  }
  rotateImage(id:string){
    this.imageService.rotateImage(id).subscribe();
  }
  resizeImage(){
    var width=this.resizeForm.get("width").value;
    var height=this.resizeForm.get("height").value;
    console.log(width)
    console.log(height);
    this.imageService.getResizedImage(this.image.id,width,height).subscribe(data=>{
      console.log(data);
    });
  }
}
