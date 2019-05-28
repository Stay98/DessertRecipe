import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { UserService } from '../user.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-realprofile',
  templateUrl: './realprofile.page.html',
  styleUrls: ['./realprofile.page.scss'],
})
export class RealprofilePage implements OnInit {

  userinfo

  constructor(private afs: AngularFirestore, private user: UserService,public router: Router) { 
    const infos = afs.doc(`users/${user.getUserID()}`)
    this.userinfo = infos.valueChanges()
  }

  ngOnInit() {
  }

  rotate() {
    this.router.navigate(['./dashboard'])
  }

}
