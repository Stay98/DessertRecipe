(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addrecipe-addrecipe-module"],{

/***/ "./src/app/addrecipe/addrecipe.module.ts":
/*!***********************************************!*\
  !*** ./src/app/addrecipe/addrecipe.module.ts ***!
  \***********************************************/
/*! exports provided: AddrecipePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddrecipePageModule", function() { return AddrecipePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addrecipe_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addrecipe.page */ "./src/app/addrecipe/addrecipe.page.ts");







var routes = [
    {
        path: '',
        component: _addrecipe_page__WEBPACK_IMPORTED_MODULE_6__["AddrecipePage"]
    }
];
var AddrecipePageModule = /** @class */ (function () {
    function AddrecipePageModule() {
    }
    AddrecipePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_addrecipe_page__WEBPACK_IMPORTED_MODULE_6__["AddrecipePage"]]
        })
    ], AddrecipePageModule);
    return AddrecipePageModule;
}());



/***/ }),

/***/ "./src/app/addrecipe/addrecipe.page.html":
/*!***********************************************!*\
  !*** ./src/app/addrecipe/addrecipe.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n      <ion-button (click)=\"rotate()\" ion-button icon-only>\r\n          <ion-icon name=\"arrow-round-back\"></ion-icon>\r\n      </ion-button>\r\n    <ion-title>Adding Recipe !</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n    <div class=\"camera\"></div>\r\n\r\n  <input type=\"file\" *ngIf=\"!imageURL\" (change)=\"fileChanged($event)\"/>\r\n\r\n  <ion-card>\r\n      <img *ngIf=\"imageURL\" src=\"https://ucarecdn.com/{{ imageURL }}/\" />\r\n  </ion-card>\r\n\r\n  <ion-item>\r\n    <ion-input type=\"text\" [(ngModel)]=\"RecipeBakingTime\">\r\n        <ion-textarea #myInput id=\"myInput\" rows=\"1\" maxLength=\"20\" (keyup)=\"resize()\" placeholder=\"Enter Your Recipe Baking Time here..\"></ion-textarea>\r\n    </ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-input type=\"text\" [(ngModel)]=\"Services\">\r\n        <ion-textarea #myInput id=\"myInput\" rows=\"1\" maxLength=\"20\" (keyup)=\"resize()\" placeholder=\"How many people are you going to serve..\"></ion-textarea>\r\n    </ion-input>\r\n  </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-input type=\"text\" [(ngModel)]=\"Ingredients\">\r\n            <ion-textarea #myInput id=\"myInput\" rows=\"1\" maxLength=\"950\" (keyup)=\"resize()\" placeholder=\"Enter Your Ingredients here..\"></ion-textarea>\r\n        </ion-input>\r\n      </ion-item>\r\n    \r\n      <ion-item>\r\n        <ion-input type=\"text\" [(ngModel)]=\"RecipeDesc\">\r\n            <ion-textarea #myInput id=\"myInput\" rows=\"1\" maxLength=\"3000\" (keyup)=\"resize()\" placeholder=\"Enter Your Recipe here..\"></ion-textarea>\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-button fill=\"solid\" expand=\"block\" color=\"dark\" (click)=\"addRecipe()\">Done!</ion-button>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/addrecipe/addrecipe.page.scss":
/*!***********************************************!*\
  !*** ./src/app/addrecipe/addrecipe.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#myInput {\n  width: calc(100% - 10px);\n  border: 0;\n  border-radius: 0;\n  background: transparent; }\n\n.camera {\n  width: 200px;\n  height: 200px;\n  margin: 0 auto;\n  background: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkcmVjaXBlL0M6XFxVc2Vyc1xcTGl2ZUZcXERlc2t0b3BcXFJlY2lwZVNvblxcRGVzc2VydFJlY2lwZS9zcmNcXGFwcFxcYWRkcmVjaXBlXFxhZGRyZWNpcGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQXdCO0VBQ3hCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2QsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZGRyZWNpcGUvYWRkcmVjaXBlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNteUlucHV0IHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmNhbWVyYSB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/addrecipe/addrecipe.page.ts":
/*!*********************************************!*\
  !*** ./src/app/addrecipe/addrecipe.page.ts ***!
  \*********************************************/
/*! exports provided: AddrecipePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddrecipePage", function() { return AddrecipePage; });
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









var AddrecipePage = /** @class */ (function () {
    function AddrecipePage(http, afStore, alert, user, router, afAuth) {
        this.http = http;
        this.afStore = afStore;
        this.alert = alert;
        this.user = user;
        this.router = router;
        this.afAuth = afAuth;
    }
    AddrecipePage.prototype.ngOnInit = function () {
    };
    AddrecipePage.prototype.addRecipe = function () {
        var image = this.imageURL;
        var _a = this, Ingredients = _a.Ingredients, RecipeDesc = _a.RecipeDesc, RecipeBakingTime = _a.RecipeBakingTime, Services = _a.Services;
        var user = this.afAuth.auth.currentUser;
        var author = user.email;
        this.afStore.doc("users/" + this.user.getUserID()).update({
            dessertrecipes: firebase_app__WEBPACK_IMPORTED_MODULE_4__["firestore"].FieldValue.arrayUnion(image)
        });
        this.afStore.doc("recipes/" + image).set({
            dessertinfos: firebase_app__WEBPACK_IMPORTED_MODULE_4__["firestore"].FieldValue.arrayUnion({
                Ingredients: Ingredients,
                RecipeDesc: RecipeDesc,
                RecipeBakingTime: RecipeBakingTime,
                Services: Services,
                imageid: image,
                author: author,
            })
        });
        this.afStore.doc("users/" + this.user.getUserID()).update({
            dessertinfos: firebase_app__WEBPACK_IMPORTED_MODULE_4__["firestore"].FieldValue.arrayUnion({
                Ingredients: Ingredients,
                RecipeDesc: RecipeDesc,
                RecipeBakingTime: RecipeBakingTime,
                Services: Services,
                image: image,
                author: author,
            })
        });
        this.afStore.doc("recipes/1").update({
            dessertinfos: firebase_app__WEBPACK_IMPORTED_MODULE_4__["firestore"].FieldValue.arrayUnion({
                Ingredients: Ingredients,
                RecipeDesc: RecipeDesc,
                RecipeBakingTime: RecipeBakingTime,
                Services: Services,
                image: image,
                author: author,
            })
        });
        this.showAlert('Congratulations!', "Your Recipe Has Created Succesfully (:");
        this.router.navigate(['./tabs']);
    };
    AddrecipePage.prototype.fileChanged = function (event) {
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
    AddrecipePage.prototype.resize = function () {
        this.myInput.nativeElement.style.height = this.myInput.nativeElement.scrollHeight + 'px';
    };
    AddrecipePage.prototype.rotate = function () {
        this.router.navigate(['./tabs']);
    };
    AddrecipePage.prototype.showAlert = function (header, message) {
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AddrecipePage.prototype, "myInput", void 0);
    AddrecipePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addrecipe',
            template: __webpack_require__(/*! ./addrecipe.page.html */ "./src/app/addrecipe/addrecipe.page.html"),
            styles: [__webpack_require__(/*! ./addrecipe.page.scss */ "./src/app/addrecipe/addrecipe.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"]])
    ], AddrecipePage);
    return AddrecipePage;
}());



/***/ })

}]);
//# sourceMappingURL=addrecipe-addrecipe-module.js.map