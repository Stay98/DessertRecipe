(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["answers-answers-module"],{

/***/ "./src/app/answers/answers.module.ts":
/*!*******************************************!*\
  !*** ./src/app/answers/answers.module.ts ***!
  \*******************************************/
/*! exports provided: AnswersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswersPageModule", function() { return AnswersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _answers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./answers.page */ "./src/app/answers/answers.page.ts");







var routes = [
    {
        path: '',
        component: _answers_page__WEBPACK_IMPORTED_MODULE_6__["AnswersPage"]
    }
];
var AnswersPageModule = /** @class */ (function () {
    function AnswersPageModule() {
    }
    AnswersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_answers_page__WEBPACK_IMPORTED_MODULE_6__["AnswersPage"]]
        })
    ], AnswersPageModule);
    return AnswersPageModule;
}());



/***/ }),

/***/ "./src/app/answers/answers.page.html":
/*!*******************************************!*\
  !*** ./src/app/answers/answers.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n      <ion-button (click)=\"rotate()\" ion-button icon-only>\r\n          <ion-icon name=\"arrow-round-back\"></ion-icon>\r\n      </ion-button>\r\n    <ion-title>Answers</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-card>\r\n        <div id=\"answers\">\r\n            <div class=\"answer\" *ngFor=\"let answer of (answerr | async)?.allanswers\">\r\n                <ion-card>\r\n                  <ion-label text-wrap> {{answer.author}} : {{ answer.Answer }} </ion-label>\r\n                </ion-card>\r\n            </div>\r\n        </div>\r\n    </ion-card>\r\n\r\n          <ion-card>\r\n              <ion-item>\r\n                <ion-input type=\"text\" [(ngModel)]=\"Answer\">\r\n                    <ion-textarea rows=\"4\" placeholder=\"Enter Your Answer Here..\"></ion-textarea>\r\n                </ion-input>\r\n              </ion-item>\r\n\r\n              <ion-button fill=\"solid\" expand=\"block\" color=\"dark\" (click)=\"addAnswerr()\">Send Your Answer !</ion-button>\r\n\r\n          </ion-card>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/answers/answers.page.scss":
/*!*******************************************!*\
  !*** ./src/app/answers/answers.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fuc3dlcnMvYW5zd2Vycy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/answers/answers.page.ts":
/*!*****************************************!*\
  !*** ./src/app/answers/answers.page.ts ***!
  \*****************************************/
/*! exports provided: AnswersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswersPage", function() { return AnswersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_7__);








var AnswersPage = /** @class */ (function () {
    function AnswersPage(route, router, afs, user, afAuth, afStore, alert) {
        this.route = route;
        this.router = router;
        this.afs = afs;
        this.user = user;
        this.afAuth = afAuth;
        this.afStore = afStore;
        this.alert = alert;
    }
    AnswersPage.prototype.ngOnInit = function () {
        this.imageid = this.route.snapshot.paramMap.get('id');
        this.answerr = this.afs.doc("questions/" + this.imageid).valueChanges();
    };
    AnswersPage.prototype.addAnswerr = function () {
        var Answer = this.Answer;
        var user = this.afAuth.auth.currentUser;
        var author = user.email;
        this.afStore.doc("questions/" + this.imageid).update({
            allanswers: firebase_app__WEBPACK_IMPORTED_MODULE_7__["firestore"].FieldValue.arrayUnion({
                author: author,
                Answer: Answer
            })
        });
    };
    AnswersPage.prototype.rotate = function () {
        this.router.navigate(['./tabs']);
    };
    AnswersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-answers',
            template: __webpack_require__(/*! ./answers.page.html */ "./src/app/answers/answers.page.html"),
            styles: [__webpack_require__(/*! ./answers.page.scss */ "./src/app/answers/answers.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])
    ], AnswersPage);
    return AnswersPage;
}());



/***/ })

}]);
//# sourceMappingURL=answers-answers-module.js.map