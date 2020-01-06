(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button>\n      <ion-icon name=\"more\" slot=\"icon-only\"></ion-icon> \n    </ion-button>\n    </ion-buttons> \n    <ion-title>\n      <ion-title>Properties</ion-title>\n    </ion-title>\n\n    <ion-buttons slot=\"end\">\n      <p *ngIf = \" useid \">\n        <ion-button (click) = \"logout()\">\n           Logout\n        </ion-button>\n      </p>\n      <p *ngIf = \" !useid \">\n        <ion-button (click) = \"login()\">\n          <ion-icon name=\"person-add\" slot=\"icon-only\"></ion-icon>\n        </ion-button>\n      </p>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n   <ion-grid>\n     <ion-row >\n         <ion-col>\n          <ion-item *ngFor=\"let estate of estates\" [routerLink]=\"['/tabs/tab1', estate.id]\">\n            <ion-thumbnail slot=\"start\">\n              <ion-img [src]=\"estate?.image\"></ion-img>\n            </ion-thumbnail>\n            <ion-label>\n              <h3>{{ estate.title }}</h3>\n              <p><ion-icon name=\"pin\"></ion-icon> {{ estate.location }}</p>\n              <h2 style=\"color:red;font-weight:bold\"> From KES: {{ estate.price }} </h2>\n            </ion-label>\n            <ion-button slot=\"end\" size=\"small\" fill=\"clear\" style=\"border:1px solid #efefef;border-radius:10px\">{{ estate.type }}</ion-button>\n          </ion-item>\n         </ion-col>\n     </ion-row>\n   </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.viewpost ion-grid {\n  height: 100%;\n  padding: 0;\n  margin: 0;\n}\n\n.viewpost ion-row {\n  height: 100%;\n}\n\n.viewpost ion-col {\n  height: 100%;\n  padding: 0;\n  margin: 0;\n}\n\n.viewpost .center {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n\n.viewpost ion-list {\n  background: #efefef;\n  padding: 0;\n}\n\n.viewpost ion-card {\n  background: #fff;\n  padding: 0;\n}\n\n.viewpost ion-img {\n  -o-object-fit: resize;\n     object-fit: resize;\n  /*height: 150px;*/\n  width: 100% !important;\n  border: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lvbi1zbGV5L0Rlc2t0b3AvcHJvL2lvbmljL2lvbi1lc3RhdGVzL3NyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURHRTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0FKOztBREVFO0VBQ0UsWUFBQTtBQ0FKOztBREVFO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDQUo7O0FERUU7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0FOOztBREVFO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0FDQUo7O0FERUU7RUFDRSxnQkFBQTtFQUNBLFVBQUE7QUNBSjs7QURHRTtFQUNFLHFCQUFBO0tBQUEsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4udmlld3Bvc3Qge1xuXG4gIGlvbi1ncmlkIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46MDtcbiAgfVxuICBpb24tcm93IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgaW9uLWNvbCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOjA7XG4gIH1cbiAgLmNlbnRlciB7XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIGlvbi1saXN0e1xuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gICAgcGFkZGluZzowO1xuICB9XG4gIGlvbi1jYXJke1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzowO1xuICB9XG5cbiAgaW9uLWltZyB7XG4gICAgb2JqZWN0LWZpdDogcmVzaXplO1xuICAgIC8qaGVpZ2h0OiAxNTBweDsqL1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgXG4gIH1cbn1cbiIsIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnZpZXdwb3N0IGlvbi1ncmlkIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG4udmlld3Bvc3QgaW9uLXJvdyB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi52aWV3cG9zdCBpb24tY29sIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG4udmlld3Bvc3QgLmNlbnRlciB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnZpZXdwb3N0IGlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgcGFkZGluZzogMDtcbn1cbi52aWV3cG9zdCBpb24tY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDA7XG59XG4udmlld3Bvc3QgaW9uLWltZyB7XG4gIG9iamVjdC1maXQ6IHJlc2l6ZTtcbiAgLypoZWlnaHQ6IDE1MHB4OyovXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_estate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/estate.service */ "./src/app/services/estate.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_providers_post_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/providers/post.provider */ "./src/providers/post.provider.ts");







var Tab1Page = /** @class */ (function () {
    function Tab1Page(estatesService, router, afauth, toast, alert, postsv) {
        this.estatesService = estatesService;
        this.router = router;
        this.afauth = afauth;
        this.toast = toast;
        this.alert = alert;
        this.postsv = postsv;
        this.estates = [];
    }
    Tab1Page.prototype.ngOnInit = function () {
        var _this = this;
        // this.recipes = this.estatesService.getAllRecipes()
        this.afauth.authState.subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(data.email && data.uid)) return [3 /*break*/, 1];
                        this.useid = data.email;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.toast.create({
                            message: "No Authenticaton found",
                            duration: 3000
                        })];
                    case 2:
                        (_a.sent()).present();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    Tab1Page.prototype.ionViewWillEnter = function () {
        this.estates = [];
        this.loadAllEstates();
    };
    Tab1Page.prototype.loadAllEstates = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                aksi: 'getall'
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
    Tab1Page.prototype.login = function () {
        this.router.navigate(['login']);
    };
    Tab1Page.prototype.logout = function () {
        if (this.afauth.auth.signOut()) {
            this.alertCtrl("Success", "You've been signed out!");
            // this.router.onSameUrlNavigation
            // this.router.navigated = false;
            // window.scrollTo(0, 0);
        }
    };
    Tab1Page.prototype.alertCtrl = function (header, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
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
    Tab1Page.ctorParameters = function () { return [
        { type: _services_estate_service__WEBPACK_IMPORTED_MODULE_2__["EstateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: src_providers_post_provider__WEBPACK_IMPORTED_MODULE_6__["PostProvider"] }
    ]; };
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_estate_service__WEBPACK_IMPORTED_MODULE_2__["EstateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            src_providers_post_provider__WEBPACK_IMPORTED_MODULE_6__["PostProvider"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=15.js.map