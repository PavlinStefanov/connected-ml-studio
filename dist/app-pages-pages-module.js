(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-pages-module"],{

/***/ "./src/app/pages/blank/blank.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/blank/blank.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/blank/blank.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/blank/blank.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/blank/blank.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/blank/blank.component.ts ***!
  \************************************************/
/*! exports provided: BlankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankComponent", function() { return BlankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlankComponent = /** @class */ (function () {
    function BlankComponent() {
    }
    BlankComponent.prototype.ngOnInit = function () { };
    BlankComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blank',
            template: __webpack_require__(/*! ./blank.component.html */ "./src/app/pages/blank/blank.component.html"),
            styles: [__webpack_require__(/*! ./blank.component.scss */ "./src/app/pages/blank/blank.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], BlankComponent);
    return BlankComponent;
}());



/***/ }),

/***/ "./src/app/pages/new/new.component.ts":
/*!********************************************!*\
  !*** ./src/app/pages/new/new.component.ts ***!
  \********************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewComponent = /** @class */ (function () {
    function NewComponent() {
    }
    NewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'new',
            template: "My page content here"
        }),
        __metadata("design:paramtypes", [])
    ], NewComponent);
    return NewComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.component.html":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper-inner\" [ngClass]=\"{ 'vertical-menu-tooltip-place': (settings.theme.menuType == 'mini' && settings.theme.menu == 'vertical'),\r\n                                        'horizontal-menu-tooltip-place': (settings.theme.menuType == 'mini' && settings.theme.menu == 'horizontal') }\">\r\n    \r\n    <app-header></app-header>\r\n\r\n    <div class=\"d-flex h-100\" [ngClass]=\"{'flex-row': settings.theme.menu == 'vertical', 'flex-column': settings.theme.menu != 'vertical'}\">\r\n        <app-sidebar *ngIf=\"settings.theme.menu == 'vertical'\"></app-sidebar> \r\n        <div class=\"main-content\"> \r\n            <app-side-chat></app-side-chat>           \r\n            <app-breadcrumb></app-breadcrumb>            \r\n            <router-outlet></router-outlet>              \r\n        </div>\r\n    </div>   \r\n\r\n</div>\r\n<app-footer></app-footer>\r\n<app-back-top position=\"200\"></app-back-top>\r\n\r\n<div class=\"settings\" [ngClass]=\"{'show': showSetting}\">\r\n    <button class=\"btn btn-default toggle\" (click)=\"showSetting=!showSetting\"><i class=\"fa fa-spin fa-gear\"></i></button>\r\n    <div class=\"card\">\r\n        <div class=\"card-header text-center\">\r\n            Settings\r\n        </div>      \r\n        <div class=\"card-body mt-2\">\r\n            <h6>Choose menu</h6>  \r\n            <div class=\"form-group\">\r\n                <div *ngFor=\"let menu of menus; let i = index;\" class=\"custom-control custom-radio\">\r\n                    <input [attr.id]=\"'radio-'+i\" type=\"radio\" name=\"menus\" class=\"custom-control-input radio-dark-gray\"\r\n                        (change)=\"chooseMenu(menu)\" [checked]=\"menu === menuOption\" [value]=\"menu\">\r\n                    <label [attr.for]=\"'radio-'+i\" class=\"custom-control-label text-capitalize\">{{menu}}</label>\r\n                </div>\r\n            </div>\r\n        </div> \r\n        <div class=\"card-body\">\r\n            <h6>Choose menu type</h6>\r\n            <div class=\"form-group\">\r\n                <div *ngFor=\"let menuType of menuTypes; let i = index;\" class=\"custom-control custom-radio\">\r\n                    <input [attr.id]=\"'menuType-'+i\" type=\"radio\" name=\"menuTypes\" class=\"custom-control-input radio-dark-gray\"\r\n                        (change)=\"chooseMenuType(menuType)\" [checked]=\"menuType === menuTypeOption\" [value]=\"menuType\">\r\n                    <label [attr.for]=\"'menuType-'+i\" class=\"custom-control-label text-capitalize\">{{menuType}}</label>\r\n                </div>\r\n            </div> \r\n        </div> \r\n        <div class=\"card-body mb-3\">\r\n            <h6>Choose theme skin</h6>          \r\n            <div class=\"theme light\" (click)=\"changeTheme('light')\"></div>\r\n            <div class=\"theme dark\" (click)=\"changeTheme('dark')\"></div>\r\n            <div class=\"theme blue\" (click)=\"changeTheme('blue')\"></div>\r\n            <div class=\"theme green\" (click)=\"changeTheme('green')\"></div>\r\n            <div class=\"theme combined\" (click)=\"changeTheme('combined')\"></div>\r\n            <div class=\"theme purple\" (click)=\"changeTheme('purple')\"></div>\r\n            <div class=\"theme orange\" (click)=\"changeTheme('orange')\"></div>\r\n            <div class=\"theme brown\" (click)=\"changeTheme('brown')\"></div>\r\n            <div class=\"theme grey\" (click)=\"changeTheme('grey')\"></div>\r\n            <div class=\"theme pink\" (click)=\"changeTheme('pink')\"></div>\r\n        </div>  \r\n        <div class=\"card-body mb-2\">\r\n            <h6>Other theme options</h6> \r\n            <div class=\"custom-control custom-checkbox\">\r\n                <input type=\"checkbox\" class=\"custom-control-input checkbox-dark-gray\" id=\"navbarIsFixed\" [checked]=\"settings.theme.navbarIsFixed\" (change)=\"settings.theme.navbarIsFixed = !settings.theme.navbarIsFixed\">\r\n                <label class=\"custom-control-label\" for=\"navbarIsFixed\">Fixed header</label>\r\n            </div>\r\n            <div class=\"custom-control custom-checkbox\">\r\n                <input type=\"checkbox\" class=\"custom-control-input checkbox-dark-gray\" id=\"sidebarIsFixed\" [checked]=\"settings.theme.sidebarIsFixed\" (change)=\"settings.theme.sidebarIsFixed = !settings.theme.sidebarIsFixed\">\r\n                <label class=\"custom-control-label\" for=\"sidebarIsFixed\">Fixed sidebar</label>\r\n            </div>\r\n            <div class=\"custom-control custom-checkbox\">\r\n                <input type=\"checkbox\" class=\"custom-control-input checkbox-dark-gray\" id=\"footerIsFixed\" [checked]=\"settings.theme.footerIsFixed\" (change)=\"settings.theme.footerIsFixed = !settings.theme.footerIsFixed\">\r\n                <label class=\"custom-control-label\" for=\"footerIsFixed\">Fixed footer</label>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/pages.component.scss":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**** General ****/\n.wrapper-inner {\n  min-height: 100%;\n  height: auto !important;\n  margin-bottom: -28px;\n  padding: 0 0 28px; }\n.main-content {\n  width: 100%;\n  padding: 25px;\n  -webkit-box-flex: 1;\n  min-height: calc(100vh - (46px + 28px));\n  overflow: hidden; }\n/*settings*/\n.settings {\n  position: fixed;\n  top: 80px;\n  right: -212px;\n  z-index: 995;\n  width: 210px;\n  transition: all .2s; }\n.settings.show {\n    right: -1px; }\n.settings .btn {\n    position: absolute;\n    left: -34px;\n    padding: 7px 12px 7px 10px;\n    z-index: 99;\n    background: #fff;\n    border-color: rgba(0, 0, 0, 0.125);\n    border-style: solid;\n    border-width: 1px 0px 1px 1px;\n    border-radius: 0;\n    border-bottom-left-radius: 4px;\n    border-top-left-radius: 4px;\n    cursor: pointer; }\n.settings .btn:focus {\n      box-shadow: none; }\n.settings .card {\n    border-top: none;\n    border-radius: 0; }\n.settings .card .card-header {\n      padding: 0.34rem 1.25rem;\n      background: #fff !important;\n      border-radius: 0;\n      text-transform: uppercase;\n      letter-spacing: 0.05em;\n      font-weight: bold;\n      border-top: 1px solid rgba(0, 0, 0, 0.125);\n      border-bottom: 0; }\n.settings .card-body {\n    padding: 2px 20px; }\n.settings .card-body h6 {\n      border-bottom: 1px solid #eceeef;\n      padding-bottom: 2px; }\n.settings .theme {\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    display: inline-block;\n    margin-right: 10px;\n    cursor: pointer; }\n.settings .theme.light {\n      background-color: #ececec; }\n.settings .theme.dark {\n      background-color: #262626; }\n.settings .theme.blue {\n      background-color: #1875D1; }\n.settings .theme.green {\n      background-color: #00786A; }\n.settings .theme.combined {\n      overflow: hidden;\n      background-color: #262626; }\n.settings .theme.combined:before {\n        content: \"\";\n        background-color: #f5f5f5;\n        width: 10px;\n        height: 20px;\n        display: inline-block; }\n.settings .theme.purple {\n      background-color: #7A1EA1; }\n.settings .theme.orange {\n      background-color: #F47B00; }\n.settings .theme.brown {\n      background-color: #5C3F36; }\n.settings .theme.grey {\n      background-color: #445963; }\n.settings .theme.pink {\n      background-color: #C1175A; }\n.settings .custom-control .custom-control-description {\n    margin-top: -1px; }\n"

/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.settings */ "./src/app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PagesComponent = /** @class */ (function () {
    function PagesComponent(appSettings, router) {
        this.appSettings = appSettings;
        this.router = router;
        this.showMenu = false;
        this.showSetting = false;
        this.menus = ['vertical', 'horizontal'];
        this.menuTypes = ['default', 'compact', 'mini'];
        this.settings = this.appSettings.settings;
        if (sessionStorage["skin"]) {
            this.settings.theme.skin = sessionStorage["skin"];
        }
    }
    PagesComponent.prototype.ngOnInit = function () {
        if (window.innerWidth <= 768) {
            this.settings.theme.showMenu = false;
            this.settings.theme.sideChatIsHoverable = false;
        }
        this.showMenu = this.settings.theme.showMenu;
        this.menuOption = this.settings.theme.menu;
        this.menuTypeOption = this.settings.theme.menuType;
    };
    PagesComponent.prototype.chooseMenu = function (menu) {
        this.settings.theme.menu = menu;
        this.router.navigate(['/']);
    };
    PagesComponent.prototype.chooseMenuType = function (menuType) {
        this.settings.theme.menuType = menuType;
        if (menuType == 'mini') {
            jQuery('.menu-item-link').tooltip('enable');
        }
        else {
            jQuery('.menu-item-link').tooltip('disable');
        }
    };
    PagesComponent.prototype.changeTheme = function (theme) {
        this.settings.theme.skin = theme;
        sessionStorage["skin"] = theme;
    };
    PagesComponent.prototype.ngAfterViewInit = function () {
        document.getElementById('preloader').classList.add('hide');
    };
    PagesComponent.prototype.onWindowResize = function () {
        var showMenu = !this._showMenu();
        if (this.showMenu !== showMenu) {
            this.showMenuStateChange(showMenu);
        }
        this.showMenu = showMenu;
    };
    PagesComponent.prototype.showMenuStateChange = function (showMenu) {
        this.settings.theme.showMenu = showMenu;
    };
    PagesComponent.prototype._showMenu = function () {
        return window.innerWidth <= 768;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PagesComponent.prototype, "onWindowResize", null);
    PagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pages',
            template: __webpack_require__(/*! ./pages.component.html */ "./src/app/pages/pages.component.html"),
            styles: [__webpack_require__(/*! ./pages.component.scss */ "./src/app/pages/pages.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var angular_2_dropdown_multiselect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-2-dropdown-multiselect */ "./node_modules/angular-2-dropdown-multiselect/esm5/angular-2-dropdown-multiselect.js");
/* harmony import */ var _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../theme/pipes/pipes.module */ "./src/app/theme/pipes/pipes.module.ts");
/* harmony import */ var _pages_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages.routing */ "./src/app/pages/pages.routing.ts");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _theme_components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../theme/components/header/header.component */ "./src/app/theme/components/header/header.component.ts");
/* harmony import */ var _theme_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../theme/components/footer/footer.component */ "./src/app/theme/components/footer/footer.component.ts");
/* harmony import */ var _theme_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../theme/components/sidebar/sidebar.component */ "./src/app/theme/components/sidebar/sidebar.component.ts");
/* harmony import */ var _theme_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../theme/components/menu/vertical-menu/vertical-menu.component */ "./src/app/theme/components/menu/vertical-menu/vertical-menu.component.ts");
/* harmony import */ var _theme_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../theme/components/menu/horizontal-menu/horizontal-menu.component */ "./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.ts");
/* harmony import */ var _theme_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../theme/components/breadcrumb/breadcrumb.component */ "./src/app/theme/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _theme_components_back_top_back_top_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../theme/components/back-top/back-top.component */ "./src/app/theme/components/back-top/back-top.component.ts");
/* harmony import */ var _theme_components_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../theme/components/fullscreen/fullscreen.component */ "./src/app/theme/components/fullscreen/fullscreen.component.ts");
/* harmony import */ var _theme_components_applications_applications_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../theme/components/applications/applications.component */ "./src/app/theme/components/applications/applications.component.ts");
/* harmony import */ var _theme_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../theme/components/messages/messages.component */ "./src/app/theme/components/messages/messages.component.ts");
/* harmony import */ var _theme_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../theme/components/user-menu/user-menu.component */ "./src/app/theme/components/user-menu/user-menu.component.ts");
/* harmony import */ var _theme_components_flags_menu_flags_menu_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../theme/components/flags-menu/flags-menu.component */ "./src/app/theme/components/flags-menu/flags-menu.component.ts");
/* harmony import */ var _theme_components_side_chat_side_chat_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../theme/components/side-chat/side-chat.component */ "./src/app/theme/components/side-chat/side-chat.component.ts");
/* harmony import */ var _theme_components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../theme/components/favorites/favorites.component */ "./src/app/theme/components/favorites/favorites.component.ts");
/* harmony import */ var _blank_blank_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./blank/blank.component */ "./src/app/pages/blank/blank.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./search/search.component */ "./src/app/pages/search/search.component.ts");
/* harmony import */ var app_pages_new_new_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! app/pages/new/new.component */ "./src/app/pages/new/new.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};























