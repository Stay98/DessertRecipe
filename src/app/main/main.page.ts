import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { UserService } from '../user.service';
import { Router } from '@angular/router'
import { AngularFireAuth } from '@angular/fire/auth'
import { AlertController } from '@ionic/angular'
import { firestore } from 'firebase/app';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  userrecipe
  route: any;

  constructor( 
    public router: Router,
    private afs: AngularFirestore, 
    private user: UserService,
    private afAuth: AngularFireAuth,
    public afStore: AngularFirestore,
    public alert: AlertController
    
  ) { 
    const infos = afs.doc(`recipes/1`)
    this.userrecipe = infos.valueChanges()

  }

  ngOnInit() {
  }
  rotate() {
    this.router.navigate(['./addrecipe'])
  }
  rotate2() {
    this.router.navigate(['./livechat'])
  }

  Comment

  addComment(imageid: string) {
    this.router.navigate(['./comments/'+imageid])
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