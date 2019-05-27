import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http' 
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { AlertController } from '@ionic/angular'
import { Router } from '@angular/router'
import { firestore } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  imageURL: string
  Name: string = ""
  Uzername: string = ""
  newBirth: string = ""
  Gender: string = ""

  constructor(
    public http: Http,
    public afStore: AngularFirestore,
    public alert: AlertController,
    public user: UserService,
    public router: Router,
    private afAuth: AngularFireAuth,
    ) { }

  ngOnInit() {
  }

  setValues() {
    const {Uzername, Name, newBirth, Gender} = this
    const image = this.imageURL
    const user = this.afAuth.auth.currentUser
    const email = user.email

    const BirthDate = newBirth.split('T')[0]

    this.afStore.doc(`users/${this.user.getUserID()}`).set({
      userinfos: firestore.FieldValue.arrayUnion({
        Name,
        Uzername,
        BirthDate,
        Gender,
        image,
        email
      })
    })
    this.showAlert('Congratulations!',"Your Profile Has Created Succesfully (:")
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
