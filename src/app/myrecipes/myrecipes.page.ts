import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { UserService } from '../user.service';
import { Router } from '@angular/router'
import { AngularFireAuth } from '@angular/fire/auth'

@Component({
  selector: 'app-myrecipes',
  templateUrl: './myrecipes.page.html',
  styleUrls: ['./myrecipes.page.scss'],
})
export class MyrecipesPage implements OnInit {

  userrecipe
  user
  uid
  
  constructor(
    public router: Router,
    private afs: AngularFirestore, 
    private userr: UserService,
    private afAuth: AngularFireAuth
  ) { 
    this.user = afAuth.auth.currentUser
    this.uid = this.user.uid
    const infos = afs.doc(`users/${this.uid}`)
    this.userrecipe = infos.valueChanges()
  }

  ngOnInit() {
  }
  rotate() {
    this.router.navigate(['./tabs'])
  }
}
