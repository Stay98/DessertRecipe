import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router'
import { AngularFireAuth } from '@angular/fire/auth'
import { AlertController } from '@ionic/angular'
import { firestore } from 'firebase/app';




@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {

  commentt
  Comment
  imageid: string;
 
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private afs: AngularFirestore, 
    private user: UserService,
    private afAuth: AngularFireAuth,
    public afStore: AngularFirestore,
    public alert: AlertController
  ) { 
    this.imageid = this.route.snapshot.paramMap.get('id')
    const eyzi = this.afs.doc(`recipes/${this.imageid}`)
    this.commentt = eyzi.valueChanges()
  }

  ngOnInit() {
    this.imageid = this.route.snapshot.paramMap.get('id')
    this.commentt = this.afs.doc(`recipes/${this.imageid}`).valueChanges()
  }

  addComment() {
    const { Comment } = this
    const user = this.afAuth.auth.currentUser
    const author = user.email

    this.afStore.doc(`recipes/${this.imageid}`).update({
      allcomments: firestore.FieldValue.arrayUnion({
        author,
        Comment
      })
    })
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["OK"]
    })
    await alert.present()
  }

  rotate(){
    this.router.navigate(['./tabs'])
  }
}
