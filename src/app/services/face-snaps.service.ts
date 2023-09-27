import {Injectable} from "@angular/core";
import {FaceSnap} from "../models/face-snap.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class FaceSnapsService {

  constructor(private http: HttpClient) {}


  faceSnaps: FaceSnap[] = [];

  getAllFaceSnaps(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }

  getFaceSnapById(id: number): Observable<FaceSnap> {
    return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${id}`)
  }

  snapFaceSnapById(id: number, snapType: 'snap' | 'un snap'): void {
    // const faceSnap = this.getFaceSnapById(id);
    // snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }

  addFaceSnapCreatedByUser(formValue: { title: string, description: string, imageUrl: string, location?: string }) {
    const faceSnap: FaceSnap = {
      ...formValue,
      createdDate: new Date(),
      snaps: 0,
      id: this.faceSnaps[this.faceSnaps.length - 1].id + 1
    };
    this.faceSnaps.push(faceSnap);
  }
}
