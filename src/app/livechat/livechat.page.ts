
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router'
import { AngularFireAuth } from '@angular/fire/auth'
import { AlertController } from '@ionic/angular'
import { firestore } from 'firebase/app';


@Component({
  selector: 'app-livechat',
  templateUrl: './livechat.page.html',
  styleUrls: ['./livechat.page.scss'],
})
export class LivechatPage implements OnInit {

  chatt
  Message

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
    this.chatt = this.afs.doc(`livechat/1`).valueChanges()
  }

  addAnswerr() {
    const { Message } = this
    const user = this.afAuth.auth.currentUser
    const author = user.email

    this.afStore.doc(`livechat/1`).update({
      allchats: firestore.FieldValue.arrayUnion({
        author,
        Message
      })
    })
  }

}
