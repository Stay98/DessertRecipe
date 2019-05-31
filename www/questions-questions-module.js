(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["questions-questions-module"],{

/***/ "./src/app/questions/questions.module.ts":
/*!***********************************************!*\
  !*** ./src/app/questions/questions.module.ts ***!
  \***********************************************/
/*! exports provided: QuestionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsPageModule", function() { return QuestionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _questions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./questions.page */ "./src/app/questions/questions.page.ts");







var routes = [
    {
        path: '',
        component: _questions_page__WEBPACK_IMPORTED_MODULE_6__["QuestionsPage"]
    }
];
var QuestionsPageModule = /** @class */ (function () {
    function QuestionsPageModule() {
    }
    QuestionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_questions_page__WEBPACK_IMPORTED_MODULE_6__["QuestionsPage"]]
        })
    ], QuestionsPageModule);
    return QuestionsPageModule;
}());



/***/ }),

/***/ "./src/app/questions/questions.page.html":
/*!***********************************************!*\
  !*** ./src/app/questions/questions.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Questions</ion-title>\r\n    <ion-button (click)=\"rotate()\" ion-button icon-only>\r\n        <ion-icon name=\"add-circle\"></ion-icon>\r\n      </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div id=\"questions\" *ngIf=\"(userquestion | async)?.Questioninfos as questions\">\r\n    <div class=\"question\" *ngFor=\"let question of questions\">\r\n      <ion-card>\r\n\r\n\r\n        <ion-item>\r\n              <ion-label text-wrap> Writer : {{ question.asker }} </ion-label>\r\n           </ion-item>\r\n\r\n          <ion-card>\r\n              <ion-img src=\"https://ucarecdn.com/{{ question.image }}/\"></ion-img>\r\n          </ion-card>\r\n\r\n           <ion-item>\r\n                <ion-label text-wrap> Question : {{ question.Question }} </ion-label>\r\n           </ion-item>\r\n\r\n           <ion-button fill=\"solid\" expand=\"block\" color=\"dark\" (click)=\"addAnswers(question.image)\">Answers</ion-button>\r\n\r\n      </ion-card>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/questions/questions.page.scss":
/*!***********************************************!*\
  !*** ./src/app/questions/questions.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9ucy9xdWVzdGlvbnMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/questions/questions.page.ts":
/*!*********************************************!*\
  !*** ./src/app/questions/questions.page.ts ***!
  \*********************************************/
/*! exports provided: QuestionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsPage", function() { return QuestionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var QuestionsPage = /** @class */ (function () {
    function QuestionsPage(router, afs, user, afAuth, afStore, alert) {
        this.router = router;
        this.afs = afs;
        this.user = user;
        this.afAuth = afAuth;
        this.afStore = afStore;
        this.alert = alert;
        var infos = afs.doc("questions/1");
        this.userquestion = infos.valueChanges();
    }
    QuestionsPage.prototype.ngOnInit = function () {
    };
    QuestionsPage.prototype.rotate = function () {
        this.router.navigate(['./addquestions']);
    };
    QuestionsPage.prototype.addAnswers = function (imageid) {
        this.router.navigate(['./answers/' + imageid]);
    };
    QuestionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-questions',
            template: __webpack_require__(/*! ./questions.page.html */ "./src/app/questions/questions.page.html"),
            styles: [__webpack_require__(/*! ./questions.page.scss */ "./src/app/questions/questions.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])
    ], QuestionsPage);
    return QuestionsPage;
}());



/***/ })

}]);
//# sourceMappingURL=questions-questions-module.js.map