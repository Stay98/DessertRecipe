(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["realprofile-realprofile-module"],{

/***/ "./src/app/realprofile/realprofile.module.ts":
/*!***************************************************!*\
  !*** ./src/app/realprofile/realprofile.module.ts ***!
  \***************************************************/
/*! exports provided: RealprofilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealprofilePageModule", function() { return RealprofilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _realprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./realprofile.page */ "./src/app/realprofile/realprofile.page.ts");







var routes = [
    {
        path: '',
        component: _realprofile_page__WEBPACK_IMPORTED_MODULE_6__["RealprofilePage"]
    }
];
var RealprofilePageModule = /** @class */ (function () {
    function RealprofilePageModule() {
    }
    RealprofilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_realprofile_page__WEBPACK_IMPORTED_MODULE_6__["RealprofilePage"]]
        })
    ], RealprofilePageModule);
    return RealprofilePageModule;
}());



/***/ }),

/***/ "./src/app/realprofile/realprofile.page.html":
/*!***************************************************!*\
  !*** ./src/app/realprofile/realprofile.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Your Profile</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <div id=\"images\">\r\n      <div class=\"image\" *ngFor=\"let info of (userinfo | async)?.userinfos\">\r\n          <ion-card>\r\n              <ion-img src=\"https://ucarecdn.com/{{ info.image }}/\"></ion-img>\r\n          </ion-card>\r\n       \r\n         <ion-list>\r\n           <ion-item>\r\n            <ion-label text-wrap> Your Name : {{ info.Name }} </ion-label>\r\n           </ion-item>\r\n\r\n           <ion-item>\r\n              <ion-label text-wrap> Gender : {{ info.Gender }} </ion-label>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label text-wrap> Your Username : {{ info.Uzername }} </ion-label>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label text-wrap> Your Birth Date : {{ info.BirthDate }} </ion-label>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label text-wrap> Your E-Mail : {{ info.email }} </ion-label>\r\n            </ion-item>\r\n\r\n          </ion-list>\r\n      </div>\r\n    </div>\r\n    \r\n    <ion-button fill=\"solid\" expand=\"block\" color=\"dark\" (click)=\"rotate()\">Edit Profile</ion-button>\r\n    <ion-button fill=\"solid\" expand=\"block\" color=\"dark\" (click)=\"recipe()\">Show My Recipes</ion-button>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/realprofile/realprofile.page.scss":
/*!***************************************************!*\
  !*** ./src/app/realprofile/realprofile.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#images {\n  width: 1085px;\n  border: 1px;\n  margin: 0px auto; }\n\n.image {\n  width: 25%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVhbHByb2ZpbGUvQzpcXFVzZXJzXFxMaXZlRlxcRGVza3RvcFxcUmVjaXBlU29uXFxEZXNzZXJ0UmVjaXBlL3NyY1xcYXBwXFxyZWFscHJvZmlsZVxccmVhbHByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZWFscHJvZmlsZS9yZWFscHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaW1hZ2VzIHtcclxuICAgIHdpZHRoOiAxMDg1cHg7XHJcbiAgICBib3JkZXI6IDFweDtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbn1cclxuXHJcbi5pbWFnZSB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/realprofile/realprofile.page.ts":
/*!*************************************************!*\
  !*** ./src/app/realprofile/realprofile.page.ts ***!
  \*************************************************/
/*! exports provided: RealprofilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealprofilePage", function() { return RealprofilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");






var RealprofilePage = /** @class */ (function () {
    function RealprofilePage(afs, userr, router, afAuth) {
        this.afs = afs;
        this.userr = userr;
        this.router = router;
        this.afAuth = afAuth;
        this.user = afAuth.auth.currentUser;
        this.uid = this.user.uid;
        var infos = afs.doc("users/" + this.uid);
        this.userinfo = infos.valueChanges();
    }
    RealprofilePage.prototype.ngOnInit = function () {
    };
    RealprofilePage.prototype.rotate = function () {
        this.router.navigate(['./dashboard']);
    };
    RealprofilePage.prototype.recipe = function () {
        this.router.navigate(['./myrecipes']);
    };
    RealprofilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-realprofile',
            template: __webpack_require__(/*! ./realprofile.page.html */ "./src/app/realprofile/realprofile.page.html"),
            styles: [__webpack_require__(/*! ./realprofile.page.scss */ "./src/app/realprofile/realprofile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]])
    ], RealprofilePage);
    return RealprofilePage;
}());



/***/ })

}]);
//# sourceMappingURL=realprofile-realprofile-module.js.map