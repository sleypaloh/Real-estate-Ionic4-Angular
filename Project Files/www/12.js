(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/info/info.page.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/info/info.page.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/tab1\"></ion-back-button>\n    </ion-buttons>\n    <!-- <ion-title>{{ estate.title }}</ion-title> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n\t<ion-grid no-padding *ngFor = \"let estate of estates\">\n\t\t<ion-row>\n\t\t\t<ion-col no-padding>\n\t\t\t\t<ion-img [src]=\"estate.image\"></ion-img>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row padding style=\"border:2px solid #efefef;box-shadow: 5px 10px 18px #888888:\">\n\t\t\t<ion-col>\n\t\t\t\t<h2 text-center><b>{{ estate.title }}</b></h2>\n                <p style=\"color:red\">{{ estate.price }}</p>\n                <p><ion-icon name=\"pin\"></ion-icon> {{ estate.location }}</p>\n                <p>Category: <b>{{ estate.category }}</b></p>\n\n                <h5><b>Description</b></h5>\n                <p>{{ estate.descs }}</p>\n<!-- \n\t\t\t\t<ion-list no-padding>\n\t\t\t\t\t<h5><b>Some of the amenities include;</b></h5>\n\t\t\t\t\t<ion-item *ngFor='let ig of loadedRecipe.ingredients'>\n\t\t\t\t\t\t{{ ig }}\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list> -->\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n\n\t <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n\t    <ion-fab-button>\n\t      <ion-icon name=\"call\"></ion-icon>\n\t    </ion-fab-button>\n\t  </ion-fab>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/tab1/info/info-routing.module.ts":
/*!**************************************************!*\
  !*** ./src/app/tab1/info/info-routing.module.ts ***!
  \**************************************************/
/*! exports provided: InfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPageRoutingModule", function() { return InfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info.page */ "./src/app/tab1/info/info.page.ts");




var routes = [
    {
        path: '',
        component: _info_page__WEBPACK_IMPORTED_MODULE_3__["InfoPage"]
    }
];
var InfoPageRoutingModule = /** @class */ (function () {
    function InfoPageRoutingModule() {
    }
    InfoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], InfoPageRoutingModule);
    return InfoPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tab1/info/info.module.ts":
/*!******************************************!*\
  !*** ./src/app/tab1/info/info.module.ts ***!
  \******************************************/
/*! exports provided: InfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPageModule", function() { return InfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info-routing.module */ "./src/app/tab1/info/info-routing.module.ts");
/* harmony import */ var _info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info.page */ "./src/app/tab1/info/info.page.ts");







var InfoPageModule = /** @class */ (function () {
    function InfoPageModule() {
    }
    InfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _info_routing_module__WEBPACK_IMPORTED_MODULE_5__["InfoPageRoutingModule"]
            ],
            declarations: [_info_page__WEBPACK_IMPORTED_MODULE_6__["InfoPage"]]
        })
    ], InfoPageModule);
    return InfoPageModule;
}());



/***/ }),

/***/ "./src/app/tab1/info/info.page.scss":
/*!******************************************!*\
  !*** ./src/app/tab1/info/info.page.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvaW5mby9pbmZvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/tab1/info/info.page.ts":
/*!****************************************!*\
  !*** ./src/app/tab1/info/info.page.ts ***!
  \****************************************/
/*! exports provided: InfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPage", function() { return InfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_estate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/estate.service */ "./src/app/services/estate.service.ts");
/* harmony import */ var src_providers_post_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/post.provider */ "./src/providers/post.provider.ts");





var InfoPage = /** @class */ (function () {
    function InfoPage(activatedRoute, estateService, postsv) {
        this.activatedRoute = activatedRoute;
        this.estateService = estateService;
        this.postsv = postsv;
    }
    InfoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (paraMap) {
            if (!paraMap.has('id')) {
                return;
            }
            _this.id = paraMap.get('id');
            // this.loadedRecipe = this.estateService.getRecipe(id);
        });
    };
    InfoPage.prototype.ionViewWillEnter = function () {
        this.estates = [];
        this.loadSingle(this.id);
    };
    InfoPage.prototype.loadSingle = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                aksi: 'single',
                id: _this.id
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
    InfoPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_estate_service__WEBPACK_IMPORTED_MODULE_3__["EstateService"] },
        { type: src_providers_post_provider__WEBPACK_IMPORTED_MODULE_4__["PostProvider"] }
    ]; };
    InfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./info.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/info/info.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./info.page.scss */ "./src/app/tab1/info/info.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_estate_service__WEBPACK_IMPORTED_MODULE_3__["EstateService"],
            src_providers_post_provider__WEBPACK_IMPORTED_MODULE_4__["PostProvider"]])
    ], InfoPage);
    return InfoPage;
}());



/***/ })

}]);
//# sourceMappingURL=12.js.map