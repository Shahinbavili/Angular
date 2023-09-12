import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  title! : string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: Array<string>;
  buttonText!: string;

  ngOnInit() {
    this.title = 'Archibald';
    this.description = 'Mon meilleur ami depuis tout petit !';
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageUrl = ["https://www.kasandbox.org/programming-images/avatars/duskpin-seed.png","https://www.kasandbox.org/programming-images/avatars/purple-pi-teal.png", "https://www.kasandbox.org/programming-images/avatars/marcimus-orange.png", "https://www.kasandbox.org/programming-images/avatars/mr-pants-purple.png"];
    this.buttonText = "oh Snap!";

  }
  onClickSnap() {
    if (this.buttonText === "oh Snap!") {
    this.snaps ++;
    this.buttonText = "oops unSnap!";
    }else {
      this.snaps--;
      this.buttonText ="oh Snap!"
    }
  }
}
