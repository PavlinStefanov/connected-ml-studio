(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-tables-tables-module"],{

/***/ "./src/app/pages/tables/basic-tables/basic-tables.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/tables/basic-tables/basic-tables.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Tables</h2>\r\n<p class=\"text-muted\">Just add the base class <code>.table</code> to any <code>&lt;table&gt;</code>, then extend with custom styles or our various included modifier classes.</p>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-lg-6 mb-4\">\r\n        <div widget class=\"card border-0 box-shadow\">\r\n            <div class=\"card-header transparent border-0 text-muted\">\r\n                <h5 class=\"mb-0\">Bordered table</h5>\r\n                <div class=\"widget-controls\"> \r\n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\r\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\r\n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\r\n                </div>        \r\n            </div>\r\n            <div class=\"card-body pt-0 widget-body\">\r\n                <p class=\"text-left fs-13 text-gray\">Add <code>.table-bordered</code> for borders on all sides of the table and cells.</p>          \r\n                <table class=\"table table-bordered\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>First Name</th>\r\n                            <th>Last Name</th>\r\n                            <th>Username</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <th scope=\"row\">1</th>\r\n                            <td>Mark</td>\r\n                            <td>Otto</td>\r\n                            <td>@mdo</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th scope=\"row\">2</th>\r\n                            <td>Mark</td>\r\n                            <td>Otto</td>\r\n                            <td>@TwBootstrap</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th scope=\"row\">3</th>\r\n                            <td>Jacob</td>\r\n                            <td>Thornton</td>\r\n                            <td>@fat</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th scope=\"row\">4</th>\r\n                            <td colspan=\"2\">Larry the Bird</td>\r\n                            <td>@twitter</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-6 mb-4\">\r\n        <div widget class=\"card border-0 box-shadow\">\r\n            <div class=\"card-header transparent border-0 text-muted\">\r\n                <h5 class=\"mb-0\">Hoverable rows</h5>\r\n                <div class=\"widget-controls\"> \r\n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\r\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\r\n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\r\n                </div>        \r\n            </div>\r\n            <div class=\"card-body pt-0 widget-body\">\r\n                <p class=\"text-left fs-13 text-gray\">Add <code>.table-hover</code> to enable a hover state on table rows within a <code>&lt;tbody&gt;</code>.</p>           \r\n                <table class=\"table table-hover\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>First Name</th>\r\n                            <th>Last Name</th>\r\n                            <th>Username</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <th scope=\"row\">1</th>\r\n                            <td>Mark</td>\r\n                            <td>Otto</td>\r\n                            <td>@mdo</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th scope=\"row\">2</th>\r\n                            <td>Jacob</td>\r\n                            <td>Thornton</td>\r\n                            <td>@fat</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th scope=\"row\">3</th>\r\n                            <td colspan=\"2\">Larry the Bird</td>\r\n                            <td>@twitter</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td scope=\"row\">4</td>\r\n                            <td>Steve</td>\r\n                            <td>Urkel</td>\r\n                            <td>@steve</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-6 mb-4\">\r\n        <div widget class=\"card border-0 box-shadow\">\r\n            <div class=\"card-header transparent border-0 text-muted\">\r\n                <h5 class=\"mb-0\">Striped rows</h5>\r\n                <div class=\"widget-controls\"> \r\n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\r\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\r\n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\r\n                </div>        \r\n            </div>\r\n            <div class=\"card-body pt-0 widget-body\">\r\n                <p class=\"text-left fs-13 text-gray\">Use <code>.table-striped</code> to add zebra-striping to any table row within the <code>&lt;tbody&gt;</code>.</p>        \r\n                <table class=\"table table-striped\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>First Name</th>\r\n                            <th>Last Name</th>\r\n                            <th>Username</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <th scope=\"row\">1</th>\r\n                            <td>Mark</td>\r\n                            <td>Otto</td>\r\n                            <td>@mdo</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th scope=\"row\">2</th>\r\n                            <td>Jacob</td>\r\n                            <td>Thornton</td>\r\n                            <td>@fat</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th scope=\"row\">3</th>\r\n                            <td colspan=\"2\">Larry the Bird</td>\r\n                            <td>@twitter</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td scope=\"row\">4</td>\r\n                            <td>Steve</td>\r\n                            <td>Urkel</td>\r\n                            <td>@steve</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n     <div class=\"col-lg-6 mb-4\">\r\n        <div widget class=\"card border-0 box-shadow\">\r\n            <div class=\"card-header transparent border-0 text-muted\">\r\n                <h5 class=\"mb-0\">Contextual classes</h5>\r\n                <div class=\"widget-controls\"> \r\n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\r\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\r\n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\r\n                </div>        \r\n            </div>\r\n            <div class=\"card-body pt-0 widget-body\">\r\n                <p class=\"text-left fs-13 text-gray\">Use contextual classes to color table rows or individual cells.</p>        \r\n                <table class=\"table\">\r\n                   <thead>\r\n                       <tr>\r\n                           <th>#</th>\r\n                           <th>Column heading</th>\r\n                           <th>Column heading</th>\r\n                           <th>Column heading</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr class=\"table-active \">\r\n                            <td>1</td>\r\n                            <td>Column content</td>\r\n                            <td>Column content</td>\r\n                            <td>Column content</td>\r\n                        </tr>\r\n                        <tr class=\"table-success\">\r\n                            <td>2</td>\r\n                            <td>Column content</td>\r\n                            <td>Column content</td>\r\n                            <td>Column content</td>\r\n                        </tr>\r\n                        <tr class=\"table-warning\">\r\n                            <td>3</td>\r\n                            <td>Column content</td>\r\n                            <td>Column content</td>\r\n                            <td>Column content</td>\r\n                        </tr>\r\n                        <tr class=\"table-danger\">\r\n                            <td>4</td>\r\n                            <td>Column content</td>\r\n                            <td>Column content</td>\r\n                            <td>Column content</td>\r\n                        </tr>\r\n                        <tr class=\"table-info\">\r\n                            <td>5</td>\r\n                            <td>Column content</td>\r\n                            <td>Column content</td>\r\n                            <td>Column content</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table> \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n   <div class=\"col-12 mb-4\">\r\n        <div widget class=\"card border-0 box-shadow\">\r\n            <div class=\"card-header transparent border-0 text-muted\">\r\n                <h5 class=\"mb-0\">Small table</h5>\r\n                <div class=\"widget-controls\"> \r\n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\r\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\r\n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\r\n                </div>        \r\n            </div>\r\n            <div class=\"card-body pt-0 widget-body\">\r\n                <p class=\"text-left fs-13 text-gray\">Add <code>.table-sm</code>to make tables more compact by cutting cell padding in half.</p>          \r\n                <table class=\"table table-sm\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>First Name</th>\r\n                            <th>Last Name</th>\r\n                            <th>Username</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <th scope=\"row\">1</th>\r\n                            <td>Mark</td>\r\n                            <td>Otto</td>\r\n                            <td>@mdo</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th scope=\"row\">2</th>\r\n                            <td>Jacob</td>\r\n                            <td>Thornton</td>\r\n                            <td>@fat</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th scope=\"row\">3</th>\r\n                            <td colspan=\"2\">Larry the Bird</td>\r\n                            <td>@twitter</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>               \r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-12 mb-4\">\r\n        <div widget class=\"card border-0 box-shadow\">\r\n            <div class=\"card-header transparent border-0 text-muted\">\r\n                <h5 class=\"mb-0\">Responsive table</h5>\r\n                <div class=\"widget-controls\"> \r\n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\r\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\r\n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\r\n                </div>        \r\n            </div>\r\n            <div class=\"card-body pt-0 widget-body\">\r\n                <p class=\"text-left fs-13 text-gray\">Create responsive tables by adding <code>.table-responsive</code>  to any <code>.table</code> to make them scroll horizontally on small devices (under 768px). When viewing on anything larger than 768px wide, you will not see any difference in these tables.</p>\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>#</th>\r\n                                <th>First Name</th>\r\n                                <th>Last Name</th>\r\n                                <th>Username</th>\r\n                                <th>Age</th>\r\n                                <th>City</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <td>1</td>\r\n                                <td>Mark</td>\r\n                                <td>Otto</td>\r\n                                <td>@mdo</td>\r\n                                <td>20</td>\r\n                                <td>Cityname</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>2</td>\r\n                                <td>Jacob</td>\r\n                                <td>Thornton</td>\r\n                                <td>@fat</td>\r\n                                <td>20</td>\r\n                                <td>Cityname</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>3</td>\r\n                                <td>Larry</td>\r\n                                <td>the Bird</td>\r\n                                <td>@twitter</td>\r\n                                <td>20</td>\r\n                                <td>Cityname</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>4</td>\r\n                                <td>Steve</td>\r\n                                <td>Mac Queen</td>\r\n                                <td>@steve</td>\r\n                                <td>20</td>\r\n                                <td>Cityname</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tables/basic-tables/basic-tables.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/tables/basic-tables/basic-tables.component.ts ***!
  \*********************************************************************/
/*! exports provided: BasicTablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicTablesComponent", function() { return BasicTablesComponent; });
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

var BasicTablesComponent = /** @class */ (function () {
    function BasicTablesComponent() {
    }
    BasicTablesComponent.prototype.ngOnInit = function () {
    };
    BasicTablesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-tables',
            template: __webpack_require__(/*! ./basic-tables.component.html */ "./src/app/pages/tables/basic-tables/basic-tables.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], BasicTablesComponent);
    return BasicTablesComponent;
}());



/***/ }),

/***/ "./src/app/pages/tables/tables.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/tables/tables.module.ts ***!
  \***********************************************/
/*! exports provided: routes, TablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesModule", function() { return TablesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../theme/directives/directives.module */ "./src/app/theme/directives/directives.module.ts");
/* harmony import */ var _basic_tables_basic_tables_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./basic-tables/basic-tables.component */ "./src/app/pages/tables/basic-tables/basic-tables.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: 'basic-tables', pathMatch: 'full' },
    { path: 'basic-tables', component: _basic_tables_basic_tables_component__WEBPACK_IMPORTED_MODULE_5__["BasicTablesComponent"], data: { breadcrumb: 'Basic Tables' } },
    { path: 'dynamic-tables', loadChildren: 'app/pages/tables/dynamic-tables/dynamic-tables.module#DynamicTablesModule', data: { breadcrumb: 'Dynamic Tables' } }
];
var TablesModule = /** @class */ (function () {
    function TablesModule() {
    }
    TablesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["NgxDatatableModule"],
                _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_4__["DirectivesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _basic_tables_basic_tables_component__WEBPACK_IMPORTED_MODULE_5__["BasicTablesComponent"]
            ]
        })
    ], TablesModule);
    return TablesModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-pages-tables-tables-module.js.map