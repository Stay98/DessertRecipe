(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["livechat-livechat-module"],{

/***/ "./src/app/livechat/livechat.module.ts":
/*!*********************************************!*\
  !*** ./src/app/livechat/livechat.module.ts ***!
  \*********************************************/
/*! exports provided: LivechatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivechatPageModule", function() { return LivechatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _livechat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./livechat.page */ "./src/app/livechat/livechat.page.ts");







var routes = [
    {
        path: '',
        component: _livechat_page__WEBPACK_IMPORTED_MODULE_6__["LivechatPage"]
    }
];
var LivechatPageModule = /** @class */ (function () {
    function LivechatPageModule() {
    }
    LivechatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_livechat_page__WEBPACK_IMPORTED_MODULE_6__["LivechatPage"]]
        })
    ], LivechatPageModule);
    return LivechatPageModule;
}());



/***/ }),

/***/ "./src/app/livechat/livechat.page.html":
/*!*********************************************!*\
  !*** ./src/app/livechat/livechat.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n      <ion-button (click)=\"rotate4()\" ion-button icon-only>\r\n          <ion-icon name=\"arrow-round-back\"></ion-icon>\r\n      </ion-button>\r\n    <ion-title>Live Chat</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n   \r\n        <div id=\"answers\">\r\n            <div class=\"answer\" *ngFor=\"let chatter of (chatt | async)?.allchats\" class=\"clr\">\r\n                \r\n                  <ion-label text-wrap> {{chatter.author}} : {{ chatter.Message }} </ion-label>\r\n                  \r\n                \r\n            </div>\r\n        </div>\r\n    \r\n\r\n          <ion-card>\r\n              <ion-item>\r\n                <ion-input type=\"text\" [(ngModel)]=\"Message\">\r\n                    <ion-textarea rows=\"4\" placeholder=\"Enter Your Message Here..\"></ion-textarea>\r\n                </ion-input>\r\n              </ion-item>\r\n\r\n              <ion-button fill=\"solid\" expand=\"block\" color=\"dark\" (click)=\"addAnswerr()\">Send Your Message !</ion-button>\r\n\r\n          </ion-card>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/livechat/livechat.page.scss":
/*!*********************************************!*\
  !*** ./src/app/livechat/livechat.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clr {\n  padding: 10px;\n  border-radius: 10px;\n  margin-bottom: 4px;\n  white-space: pre-wrap;\n  color: white;\n  font-size: 1em;\n  background: var(--ion-color-primary); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGl2ZWNoYXQvQzpcXFVzZXJzXFxMaXZlRlxcRGVza3RvcFxcUmVjaXBlU29uXFxEZXNzZXJ0UmVjaXBlL3NyY1xcYXBwXFxsaXZlY2hhdFxcbGl2ZWNoYXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixrQkFBaUI7RUFDakIscUJBQW9CO0VBQ3BCLFlBQVc7RUFDWCxjQUFjO0VBQ2Qsb0NBQW1DLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9saXZlY2hhdC9saXZlY2hhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xye1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTo0cHg7XHJcbiAgICB3aGl0ZS1zcGFjZTpwcmUtd3JhcDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/livechat/livechat.page.ts":
/*!*******************************************!*\
  !*** ./src/app/livechat/livechat.page.ts ***!
  \*******************************************/
/*! exports provided: LivechatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivechatPage", function() { return LivechatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_7__);








var LivechatPage = /** @class */ (function () {
    function LivechatPage(route, router, afs, user, afAuth, afStore, alert) {
        this.route = route;
        this.router = router;
        this.afs = afs;
        this.user = user;
        this.afAuth = afAuth;
        this.afStore = afStore;
        this.alert = alert;
    }
    LivechatPage.prototype.ngOnInit = function () {
        this.chatt = this.afs.doc("livechat/1").valueChanges();
    };
    LivechatPage.prototype.addAnswerr = function () {
        var Message = this.Message;
        var user = this.afAuth.auth.currentUser;
        var author = user.email;
        this.afStore.doc("livechat/1").update({
            allchats: firebase_app__WEBPACK_IMPORTED_MODULE_7__["firestore"].FieldValue.arrayUnion({
                author: author,
                Message: Message
            })
        });
    };
    LivechatPage.prototype.rotate4 = function () {
        this.router.navigate(['./tabs']);
    };
    LivechatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-livechat',
            template: __webpack_require__(/*! ./livechat.page.html */ "./src/app/livechat/livechat.page.html"),
            styles: [__webpack_require__(/*! ./livechat.page.scss */ "./src/app/livechat/livechat.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])
    ], LivechatPage);
    return LivechatPage;
}());



/***/ })

}]);
//# sourceMappingURL=livechat-livechat-module.js.map