var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
                angular_2_dropdown_multiselect__WEBPACK_IMPORTED_MODULE_6__["MultiselectDropdownModule"],
                _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _pages_routing__WEBPACK_IMPORTED_MODULE_8__["routing"]
            ],
            declarations: [
                _pages_component__WEBPACK_IMPORTED_MODULE_9__["PagesComponent"],
                _theme_components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _theme_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _theme_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["SidebarComponent"],
                _theme_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_13__["VerticalMenuComponent"],
                _theme_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_14__["HorizontalMenuComponent"],
                _theme_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_15__["BreadcrumbComponent"],
                _theme_components_back_top_back_top_component__WEBPACK_IMPORTED_MODULE_16__["BackTopComponent"],
                _theme_components_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_17__["FullScreenComponent"],
                _theme_components_applications_applications_component__WEBPACK_IMPORTED_MODULE_18__["ApplicationsComponent"],
                _theme_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_19__["MessagesComponent"],
                _theme_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_20__["UserMenuComponent"],
                _theme_components_flags_menu_flags_menu_component__WEBPACK_IMPORTED_MODULE_21__["FlagsMenuComponent"],
                _theme_components_side_chat_side_chat_component__WEBPACK_IMPORTED_MODULE_22__["SideChatComponent"],
                _theme_components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_23__["FavoritesComponent"],
                _blank_blank_component__WEBPACK_IMPORTED_MODULE_24__["BlankComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_25__["SearchComponent"],
                app_pages_new_new_component__WEBPACK_IMPORTED_MODULE_26__["NewComponent"]
            ],
            providers: [
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.routing.ts":
/*!****************************************!*\
  !*** ./src/app/pages/pages.routing.ts ***!
  \****************************************/
/*! exports provided: routes, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _blank_blank_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blank/blank.component */ "./src/app/pages/blank/blank.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search/search.component */ "./src/app/pages/search/search.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new/new.component */ "./src/app/pages/new/new.component.ts");





var routes = [
    {
        path: '',
        component: _pages_component__WEBPACK_IMPORTED_MODULE_1__["PagesComponent"],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule', data: { breadcrumb: 'Dashboard' } },
            { path: 'membership', loadChildren: 'app/pages/membership/membership.module#MembershipModule', data: { breadcrumb: 'Membership' } },
            { path: 'ui', loadChildren: 'app/pages/ui/ui.module#UiModule', data: { breadcrumb: 'UI' } },
            { path: 'form-elements', loadChildren: 'app/pages/form-elements/form-elements.module#FormElementsModule', data: { breadcrumb: 'Form Elements' } },
            { path: 'tables', loadChildren: 'app/pages/tables/tables.module#TablesModule', data: { breadcrumb: 'Tables' } },
            { path: 'tables', loadChildren: 'app/pages/tables/tables.module#TablesModule', data: { breadcrumb: 'Tables' } },
            { path: 'ml', loadChildren: 'app/pages/ml/ml.module#MlModule', data: { breadcrumb: 'Machine Learning' } },
            //{ path: 'ml', loadChildren: 'app/pages/ml/ml.module#MlModule', data: { breadcrumb: 'ML' } },
            // { path: 'ui', loadChildren: 'app/pages/ui/ui.module#UiModule', data: { breadcrumb: 'UI' } },
            { path: 'new', component: _new_new_component__WEBPACK_IMPORTED_MODULE_4__["NewComponent"], data: { breadcrumb: 'New page' } },
            { path: 'tools', loadChildren: 'app/pages/tools/tools.module#ToolsModule', data: { breadcrumb: 'Tools' } },
            { path: 'calendar', loadChildren: 'app/pages/calendar/app-calendar.module#AppCalendarModule', data: { breadcrumb: 'Calendar' } },
            { path: 'mailbox', loadChildren: 'app/pages/mailbox/mailbox.module#MailboxModule', data: { breadcrumb: 'Mailbox' } },
            { path: 'maps', loadChildren: 'app/pages/maps/maps.module#MapsModule', data: { breadcrumb: 'Maps' } },
            { path: 'charts', loadChildren: 'app/pages/charts/charts.module#ChartsModule', data: { breadcrumb: 'Charts' } },
            { path: 'dynamic-menu', loadChildren: 'app/pages/dynamic-menu/dynamic-menu.module#DynamicMenuModule', data: { breadcrumb: 'Dynamic Menu' } },
            { path: 'blank', component: _blank_blank_component__WEBPACK_IMPORTED_MODULE_2__["BlankComponent"], data: { breadcrumb: 'Blank page' } },
            { path: 'search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"], data: { breadcrumb: 'Search' } }
        ]
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/search/search.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/search/search.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Search results...</h4>"

/***/ }),

/***/ "./src/app/pages/search/search.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/search/search.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/search/search.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/search/search.component.ts ***!
  \**************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/pages/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/pages/search/search.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/applications/applications.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/theme/components/applications/applications.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown d-inline-block\">\r\n    <a class=\"dropdown-toggle no-caret pl-2 pr-2\" id=\"applications\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n        <i class=\"fa fa-th\" aria-hidden=\"true\"></i>\r\n    </a>\r\n\r\n    <div class=\"dropdown-menu dropdown-menu-right rounded-0 mt-3 box-shadow\" aria-labelledby=\"applications\">\r\n        <div class=\"applications text-center pt-1\" perfectScrollbar>\r\n            <h5>Applications</h5>\r\n            <hr>\r\n            <div class=\"row\">\r\n                <div class=\"col-4 p-1 mb-3 item\">\r\n                    <a href=\"javascript:void(0);\">\r\n                        <i class=\"fa fa-user text-success\" aria-hidden=\"true\"></i>\r\n                        <span class=\"d-block\">My account</span>\r\n                    </a>\r\n                </div>\r\n                <div class=\"col-4 p-1 mb-3 item transition\">\r\n                    <a href=\"javascript:void(0);\">\r\n                        <i class=\"fa fa-search text-info\" aria-hidden=\"true\"></i>\r\n                        <span class=\"d-block\">Search</span>\r\n                    </a>\r\n                </div>\r\n                <div class=\"col-4 p-1 mb-3 item transition\">\r\n                    <a href=\"javascript:void(0);\">\r\n                        <i class=\"fa fa-youtube-play text-danger\" aria-hidden=\"true\"></i>\r\n                        <span class=\"d-block\">Youtube</span>\r\n                    </a>\r\n                </div>\r\n                <div class=\"col-4 p-1 mb-3 item transition\">\r\n                    <a href=\"javascript:void(0);\">\r\n                        <i class=\"fa fa-wrench text-primary\" aria-hidden=\"true\"></i>\r\n                        <span class=\"d-block\">Settings</span>\r\n                    </a>\r\n                </div>\r\n                <div class=\"col-4 p-1 mb-3 item transition\">\r\n                    <a href=\"javascript:void(0);\">\r\n                        <i class=\"fa fa-calendar text-warning\" aria-hidden=\"true\"></i>\r\n                        <span class=\"d-block\">Calendar</span>\r\n                    </a>\r\n                </div>\r\n                <div class=\"col-4 p-1 mb-3 item transition\">\r\n                    <a href=\"javascript:void(0);\">\r\n                        <i class=\"fa fa-picture-o text-success\" aria-hidden=\"true\"></i>\r\n                        <span class=\"d-block\">Gallery</span>\r\n                    </a>\r\n                </div>\r\n                <div class=\"col-4 p-1 item transition\">\r\n                    <a href=\"javascript:void(0);\">\r\n                        <i class=\"fa fa-file-text-o text-danger\" aria-hidden=\"true\"></i>\r\n                        <span class=\"d-block\">Documents</span>\r\n                    </a>\r\n                </div>\r\n                <div class=\"col-4 p-1 item transition\">\r\n                    <a href=\"javascript:void(0);\">\r\n                        <i class=\"fa fa-envelope-o text-info\" aria-hidden=\"true\"></i>\r\n                        <span class=\"d-block\">Mail</span>\r\n                    </a>\r\n                </div>\r\n                <div class=\"col-4 p-1 item transition\">\r\n                    <a href=\"javascript:void(0);\">\r\n                        <i class=\"fa fa-globe text-primary\" aria-hidden=\"true\"></i>\r\n                        <span class=\"d-block\">Maps</span>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/theme/components/applications/applications.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/theme/components/applications/applications.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-menu .applications {\n  height: 255px;\n  width: 270px;\n  padding: 0 22px; }\n  .dropdown-menu .applications h5 {\n    color: #666; }\n  .dropdown-menu .applications .item {\n    background: transparent;\n    border-radius: 5px; }\n  .dropdown-menu .applications .item:hover {\n      background: #f5f5f5; }\n  .dropdown-menu .applications .item i {\n      font-size: 28px; }\n  .dropdown-menu .applications .item span {\n      color: #666; }\n"

/***/ }),

/***/ "./src/app/theme/components/applications/applications.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/components/applications/applications.component.ts ***!
  \*************************************************************************/
/*! exports provided: ApplicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationsComponent", function() { return ApplicationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ApplicationsComponent = /** @class */ (function () {
    function ApplicationsComponent() {
    }
    ApplicationsComponent.prototype.ngOnInit = function () {
    };
    ApplicationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-applications',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./applications.component.scss */ "./src/app/theme/components/applications/applications.component.scss")],
            template: __webpack_require__(/*! ./applications.component.html */ "./src/app/theme/components/applications/applications.component.html")
        })
    ], ApplicationsComponent);
    return ApplicationsComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/back-top/back-top.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/theme/components/back-top/back-top.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back-to-top {\n  position: fixed;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  z-index: 999999;\n  display: none;\n  text-decoration: none;\n  right: 40px;\n  bottom: 40px !important;\n  font-size: 28px;\n  text-align: center;\n  opacity: 0.5;\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.75);\n  border-radius: 4px;\n  line-height: 34px; }\n  .back-to-top:hover {\n    opacity: 1; }\n"

/***/ }),

