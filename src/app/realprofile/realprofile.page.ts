import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { UserService } from '../user.service';

@Component({
  selector: 'app-realprofile',
  templateUrl: './realprofile.page.html',
  styleUrls: ['./realprofile.page.scss'],
})
export class RealprofilePage implements OnInit {

  userinfo

  constructor(private afs: AngularFirestore, private user: UserService) { 
    const infos = afs.doc(`users/${user.getUserID()}`)
    this.userinfo = infos.valueChanges()
  }

  ngOnInit() {
  }

}
