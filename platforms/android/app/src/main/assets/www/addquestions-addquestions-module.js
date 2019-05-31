(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addquestions-addquestions-module"],{

/***/ "./src/app/addquestions/addquestions.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/addquestions/addquestions.module.ts ***!
  \*****************************************************/
/*! exports provided: AddquestionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddquestionsPageModule", function() { return AddquestionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addquestions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addquestions.page */ "./src/app/addquestions/addquestions.page.ts");







var routes = [
    {
        path: '',
        component: _addquestions_page__WEBPACK_IMPORTED_MODULE_6__["AddquestionsPage"]
    }
];
var AddquestionsPageModule = /** @class */ (function () {
    function AddquestionsPageModule() {
    }
    AddquestionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_addquestions_page__WEBPACK_IMPORTED_MODULE_6__["AddquestionsPage"]]
        })
    ], AddquestionsPageModule);
    return AddquestionsPageModule;
}());



/***/ }),

/***/ "./src/app/addquestions/addquestions.page.html":
/*!*****************************************************!*\
  !*** ./src/app/addquestions/addquestions.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n      <ion-button (click)=\"rotate()\" ion-button icon-only>\r\n          <ion-icon name=\"arrow-round-back\"></ion-icon>\r\n      </ion-button>\r\n    <ion-title>Your Question</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <div class=\"camera\"></div>\r\n\r\n    <input type=\"file\" *ngIf=\"!imageURL\" (change)=\"fileChanged($event)\"/>\r\n  \r\n    <ion-card>\r\n        <img *ngIf=\"imageURL\" src=\"https://ucarecdn.com/{{ imageURL }}/\" />\r\n    </ion-card>\r\n    \r\n    <ion-item>\r\n        <ion-input type=\"text\" [(ngModel)]=\"Question\">\r\n            <ion-textarea rows=\"10\" placeholder=\"Please Enter Your Question\"></ion-textarea>\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-button fill=\"solid\" expand=\"block\" color=\"dark\" (click)=\"addQuestion()\">Done!</ion-button>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/addquestions/addquestions.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/addquestions/addquestions.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".camera {\n  width: 200px;\n  height: 200px;\n  margin: 0 auto;\n  background: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkcXVlc3Rpb25zL0M6XFxVc2Vyc1xcTGl2ZUZcXERlc2t0b3BcXFJlY2lwZVNvblxcRGVzc2VydFJlY2lwZS9zcmNcXGFwcFxcYWRkcXVlc3Rpb25zXFxhZGRxdWVzdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2QsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZGRxdWVzdGlvbnMvYWRkcXVlc3Rpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYW1lcmEge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/addquestions/addquestions.page.ts":
/*!***************************************************!*\
  !*** ./src/app/addquestions/addquestions.page.ts ***!
  \***************************************************/
/*! exports provided: AddquestionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddquestionsPage", function() { return AddquestionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");









var AddquestionsPage = /** @class */ (function () {
    function AddquestionsPage(http, afStore, alert, user, router, afAuth) {
        this.http = http;
        this.afStore = afStore;
        this.alert = alert;
        this.user = user;
        this.router = router;
        this.afAuth = afAuth;
    }
    AddquestionsPage.prototype.ngOnInit = function () {
    };
    AddquestionsPage.prototype.rotate = function () {
        this.router.navigate(['./tabs']);
    };
    AddquestionsPage.prototype.showAlert = function (header, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            header: header,
                            message: message,
                            buttons: ["OK"]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddquestionsPage.prototype.addQuestion = function () {
        var Question = this.Question;
        var user = this.afAuth.auth.currentUser;
        var asker = user.email;
        var image = this.imageURL;
        this.afStore.doc("questions/" + image).set({
            Questioninfos: firebase_app__WEBPACK_IMPORTED_MODULE_4__["firestore"].FieldValue.arrayUnion({
                Question: Question,
                asker: asker,
                image: image
            })
        });
        this.afStore.doc("questions/1").update({
            Questioninfos: firebase_app__WEBPACK_IMPORTED_MODULE_4__["firestore"].FieldValue.arrayUnion({
                Question: Question,
                asker: asker,
                image: image
            })
        });
        this.showAlert('Congratulations!', "Your Question Has Been Added Succesfully (:");
        this.router.navigate(['./tabs']);
    };
    AddquestionsPage.prototype.fileChanged = function (event) {
        var _this = this;
        var files = event.target.files;
        var data = new FormData();
        data.append('file', files[0]);
        data.append('UPLOADCARE_STORE', '1');
        data.append('UPLOADCARE_PUB_KEY', 'db2a7aacb7ba4bb481fb');
        this.http.post('https://upload.uploadcare.com/base/', data)
            .subscribe(function (event) {
            console.log(event);
            _this.imageURL = event.json().file;
        });
    };
    AddquestionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addquestions',
            template: __webpack_require__(/*! ./addquestions.page.html */ "./src/app/addquestions/addquestions.page.html"),
            styles: [__webpack_require__(/*! ./addquestions.page.scss */ "./src/app/addquestions/addquestions.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"]])
    ], AddquestionsPage);
    return AddquestionsPage;
}());



/***/ })

}]);
//# sourceMappingURL=addquestions-addquestions-module.js.map