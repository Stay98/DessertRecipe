(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["myrecipes-myrecipes-module"],{

/***/ "./src/app/myrecipes/myrecipes.module.ts":
/*!***********************************************!*\
  !*** ./src/app/myrecipes/myrecipes.module.ts ***!
  \***********************************************/
/*! exports provided: MyrecipesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyrecipesPageModule", function() { return MyrecipesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _myrecipes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./myrecipes.page */ "./src/app/myrecipes/myrecipes.page.ts");







var routes = [
    {
        path: '',
        component: _myrecipes_page__WEBPACK_IMPORTED_MODULE_6__["MyrecipesPage"]
    }
];
var MyrecipesPageModule = /** @class */ (function () {
    function MyrecipesPageModule() {
    }
    MyrecipesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_myrecipes_page__WEBPACK_IMPORTED_MODULE_6__["MyrecipesPage"]]
        })
    ], MyrecipesPageModule);
    return MyrecipesPageModule;
}());



/***/ }),

/***/ "./src/app/myrecipes/myrecipes.page.html":
/*!***********************************************!*\
  !*** ./src/app/myrecipes/myrecipes.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n      <ion-button (click)=\"rotate()\" ion-button icon-only>\r\n          <ion-icon name=\"arrow-round-back\"></ion-icon>\r\n      </ion-button>\r\n    <ion-title>My Recipes</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <div id=\"recipes\">\r\n        <div class=\"recipe\" *ngFor=\"let recipe of (userrecipe | async)?.dessertinfos\">\r\n            \r\n            <ion-card>\r\n                <ion-img src=\"https://ucarecdn.com/{{ recipe.image }}/\"></ion-img>\r\n            </ion-card>\r\n         \r\n           <ion-list>\r\n\r\n              <ion-item>\r\n                <ion-label text-wrap> RecipeIngredients : {{ recipe.Ingredients }} </ion-label>\r\n              </ion-item>\r\n\r\n             <ion-item>\r\n              <ion-label text-wrap> RecipeDesc : {{ recipe.RecipeDesc }} </ion-label>\r\n             </ion-item>\r\n  \r\n            </ion-list>\r\n        </div>\r\n      </div>\r\n  </ion-card>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/myrecipes/myrecipes.page.scss":
/*!***********************************************!*\
  !*** ./src/app/myrecipes/myrecipes.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215cmVjaXBlcy9teXJlY2lwZXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/myrecipes/myrecipes.page.ts":
/*!*********************************************!*\
  !*** ./src/app/myrecipes/myrecipes.page.ts ***!
  \*********************************************/
/*! exports provided: MyrecipesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyrecipesPage", function() { return MyrecipesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");






var MyrecipesPage = /** @class */ (function () {
    function MyrecipesPage(router, afs, userr, afAuth) {
        this.router = router;
        this.afs = afs;
        this.userr = userr;
        this.afAuth = afAuth;
        this.user = afAuth.auth.currentUser;
        this.uid = this.user.uid;
        var infos = afs.doc("users/" + this.uid);
        this.userrecipe = infos.valueChanges();
    }
    MyrecipesPage.prototype.ngOnInit = function () {
    };
    MyrecipesPage.prototype.rotate = function () {
        this.router.navigate(['./tabs']);
    };
    MyrecipesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-myrecipes',
            template: __webpack_require__(/*! ./myrecipes.page.html */ "./src/app/myrecipes/myrecipes.page.html"),
            styles: [__webpack_require__(/*! ./myrecipes.page.scss */ "./src/app/myrecipes/myrecipes.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]])
    ], MyrecipesPage);
    return MyrecipesPage;
}());



/***/ })

}]);
//# sourceMappingURL=myrecipes-myrecipes-module.js.map