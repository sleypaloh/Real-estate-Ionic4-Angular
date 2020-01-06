(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-list/my-list.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-list/my-list.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      <ion-title>My List</ion-title>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row >\n        <ion-col>\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let estate of estates\">\n      <ion-item-options side=\"start\">\n        <ion-item-option color=\"danger\" (click)=\"deletepro(estate.id)\">Delete</ion-item-option>\n      </ion-item-options>\n  \n      <ion-item>\n        <ion-thumbnail slot=\"start\">\n          <ion-img [src]=\"estate?.image\"></ion-img>\n        </ion-thumbnail>\n        <ion-label>{{estate?.title}}</ion-label>\n      </ion-item>\n  \n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"unread(item)\">Update</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  </ion-col>\n  </ion-row>\n  </ion-grid>\n   <!-- <ion-grid>\n     <ion-row >\n         <ion-col>\n           <ion-card ngFor=\" let post of (userPosts | async)?.posts \">\n              <ion-card-content>\n                <ion-item>\n                </ion-item>\n                <ion-item>\n                  <h3>{{ post.title }}</h3>\n                  <p><ion-icon name=\"pin\"></ion-icon> {{ post.location }}</p>\n                  <h2 style=\"color:red;font-weight:bold\"> {{ post.price }} </h2>\n                  <ion-button slot=\"end\" size=\"small\" fill=\"clear\" style=\"border:1px solid #efefef;border-radius:10px\">{{ post.type }}</ion-button>\n                </ion-item>\n              </ion-card-content>\n           </ion-card>\n         </ion-col>\n     </ion-row>\n   </ion-grid> -->\n</ion-content>\n");

/***/ }),

/***/ "./src/app/my-list/my-list-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/my-list/my-list-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MyListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyListPageRoutingModule", function() { return MyListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _my_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-list.page */ "./src/app/my-list/my-list.page.ts");




var routes = [
    {
        path: '',
        component: _my_list_page__WEBPACK_IMPORTED_MODULE_3__["MyListPage"]
    }
];
var MyListPageRoutingModule = /** @class */ (function () {
    function MyListPageRoutingModule() {
    }
    MyListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], MyListPageRoutingModule);
    return MyListPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/my-list/my-list.module.ts":
/*!*******************************************!*\
  !*** ./src/app/my-list/my-list.module.ts ***!
  \*******************************************/
/*! exports provided: MyListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyListPageModule", function() { return MyListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-list-routing.module */ "./src/app/my-list/my-list-routing.module.ts");
/* harmony import */ var _my_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-list.page */ "./src/app/my-list/my-list.page.ts");







var MyListPageModule = /** @class */ (function () {
    function MyListPageModule() {
    }
    MyListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _my_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyListPageRoutingModule"]
            ],
            declarations: [_my_list_page__WEBPACK_IMPORTED_MODULE_6__["MyListPage"]]
        })
    ], MyListPageModule);
    return MyListPageModule;
}());



/***/ }),

/***/ "./src/app/my-list/my-list.page.scss":
/*!*******************************************!*\
  !*** ./src/app/my-list/my-list.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LWxpc3QvbXktbGlzdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/my-list/my-list.page.ts":
/*!*****************************************!*\
  !*** ./src/app/my-list/my-list.page.ts ***!
  \*****************************************/
/*! exports provided: MyListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyListPage", function() { return MyListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_providers_post_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/post.provider */ "./src/providers/post.provider.ts");





var MyListPage = /** @class */ (function () {
    function MyListPage(router, afauth, postsv) {
        this.router = router;
        this.afauth = afauth;
        this.postsv = postsv;
        this.estates = [];
        this.userUID = this.afauth.auth.currentUser.uid;
    }
    MyListPage.prototype.ngOnInit = function () {
    };
    MyListPage.prototype.ionViewWillEnter = function () {
        this.estates = [];
        this.loadEstates();
    };
    MyListPage.prototype.loadEstates = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                aksi: 'getdata',
                userId: _this.userUID,
            };
            _this.postsv.postData(body, 'postApi.php').subscribe(function (data) {
                for (var _i = 0, _a = data.result; _i < _a.length; _i++) {
                    var estate = _a[_i];
                    _this.estates.push(estate);
                }
                resolve(true);
            });
        });
    };
    MyListPage.prototype.deletepro = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                aksi: 'delete',
                id: id
            };
            _this.postsv.postData(body, 'postApi.php').subscribe(function (data) {
                _this.ionViewWillEnter();
            });
        });
    };
    MyListPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
        { type: src_providers_post_provider__WEBPACK_IMPORTED_MODULE_4__["PostProvider"] }
    ]; };
    MyListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-list/my-list.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-list.page.scss */ "./src/app/my-list/my-list.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            src_providers_post_provider__WEBPACK_IMPORTED_MODULE_4__["PostProvider"]])
    ], MyListPage);
    return MyListPage;
}());



/***/ })

}]);
//# sourceMappingURL=10.js.map