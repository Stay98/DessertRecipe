import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { UserService } from '../user.service';
import { Router } from '@angular/router'
import { AngularFireAuth } from '@angular/fire/auth'

@Component({
  selector: 'app-realprofile',
  templateUrl: './realprofile.page.html',
  styleUrls: ['./realprofile.page.scss'],
})
export class RealprofilePage implements OnInit {

  userinfo
  user
  uid: string
  

  constructor(private afs: AngularFirestore, private userr: UserService,public router: Router,private afAuth: AngularFireAuth,) {
    this.user = afAuth.auth.currentUser
    this.uid = this.user.uid
    const infos = afs.doc(`users/${this.uid}`)
    this.userinfo = infos.valueChanges()
  }

  ngOnInit() {
  }

  rotate() {
    this.router.navigate(['./dashboard'])
  }

  recipe() {
    this.router.navigate(['./myrecipes'])
  }

}