/***/ "./src/app/theme/components/back-top/back-top.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/theme/components/back-top/back-top.component.ts ***!
  \*****************************************************************/
/*! exports provided: BackTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackTopComponent", function() { return BackTopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BackTopComponent = /** @class */ (function () {
    function BackTopComponent() {
        this.position = 400;
        this.showSpeed = 500;
        this.moveSpeed = 700;
    }
    BackTopComponent.prototype.ngAfterViewInit = function () {
        this._onWindowScroll();
    };
    BackTopComponent.prototype._onClick = function () {
        jQuery('html, body').animate({ scrollTop: 0 }, { duration: this.moveSpeed });
        return false;
    };
    BackTopComponent.prototype._onWindowScroll = function () {
        var el = this._selector.nativeElement;
        window.scrollY > this.position ? jQuery(el).fadeIn(this.showSpeed) : jQuery(el).fadeOut(this.showSpeed);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], BackTopComponent.prototype, "position", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], BackTopComponent.prototype, "showSpeed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], BackTopComponent.prototype, "moveSpeed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('backTop'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BackTopComponent.prototype, "_selector", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], BackTopComponent.prototype, "_onClick", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BackTopComponent.prototype, "_onWindowScroll", null);
    BackTopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-back-top',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./back-top.component.scss */ "./src/app/theme/components/back-top/back-top.component.scss")],
            template: "\n    <i #backTop class=\"fa fa-angle-up back-to-top transition\" title=\"Back to Top\"></i>\n  "
        })
    ], BackTopComponent);
    return BackTopComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/breadcrumb/breadcrumb.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/theme/components/breadcrumb/breadcrumb.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">  \r\n    <li *ngIf=\"router.url != '/pages/dashboard'\" class=\"breadcrumb-item\"><a routerLink=\"/\" (click)=\"closeSubMenus()\"><i class=\"fa fa-home mr-2\"></i>Home</a></li>\r\n    <li *ngFor=\"let breadcrumb of breadcrumbs; let i = index;\" class=\"breadcrumb-item\">\r\n        <a [hidden]=\"i == (breadcrumbs.length - 1)\" [routerLink]=\"[breadcrumb.url]\">{{breadcrumb.name}}</a>          \r\n        <span [hidden]=\"i != (breadcrumbs.length - 1)\"><i *ngIf=\"router.url == '/pages/dashboard'\" class=\"fa fa-home mr-2\"></i><b>{{breadcrumb.name}}</b></span>\r\n    </li>\r\n</ol>"

/***/ }),

/***/ "./src/app/theme/components/breadcrumb/breadcrumb.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/breadcrumb/breadcrumb.component.ts ***!
  \*********************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(appSettings, router, activatedRoute, title) {
        var _this = this;
        this.appSettings = appSettings;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.title = title;
        this.breadcrumbs = [];
        this.settings = this.appSettings.settings;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.breadcrumbs = [];
                _this.parseRoute(_this.router.routerState.snapshot.root);
                _this.pageTitle = "";
                _this.breadcrumbs.forEach(function (breadcrumb) {
                    _this.pageTitle += ' > ' + breadcrumb.name;
                });
                _this.title.setTitle(_this.settings.name + _this.pageTitle);
            }
        });
    }
    BreadcrumbComponent.prototype.parseRoute = function (node) {
        if (node.data['breadcrumb']) {
            if (node.url.length) {
                var urlSegments_1 = [];
                node.pathFromRoot.forEach(function (routerState) {
                    urlSegments_1 = urlSegments_1.concat(routerState.url);
                });
                var url = urlSegments_1.map(function (urlSegment) {
                    return urlSegment.path;
                }).join('/');
                this.breadcrumbs.push({
                    name: node.data['breadcrumb'],
                    url: '/' + url
                });
            }
        }
        if (node.firstChild) {
            this.parseRoute(node.firstChild);
        }
    };
    BreadcrumbComponent.prototype.closeSubMenus = function () {
        var menu = document.querySelector("#menu0");
        if (menu) {
            for (var i = 0; i < menu.children.length; i++) {
                var child = menu.children[i].children[1];
                if (child) {
                    if (child.classList.contains('show')) {
                        child.classList.remove('show');
                        menu.children[i].children[0].classList.add('collapsed');
                    }
                }
            }
        }
    };
    BreadcrumbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breadcrumb',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: __webpack_require__(/*! ./breadcrumb.component.html */ "./src/app/theme/components/breadcrumb/breadcrumb.component.html")
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());

// import { Component, ViewEncapsulation } from '@angular/core';
// import { AppState } from "../../../app.state";
// @Component({
//     selector: 'az-breadcrumb',
//     encapsulation: ViewEncapsulation.None,
//     styleUrls: ['./breadcrumb.component.scss'],
//     templateUrl: './breadcrumb.component.html'
// })
// export class BreadcrumbComponent {
//     public activePageTitle:string = '';
//     constructor(private _state:AppState){
//         this._state.subscribe('menu.activeLink', (activeLink) => {
//             if (activeLink) {
//                 this.activePageTitle = activeLink;
//             }
//         });
//     }
//     public ngOnInit():void {
//         if (!this.activePageTitle) {
//             this.activePageTitle = 'dashboard';
//         }
//     }
// }


/***/ }),

/***/ "./src/app/theme/components/favorites/favorites.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/favorites/favorites.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-start favorites-container ml-5\" [class.show-list]=\"toggle\">\r\n    <ul *ngIf=\"favorites.length == 0\" class=\"list-inline mb-0\">\r\n        <li class=\"list-inline-item\"><span class=\"fs-13 font-italic\">Choose favorites <i id=\"arrow\" class=\"fa fa-long-arrow-right\"></i></span></li>\r\n    </ul> \r\n    <ul *ngIf=\"favorites.length > 0\" class=\"list-inline mb-0\">\r\n        <li *ngFor=\"let favorite of favorites\" class=\"list-inline-item\" placement=\"bottom\" [ngbTooltip]=\"favorite.name\">\r\n            <a *ngIf=\"favorite.href\" href=\"{{favorite.href}}\" target=\"{{favorite.target}}\"><i class=\"fa fa-{{favorite.icon}}\"></i></a>\r\n            <a *ngIf=\"favorite.routerLink\" [routerLink]=\"favorite.routerLink\"><i class=\"fa fa-{{favorite.icon}}\"></i></a>\r\n        </li>\r\n    </ul>    \r\n    <ss-multiselect-dropdown id=\"favorites\" class=\"custom-multiselect\"\r\n        [options]=\"favoriteOptions\" \r\n        [texts]=\"favoriteTexts\" \r\n        [settings]=\"favoriteSettings\"\r\n        (dropdownOpened)=\"onDropdownOpened()\"\r\n        (dropdownClosed)=\"onDropdownClosed()\" \r\n        [(ngModel)]=\"favoriteModel\"\r\n        (ngModelChange)=\"onChange()\">\r\n    </ss-multiselect-dropdown>\r\n</div>"

/***/ }),

/***/ "./src/app/theme/components/favorites/favorites.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/favorites/favorites.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".favorites-container {\n  position: relative;\n  padding: 0 20px 0 6px; }\n  .favorites-container:after {\n    font-family: FontAwesome;\n    content: \"\\f004\";\n    color: #DD1B16;\n    position: absolute;\n    right: 4px;\n    top: 1px;\n    pointer-events: none;\n    cursor: pointer; }\n  .favorites-container.show-list {\n    width: 242px;\n    border: none !important; }\n  .favorites-container ul.list-inline {\n    white-space: nowrap;\n    overflow: hidden; }\n  .favorites-container ul.list-inline .list-inline-item {\n      margin-right: 10px; }\n  #favorites .dropdown {\n  position: absolute;\n  right: 0;\n  top: -6px;\n  width: 18px;\n  height: 22px;\n  overflow: hidden; }\n  #favorites .dropdown .btn-block {\n    width: 242px;\n    opacity: 0;\n    box-shadow: none;\n    cursor: pointer;\n    position: relative;\n    z-index: 1;\n    border: 0;\n    padding-bottom: 13px; }\n  #favorites .dropdown .dropdown-menu a {\n    color: #666; }\n  #favorites .dropdown .dropdown-menu a i.fa-check {\n      color: #378D3B; }\n  #favorites .dropdown.open {\n    overflow: visible;\n    width: auto;\n    height: auto; }\n  #favorites .dropdown.open .btn-block {\n      opacity: 1; }\n  #favorites .dropdown .dropdown-toggle::after {\n    content: none; }\n  @-webkit-keyframes arrow-jump {\n  0% {\n    opacity: 0; }\n  50% {\n    opacity: 0.7;\n    -webkit-transform: translateX(10px); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(0); } }\n  @keyframes arrow-jump {\n  0% {\n    opacity: 0; }\n  50% {\n    opacity: 0.7;\n    -webkit-transform: translateX(10px);\n            transform: translateX(10px); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n  #arrow {\n  -webkit-animation: arrow-jump 2s infinite;\n  animation: arrow-jump 2s infinite; }\n"

/***/ }),

