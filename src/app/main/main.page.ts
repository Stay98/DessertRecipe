import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { UserService } from '../user.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  userrecipe

  constructor( 
    public router: Router,
    private afs: AngularFirestore, 
    private user: UserService
    
  ) { 
    const infos = afs.doc(`recipes/1`)
    this.userrecipe = infos.valueChanges()
  }

  ngOnInit() {
  }
  rotate() {
    this.router.navigate(['./addrecipe'])
  }
}
