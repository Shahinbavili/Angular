import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "./models/face-snap.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];


  ngOnInit() {
    this.faceSnaps = [
      {
        title: 'Archibald',
        description: 'Mon meilleur ami depuis tout petit !',
        imageUrl: "https://www.kasandbox.org/programming-images/avatars/duskpin-seed.png",
        createdDate: new Date(),
        snaps: 0,
        location: 'Paris'
      },
      {
        title: 'Three Rock Mountain',
        description: 'Un endroit magnifique pour les randonnées.',
        imageUrl: "https://www.kasandbox.org/programming-images/avatars/purple-pi-teal.png",
        createdDate: new Date(),
        snaps: 0,
        location: 'Tabriz'
      },
      {
        title: 'Un bon repas',
        description: 'C\'est délicieux !',
        imageUrl: "https://www.kasandbox.org/programming-images/avatars/mr-pants-purple.png",
        createdDate: new Date(),
        snaps: 0
      }
    ]
  };
}
