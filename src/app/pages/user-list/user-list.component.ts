import { Component, OnInit} from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Resume } from 'src/app/shared/models/resume.module';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  headElements = ['name', 'surname', 'phone', 'email', 'address', 'actions'];

  resumeCollection: AngularFirestoreCollection<Resume>;
  resumes$: Observable<Resume[]>;
  tests$: Observable<Resume[]>;
  id: string;
  testid: string;


  constructor(
    public afs: AngularFirestore,
    private router: Router
    ) {
      this.resumes$ = this.afs.collection<Resume>('cvForm')
     .snapshotChanges().pipe(
       map(actions => actions.map(a => {
         const data = a.payload.doc.data() as Resume;
         const id = a.payload.doc.id;
         return { id, ...data };
       }))
     );

      this.tests$ = this.afs.collection<Resume>('testCv')
     .snapshotChanges().pipe(
       map(actions => actions.map(a => {
         const testdata = a.payload.doc.data() as Resume;
         const testid = a.payload.doc.id;
         return { testid, ...testdata };
       }))
     );
    }

  ngOnInit() {
    this.resumes$.subscribe();
  }

  // onDeleteForm(event, test) {
  //   console.log('button clicked', test);
  //   this.userService.deleteUser(test);


  // }
  // onLogout() {
  //   this.authService.logout();
  //   this.router.navigate(['/login']);
  // }

}




