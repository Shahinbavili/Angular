import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapsService} from "../services/face-snaps.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;

  constructor(
    private faceSnapsService: FaceSnapsService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.buttonText = "oh Snap!";
  }

  onClickSnap() {
    if (this.buttonText === "oh Snap!") {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = "oops unSnap!";
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'un snap');
      this.buttonText = "oh Snap!"
    }
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${ this.faceSnap.id }`);
  }
}
