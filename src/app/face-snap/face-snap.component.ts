import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;
  greenIt!: boolean;
  ngOnInit() {
    this.buttonText = "oh Snap!";
    this.greenIt = false;
  }

  onClickSnap() {
    if (this.buttonText === "oh Snap!") {
      this.faceSnap.snaps++;
      this.buttonText = "oops unSnap!";
      this.greenIt = true;
    } else {
      this.faceSnap.snaps--;
      this.buttonText = "oh Snap!"
      this.greenIt = false;
    }
  }

  protected readonly FaceSnap = FaceSnap;
}
