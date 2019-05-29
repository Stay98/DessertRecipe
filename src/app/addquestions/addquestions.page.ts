import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Http } from '@angular/http' 
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase/app';
import { UserService } from '../user.service';
import { AlertController } from '@ionic/angular'
import { Router } from '@angular/router'
import { AngularFireAuth } from '@angular/fire/auth'

@Component({
  selector: 'app-addquestions',
  templateUrl: './addquestions.page.html',
  styleUrls: ['./addquestions.page.scss'],
})
export class AddquestionsPage implements OnInit {

  Question: string
  imageURL: string

  constructor(
    public http: Http,
    public afStore: AngularFirestore,
    public alert: AlertController,
    private user: UserService,
    public router: Router,
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
  }

  rotate(){
    this.router.navigate(['./tabs'])
  }
  
  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["OK"]
    })
    await alert.present()
  }

  addQuestion() {
    const {Question} = this
    const user = this.afAuth.auth.currentUser
    const asker = user.email
    const image = this.imageURL

    this.afStore.doc(`questions/${image}`).set({
      Questioninfos: firestore.FieldValue.arrayUnion({
        Question,
        asker,
        image
      })
    })

    this.afStore.doc(`questions/1`).update({
      Questioninfos: firestore.FieldValue.arrayUnion({
        Question,
        asker,
        image
      })
    })
    this.showAlert('Congratulations!',"Your Question Has Been Added Succesfully (:")
    this.router.navigate(['./tabs'])
  }

  fileChanged(event) {
    const files = event.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('UPLOADCARE_STORE', '1')
    data.append('UPLOADCARE_PUB_KEY', 'db2a7aacb7ba4bb481fb')

    this.http.post('https://upload.uploadcare.com/base/', data)
    .subscribe(event => {
      console.log(event)
      this.imageURL = event.json().file
    })
  }

}
