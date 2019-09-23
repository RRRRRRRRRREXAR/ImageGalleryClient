import { Component, OnInit, Inject, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../images/images.component';
import { ImageService } from '../image.service';
import { ImageModel } from '../models/ImageModel';

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
    @Input('width') width: string;
    @Input('height') height: string;
  image:ImageModel;
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(){
    
  }
  rotateImage(id:string){
    this.imageService.rotateImage(id);
  }
  resizeImage(id:string,width:string,height:string){
    this.imageService.getResizedImage(id,width,height);
  }
}