/***/ "./src/app/theme/components/favorites/favorites.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/components/favorites/favorites.component.ts ***!
  \*******************************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu/menu.service */ "./src/app/theme/components/menu/menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FavoritesComponent = /** @class */ (function () {
    function FavoritesComponent(menuService) {
        var _this = this;
        this.menuService = menuService;
        this.favoriteModel = [];
        this.favoriteSettings = {
            enableSearch: true,
            checkedStyle: 'fontawesome',
            buttonClasses: 'btn btn-secondary btn-block',
            dynamicTitleMaxItems: 0,
            displayAllSelectedText: true
        };
        this.favoriteTexts = {
            checkAll: 'Select all',
            uncheckAll: 'Unselect all',
            checked: 'menu item selected',
            checkedPlural: 'menu items selected',
            searchPlaceholder: 'Find menu item...',
            defaultTitle: 'Select favorite menu items',
            allSelected: 'All selected',
        };
        this.favoriteOptions = [];
        this.favorites = [];
        this.menuItems = this.menuService.getVerticalMenuItems().filter(function (menu) { return menu.routerLink != null || menu.href != null; });
        this.menuItems.forEach(function (item) {
            var menu = {
                id: item.id,
                name: item.title,
                routerLink: item.routerLink,
                href: item.href,
                icon: item.icon,
                target: item.target
            };
            _this.favoriteOptions.push(menu);
        });
        if (sessionStorage["favorites"]) {
            this.favorites = JSON.parse(sessionStorage.getItem("favorites"));
            this.favorites.forEach(function (favorite) {
                _this.favoriteModel.push(favorite.id);
            });
        }
    }
    FavoritesComponent.prototype.onDropdownOpened = function () {
        this.toggle = true;
    };
    FavoritesComponent.prototype.onDropdownClosed = function () {
        this.toggle = false;
    };
    FavoritesComponent.prototype.onChange = function () {
        var _this = this;
        this.favorites.length = 0;
        this.favoriteModel.forEach(function (i) {
            var favorite = _this.favoriteOptions.find(function (mail) { return mail.id === +i; });
            _this.favorites.push(favorite);
        });
        sessionStorage.setItem("favorites", JSON.stringify(this.favorites));
    };
    FavoritesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-favorites',
            template: __webpack_require__(/*! ./favorites.component.html */ "./src/app/theme/components/favorites/favorites.component.html"),
            styles: [__webpack_require__(/*! ./favorites.component.scss */ "./src/app/theme/components/favorites/favorites.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [_menu_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"]]
        }),
        __metadata("design:paramtypes", [_menu_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"]])
    ], FavoritesComponent);
    return FavoritesComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/flags-menu/flags-menu.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/theme/components/flags-menu/flags-menu.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown d-inline-block\">\r\n    <a class=\"dropdown-toggle no-caret pl-2 pr-2\" id=\"flags-menu\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n        <span class=\"flag-icon flag-icon-gb\"></span>\r\n    </a>\r\n\r\n    <div class=\"dropdown-menu dropdown-menu-right rounded-0 mt-3 p-0 box-shadow\" aria-labelledby=\"flags-menu\">\r\n        <div class=\"flags-menu\">          \r\n            <a class=\"dropdown-item\" href=\"javascript:void(0);\"><span class=\"flag-icon flag-icon-gb mr-2\"></span> English</a> \r\n            <a class=\"dropdown-item\" href=\"javascript:void(0);\"><span class=\"flag-icon flag-icon-de mr-2\"></span> German</a>        \r\n            <a class=\"dropdown-item\" href=\"javascript:void(0);\"><span class=\"flag-icon flag-icon-fr mr-2\"></span> French</a>\r\n            <a class=\"dropdown-item\" href=\"javascript:void(0);\"><span class=\"flag-icon flag-icon-ru mr-2\"></span> Russian</a>                \r\n            <a class=\"dropdown-item\" href=\"javascript:void(0);\"><span class=\"flag-icon flag-icon-tr mr-2\"></span> Turkish</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/theme/components/flags-menu/flags-menu.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/theme/components/flags-menu/flags-menu.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flag-icon-background {\n  background-size: contain;\n  background-position: 50%;\n  background-repeat: no-repeat; }\n\n.flag-icon {\n  background-size: contain;\n  background-position: 50%;\n  background-repeat: no-repeat;\n  position: relative;\n  display: inline-block;\n  width: 1.33333333em;\n  line-height: 1em; }\n\n.flag-icon:before {\n  content: \"\\00a0\"; }\n\n.flag-icon-gb {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 height%3D%22480%22 width%3D%22640%22 viewBox%3D%220 0 640 480%22%3E%0D  %3Cdefs%3E%0D    %3CclipPath id%3D%22a%22%3E%0D      %3Cpath fill-opacity%3D%22.67%22 d%3D%22M-85.333 0h682.67v512h-682.67z%22%2F%3E%0D    %3C%2FclipPath%3E%0D  %3C%2Fdefs%3E%0D  %3Cg clip-path%3D%22url(%23a)%22 transform%3D%22translate(80) scale(.94)%22%3E%0D    %3Cg stroke-width%3D%221pt%22%3E%0D      %3Cpath fill%3D%22%23006%22 d%3D%22M-256 0H768.02v512.01H-256z%22%2F%3E%0D      %3Cpath d%3D%22M-256 0v57.244l909.535 454.768H768.02V454.77L-141.515 0H-256zM768.02 0v57.243L-141.515 512.01H-256v-57.243L653.535 0H768.02z%22 fill%3D%22%23fff%22%2F%3E%0D      %3Cpath d%3D%22M170.675 0v512.01h170.67V0h-170.67zM-256 170.67v170.67H768.02V170.67H-256z%22 fill%3D%22%23fff%22%2F%3E%0D      %3Cpath d%3D%22M-256 204.804v102.402H768.02V204.804H-256zM204.81 0v512.01h102.4V0h-102.4zM-256 512.01L85.34 341.34h76.324l-341.34 170.67H-256zM-256 0L85.34 170.67H9.016L-256 38.164V0zm606.356 170.67L691.696 0h76.324L426.68 170.67h-76.324zM768.02 512.01L426.68 341.34h76.324L768.02 473.848v38.162z%22 fill%3D%22%23c00%22%2F%3E%0D    %3C%2Fg%3E%0D  %3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\"); }\n\n.flag-icon-de {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 height%3D%22480%22 width%3D%22640%22 viewBox%3D%220 0 640 480%22%3E%0D  %3Cpath fill%3D%22%23ffce00%22 d%3D%22M0 320h640v160.002H0z%22%2F%3E%0D  %3Cpath d%3D%22M0 0h640v160H0z%22%2F%3E%0D  %3Cpath fill%3D%22%23d00%22 d%3D%22M0 160h640v160H0z%22%2F%3E%0D%3C%2Fsvg%3E%0D\"); }\n\n.flag-icon-fr {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 height%3D%22480%22 width%3D%22640%22 viewBox%3D%220 0 640 480%22%3E%0D  %3Cg fill-rule%3D%22evenodd%22 stroke-width%3D%221pt%22%3E%0D    %3Cpath fill%3D%22%23fff%22 d%3D%22M0 0h640v480H0z%22%2F%3E%0D    %3Cpath fill%3D%22%2300267f%22 d%3D%22M0 0h213.337v480H0z%22%2F%3E%0D    %3Cpath fill%3D%22%23f31830%22 d%3D%22M426.662 0H640v480H426.662z%22%2F%3E%0D  %3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\"); }\n\n.flag-icon-ru {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 height%3D%22480%22 width%3D%22640%22 viewBox%3D%220 0 640 480%22%3E%0D  %3Cg fill-rule%3D%22evenodd%22 stroke-width%3D%221pt%22%3E%0D    %3Cpath fill%3D%22%23fff%22 d%3D%22M0 0h640v480H0z%22%2F%3E%0D    %3Cpath fill%3D%22%230039a6%22 d%3D%22M0 160.003h640V480H0z%22%2F%3E%0D    %3Cpath fill%3D%22%23d52b1e%22 d%3D%22M0 319.997h640V480H0z%22%2F%3E%0D  %3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\"); }\n\n.flag-icon-tr {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 height%3D%22480%22 width%3D%22640%22 viewBox%3D%220 0 640 480%22%3E%0D  %3Cg fill-rule%3D%22evenodd%22%3E%0D    %3Cpath fill%3D%22%23f31930%22 d%3D%22M0 0h640v480H0z%22%2F%3E%0D    %3Cpath d%3D%22M406.977 247.473c0 66.215-54.606 119.89-121.97 119.89S163.04 313.686 163.04 247.472s54.606-119.89 121.968-119.89 121.97 53.677 121.97 119.89z%22 fill%3D%22%23fff%22%2F%3E%0D    %3Cpath d%3D%22M413.077 247.467c0 52.97-43.686 95.91-97.575 95.91s-97.574-42.94-97.574-95.91 43.686-95.91 97.574-95.91 97.575 42.94 97.575 95.91z%22 fill%3D%22%23f31830%22%2F%3E%0D    %3Cpath d%3D%22M430.726 191.465l-.985 44.318-41.345 11.225 40.756 14.514-.984 40.642 26.58-31.738 40.164 13.934-23.233-34.06 28.352-33.868-43.513 11.998-25.793-36.964z%22 fill%3D%22%23fff%22%2F%3E%0D  %3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\"); }\n"

/***/ }),

/***/ "./src/app/theme/components/flags-menu/flags-menu.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/flags-menu/flags-menu.component.ts ***!
  \*********************************************************************/
/*! exports provided: FlagsMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlagsMenuComponent", function() { return FlagsMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FlagsMenuComponent = /** @class */ (function () {
    function FlagsMenuComponent() {
    }
    FlagsMenuComponent.prototype.ngOnInit = function () {
    };
    FlagsMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-flags-menu',
            template: __webpack_require__(/*! ./flags-menu.component.html */ "./src/app/theme/components/flags-menu/flags-menu.component.html"),
            styles: [__webpack_require__(/*! ./flags-menu.component.scss */ "./src/app/theme/components/flags-menu/flags-menu.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], FlagsMenuComponent);
    return FlagsMenuComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/footer/footer.component.html":
/*!***************************************************************!*\
  !*** ./src/app/theme/components/footer/footer.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-footer d-flex align-items-center justify-content-between\" [class.fixed-bottom]=\"settings.theme.footerIsFixed\">\r\n    <span class=\"social-icons\">\r\n         <a href=\"https://www.facebook.com/themeseason\" target=\"_blank\"><i class=\"fa fa-facebook-square transition\" aria-hidden=\"true\"></i></a>\r\n         <a href=\"https://twitter.com/themeseason\" target=\"_blank\"><i class=\"fa fa-twitter-square transition\" aria-hidden=\"true\"></i></a>\r\n         <a href=\"https://www.instagram.com/themeseason\" target=\"_blank\"><i class=\"fa fa-instagram transition\" aria-hidden=\"true\"></i></a>\r\n         <a href=\"https://www.pinterest.com/themeseason\" target=\"_blank\"><i class=\"fa fa-pinterest-square transition\" aria-hidden=\"true\"></i></a>             \r\n    </span>\r\n    <span class=\"copyright\">Copyright © 2017 All Rights Reserved</span>    \r\n</div>"

/***/ }),

/***/ "./src/app/theme/components/footer/footer.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/theme/components/footer/footer.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**** General ****/\n.app-footer {\n  width: 100%;\n  height: 28px;\n  padding: 0 25px; }\n.app-footer .copyright {\n    font-size: 12px; }\n.app-footer .social-icons {\n    font-size: 18px; }\n.app-footer .social-icons a {\n      color: inherit; }\n.app-footer .social-icons i {\n      margin-right: 4px;\n      opacity: 0.8; }\n.app-footer .social-icons i:hover {\n        opacity: 1; }\n"

/***/ }),

/***/ "./src/app/theme/components/footer/footer.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/theme/components/footer/footer.component.ts ***!
  \*************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(appSettings) {
        this.appSettings = appSettings;
        this.settings = this.appSettings.settings;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/theme/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/theme/components/footer/footer.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/fullscreen/fullscreen.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/fullscreen/fullscreen.component.ts ***!
  \*********************************************************************/
/*! exports provided: FullScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullScreenComponent", function() { return FullScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FullScreenComponent = /** @class */ (function () {
    function FullScreenComponent() {
        this.toggle = false;
        // @HostListener('document:keydown', ['$event']) handleKeyboardEvent(event: KeyboardEvent) {
        //     if (event.keyCode === 122) {
        //         console.log('F11 pressed');
        //     }
        //     if (event.keyCode === 27) {
        //         console.log('Esc pressed');
        //     }
        // }
    }
    FullScreenComponent.prototype.requestFullscreen = function (elem) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        }
        else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        }
        else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
        else {
            console.log('Fullscreen API is not supported.');
        }
    };
    ;
    FullScreenComponent.prototype.exitFullscreen = function () {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        }
        else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        else {
            console.log('Fullscreen API is not supported.');
        }
    };
    ;
    FullScreenComponent.prototype.getFullscreen = function () {
        if (this.expand) {
            this.requestFullscreen(document.documentElement);
        }
        if (this.compress) {
            this.exitFullscreen();
        }
    };
    FullScreenComponent.prototype.onFullScreenChange = function () {
        var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement ||
            document.webkitFullscreenElement || document.msFullscreenElement;
        if (fullscreenElement != null) {
            this.toggle = true;
        }
        else {
            this.toggle = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('expand'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FullScreenComponent.prototype, "expand", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('compress'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FullScreenComponent.prototype, "compress", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FullScreenComponent.prototype, "getFullscreen", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FullScreenComponent.prototype, "onFullScreenChange", null);
    FullScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fullscreen',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: "\n    <span class=\"pl-2 pr-2\">\n        <i *ngIf=\"!toggle\" #expand class=\"fa fa-expand transition\"></i>\n        <i *ngIf=\"toggle\" #compress class=\"fa fa-compress transition\"></i>\n    </span>\n  "
        })
    ], FullScreenComponent);
    return FullScreenComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/header/header.component.html":
