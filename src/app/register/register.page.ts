import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { AlertController } from '@ionic/angular'
import { Router } from '@angular/router'
import { AngularFirestore } from '@angular/fire/firestore'
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string = ""
  password: string = ""
  cpassword: string = ""
  constructor(
    public afAuth: AngularFireAuth,
    public afStore: AngularFirestore,
    public user:UserService,
    public alert: AlertController,
    public router: Router
    ) { }

  ngOnInit() {
  }

  async register() {
    const {username,password,cpassword} = this
    if(password!==cpassword) {
        this.showAlert("Error!","Passwords don't match")
        return console.error("Passwords don't match")
    }
    try {

      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username, password)
      console.log(res)
      this.showAlert("Success !","Enjoy The Recipes!")
      this.router.navigate(['./dashboard'])

      this.afStore.doc(`users/${res.user.uid}`).set({
        username
      })

      this.afStore.doc(`recipes/${res.user.uid}`).set({
        username
      })

      this.afStore.doc(`questions/${res.user.uid}`).set({
        username
      })

      this.afStore.doc(`livechat/${res.user.uid}`).set({
        username
      })

    } catch(err) {

      console.dir(err)
      this.showAlert("Error !",err.message)

    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["OK"]
    })

    await alert.present()
  }

  rotate() {
    this.router.navigate(['./login'])
  }

}