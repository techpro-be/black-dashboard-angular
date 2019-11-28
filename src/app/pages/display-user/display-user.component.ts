import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import * as jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Resume } from 'src/app/shared/models/resume.module';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.scss']
})
export class DisplayUserComponent implements OnInit {

  @ViewChild('content', {static: false}) content: ElementRef;
  resume$: Observable<Resume>;
  id: string;

  constructor(
    private route: ActivatedRoute,
    public afs: AngularFirestore,
   ) {
      this.route.params.subscribe(params => this.id = params.id);
  }

  ngOnInit() {
    this.resume$ = this.afs
       .doc<Resume>('cvForm/' + this.id)
       .valueChanges();
  }


}
