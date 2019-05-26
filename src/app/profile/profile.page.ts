import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UserService } from '../user.service';
import { AngularFirestore } from '@angular/fire/firestore'
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  Name: string = ""
  Uzername: string = ""
  BirthDate: string = ""
  Gender: string = ""


  constructor(
    public router: Router,
    public afStore: AngularFirestore,
    public alert: AlertController,
    public user: UserService
    ) { }

  ngOnInit() {
  }
  
  setValues() {
    const {Uzername, Name, BirthDate,Gender} = this
    this.afStore.doc(`users/${this.user.getUserID()}`).update({
      Uzername
    })
    this.afStore.doc(`users/${this.user.getUserID()}`).update({
      Name
    })
    this.afStore.doc(`users/${this.user.getUserID()}`).update({
      BirthDate
    })
    this.afStore.doc(`users/${this.user.getUserID()}`).update({
      Gender
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
}
