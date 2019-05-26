import { Injectable } from '@angular/core'

interface user {
    username: string,
    user_id: string
}

@Injectable()
export class UserService{
    private user: user

    constructor() {

    }

    setUser(user: user) {
        this.user = user
    }
    getUserID() {
        return this.user.user_id
    }
}

