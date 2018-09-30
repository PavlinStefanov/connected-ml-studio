(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-login-login-module"],{

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-center align-items-center w-100 h-100 login-container\">\r\n    <div class=\"col-xl-4 col-md-6 col-10\">\r\n        <div class=\"card border-0 box-shadow rounded-0\">\r\n            <div class=\"card-header d-flex justify-content-center align-items-center border-0 box-shadow\">\r\n                <i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i>\r\n            </div>\r\n            <div class=\"card-body text-center pb-1\">\r\n                <h2>Member login</h2>\r\n                <a routerLink=\"/register\" class=\"transition\">Don't have an account? Sign up now!</a>\r\n\r\n                <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"text-left mt-4\">\r\n                    <div class=\"form-group\">\r\n                        <input [formControl]=\"email\" class=\"form-control validation-field\" placeholder=\"Email\" type=\"text\">                      \r\n                        <small class=\"text-danger\" *ngIf=\"form.get('email').touched && form.get('email').hasError('required')\">Email is required</small>                              \r\n                        <small class=\"text-danger\" *ngIf=\"form.get('email').touched && form.get('email').hasError('email')\">Invalid email address</small>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input [formControl]=\"password\" class=\"form-control validation-field\" placeholder=\"Password\" type=\"password\">\r\n                        <small class=\"text-danger\" *ngIf=\"form.get('password').touched && form.get('password').hasError('required')\">Password is required</small>                              \r\n                        <small class=\"text-danger\" *ngIf=\"form.get('password').touched && form.get('password').hasError('minlength')\">Password isn't long enough, minimum of 6 characters</small>\r\n                    </div>\r\n                    <div class=\"form-group d-flex justify-content-between\">\r\n                        <div class=\"custom-control custom-checkbox\">\r\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"login-checkbox\">\r\n                            <label class=\"custom-control-label\" for=\"login-checkbox\">Keep me signed in.</label>\r\n                        </div>\r\n                        <a class=\"transition pull-right\" href=\"javascript:void(0);\">Forgot password?</a>                     \r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <button [disabled]=\"!form.valid\" class=\"btn btn-block\" type=\"submit\">Sign in</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <div class=\"card-footer text-center bg-transparent\">\r\n                <ul class=\"list-inline mb-0\">\r\n                    <li class=\"list-inline-item\">\r\n                        <span class=\"fa-stack fa-lg\">\r\n                            <i class=\"fa fa-square-o fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-facebook fa-stack-1x\"></i>\r\n                        </span>\r\n                    </li>\r\n                    <li class=\"list-inline-item\">\r\n                        <span class=\"fa-stack fa-lg\">\r\n                            <i class=\"fa fa-square-o fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-twitter fa-stack-1x\"></i>\r\n                        </span>\r\n                    </li>\r\n                    <li class=\"list-inline-item\">\r\n                        <span class=\"fa-stack fa-lg\">\r\n                            <i class=\"fa fa-square-o fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-google fa-stack-1x\"></i>\r\n                        </span>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n       "

/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container {\n  position: absolute; }\n  .login-container .card .card-header {\n    width: 80px;\n    height: 80px;\n    margin: 0 auto;\n    margin-top: -40px;\n    border-radius: 50%;\n    font-size: 36px; }\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, fb) {
        this.router = router;
        this.form = fb.group({
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, ng2_validation__WEBPACK_IMPORTED_MODULE_3__["CustomValidators"].email])],
            'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)])]
        });
        this.email = this.form.controls['email'];
        this.password = this.form.controls['password'];
    }
    LoginComponent.prototype.onSubmit = function (values) {
        if (this.form.valid) {
            this.router.navigate(['pages/dashboard']);
        }
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        document.getElementById('preloader').classList.add('hide');
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: routes, LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.component */ "./src/app/pages/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], pathMatch: 'full' }
];
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-pages-login-login-module.js.map