/*!***************************************************************!*\
  !*** ./src/app/theme/components/header/header.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar box-shadow app-header\" [class.fixed-top]=\"settings.theme.navbarIsFixed\" [class.logo-visible]=\"showInfoContent\">\r\n    <div class=\"d-flex flex-column w-100\">\r\n        <div id=\"info-content\" class=\"panel-collapse collapse\">\r\n            <a class=\"close\" data-toggle=\"collapse\" href=\"#info-content\" (click)=\"showInfoContent = !showInfoContent\" [class.show]=\"showInfoContent\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </a>\r\n            <div class=\"row align-items-center\">\r\n                <div class=\"col-md-5\">\r\n                    <div class=\"d-flex justify-content-center align-items-center pt-md-0 pt-3 info\">\r\n                        <img src=\"assets/img/users/user.jpg\" class=\"rounded-circle user-img\"> \r\n                        <div class=\"d-flex flex-column pl-3\">\r\n                            <h5 class=\"mb-0\">Emilio Verdines <i class=\"fa fa-check-circle fs-13 text-success ml-2\"></i></h5>\r\n                            <span>Project menecer</span>\r\n                            <div class=\"pt-3\">\r\n                                <button class=\"btn btn-success mr-1\">Profile</button> \r\n                                <button class=\"btn btn-gray\">Edit</button> \r\n                            </div>                            \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-7\">\r\n                    <div class=\"row py-4\">                        \r\n                        <div class=\"col-lg-7 col-sm-8 col-12 left-border\">\r\n                            <div class=\"info w-280p mx-auto text-center\">\r\n                                <form>\r\n                                    <div class=\"form-group\">\r\n                                        <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Recipients\">\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Subject\">\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <textarea class=\"form-control form-control-sm\" placeholder=\"Message\" rows=\"3\"></textarea>\r\n                                    </div>\r\n                                    <button type=\"submit\" class=\"btn btn-sm btn-gray\"><i class=\"fa fa-paper-plane mr-2\"></i>Send</button>\r\n                                </form>\r\n                            </div>                           \r\n                        </div>\r\n                        <div class=\"col-lg-5 col-sm-4 left-border d-none d-sm-block\">\r\n                            <div class=\"info w-100p mx-auto\">\r\n                                <div class=\"custom-control custom-checkbox mb-1\">\r\n                                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkboxNotifications\" checked>\r\n                                    <label class=\"custom-control-label\" for=\"checkboxNotifications\">Notifications</label>\r\n                                </div>\r\n                                <div class=\"custom-control custom-checkbox mb-1\">\r\n                                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkboxTasks\" checked>\r\n                                    <label class=\"custom-control-label\" for=\"checkboxTasks\">Tasks</label>\r\n                                </div>\r\n                                <div class=\"custom-control custom-checkbox mb-1\">\r\n                                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkboxEvents\">\r\n                                    <label class=\"custom-control-label\" for=\"checkboxEvents\">Events</label>\r\n                                </div>\r\n                                <div class=\"custom-control custom-checkbox mb-1\">\r\n                                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkboxDownloads\" checked>\r\n                                    <label class=\"custom-control-label\" for=\"checkboxDownloads\">Downloads</label>\r\n                                </div>\r\n                                <div class=\"custom-control custom-checkbox mb-1\">\r\n                                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkboxMessages\" checked>\r\n                                    <label class=\"custom-control-label\" for=\"checkboxMessages\">Messages</label>\r\n                                </div>\r\n                                <div class=\"custom-control custom-checkbox mb-1\">\r\n                                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkboxUpdates\">\r\n                                    <label class=\"custom-control-label\" for=\"checkboxUpdates\">Updates</label>\r\n                                </div>\r\n                                <div class=\"custom-control custom-checkbox mb-1\">\r\n                                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkboxSettings\" checked>\r\n                                    <label class=\"custom-control-label\" for=\"checkboxSettings\">Settings</label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"d-flex justify-content-start align-items-center top-navbar\">                  \r\n            \r\n            <a class=\"logo\" routerLink=\"/\" (click)=\"closeSubMenus()\">\r\n                <span class=\"start\">start</span><span class=\"ng\">NG</span>\r\n            </a>\r\n\r\n            <span class=\"navbar-text menu-icon transition ml-3 mr-3\" [ngClass]=\"{'open': settings.theme.showMenu}\"\r\n                (click)=\"settings.theme.showMenu = !settings.theme.showMenu\">\r\n                <div class=\"line\"></div>\r\n                <div class=\"line\"></div>\r\n                <div class=\"line\"></div>\r\n                <div class=\"line\"></div>\r\n            </span>\r\n\r\n            <div class=\"ml-2 mr-2 d-none d-sm-block\">\r\n                 <a id=\"info-content-icon\" data-toggle=\"collapse\" href=\"#info-content\" (click)=\"showInfoContent = !showInfoContent\" class=\"d-flex\" [class.show]=\"showInfoContent\">\r\n                    <div [@showInfo]=\"showInfoContent\" class=\"triangle\"></div>\r\n                </a>\r\n            </div>\r\n\r\n            <form class=\"app-search d-none d-md-inline-block ml-3\">\r\n                <i class=\"fa fa-search\"></i>\r\n                <input type=\"text\" placeholder=\"Type to search...\" class=\"form-control\">\r\n            </form>\r\n\r\n            <app-favorites class=\"d-none d-lg-inline-block\"></app-favorites>\r\n\r\n            <div class=\"top-rigth-icons ml-auto\">\r\n                <span class=\"d-none d-sm-inline-block\">\r\n                    <app-flags-menu></app-flags-menu>\r\n                </span> \r\n                <span class=\"d-none d-sm-inline-block\">\r\n                    <app-fullscreen></app-fullscreen>\r\n                </span> \r\n                <span class=\"d-none d-sm-inline-block\">\r\n                    <app-applications></app-applications>                    \r\n                </span> \r\n                <span class=\"d-none d-sm-inline-block\">\r\n                    <app-messages></app-messages>\r\n                </span>               \r\n                <span class=\"d-none d-sm-inline-block pl-2 pr-2\" (click)=\"settings.theme.showSideChat = !settings.theme.showSideChat\">\r\n                    <i class=\"fa fa-commenting-o\" aria-hidden=\"true\"></i>\r\n                </span> \r\n                <span class=\"d-none d-sm-inline-block\">\r\n                    <app-user-menu></app-user-menu>\r\n                </span> \r\n                <span class=\"pl-2 pr-2\">\r\n                    <a routerLink=\"/login\">\r\n                        <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>\r\n                    </a>                   \r\n                </span> \r\n            </div> \r\n\r\n        </div>\r\n\r\n        <div class=\"horizontal-menu-outer\" *ngIf=\"settings.theme.menu == 'horizontal'\">                   \r\n            <app-horizontal-menu *ngIf=\"showHorizontalMenu\"  [menuItems]=\"menuItems\"></app-horizontal-menu>        \r\n            <app-vertical-menu *ngIf=\"!showHorizontalMenu\"  [menuItems]=\"menuItems\"></app-vertical-menu>\r\n        </div>\r\n\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/theme/components/header/header.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/theme/components/header/header.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**** General ****/\n.navbar.app-header {\n  padding: 0;\n  z-index: 9;\n  transition: z-index 0.5s linear; }\n.navbar.app-header .top-navbar {\n    padding: 0 1rem;\n    height: 46px; }\n.navbar.app-header .top-navbar .logo {\n      width: 220px;\n      -webkit-transform: translate3d(0, 0, 0);\n      transform: translate3d(0, 0, 0); }\n.navbar.app-header.logo-visible {\n    z-index: 99999; }\n.top-navbar .app-search {\n  position: relative;\n  margin-left: 20px; }\n.top-navbar .app-search i {\n    position: absolute;\n    right: 2px;\n    font-size: 14px;\n    cursor: pointer;\n    z-index: 9; }\n.top-navbar .app-search .form-control {\n    border: none;\n    font-size: 12px;\n    height: 18px;\n    background: transparent;\n    padding: 0;\n    padding-right: 24px;\n    padding-left: 4px;\n    box-shadow: none;\n    width: 190px;\n    opacity: 0.7; }\n.top-navbar .app-search .form-control:focus {\n      opacity: 1; }\n.top-rigth-icons span {\n  font-size: 14px;\n  cursor: pointer; }\n.menu-icon {\n  position: relative;\n  width: 18px;\n  cursor: pointer; }\n.menu-icon .line {\n    width: 100%;\n    height: 2px;\n    position: absolute;\n    background-color: #ccc;\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n    transition: .15s ease-in-out;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    outline: 1px solid transparent; }\n.menu-icon .line:nth-child(1) {\n    top: 0; }\n.menu-icon .line:nth-child(2), .menu-icon .line:nth-child(3) {\n    top: 4px; }\n.menu-icon .line:nth-child(4) {\n    top: 8px; }\n.menu-icon.open {\n    -webkit-backface-visibility: hidden; }\n.menu-icon.open .line:nth-child(1), .menu-icon.open .line:nth-child(4) {\n      top: 4px;\n      width: 0%;\n      left: 50%; }\n.menu-icon.open .line:nth-child(2) {\n      -webkit-transform: rotate(-45deg);\n      transform: rotate(-45deg); }\n.menu-icon.open .line:nth-child(3) {\n      -webkit-transform: rotate(45deg);\n      transform: rotate(45deg); }\n.logo {\n  font-family: \"MoonHouse\";\n  padding: 0;\n  font-size: 27px;\n  display: inline-block;\n  width: 250px; }\n.logo:hover, .logo:focus {\n    text-decoration: none;\n    color: initial; }\n#info-content {\n  z-index: 1; }\n#info-content .info, #info-content .left-border {\n    opacity: 0;\n    transition: opacity 0.5s ease-out; }\n#info-content .close {\n    position: absolute;\n    right: 5px;\n    z-index: 1; }\n#info-content.show .info, #info-content.show .left-border {\n    opacity: 1; }\n#info-content .user-img {\n    width: 120px; }\n.triangle {\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 11px 10px 0 10px; }\n.horizontal-menu-outer {\n  height: auto; }\n.horizontal-menu-outer #menu0 {\n    height: 250px; }\n"

/***/ }),

/***/ "./src/app/theme/components/header/header.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/theme/components/header/header.component.ts ***!
  \*************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _menu_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu/menu.service */ "./src/app/theme/components/menu/menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(appSettings, menuService) {
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.showHorizontalMenu = true;
        this.showInfoContent = false;
        this.settings = this.appSettings.settings;
        this.menuItems = this.menuService.getHorizontalMenuItems();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        if (window.innerWidth <= 768)
            this.showHorizontalMenu = false;
    };
    HeaderComponent.prototype.closeSubMenus = function () {
        var menu = document.querySelector("#menu0");
        if (menu) {
            for (var i = 0; i < menu.children.length; i++) {
                var child = menu.children[i].children[1];
                if (child) {
                    if (child.classList.contains('show')) {
                        child.classList.remove('show');
                        menu.children[i].children[0].classList.add('collapsed');
                    }
                }
            }
        }
    };
    HeaderComponent.prototype.onWindowResize = function () {
        if (window.innerWidth <= 768) {
            this.showHorizontalMenu = false;
        }
        else {
            this.showHorizontalMenu = true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HeaderComponent.prototype, "onWindowResize", null);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/theme/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/theme/components/header/header.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [_menu_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"]],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('showInfo', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'rotate(180deg)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'rotate(0deg)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('1 => 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('0 => 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"], _menu_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"horizontal-menu\" class=\"menu-wrapper horizontal-menu-wrapper d-flex justify-content-start align-items-center\"></div>  \r\n"

/***/ }),

/***/ "./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**** General ****/\n.horizontal-menu-wrapper {\n  min-height: 38px; }\n#navigation {\n  margin-left: auto;\n  margin-right: auto; }\n#navigation .menu {\n    margin-bottom: 0; }\n#navigation .menu li {\n      display: inline-block;\n      position: relative; }\n#navigation .menu li a {\n        font-size: 14px;\n        display: block;\n        padding: 0.6em 1em;\n        cursor: pointer; }\n#navigation .menu li a i {\n          margin-right: 10px; }\n#navigation .menu li.menu-item-has-children > a:after {\n        font-family: FontAwesome;\n        content: \"\\f107\";\n        margin-left: 10px;\n        font-size: 13px; }\n#navigation .menu .sub-menu {\n  display: none;\n  padding: 0;\n  position: absolute;\n  margin-top: 0;\n  left: 0;\n  z-index: 99999;\n  text-align: left; }\n#navigation ul.menu ul a,\n#navigation .menu ul ul a {\n  margin: 0;\n  font-size: 14px;\n  padding: 6px 10px;\n  min-width: 160px;\n  line-height: 20px; }\n#navigation ul.menu li:hover > ul,\n#navigation .menu ul li:hover > ul {\n  display: block; }\n#navigation .menu .sub-menu ul {\n  left: 100%;\n  top: 0; }\n#navigation ul.sub-menu > li.menu-item-has-children > a:after {\n  font-family: FontAwesome;\n  content: \"\\f105\";\n  float: right;\n  font-size: 13px; }\n"

