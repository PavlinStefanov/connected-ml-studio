(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/rxjs-compat/_esm5/Subject.js":
/*!***************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/Subject.js ***!
  \***************************************************/
/*! exports provided: Subject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]; });


//# sourceMappingURL=Subject.js.map

/***/ }),

/***/ "./src/app/theme/pipes/pipes.module.ts":
/*!*********************************************!*\
  !*** ./src/app/theme/pipes/pipes.module.ts ***!
  \*********************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profilePicture/profilePicture.pipe */ "./src/app/theme/pipes/profilePicture/profilePicture.pipe.ts");
/* harmony import */ var _search_chat_person_search_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search/chat-person-search.pipe */ "./src/app/theme/pipes/search/chat-person-search.pipe.ts");
/* harmony import */ var _search_user_search_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search/user-search.pipe */ "./src/app/theme/pipes/search/user-search.pipe.ts");
/* harmony import */ var _truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./truncate/truncate.pipe */ "./src/app/theme/pipes/truncate/truncate.pipe.ts");
/* harmony import */ var _search_mail_search_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search/mail-search.pipe */ "./src/app/theme/pipes/search/mail-search.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_2__["ProfilePicturePipe"],
                _search_chat_person_search_pipe__WEBPACK_IMPORTED_MODULE_3__["ChatPersonSearchPipe"],
                _search_user_search_pipe__WEBPACK_IMPORTED_MODULE_4__["UserSearchPipe"],
                _truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_5__["TruncatePipe"],
                _search_mail_search_pipe__WEBPACK_IMPORTED_MODULE_6__["MailSearchPipe"]
            ],
            exports: [
                _profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_2__["ProfilePicturePipe"],
                _search_chat_person_search_pipe__WEBPACK_IMPORTED_MODULE_3__["ChatPersonSearchPipe"],
                _search_user_search_pipe__WEBPACK_IMPORTED_MODULE_4__["UserSearchPipe"],
                _truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_5__["TruncatePipe"],
                _search_mail_search_pipe__WEBPACK_IMPORTED_MODULE_6__["MailSearchPipe"]
            ]
        })
    ], PipesModule);
    return PipesModule;
}());



/***/ }),

/***/ "./src/app/theme/pipes/profilePicture/profilePicture.pipe.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/pipes/profilePicture/profilePicture.pipe.ts ***!
  \*******************************************************************/
/*! exports provided: ProfilePicturePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePicturePipe", function() { return ProfilePicturePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProfilePicturePipe = /** @class */ (function () {
    function ProfilePicturePipe() {
    }
    ProfilePicturePipe.prototype.transform = function (input, ext) {
        if (ext === void 0) { ext = 'jpg'; }
        return '../assets/img/profile/' + input + '.' + ext;
    };
    ProfilePicturePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'profilePicture' })
    ], ProfilePicturePipe);
    return ProfilePicturePipe;
}());



/***/ }),

/***/ "./src/app/theme/pipes/search/chat-person-search.pipe.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/pipes/search/chat-person-search.pipe.ts ***!
  \***************************************************************/
/*! exports provided: ChatPersonSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPersonSearchPipe", function() { return ChatPersonSearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChatPersonSearchPipe = /** @class */ (function () {
    function ChatPersonSearchPipe() {
    }
    ChatPersonSearchPipe.prototype.transform = function (value, args) {
        var searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter(function (message) {
                if (message.author) {
                    return message.author.search(searchText) !== -1;
                }
            });
        }
    };
    ChatPersonSearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'ChatPersonSearchPipe' })
    ], ChatPersonSearchPipe);
    return ChatPersonSearchPipe;
}());



/***/ }),

/***/ "./src/app/theme/pipes/search/mail-search.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/theme/pipes/search/mail-search.pipe.ts ***!
  \********************************************************/
/*! exports provided: MailSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailSearchPipe", function() { return MailSearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MailSearchPipe = /** @class */ (function () {
    function MailSearchPipe() {
    }
    MailSearchPipe.prototype.transform = function (value, args) {
        var searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter(function (mail) {
                if (mail.sender || mail.subject) {
                    if (mail.sender.search(searchText) !== -1 || mail.subject.search(searchText) !== -1) {
                        return true;
                    }
                }
            });
        }
    };
    MailSearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'MailSearch'
        })
    ], MailSearchPipe);
    return MailSearchPipe;
}());



/***/ }),

/***/ "./src/app/theme/pipes/search/user-search.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/theme/pipes/search/user-search.pipe.ts ***!
  \********************************************************/
/*! exports provided: UserSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSearchPipe", function() { return UserSearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserSearchPipe = /** @class */ (function () {
    function UserSearchPipe() {
    }
    UserSearchPipe.prototype.transform = function (value, args) {
        var searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter(function (user) {
                if (user.profile.name) {
                    return user.profile.name.search(searchText) !== -1;
                }
                else {
                    return user.username.search(searchText) !== -1;
                }
            });
        }
    };
    UserSearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'UserSearchPipe', pure: false })
    ], UserSearchPipe);
    return UserSearchPipe;
}());



/***/ }),

/***/ "./src/app/theme/pipes/truncate/truncate.pipe.ts":
/*!*******************************************************!*\
  !*** ./src/app/theme/pipes/truncate/truncate.pipe.ts ***!
  \*******************************************************/
/*! exports provided: TruncatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TruncatePipe = /** @class */ (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, args) {
        var limit = args > 0 ? parseInt(args) : 10;
        return value.length > limit ? value.substring(0, limit) + '...' : value;
    };
    TruncatePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'truncate'
        })
    ], TruncatePipe);
    return TruncatePipe;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map