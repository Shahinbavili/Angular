import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "./models/face-snap.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit() {
    this.mySnap = new FaceSnap(
      'Archibald',
      'Mon meilleur ami depuis tout petit !',
      "https://www.kasandbox.org/programming-images/avatars/duskpin-seed.png",
      new Date(),
      0
    );
    this.myOtherSnap = new FaceSnap(
      'Three Rock Mountain',
      'Un endroit magnifique pour les randonnées.',
      "https://www.kasandbox.org/programming-images/avatars/purple-pi-teal.png",
      new Date(),
      0
    );
    this.myLastSnap = new FaceSnap(
      'Un bon repas',
      'C\'est délicieux !',
      "https://www.kasandbox.org/programming-images/avatars/mr-pants-purple.png",
      new Date(),
      0
    );
  }
}