/***/ }),

/***/ "./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.ts ***!
  \************************************************************************************/
/*! exports provided: HorizontalMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalMenuComponent", function() { return HorizontalMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu.service */ "./src/app/theme/components/menu/menu.service.ts");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../app.settings */ "./src/app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HorizontalMenuComponent = /** @class */ (function () {
    function HorizontalMenuComponent(appSettings, menuService, router, elementRef) {
        var _this = this;
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.router = router;
        this.elementRef = elementRef;
        this.settings = this.appSettings.settings;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                window.scrollTo(0, 0);
                var activeLink = _this.menuService.getActiveLink(_this.menuItems);
                _this.menuService.setActiveLink(_this.menuItems, activeLink);
                jQuery('.tooltip').tooltip('hide');
            }
        });
    }
    HorizontalMenuComponent.prototype.ngOnInit = function () {
        var menu_wrapper = this.elementRef.nativeElement.children[0];
        this.menuService.createMenu(this.menuItems, menu_wrapper, 'horizontal');
        if (this.settings.theme.menuType == 'mini')
            jQuery('.menu-item-link').tooltip();
    };
    HorizontalMenuComponent.prototype.ngAfterViewInit = function () {
        var activeLink = this.menuService.getActiveLink(this.menuItems);
        this.menuService.setActiveLink(this.menuItems, activeLink);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('menuItems'),
        __metadata("design:type", Object)
    ], HorizontalMenuComponent.prototype, "menuItems", void 0);
    HorizontalMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-horizontal-menu',
            template: __webpack_require__(/*! ./horizontal-menu.component.html */ "./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.html"),
            styles: [__webpack_require__(/*! ./horizontal-menu.component.scss */ "./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"],
            _menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HorizontalMenuComponent);
    return HorizontalMenuComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/menu/vertical-menu/vertical-menu.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/theme/components/menu/vertical-menu/vertical-menu.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"vertical-menu\" class=\"menu-wrapper\" perfectScrollbar></div>"

/***/ }),

/***/ "./src/app/theme/components/menu/vertical-menu/vertical-menu.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/theme/components/menu/vertical-menu/vertical-menu.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-wrapper {\n  height: 100%; }\n  .menu-wrapper .card {\n    border: 0;\n    border-radius: 0;\n    background: transparent; }\n  .menu-wrapper .card a {\n      cursor: pointer;\n      padding: 10px 0;\n      font-size: 14px;\n      display: inline-block;\n      width: 100%;\n      outline: none; }\n  .menu-wrapper .card a i {\n        padding: 0 12px; }\n  .menu-wrapper .card a b {\n        float: right;\n        margin-right: 15px;\n        margin-top: 4px;\n        transition: -webkit-transform 0.2s linear;\n        transition: transform 0.2s linear;\n        transition: transform 0.2s linear, -webkit-transform 0.2s linear; }\n  .menu-wrapper .card a.collapsed b {\n        -webkit-transform: rotate(-180deg);\n        transform: rotate(-180deg); }\n  .menu-wrapper .collapsing {\n    transition: height .25s ease; }\n"

/***/ }),

/***/ "./src/app/theme/components/menu/vertical-menu/vertical-menu.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/theme/components/menu/vertical-menu/vertical-menu.component.ts ***!
  \********************************************************************************/
/*! exports provided: VerticalMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalMenuComponent", function() { return VerticalMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu.service */ "./src/app/theme/components/menu/menu.service.ts");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../app.settings */ "./src/app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VerticalMenuComponent = /** @class */ (function () {
    function VerticalMenuComponent(appSettings, menuService, router, elementRef) {
        var _this = this;
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.router = router;
        this.elementRef = elementRef;
        this.settings = this.appSettings.settings;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                window.scrollTo(0, 0);
                var activeLink = _this.menuService.getActiveLink(_this.menuItems);
                _this.menuService.setActiveLink(_this.menuItems, activeLink);
                jQuery('.tooltip').tooltip('hide');
                if (window.innerWidth <= 768) {
                    _this.settings.theme.showMenu = false;
                }
            }
        });
    }
    VerticalMenuComponent.prototype.ngOnInit = function () {
        var menu_wrapper = this.elementRef.nativeElement.children[0];
        this.menuService.createMenu(this.menuItems, menu_wrapper, 'vertical');
        if (this.settings.theme.menuType == 'mini')
            jQuery('.menu-item-link').tooltip();
    };
    VerticalMenuComponent.prototype.ngAfterViewInit = function () {
        this.menuService.showActiveSubMenu(this.menuItems);
        var activeLink = this.menuService.getActiveLink(this.menuItems);
        this.menuService.setActiveLink(this.menuItems, activeLink);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('menuItems'),
        __metadata("design:type", Object)
    ], VerticalMenuComponent.prototype, "menuItems", void 0);
    VerticalMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vertical-menu',
            template: __webpack_require__(/*! ./vertical-menu.component.html */ "./src/app/theme/components/menu/vertical-menu/vertical-menu.component.html"),
            styles: [__webpack_require__(/*! ./vertical-menu.component.scss */ "./src/app/theme/components/menu/vertical-menu/vertical-menu.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"],
            _menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], VerticalMenuComponent);
    return VerticalMenuComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/messages/messages.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/theme/components/messages/messages.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"messagesDropDown\" class=\"dropdown d-inline-block\">\r\n    <a class=\"dropdown-toggle no-caret pl-2 pr-2\" id=\"messages\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n        <i class=\"fa fa-bell-o\" aria-hidden=\"true\"></i>\r\n    </a>\r\n\r\n    <div class=\"dropdown-menu dropdown-menu-right rounded-0 p-0 mt-3 box-shadow\" aria-labelledby=\"messages\">    \r\n        <div class=\"clearfix\">            \r\n            <ul id=\"messagesTabs\" class=\"nav nav-tabs nav-justified border-0\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link active transition\" data-toggle=\"tab\" href=\"#comments\"><i class=\"fa fa-comment-o\" aria-hidden=\"true\"></i></a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link transition\" data-toggle=\"tab\" href=\"#files\"><i class=\"fa fa-file\" aria-hidden=\"true\"></i></a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link transition\" data-toggle=\"tab\" href=\"#meetings\"><i class=\"fa fa-calendar-check-o\" aria-hidden=\"true\"></i></a>\r\n                </li>                                            \r\n            </ul>\r\n        </div>\r\n        <div class=\"tab-content\" perfectScrollbar>\r\n            <div class=\"tab-pane active\" id=\"comments\">\r\n                <div class=\"list\">\r\n                    <a *ngFor=\"let message of messages\" href=\"javascript:void(0);\" class=\"transition\">\r\n                        <img src=\"{{ ( message.image || (message.name | profilePicture)) }}\">                    \r\n                        <div class=\"list-content\">\r\n                            <h3>{{message.name}} <span class=\"pull-right\"><i class=\"fa fa-clock-o\"></i> {{message.time}}</span></h3>\r\n                            <p>{{message.text}}</p>\r\n                        </div>\r\n                    </a>\r\n                </div> \r\n            </div>\r\n            <div class=\"tab-pane\" id=\"files\">\r\n                <div class=\"list\">\r\n                    <a *ngFor=\"let file of files\" href class=\"transition\">\r\n                        <h3>{{file.text}} <span class=\"pull-right\">{{file.size}}</span></h3>\r\n                        <div class=\"progress progress-sm\">\r\n                            <div class=\"progress-bar progress-bar-striped progress-bar-animated bg-{{file.class}}\" role=\"progressbar\" [style.width]=\"file.value\"  aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <div class=\"tab-pane\" id=\"meetings\">\r\n                <div class=\"list\">\r\n                    <a *ngFor=\"let meeting of meetings\" href=\"javascript:void(0);\" class=\"transition\">\r\n                        <div class=\"meeting-day bg-{{meeting.color}} pull-left\">\r\n                            <span>{{meeting.day}}</span>\r\n                            <span>{{meeting.month}}</span>\r\n                        </div>                   \r\n                        <div class=\"list-content\">\r\n                            <h2>{{meeting.title}}</h2>\r\n                            <p>{{meeting.text}}</p>\r\n                        </div>\r\n                    </a>\r\n                </div> \r\n            </div>\r\n        </div> \r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/theme/components/messages/messages.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/theme/components/messages/messages.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#messagesDropDown .dropdown-menu {\n  width: 312px; }\n\n#messagesDropDown .nav-link {\n  color: #a6a6a6;\n  border: 0;\n  border-radius: 0;\n  border-bottom: 4px solid transparent; }\n\n#messagesDropDown .nav-link:hover {\n    background-color: #f5f5f5; }\n\n#messagesDropDown .tab-content {\n  height: 250px;\n  border: 0;\n  border-top: 1px solid #ccc; }\n\n#messagesDropDown .tab-content .tab-pane {\n    padding: 0; }\n\n#messagesDropDown .tab-content .tab-pane .list a {\n      float: left;\n      width: 100%;\n      display: block;\n      padding: 10px;\n      border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n\n#messagesDropDown .tab-content .tab-pane .list a:hover {\n        background: #f5f5f5; }\n\n#messagesDropDown .tab-content .tab-pane .list a h3, #messagesDropDown .tab-content .tab-pane .list a h2 {\n        padding: 0;\n        margin: 0 0 4px 0;\n        color: #666666; }\n\n#messagesDropDown .tab-content .tab-pane .list a h3 {\n        font-size: 12px; }\n\n#messagesDropDown .tab-content .tab-pane .list a h2 {\n        font-size: 14px; }\n\n#messagesDropDown .tab-content .tab-pane .list span {\n      font-size: 10px; }\n\n#messagesDropDown .tab-content .tab-pane .list .meeting-day {\n      width: 46px;\n      height: 42px;\n      border-radius: 4px;\n      color: #fff;\n      text-align: center; }\n\n#messagesDropDown .tab-content .tab-pane .list .meeting-day span {\n        font-size: 13px;\n        display: block;\n        font-style: italic; }\n\n#messagesDropDown .tab-content .tab-pane .list .list-content {\n      float: right;\n      width: 235px; }\n\n#messagesDropDown .tab-content .tab-pane .list img {\n      float: left;\n      width: 45px;\n      margin-right: 10px;\n      border-radius: 50%; }\n\n#messagesDropDown .tab-content .tab-pane .list p {\n      color: #7d7d7d;\n      font-size: 11px;\n      margin: 0; }\n"

/***/ }),

