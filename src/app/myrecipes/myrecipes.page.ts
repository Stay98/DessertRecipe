import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { UserService } from '../user.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-myrecipes',
  templateUrl: './myrecipes.page.html',
  styleUrls: ['./myrecipes.page.scss'],
})
export class MyrecipesPage implements OnInit {

  userrecipe
  
  constructor(
    public router: Router,
    private afs: AngularFirestore, 
    private user: UserService
  ) { 
    const infos = afs.doc(`recipes/${user.getUserID()}`)
    this.userrecipe = infos.valueChanges()
  }

  ngOnInit() {
  }
  rotate() {
    this.router.navigate(['./tabs'])
  }
}
