(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/uploader/uploader.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/uploader/uploader.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Upload Property</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <br />\n  <!-- <ion-item style=\"display: none;\">\n    <ion-label>Photo</ion-label>\n    <ion-input type=\"file\" value = \"http://kygc.org/server_api/images/home.png\" [(ngModel)]=\"image\"></ion-input>\n  </ion-item> -->\n  <ion-item>\n    <ion-label position=\"floating\">Property Name</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"title\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Location</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"location\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Price</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"price\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Category</ion-label>\n    <ion-select placeholder=\"Select Category\" [(ngModel)]=\"category\">\n      <ion-select-option value=\"Apartment\">Apartment</ion-select-option>\n      <ion-select-option value=\"Flat\">Flat</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Type</ion-label>\n    <ion-select placeholder=\"Select Category\" [(ngModel)]=\"type\">\n      <ion-select-option value=\"For_Sale\">For Sale</ion-select-option>\n      <ion-select-option value=\"To_rent\">To Rent</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Description</ion-label>\n    <ion-textarea type=\"text\" [(ngModel)]=\"desc\"></ion-textarea>\n  </ion-item>\n  <ion-button expand=\"block\" color=\"tertiary\" padding (click) = \"createPost()\" fill=\"outline\">Submit</ion-button>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/uploader/uploader-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/uploader/uploader-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: UploaderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploaderPageRoutingModule", function() { return UploaderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _uploader_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uploader.page */ "./src/app/uploader/uploader.page.ts");




var routes = [
    {
        path: '',
        component: _uploader_page__WEBPACK_IMPORTED_MODULE_3__["UploaderPage"]
    }
];
var UploaderPageRoutingModule = /** @class */ (function () {
    function UploaderPageRoutingModule() {
    }
    UploaderPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], UploaderPageRoutingModule);
    return UploaderPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/uploader/uploader.module.ts":
/*!*********************************************!*\
  !*** ./src/app/uploader/uploader.module.ts ***!
  \*********************************************/
/*! exports provided: UploaderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploaderPageModule", function() { return UploaderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _uploader_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uploader-routing.module */ "./src/app/uploader/uploader-routing.module.ts");
/* harmony import */ var _uploader_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./uploader.page */ "./src/app/uploader/uploader.page.ts");







var UploaderPageModule = /** @class */ (function () {
    function UploaderPageModule() {
    }
    UploaderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _uploader_routing_module__WEBPACK_IMPORTED_MODULE_5__["UploaderPageRoutingModule"]
            ],
            declarations: [_uploader_page__WEBPACK_IMPORTED_MODULE_6__["UploaderPage"]]
        })
    ], UploaderPageModule);
    return UploaderPageModule;
}());



/***/ }),

/***/ "./src/app/uploader/uploader.page.scss":
/*!*********************************************!*\
  !*** ./src/app/uploader/uploader.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZGVyL3VwbG9hZGVyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/uploader/uploader.page.ts":
/*!*******************************************!*\
  !*** ./src/app/uploader/uploader.page.ts ***!
  \*******************************************/
/*! exports provided: UploaderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploaderPage", function() { return UploaderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_providers_post_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/post.provider */ "./src/providers/post.provider.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");






var UploaderPage = /** @class */ (function () {
    function UploaderPage(alertCtr, router, postsv, afAuth) {
        this.alertCtr = alertCtr;
        this.router = router;
        this.postsv = postsv;
        this.afAuth = afAuth;
        this.image = "http://kygc.org/server_api/images/home.png";
        this.title = "";
        this.location = "";
        this.price = "";
        this.category = "";
        this.type = "";
        this.desc = "";
        this.userId = "";
    }
    UploaderPage.prototype.ngOnInit = function () { };
    UploaderPage.prototype.createPost = function () {
        var _this = this;
        var userUID = this.afAuth.auth.currentUser.uid;
        return new Promise(function (resolve) {
            var body = {
                aksi: 'add',
                userId: userUID,
                image: _this.image,
                title: _this.title,
                location: _this.location,
                price: _this.price,
                category: _this.category,
                type: _this.type,
                desc: _this.desc
            };
            _this.postsv.postData(body, 'postApi.php').subscribe(function (data) {
                _this.router.navigate(['/tabs']);
                // console.log('Ok');
            });
        });
    };
    UploaderPage.prototype.alertPresent = function (header, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtr.create({
                            header: header,
                            message: message,
                            buttons: ['Ok']
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    UploaderPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_providers_post_provider__WEBPACK_IMPORTED_MODULE_4__["PostProvider"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] }
    ]; };
    UploaderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-uploader',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./uploader.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/uploader/uploader.page.html")).default,
            providers: [src_providers_post_provider__WEBPACK_IMPORTED_MODULE_4__["PostProvider"]],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./uploader.page.scss */ "./src/app/uploader/uploader.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_providers_post_provider__WEBPACK_IMPORTED_MODULE_4__["PostProvider"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]])
    ], UploaderPage);
    return UploaderPage;
}());



/***/ })

}]);
//# sourceMappingURL=14.js.map