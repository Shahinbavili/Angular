import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapsService} from "../services/face-snaps.service";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;
  greenIt!: boolean;

  constructor(private faceSnapsService: FaceSnapsService) {
  }
  ngOnInit() {
    this.buttonText = "oh Snap!";
    this.greenIt = false;
  }

  onClickSnap() {
    if (this.buttonText === "oh Snap!") {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = "oops unSnap!";
      this.greenIt = true;
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'un snap');
      this.buttonText = "oh Snap!"
      this.greenIt = false;
    }
  }

  protected readonly FaceSnap = FaceSnap;
}
