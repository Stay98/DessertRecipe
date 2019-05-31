(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comments-comments-module"],{

/***/ "./src/app/comments/comments.module.ts":
/*!*********************************************!*\
  !*** ./src/app/comments/comments.module.ts ***!
  \*********************************************/
/*! exports provided: CommentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsPageModule", function() { return CommentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _comments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comments.page */ "./src/app/comments/comments.page.ts");







var routes = [
    {
        path: '',
        component: _comments_page__WEBPACK_IMPORTED_MODULE_6__["CommentsPage"]
    }
];
var CommentsPageModule = /** @class */ (function () {
    function CommentsPageModule() {
    }
    CommentsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_comments_page__WEBPACK_IMPORTED_MODULE_6__["CommentsPage"]]
        })
    ], CommentsPageModule);
    return CommentsPageModule;
}());



/***/ }),

/***/ "./src/app/comments/comments.page.html":
/*!*********************************************!*\
  !*** ./src/app/comments/comments.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n      <ion-button (click)=\"rotate()\" ion-button icon-only>\r\n          <ion-icon name=\"arrow-round-back\"></ion-icon>\r\n      </ion-button>\r\n    <ion-title>Comments</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <div id=\"recipes\">\r\n        <div class=\"recipe\" *ngFor=\"let recipe of (commentt | async)?.allcomments\">\r\n            <ion-card>\r\n              <ion-label text-wrap> {{recipe.author}} : {{ recipe.Comment }} </ion-label>\r\n            </ion-card>\r\n        </div>\r\n      </div>\r\n  </ion-card>\r\n\r\n    <ion-card>\r\n      <ion-item>\r\n        <ion-input type=\"text\" [(ngModel)]=\"Comment\">\r\n            <ion-textarea rows=\"4\" placeholder=\"Enter Your Comment Here..\"></ion-textarea>\r\n        </ion-input>\r\n      </ion-item>\r\n      <ion-button fill=\"solid\" expand=\"block\" color=\"dark\" (click)=\"addComment()\">Add Comment !</ion-button>\r\n    </ion-card>\r\n    \r\n    \r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/comments/comments.page.scss":
/*!*********************************************!*\
  !*** ./src/app/comments/comments.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnRzL2NvbW1lbnRzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/comments/comments.page.ts":
/*!*******************************************!*\
  !*** ./src/app/comments/comments.page.ts ***!
  \*******************************************/
/*! exports provided: CommentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsPage", function() { return CommentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_7__);








var CommentsPage = /** @class */ (function () {
    function CommentsPage(route, router, afs, user, afAuth, afStore, alert) {
        this.route = route;
        this.router = router;
        this.afs = afs;
        this.user = user;
        this.afAuth = afAuth;
        this.afStore = afStore;
        this.alert = alert;
        this.imageid = this.route.snapshot.paramMap.get('id');
        var eyzi = this.afs.doc("recipes/" + this.imageid);
        this.commentt = eyzi.valueChanges();
    }
    CommentsPage.prototype.ngOnInit = function () {
        this.imageid = this.route.snapshot.paramMap.get('id');
        this.commentt = this.afs.doc("recipes/" + this.imageid).valueChanges();
    };
    CommentsPage.prototype.addComment = function () {
        var Comment = this.Comment;
        var user = this.afAuth.auth.currentUser;
        var author = user.email;
        this.afStore.doc("recipes/" + this.imageid).update({
            allcomments: firebase_app__WEBPACK_IMPORTED_MODULE_7__["firestore"].FieldValue.arrayUnion({
                author: author,
                Comment: Comment
            })
        });
    };
    CommentsPage.prototype.showAlert = function (header, message) {
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
    CommentsPage.prototype.rotate = function () {
        this.router.navigate(['./tabs']);
    };
    CommentsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comments',
            template: __webpack_require__(/*! ./comments.page.html */ "./src/app/comments/comments.page.html"),
            styles: [__webpack_require__(/*! ./comments.page.scss */ "./src/app/comments/comments.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])
    ], CommentsPage);
    return CommentsPage;
}());



/***/ })

}]);
//# sourceMappingURL=comments-comments-module.js.map