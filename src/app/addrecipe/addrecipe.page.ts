import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Http } from '@angular/http' 
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase/app';
import { UserService } from '../user.service';
import { AlertController } from '@ionic/angular'
import { Router } from '@angular/router'
import { AngularFireAuth } from '@angular/fire/auth'
import { Services } from '@angular/core/src/view';

@Component({
  selector: 'app-addrecipe',
  templateUrl: './addrecipe.page.html',
  styleUrls: ['./addrecipe.page.scss'],
})
export class AddrecipePage implements OnInit {

  imageURL: string
  RecipeDesc: string
  Ingredients: string
  RecipeBakingTime:string
  Services:string
  userinfo


  constructor(
    public http: Http,
    public afStore: AngularFirestore,
    public alert: AlertController,
    private user: UserService,
    public router: Router,
    private afAuth: AngularFireAuth

    ) { }

  ngOnInit() {
  }

  addRecipe() {
    const image = this.imageURL
    const {Ingredients, RecipeDesc,RecipeBakingTime,Services} = this
    const user = this.afAuth.auth.currentUser
    const author = user.email


    this.afStore.doc(`users/${this.user.getUserID()}`).update({
      dessertrecipes: firestore.FieldValue.arrayUnion(image)     
    })

    this.afStore.doc(`recipes/${image}`).set({
      dessertinfos: firestore.FieldValue.arrayUnion({
        Ingredients,
        RecipeDesc,
        RecipeBakingTime,
        Services,
        imageid: image,
        author,
      })
    })

    this.afStore.doc(`users/${this.user.getUserID()}`).update({
      dessertinfos: firestore.FieldValue.arrayUnion({
        Ingredients,
        RecipeDesc,
        RecipeBakingTime,
        Services,
        image,
        author,
      })
    })

    this.afStore.doc(`recipes/1`).update({
      dessertinfos: firestore.FieldValue.arrayUnion({
        Ingredients,
        RecipeDesc,
        RecipeBakingTime,
        Services,
        image,
        author,
      })
    })
    this.showAlert('Congratulations!',"Your Recipe Has Created Succesfully (:")
    this.router.navigate(['./tabs'])
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

  @ViewChild('myInput') myInput: ElementRef;
  resize() {
    this.myInput.nativeElement.style.height = this.myInput.nativeElement.scrollHeight + 'px';
  }

  rotate(){
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
