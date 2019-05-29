import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router'
import { AngularFireAuth } from '@angular/fire/auth'
import { AlertController } from '@ionic/angular'
import { firestore } from 'firebase/app';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.page.html',
  styleUrls: ['./answers.page.scss'],
})
export class AnswersPage implements OnInit {

  answerr
  Answer
  imageid: string;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private afs: AngularFirestore, 
    private user: UserService,
    private afAuth: AngularFireAuth,
    public afStore: AngularFirestore,
    public alert: AlertController
  ) { }

  ngOnInit() {
    this.imageid = this.route.snapshot.paramMap.get('id')
    this.answerr = this.afs.doc(`questions/${this.imageid}`).valueChanges()
  }

  addAnswerr() {
    const { Answer } = this
    const user = this.afAuth.auth.currentUser
    const author = user.email

    this.afStore.doc(`questions/${this.imageid}`).update({
      allanswers: firestore.FieldValue.arrayUnion({
        author,
        Answer
      })
    })
  }

  rotate() {
    this.router.navigate(['./tabs'])
  }

}
