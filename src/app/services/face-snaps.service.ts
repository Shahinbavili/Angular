import {Injectable} from "@angular/core";
import {FaceSnap} from "../models/face-snap.model";

@Injectable({
  providedIn: 'root'
})

export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 0,
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      imageUrl: "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
      createdDate: new Date(),
      snaps: 10,
      location: 'Paris'
    },
    {
      id: 1,
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les randonnées.',
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg",
      createdDate: new Date(),
      snaps: 20,
      location: 'Tabriz'
    },
    {
      id: 2,
      title: 'Un bon repas',
      description: 'C\'est délicieux !',
      imageUrl: "https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg",
      createdDate: new Date(),
      snaps: 0
    },
    {
      id: 3,
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      imageUrl: "assets/education.jpg",
      createdDate: new Date(),
      snaps: 10,
      location: 'Paris'
    },
    {
      id: 4,
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les randonnées.',
      imageUrl: "assets/meeting.jpg",
      createdDate: new Date(),
      snaps: 20,
      location: 'Tabriz'
    },
    {
      id: 5,
      title: 'Un bon repas',
      description: 'C\'est délicieux !',
      imageUrl: "https://www.kasandbox.org/programming-images/avatars/mr-pants-purple.png",
      createdDate: new Date(),
      snaps: 0
    }
  ]

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(id: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === id);
    if (!faceSnap) {
      throw new Error("FaceSnap not found");
    } else {
      return faceSnap;
    }
  }

  snapFaceSnapById(id: number, snapType: 'snap' | 'un snap'): void {
    const faceSnap = this.getFaceSnapById(id);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
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
