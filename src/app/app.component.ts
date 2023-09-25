import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "./models/face-snap.model";
import {FaceSnapsService} from "./services/face-snaps.service";
import {interval, take, tap} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  faceSnaps!: FaceSnap[];

  constructor(private faceSnapsService: FaceSnapsService) {
  }

  ngOnInit() {
    this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();

    interval(1000).pipe(
      take(3),
      tap(console.log)
    ).subscribe();
  };
}