/***/ "./src/app/theme/components/messages/messages.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/theme/components/messages/messages.component.ts ***!
  \*****************************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _messages_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages.service */ "./src/app/theme/components/messages/messages.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messagesService) {
        this.messagesService = messagesService;
        this.messages = messagesService.getMessages();
        this.files = messagesService.getFiles();
        this.meetings = messagesService.getMeetings();
    }
    MessagesComponent.prototype.ngOnInit = function () {
        jQuery('#messagesTabs').on('click', '.nav-item a', function () {
            var _this = this;
            setTimeout(function () { return jQuery(_this).closest('.dropdown').addClass('show'); });
        });
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/theme/components/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.scss */ "./src/app/theme/components/messages/messages.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [_messages_service__WEBPACK_IMPORTED_MODULE_1__["MessagesService"]]
        }),
        __metadata("design:paramtypes", [_messages_service__WEBPACK_IMPORTED_MODULE_1__["MessagesService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/messages/messages.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/components/messages/messages.service.ts ***!
  \***************************************************************/
/*! exports provided: MessagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesService", function() { return MessagesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessagesService = /** @class */ (function () {
    function MessagesService() {
        this.messages = [
            {
                name: 'ashley',
                text: 'After you get up and running, you can place Font Awesome icons just about...',
                time: '1 min ago'
            },
            {
                name: 'michael',
                text: 'You asked, Font Awesome delivers with 40 shiny new icons in version 4.2.',
                time: '2 hrs ago'
            },
            {
                name: 'julia',
                text: 'Want to request new icons? Here\'s how. Need vectors or want to use on the...',
                time: '10 hrs ago'
            },
            {
                name: 'bruno',
                text: 'Explore your passions and discover new ones by getting involved. Stretch your...',
                time: '1 day ago'
            },
            {
                name: 'tereza',
                text: 'Get to know who we are - from the inside out. From our history and culture, to the...',
                time: '1 day ago'
            },
            {
                name: 'adam',
                text: 'Need some support to reach your goals? Apply for scholarships across a variety of...',
                time: '2 days ago'
            },
            {
                name: 'michael',
                text: 'Wrap the dropdown\'s trigger and the dropdown menu within .dropdown, or...',
                time: '1 week ago'
            }
        ];
        this.files = [
            {
                text: 'startng.zip',
                size: '~7.2 MB',
                value: '47%',
                class: 'danger'
            },
            {
                text: 'documentation.pdf',
                size: '~14.6 MB',
                value: '33%',
                class: 'info'
            },
            {
                text: 'wallpaper.jpg',
                size: '~558 KB',
                value: '60%',
                class: 'success'
            },
            {
                text: 'letter.doc',
                size: '~57 KB',
                value: '80%',
                class: 'warning'
            },
            {
                text: 'azimuth.zip',
                size: '~10.2 MB',
                value: '55%',
                class: 'primary'
            },
            {
                text: 'contacts.xlsx',
                size: '~96 KB',
                value: '75%',
                class: 'info'
            }
        ];
        this.meetings = [
            {
                day: '09',
                month: 'May',
                title: 'Meeting with Bruno',
                text: 'Fusce ut condimentum velit, quis egestas eros. Quisque sed condimentum neque.',
                color: 'danger'
            },
            {
                day: '15',
                month: 'May',
                title: 'Training course',
                text: 'Fusce arcu tortor, tempor aliquam augue vel, consectetur vehicula lectus.',
                color: 'primary'
            },
            {
                day: '12',
                month: 'June',
                title: 'Dinner with Ashley',
                text: 'Curabitur rhoncus facilisis augue sed fringilla.',
                color: 'info'
            },
            {
                day: '14',
                month: 'June',
                title: 'Sport time',
                text: 'Vivamus tristique enim eros, ac ultricies sem ultrices vitae.',
                color: 'warning'
            },
            {
                day: '29',
                month: 'July',
                title: 'Birthday of Julia',
                text: 'Nam porttitor justo nec elit efficitur vestibulum.',
                color: 'success'
            }
        ];
    }
    MessagesService.prototype.getMessages = function () {
        return this.messages;
    };
    MessagesService.prototype.getFiles = function () {
        return this.files;
    };
    MessagesService.prototype.getMeetings = function () {
        return this.meetings;
    };
    MessagesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MessagesService);
    return MessagesService;
}());



/***/ }),

/***/ "./src/app/theme/components/side-chat/side-chat.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/side-chat/side-chat.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"side-chat h-100 transition\" [class.hoverable]=\"settings.theme.sideChatIsHoverable\" [class.show]=\"settings.theme.showSideChat\" [class.show-chat-item]=\"showHoverableChatItem\" [class.show-chat-window]=\"showChatWindow\">\r\n    <div [hidden]=\"showChatWindow\" class=\"media p-1 rounded-left transition person-search-media align-items-center\" (mouseenter)=\"showHoverableChatItem = true\" (mouseleave)=\"showHoverableChatItem = false\">\r\n        <i class=\"fa fa-search mr-1\" aria-hidden=\"true\"></i>\r\n        <div class=\"media-body\">\r\n            <input type=\"text\" [(ngModel)]=\"searchText\" class=\"form-control form-control-sm person-search\" placeholder=\"Search person...\">      \r\n        </div>\r\n    </div>      \r\n       \r\n    <div class=\"chat-list h-100\" [hidden]=\"showChatWindow\" perfectScrollbar>\r\n        <div *ngFor=\"let chat of chats | ChatPersonSearchPipe : searchText\" class=\"media p-1 rounded-left transition\" (mouseenter)=\"showHoverableChatItem = true\" (mouseleave)=\"showHoverableChatItem = false\" (click)=\"getChat(chat)\">\r\n            <img class=\"d-flex mr-3 rounded\" [src]=\"chat.image\">\r\n            <div class=\"media-body\">\r\n                <h6 class=\"mb-1 mt-1 text-white\">{{chat.author}}</h6>\r\n                <span [ngSwitch]=\"chat.authorStatus\">\r\n                    <i *ngSwitchCase=\"'Online'\" class=\"fa fa-check-circle text-success\" aria-hidden=\"true\"></i>\r\n                    <i *ngSwitchCase=\"'Offline'\" class=\"fa fa-times-circle text-danger\" aria-hidden=\"true\"></i> \r\n                    <i *ngSwitchCase=\"'Away'\" class=\"fa fa-clock-o text-info\" aria-hidden=\"true\"></i> \r\n                    <i *ngSwitchCase=\"'Do not disturb'\" class=\"fa fa-minus-circle text-warning\" aria-hidden=\"true\"></i>   \r\n                </span>              \r\n                <span class=\"status ml-1\">{{chat.authorStatus}}</span>\r\n            </div>\r\n        </div>\r\n    </div>      \r\n\r\n    <div class=\"chat-window\" [hidden]=\"!showChatWindow\">\r\n        <div class=\"d-flex justify-content-between align-items-center header\"> \r\n                <span class=\"pl-2 pr-2 back\" (click)=\"back()\"> \r\n                <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i> \r\n            </span>               \r\n            <h6 class=\"text-white mb-0 mr-2\">{{interlocutor}}</h6>                \r\n        </div>\r\n\r\n        <div class=\"chat-talk-list pt-2\" perfectScrollbar>\r\n            <div *ngFor=\"let talk of talks\" class=\"media p-1 mb-1 border-0\"> \r\n                <img *ngIf=\"talk.side=='left'\" class=\"d-flex mr-3 rounded\" src=\"{{ talk.image }}\">        \r\n                <div class=\"media-body rounded pl-2 pr-2 {{talk.side}}\">\r\n                    <span class=\"d-block talk-text\">{{talk.text}}</span>\r\n                    <small class=\"mt-2 mb-1 pull-right\">{{talk.date | date:\"dd MMMM, yyyy 'at' HH:mm\"}}</small>  \r\n                </div>\r\n                <img *ngIf=\"talk.side=='right'\" class=\"d-flex ml-3 rounded\" src=\"{{ talk.image }}\">\r\n            </div>\r\n        </div>        \r\n        \r\n        <div class=\"d-flex align-items-center pl-1 pr-1 footer\">\r\n            <div class=\"input-group\">                    \r\n                <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Enter your text...\"\r\n                (keyup)=\"addChatItem($event)\" [(ngModel)]=\"newChatText\">\r\n                <div class=\"input-group-append\" (click)=\"addChatItem($event)\">\r\n                    <span class=\"input-group-text\"><i class=\"fa fa-paper-plane\"></i></span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>     \r\n</div>"

/***/ }),

/***/ "./src/app/theme/components/side-chat/side-chat.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/side-chat/side-chat.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**** General ****/\n.side-chat {\n  position: fixed;\n  right: -52px;\n  z-index: 999;\n  width: 0;\n  top: 47px; }\n.side-chat .person-search-media {\n    height: 32px; }\n.side-chat .person-search-media .fa-search {\n      font-size: 18px;\n      padding: 0px 16px 4px; }\n.side-chat .person-search-media .person-search {\n      border: none;\n      background: rgba(255, 255, 255, 0.15);\n      padding: 4px 6px 2px;\n      box-shadow: none;\n      border-radius: 0;\n      color: #fff; }\n.side-chat .media {\n    position: relative;\n    width: 230px;\n    right: 0;\n    z-index: 9999999;\n    color: #fff; }\n.side-chat .media img {\n      width: 45px; }\n.side-chat .media h6 {\n      font-weight: 400; }\n.side-chat .media .status {\n      font-size: 12px; }\n.side-chat .chat-list {\n    padding-bottom: 78px; }\n.side-chat .chat-list .ps__rail-y {\n      z-index: 9999999; }\n.side-chat .chat-list .media {\n      cursor: pointer; }\n.side-chat .chat-window {\n    position: absolute;\n    top: 0;\n    height: 100%;\n    display: block; }\n.side-chat .chat-window .header {\n      height: 30px; }\n.side-chat .chat-window .header .back {\n        font-size: 18px;\n        cursor: pointer; }\n.side-chat .chat-window .chat-talk-list {\n      height: calc(100vh - (46px + 30px + 46px)); }\n.side-chat .chat-window .chat-talk-list .talk-text {\n        width: 150px;\n        text-overflow: ellipsis;\n        overflow: hidden; }\n.side-chat .chat-window .chat-talk-list .ps__rail-y {\n        z-index: 9999999; }\n.side-chat .chat-window .media {\n      right: 0 !important; }\n.side-chat .chat-window .media .media-body {\n        background: rgba(255, 255, 255, 0.05); }\n.side-chat .chat-window .media .media-body.left:before {\n          content: \"\";\n          border: 7px solid transparent;\n          border-right-color: rgba(255, 255, 255, 0.05);\n          position: absolute;\n          top: 18px;\n          left: 49px; }\n.side-chat .chat-window .media .media-body.right:before {\n          content: \"\";\n          border: 7px solid transparent;\n          border-left-color: rgba(255, 255, 255, 0.05);\n          position: absolute;\n          top: 18px;\n          right: 48px; }\n.side-chat .chat-window .footer {\n      position: fixed;\n      bottom: 0;\n      height: 46px;\n      width: 230px; }\n.side-chat .chat-window .footer input[type='text'] {\n        border: 1px solid #fff; }\n.side-chat.show {\n    right: 0;\n    width: 230px; }\n.side-chat.show-chat-item {\n    width: 230px; }\n.side-chat.hoverable.show {\n    width: 52px; }\n.side-chat.hoverable.show.show-chat-window {\n      width: 230px !important; }\n.side-chat.hoverable.show-chat-item {\n    width: 230px; }\n.side-chat.hoverable.show-chat-item .media {\n      right: -178px; }\n.side-chat.hoverable.show-chat-item .media:hover {\n        right: 0; }\n.side-chat.hoverable .chat-list {\n    padding-bottom: 78px; }\n.side-chat.hoverable .chat-list .ps__rail-y {\n      z-index: 0; }\n"

/***/ }),

/***/ "./src/app/theme/components/side-chat/side-chat.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/components/side-chat/side-chat.component.ts ***!
  \*******************************************************************/
/*! exports provided: SideChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideChatComponent", function() { return SideChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _side_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./side-chat.service */ "./src/app/theme/components/side-chat/side-chat.service.ts");
/* harmony import */ var _side_chat_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./side-chat.model */ "./src/app/theme/components/side-chat/side-chat.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SideChatComponent = /** @class */ (function () {
    function SideChatComponent(appSettings, sideChatService) {
        this.appSettings = appSettings;
        this.sideChatService = sideChatService;
        this.showHoverableChatItem = false;
        this.showChatWindow = false;
        this.newChatText = '';
        this.settings = this.appSettings.settings;
        this.chats = sideChatService.getChats();
        this.talks = this.sideChatService.getTalk();
    }
    SideChatComponent.prototype.ngOnInit = function () { };
    SideChatComponent.prototype.back = function () {
        this.showChatWindow = false;
        this.talks.shift();
        this.talks.length = 2;
    };
    SideChatComponent.prototype.getChat = function (chat) {
        this.searchText = '';
        this.showChatWindow = true;
        this.interlocutor = chat.author;
        this.talks.forEach(function (item) {
            if (item.side == 'left') {
                item.image = chat.image;
            }
        });
        this.talks.unshift(chat);
    };
    SideChatComponent.prototype.addChatItem = function ($event) {
        if (($event.which === 1 || $event.which === 13) && this.newChatText.trim() != '') {
            this.talks.push(new _side_chat_model__WEBPACK_IMPORTED_MODULE_3__["SideChat"]('assets/img/users/user.jpg', 'Emilio Verdines', 'online', this.newChatText, new Date(), 'right'));
            this.newChatText = '';
            var chatContainer_1 = document.querySelector('.chat-talk-list');
            setTimeout(function () {
                var nodes = chatContainer_1.querySelectorAll('.media');
                var newChatTextHeight = nodes[nodes.length - 1];
                chatContainer_1.scrollTop = chatContainer_1.scrollHeight + newChatTextHeight.clientHeight;
            });
        }
    };
    SideChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-chat',
            template: __webpack_require__(/*! ./side-chat.component.html */ "./src/app/theme/components/side-chat/side-chat.component.html"),
            styles: [__webpack_require__(/*! ./side-chat.component.scss */ "./src/app/theme/components/side-chat/side-chat.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [_side_chat_service__WEBPACK_IMPORTED_MODULE_2__["SideChatService"]]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"], _side_chat_service__WEBPACK_IMPORTED_MODULE_2__["SideChatService"]])
    ], SideChatComponent);
    return SideChatComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/side-chat/side-chat.model.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/components/side-chat/side-chat.model.ts ***!
  \***************************************************************/
