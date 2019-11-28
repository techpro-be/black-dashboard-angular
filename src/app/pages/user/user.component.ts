import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { Resume } from 'src/app/shared/models/resume.module';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: "app-user",
  templateUrl: "user.component.html"
})
export class UserComponent implements OnInit {
  user$: Observable<Resume>;
  id: string;
  constructor(private route: ActivatedRoute,
    public afs: AngularFirestore,) {}

  ngOnInit() {
    this.user$ = this.afs
       .doc<Resume>('cvForm/' + this.id)
       .valueChanges();
  }
}
