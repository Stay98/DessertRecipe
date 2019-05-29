
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { UserService } from '../user.service';
import { Router } from '@angular/router'
import { AngularFireAuth } from '@angular/fire/auth'
import { AlertController } from '@ionic/angular'
import { firestore } from 'firebase/app';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {

  userquestion

  constructor(
    public router: Router,
    private afs: AngularFirestore, 
    private user: UserService,
    private afAuth: AngularFireAuth,
    public afStore: AngularFirestore,
    public alert: AlertController
  ) { 
    const infos = afs.doc(`questions/1`)
    this.userquestion = infos.valueChanges()
  }

  ngOnInit() {
  }
  rotate() {
    this.router.navigate(['./addquestions'])
  }
  
  addAnswers(imageid: string) {
    this.router.navigate(['./answers/'+imageid])
  }
}
