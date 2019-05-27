import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router'
import { AlertController } from '@ionic/angular'


interface user {
    username: string,
    user_id: string
}

@Injectable()
export class UserService{
    private user: user

    constructor(
        private afAuth: AngularFireAuth,
        public alert: AlertController,
        public router: Router
        ) { }

    async showAlert(header: string, message: string) {
        const alert = await this.alert.create({
            header,
            message,
            buttons: ["OK"]
        })
        await alert.present()
     }

    setUser(user: user) {
        this.user = user
    }

    getUserID() {
        if(!this.user) {
            if(this.afAuth.auth.currentUser) {
                const user= this.afAuth.auth.currentUser
                this.setUser({
                    username: user.email,
                    user_id: user.uid
                })
                return user.uid
            }
            else {
                this.showAlert("Error!","User not logged in!")
                this.router.navigate(['./login'])
            }
        }
        else {
            return this.user.user_id
        }
    }
}
