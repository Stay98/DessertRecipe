import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http' 
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { AlertController } from '@ionic/angular'
import { Router } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  imageURL: string
  constructor(
    public http: Http,
    public afStore: AngularFirestore,
    public alert: AlertController,
    public user: UserService,
    public router: Router
    ) { }

  ngOnInit() {
  }

  addPicture() {
    const image = this.imageURL

    this.afStore.doc(`users/${this.user.getUserID()}`).update({
      image
    })
    this.showAlert('Congratulations!',"Your Image is Uploaded Succesfully")
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

}