/*! exports provided: SideChat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideChat", function() { return SideChat; });
var SideChat = /** @class */ (function () {
    function SideChat(image, author, authorStatus, text, date, side) {
        this.image = image;
        this.author = author;
        this.authorStatus = authorStatus;
        this.text = text;
        this.date = date;
        this.side = side;
    }
    return SideChat;
}());



/***/ }),

/***/ "./src/app/theme/components/side-chat/side-chat.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/theme/components/side-chat/side-chat.service.ts ***!
  \*****************************************************************/
/*! exports provided: SideChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideChatService", function() { return SideChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _side_chat_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-chat.model */ "./src/app/theme/components/side-chat/side-chat.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var date = new Date(), day = date.getDate(), month = date.getMonth(), year = date.getFullYear(), hour = date.getHours(), minute = date.getMinutes();
var chats = [
    new _side_chat_model__WEBPACK_IMPORTED_MODULE_1__["SideChat"]('assets/img/profile/ashley.jpg', 'Ashley Ahlberg', 'Online', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new _side_chat_model__WEBPACK_IMPORTED_MODULE_1__["SideChat"]('assets/img/profile/bruno.jpg', 'Bruno Vespa', 'Do not disturb', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new _side_chat_model__WEBPACK_IMPORTED_MODULE_1__["SideChat"]('assets/img/avatars/avatar-3.png', 'Andy Warhol', 'Online', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new _side_chat_model__WEBPACK_IMPORTED_MODULE_1__["SideChat"]('assets/img/profile/julia.jpg', 'Julia Aniston', 'Away', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new _side_chat_model__WEBPACK_IMPORTED_MODULE_1__["SideChat"]('assets/img/profile/adam.jpg', 'Adam Sandler', 'Online', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new _side_chat_model__WEBPACK_IMPORTED_MODULE_1__["SideChat"]('assets/img/avatars/avatar-7.png', 'Lusia Manuel', 'Online', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new _side_chat_model__WEBPACK_IMPORTED_MODULE_1__["SideChat"]('assets/img/profile/tereza.jpg', 'Tereza Stiles', 'Offline', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new _side_chat_model__WEBPACK_IMPORTED_MODULE_1__["SideChat"]('assets/img/users/default-user.jpg', 'unknown', 'Offline', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new _side_chat_model__WEBPACK_IMPORTED_MODULE_1__["SideChat"]('assets/img/avatars/avatar-1.png', 'Jeremi Powell', 'Online', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new _side_chat_model__WEBPACK_IMPORTED_MODULE_1__["SideChat"]('assets/img/avatars/avatar-8.png', 'Calico Jack', 'Online', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new _side_chat_model__WEBPACK_IMPORTED_MODULE_1__["SideChat"]('assets/img/profile/michael.jpg', 'Michael Blair', 'Online', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new _side_chat_model__WEBPACK_IMPORTED_MODULE_1__["SideChat"]('assets/img/avatars/avatar-5.png', 'Michelle Ormond', 'Away', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new _side_chat_model__WEBPACK_IMPORTED_MODULE_1__["SideChat"]('assets/img/avatars/avatar-6.png', 'Sean Connery', 'Offline', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left')
];
var talks = [
    new _side_chat_model__WEBPACK_IMPORTED_MODULE_1__["SideChat"]('assets/img/users/user.jpg', 'Emilio Verdines', 'Online', 'Hi, StartNG is a fully responsive, organized folder structure, clean & customizable code, easy to use and much more...', new Date(year, month, day - 2, hour, minute + 2), 'right'),
    new _side_chat_model__WEBPACK_IMPORTED_MODULE_1__["SideChat"]('assets/img/profile/ashley.jpg', 'Ashley Ahlberg', 'Online', 'Great, then I\'ll definitely buy this theme. Thanks!', new Date(year, month, day - 2, hour, minute + 3), 'left'),
];
var SideChatService = /** @class */ (function () {
    function SideChatService() {
    }
    SideChatService.prototype.getChats = function () {
        return chats;
    };
    SideChatService.prototype.getTalk = function () {
        return talks;
    };
    SideChatService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], SideChatService);
    return SideChatService;
}());

// import {Injectable} from '@angular/core'
// let date = new Date(),
//     day = date.getDate(),
//     month = date.getMonth(),
//     year = date.getFullYear(),
//     hour = date.getHours(),
//     minute = date.getMinutes();
// @Injectable()
// export class SideChatService {
//     private chats = [
//         {
//             image: 'assets/img/profile/ashley.jpg',
//             author: 'Ashley Ahlberg', 
//             authorStatus: 'Online',
//             text: 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?',
//             date: new Date(year, month, day-2, hour, minute),
//             time: '1 min ago'
//         },
//         {
//             image: 'assets/img/profile/bruno.jpg',
//             author: 'Bruno Vespa', 
//             authorStatus: 'Do not disturb',
//             text: 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?',
//             date: new Date(year, month, day-2, hour, minute),
//             time: '1 min ago'
//         },
//         {
//             image: 'assets/img/profile/julia.jpg',
//             author: 'Julia Aniston', 
//             authorStatus: 'Away',
//             text: 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?',
//             date: new Date(year, month, day-2, hour, minute),
//             time: '1 min ago'
//         },
//         {
//             image: 'assets/img/users/default-user.jpg',
//             author: 'unknown',
//             authorStatus: 'Offline',
//             text: 'After you get up and running, you can place Font Awesome icons just about...',
//             time: '1 min ago'
//         },
//         // {
//         //     image: 'michael',
//         //     author: 'Michael Blair',
//         //     text: 'You asked, Font Awesome delivers with 40 shiny new icons in version 4.2.',
//         //     time: '2 hrs ago'
//         // },
//         // {
//         //     image: 'julia',
//         //     author: 'Julia Aniston',
//         //     text: 'Want to request new icons? Here\'s how. Need vectors or want to use on the...',
//         //     time: '10 hrs ago'
//         // },
//         // {
//         //     image: 'bruno',
//         //     author: 'Bruno Vespa',
//         //     text: 'Explore your passions and discover new ones by getting involved. Stretch your...',
//         //     time: '1 day ago'
//         // },
//         // {
//         //     image: 'tereza',
//         //     author: 'Tereza Stiles',
//         //     text: 'Get to know who we are - from the inside out. From our history and culture, to the...',
//         //     time: '1 day ago'
//         // },
//         // {
//         //     image: 'adam',
//         //     author: 'Adam Sandler',
//         //     text: 'Need some support to reach your goals? Apply for scholarships across a variety of...',
//         //     time: '2 days ago'
//         // },
//     ]; 
//     public getChats():Array<Object> {
//         return this.chats;
//     }
// }


/***/ }),

/***/ "./src/app/theme/components/sidebar/sidebar.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/theme/components/sidebar/sidebar.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-outer\">\r\n    <a class=\"logo d-flex align-items-center\" routerLink=\"/\" (click)=\"closeSubMenus()\" *ngIf=\"settings.theme.sidebarIsFixed\">\r\n        <span class=\"start\">start</span><span class=\"ng\">NG</span>\r\n    </a>\r\n    <app-vertical-menu [menuItems]=\"menuItems\"></app-vertical-menu>    \r\n</div>"

/***/ }),

/***/ "./src/app/theme/components/sidebar/sidebar.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/theme/components/sidebar/sidebar.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**** General ****/\n.sidebar-outer {\n  height: 100%;\n  width: 250px; }\n.sidebar-outer .logo {\n    height: 46px;\n    padding: 0 14px;\n    width: 250px; }\n"

/***/ }),

/***/ "./src/app/theme/components/sidebar/sidebar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/components/sidebar/sidebar.component.ts ***!
  \***************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _menu_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/menu.service */ "./src/app/theme/components/menu/menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(appSettings, menuService) {
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.settings = this.appSettings.settings;
        this.menuItems = this.menuService.getVerticalMenuItems();
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (sessionStorage["userMenuItems"]) {
            var ids = JSON.parse(sessionStorage.getItem("userMenuItems"));
            var newArr_1 = [];
            ids.forEach(function (id) {
                var newMenuItem = _this.menuItems.filter(function (mail) { return mail.id == id; });
                newArr_1.push(newMenuItem[0]);
            });
            this.menuItems = newArr_1;
        }
    };
    SidebarComponent.prototype.closeSubMenus = function () {
        var menu = document.querySelector("#menu0");
        for (var i = 0; i < menu.children.length; i++) {
            var child = menu.children[i].children[1];
            if (child) {
                if (child.classList.contains('show')) {
                    child.classList.remove('show');
                    menu.children[i].children[0].classList.add('collapsed');
                }
            }
        }
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/theme/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/theme/components/sidebar/sidebar.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [_menu_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"], _menu_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/user-menu/user-menu.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/user-menu/user-menu.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown d-inline-block\">\r\n    <a class=\"dropdown-toggle no-caret pl-2 pr-2\" id=\"user-menu\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n        <i class=\"fa fa-user-o\" aria-hidden=\"true\"></i>\r\n    </a>\r\n\r\n    <div class=\"dropdown-menu dropdown-menu-right rounded-0 mt-3 p-0 box-shadow\" aria-labelledby=\"user-menu\">\r\n        <div class=\"user-menu\">\r\n            <div class=\"user-info text-center p-3\">\r\n                <img src=\"assets/img/users/user.jpg\" alt=\"user-img\" class=\"user-img rounded-circle\">                    \r\n                <p class=\"mt-1 mb-0\"> \r\n                    Emilio Verdines - Web Developer\r\n                    <small>Member since May. 2016</small>\r\n                </p>\r\n            </div>\r\n            <a class=\"dropdown-item\" routerLink=\"profile\"><i class=\"fa fa-user mr-2\"></i>Profile</a>\r\n            <a class=\"dropdown-item\" routerLink=\"settings\"><i class=\"fa fa-cog mr-2\"></i>Settings</a>\r\n            <a class=\"dropdown-item\" routerLink=\"/\"><i class=\"fa fa-lock mr-2\"></i>Lock screen</a>\r\n            <a class=\"dropdown-item mb-1\" routerLink=\"/login\"><i class=\"fa fa-power-off mr-2\"></i>Log out</a>\r\n           \r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/components/user-menu/user-menu.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/user-menu/user-menu.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-menu .user-menu {\n  width: 240px;\n  padding: 0; }\n  .dropdown-menu .user-menu .user-img {\n    width: 100px; }\n  .dropdown-menu .user-menu .dropdown-item {\n    color: #666 !important; }\n"

/***/ }),

/***/ "./src/app/theme/components/user-menu/user-menu.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/components/user-menu/user-menu.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMenuComponent", function() { return UserMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserMenuComponent = /** @class */ (function () {
    function UserMenuComponent() {
    }
    UserMenuComponent.prototype.ngOnInit = function () {
    };
    UserMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-menu',
            template: __webpack_require__(/*! ./user-menu.component.html */ "./src/app/theme/components/user-menu/user-menu.component.html"),
            styles: [__webpack_require__(/*! ./user-menu.component.scss */ "./src/app/theme/components/user-menu/user-menu.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], UserMenuComponent);
    return UserMenuComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-pages-pages-module.js.map