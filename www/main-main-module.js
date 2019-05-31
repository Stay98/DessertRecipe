(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"],{

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main.page */ "./src/app/main/main.page.ts");







var routes = [
    {
        path: '',
        component: _main_page__WEBPACK_IMPORTED_MODULE_6__["MainPage"]
    }
];
var MainPageModule = /** @class */ (function () {
    function MainPageModule() {
    }
    MainPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_main_page__WEBPACK_IMPORTED_MODULE_6__["MainPage"]]
        })
    ], MainPageModule);
    return MainPageModule;
}());



/***/ }),

/***/ "./src/app/main/main.page.html":
/*!*************************************!*\
  !*** ./src/app/main/main.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-button  size=\"small\" color=\"pink\" (click)=\"rotate()\" ion-button icon-only>\r\n      <ion-icon name=\"add-circle\"></ion-icon>\r\n    </ion-button>\r\n\r\n    <div style=\"text-align:center\">\r\n    <ion-title><ion-text color=\"danger\"><b>MAIN</b></ion-text></ion-title>\r\n  </div>\r\n    <ion-button size=\"small\" color=\"pink\" (click)=\"rotate2()\" ion-button icon-only small float-right round>Live Chat\r\n        <ion-icon name=\"chatbubbles\"></ion-icon>\r\n      </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  \r\n    <div id=\"recipes\" *ngIf=\"(userrecipe | async)?.dessertinfos as recipes\">\r\n      <div class=\"recipe\" *ngFor=\"let recipe of recipes\">\r\n        <ion-card>\r\n            \r\n          <ion-item>\r\n                <ion-label text-wrap> Writer : {{ recipe.author }} </ion-label>\r\n             </ion-item>\r\n\r\n            <ion-card>\r\n                <ion-img src=\"https://ucarecdn.com/{{ recipe.image }}/\"></ion-img>\r\n            </ion-card>\r\n         \r\n           <ion-list>\r\n\r\n\r\n            <ion-item>\r\n              <ion-badge color=\"primary\" > <ion-label > Recipe Baking Time : {{ recipe.RecipeBakingTime }}</ion-label></ion-badge >\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-badge color=\"tertiary\"> <ion-label > Services : {{ recipe.Services}}</ion-label></ion-badge >\r\n            </ion-item>\r\n\r\n             <ion-item>\r\n                  <ion-label text-wrap><b>Ingredients :</b> {{ recipe.Ingredients }} </ion-label>\r\n             </ion-item>\r\n\r\n             <ion-item>\r\n                <ion-label text-wrap><b>Description :</b> {{ recipe.RecipeDesc }} </ion-label>\r\n             </ion-item>\r\n                      <ion-button fill=\"solid\" expand=\"block\" color=\"pink\" (click)=\"addComment(recipe.image)\"> <ion-icon ios=\"ios-chatboxes\" md=\"md-chatboxes\"></ion-icon>Comments</ion-button>\r\n             \r\n            </ion-list>\r\n        </ion-card>\r\n      </div>\r\n    </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/main/main.page.scss":
/*!*************************************!*\
  !*** ./src/app/main/main.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-icon {\n  background: black; }\n\nion-button {\n  background: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9DOlxcVXNlcnNcXExpdmVGXFxEZXNrdG9wXFxSZWNpcGVTb25cXERlc3NlcnRSZWNpcGUvc3JjXFxhcHBcXG1haW5cXG1haW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQ0osRUFBQTs7QUFDQTtFQUNJLGlCQUNKLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb24ge1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2tcclxufVxyXG5pb24tYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/main/main.page.ts":
/*!***********************************!*\
  !*** ./src/app/main/main.page.ts ***!
  \***********************************/
/*! exports provided: MainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPage", function() { return MainPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var MainPage = /** @class */ (function () {
    function MainPage(router, afs, user, afAuth, afStore, alert) {
        this.router = router;
        this.afs = afs;
        this.user = user;
        this.afAuth = afAuth;
        this.afStore = afStore;
        this.alert = alert;
        var infos = afs.doc("recipes/1");
        this.userrecipe = infos.valueChanges();
    }
    MainPage.prototype.ngOnInit = function () {
    };
    MainPage.prototype.rotate = function () {
        this.router.navigate(['./addrecipe']);
    };
    MainPage.prototype.rotate2 = function () {
        this.router.navigate(['./livechat']);
    };
    MainPage.prototype.addComment = function (imageid) {
        this.router.navigate(['./comments/' + imageid]);
    };
    MainPage.prototype.showAlert = function (header, message) {
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
    MainPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.page.html */ "./src/app/main/main.page.html"),
            styles: [__webpack_require__(/*! ./main.page.scss */ "./src/app/main/main.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])
    ], MainPage);
    return MainPage;
}());



/***/ })

}]);
//# sourceMappingURL=main-main-module.js.map