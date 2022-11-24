import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  imageURL: any =  'https://ionicframework.com/docs/img/demos/card-media.png';
  imageURL2: any;
  constructor() { }

  ngOnInit() {
  }
  cancel(){

  }
  getEditedFile(e: any){
    const reader = new FileReader();
    reader.onload = (ee: any) => {
      console.log('csv content', ee.target.result);
      // this.imageURL2 = ee.target.result;
    };
    reader.readAsDataURL(e);
    // saveAs(e, 'image.png');
  }
}
