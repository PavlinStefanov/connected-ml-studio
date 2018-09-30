(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-dynamic-menu-dynamic-menu-module~app-pages-membership-membership-module~app-pages-pages-mo~5cadc352"],{

/***/ "./src/app/theme/components/menu/menu.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/theme/components/menu/menu.model.ts ***!
  \*****************************************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
var Menu = /** @class */ (function () {
    function Menu(id, title, routerLink, href, icon, target, hasSubMenu, parentId) {
        this.id = id;
        this.title = title;
        this.routerLink = routerLink;
        this.href = href;
        this.icon = icon;
        this.target = target;
        this.hasSubMenu = hasSubMenu;
        this.parentId = parentId;
    }
    return Menu;
}());



/***/ }),

/***/ "./src/app/theme/components/menu/menu.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/theme/components/menu/menu.service.ts ***!
  \*******************************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/app/theme/components/menu/menu.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuService = /** @class */ (function () {
    function MenuService(location, renderer2, router) {
        this.location = location;
        this.renderer2 = renderer2;
        this.router = router;
    }
    MenuService.prototype.getVerticalMenuItems = function () {
        return _menu__WEBPACK_IMPORTED_MODULE_3__["verticalMenuItems"];
    };
    MenuService.prototype.getHorizontalMenuItems = function () {
        return _menu__WEBPACK_IMPORTED_MODULE_3__["horizontalMenuItems"];
    };
    MenuService.prototype.createMenu = function (menu, nativeElement, type) {
        if (type == 'vertical') {
            this.createVerticalMenu(menu, nativeElement);
        }
        if (type == 'horizontal') {
            this.createHorizontalMenu(menu, nativeElement);
        }
    };
    MenuService.prototype.createVerticalMenu = function (menu, nativeElement) {
        var _this = this;
        var menu0 = this.renderer2.createElement('div');
        this.renderer2.setAttribute(menu0, 'id', 'menu0');
        menu.forEach(function (menuItem) {
            if (menuItem.parentId == 0) {
                var subMenu = _this.createVerticalMenuItem(menu, menuItem);
                _this.renderer2.appendChild(menu0, subMenu);
            }
        });
        this.renderer2.appendChild(nativeElement, menu0);
    };
    MenuService.prototype.createHorizontalMenu = function (menu, nativeElement) {
        var _this = this;
        var nav = this.renderer2.createElement('div');
        this.renderer2.setAttribute(nav, 'id', 'navigation');
        var ul = this.renderer2.createElement('ul');
        this.renderer2.addClass(ul, 'menu');
        this.renderer2.appendChild(nav, ul);
        menu.forEach(function (menuItem) {
            if (menuItem.parentId == 0) {
                var subMenu = _this.createHorizontalMenuItem(menu, menuItem);
                _this.renderer2.appendChild(ul, subMenu);
            }
        });
        this.renderer2.appendChild(nativeElement, nav);
    };
    MenuService.prototype.createVerticalMenuItem = function (menu, menuItem) {
        var _this = this;
        var div = this.renderer2.createElement('div');
        this.renderer2.addClass(div, 'card');
        this.renderer2.setAttribute(div, 'id', 'menu' + menuItem.id);
        var link = this.renderer2.createElement('a');
        this.renderer2.addClass(link, 'menu-item-link');
        this.renderer2.setAttribute(link, 'data-toggle', 'tooltip');
        this.renderer2.setAttribute(link, 'data-placement', 'right');
        this.renderer2.setAttribute(link, 'data-animation', 'false');
        this.renderer2.setAttribute(link, 'data-container', '.vertical-menu-tooltip-place');
        this.renderer2.setAttribute(link, 'data-original-title', menuItem.title);
        var icon = this.renderer2.createElement('i');
        this.renderer2.addClass(icon, 'fa');
        this.renderer2.addClass(icon, 'fa-' + menuItem.icon);
        this.renderer2.appendChild(link, icon);
        var span = this.renderer2.createElement('span');
        this.renderer2.addClass(span, 'menu-title');
        this.renderer2.appendChild(link, span);
        var menuText = this.renderer2.createText(menuItem.title);
        this.renderer2.appendChild(span, menuText);
        this.renderer2.setAttribute(link, 'id', 'link' + menuItem.id);
        this.renderer2.addClass(link, 'transition');
        this.renderer2.appendChild(div, link);
        if (menuItem.routerLink) {
            this.renderer2.listen(link, "click", function () {
                _this.router.navigate([menuItem.routerLink]);
                _this.setActiveLink(menu, link);
                _this.closeOtherSubMenus(div);
            });
        }
        if (menuItem.href) {
            this.renderer2.setAttribute(link, 'href', menuItem.href);
        }
        if (menuItem.target) {
            this.renderer2.setAttribute(link, 'target', menuItem.target);
        }
        if (menuItem.hasSubMenu) {
            this.renderer2.addClass(link, 'collapsed');
            var caret = this.renderer2.createElement('b');
            this.renderer2.addClass(caret, 'fa');
            this.renderer2.addClass(caret, 'fa-angle-up');
            this.renderer2.appendChild(link, caret);
            this.renderer2.setAttribute(link, 'data-toggle', 'collapse');
            this.renderer2.setAttribute(link, 'href', '#collapse' + menuItem.id);
            var collapse = this.renderer2.createElement('div');
            this.renderer2.setAttribute(collapse, 'id', 'collapse' + menuItem.id);
            this.renderer2.setAttribute(collapse, 'data-parent', '#menu' + menuItem.parentId);
            this.renderer2.addClass(collapse, 'collapse');
            this.renderer2.appendChild(div, collapse);
            this.createSubMenu(menu, menuItem.id, collapse, 'vertical');
        }
        return div;
    };
    MenuService.prototype.createHorizontalMenuItem = function (menu, menuItem) {
        var _this = this;
        var li = this.renderer2.createElement('li');
        this.renderer2.addClass(li, 'menu-item');
        var link = this.renderer2.createElement('a');
        this.renderer2.addClass(link, 'menu-item-link');
        this.renderer2.setAttribute(link, 'data-toggle', 'tooltip');
        this.renderer2.setAttribute(link, 'data-placement', 'top');
        this.renderer2.setAttribute(link, 'data-animation', 'false');
        this.renderer2.setAttribute(link, 'data-container', '.horizontal-menu-tooltip-place');
        this.renderer2.setAttribute(link, 'data-original-title', menuItem.title);
        var icon = this.renderer2.createElement('i');
        this.renderer2.addClass(icon, 'fa');
        this.renderer2.addClass(icon, 'fa-' + menuItem.icon);
        this.renderer2.appendChild(link, icon);
        var span = this.renderer2.createElement('span');
        this.renderer2.addClass(span, 'menu-title');
        this.renderer2.appendChild(link, span);
        var menuText = this.renderer2.createText(menuItem.title);
        this.renderer2.appendChild(span, menuText);
        this.renderer2.appendChild(li, link);
        this.renderer2.setAttribute(link, 'id', 'link' + menuItem.id);
        this.renderer2.addClass(link, 'transition');
        if (menuItem.routerLink) {
            this.renderer2.listen(link, "click", function () {
                _this.router.navigate([menuItem.routerLink]);
                _this.setActiveLink(menu, link);
            });
        }
        if (menuItem.href) {
            this.renderer2.setAttribute(link, 'href', menuItem.href);
        }
        if (menuItem.target) {
            this.renderer2.setAttribute(link, 'target', menuItem.target);
        }
        if (menuItem.hasSubMenu) {
            this.renderer2.addClass(li, 'menu-item-has-children');
            var subMenu = this.renderer2.createElement('ul');
            this.renderer2.addClass(subMenu, 'sub-menu');
            this.renderer2.appendChild(li, subMenu);
            this.createSubMenu(menu, menuItem.id, subMenu, 'horizontal');
        }
        return li;
    };
    MenuService.prototype.createSubMenu = function (menu, menuItemId, parentElement, type) {
        var _this = this;
        var menus = menu.filter(function (item) { return item.parentId === menuItemId; });
        menus.forEach(function (menuItem) {
            var subMenu = null;
            if (type == 'vertical') {
                subMenu = _this.createVerticalMenuItem(menu, menuItem);
            }
            if (type == 'horizontal') {
                subMenu = _this.createHorizontalMenuItem(menu, menuItem);
            }
            _this.renderer2.appendChild(parentElement, subMenu);
        });
    };
    MenuService.prototype.closeOtherSubMenus = function (elem) {
        var children = (this.renderer2.parentNode(elem)).children;
        for (var i = 0; i < children.length; i++) {
            var child = this.renderer2.nextSibling(children[i].children[0]);
            if (child) {
                this.renderer2.addClass(children[i].children[0], 'collapsed');
                this.renderer2.removeClass(child, 'show');
            }
        }
    };
    MenuService.prototype.getActiveLink = function (menu) {
        var url = this.location.path();
        var routerLink = url; // url.substring(1, url.length);
        var activeMenuItem = menu.filter(function (item) { return item.routerLink === routerLink; });
        if (activeMenuItem[0]) {
            var activeLink = document.querySelector("#link" + activeMenuItem[0].id);
            return activeLink;
        }
        return false;
    };
    MenuService.prototype.setActiveLink = function (menu, link) {
        if (link) {
            menu.forEach(function (menuItem) {
                var activeLink = document.querySelector("#link" + menuItem.id);
                if (activeLink) {
                    if (activeLink.classList.contains('active-link')) {
                        activeLink.classList.remove('active-link');
                    }
                }
            });
            this.renderer2.addClass(link, 'active-link');
        }
    };
    MenuService.prototype.showActiveSubMenu = function (menu) {
        var url = this.location.path();
        var routerLink = url; //url.substring(1, url.length);
        var activeMenuItem = menu.filter(function (item) { return item.routerLink === routerLink; });
        if (activeMenuItem[0]) {
            var activeLink = document.querySelector("#link" + activeMenuItem[0].id);
            var parent_1 = this.renderer2.parentNode(activeLink);
            while (this.renderer2.parentNode(parent_1)) {
                parent_1 = this.renderer2.parentNode(parent_1);
                if (parent_1.className == 'collapse') {
                    var parentMenu = menu.filter(function (item) { return item.id === activeMenuItem[0].parentId; });
                    var activeParentLink = document.querySelector("#link" + parentMenu[0].id);
                    this.renderer2.removeClass(activeParentLink, 'collapsed');
                    this.renderer2.addClass(parent_1, 'show');
                }
                if (parent_1.classList.contains('menu-wrapper')) {
                    break;
                }
            }
        }
    };
    MenuService.prototype.addNewMenuItem = function (menu, newMenuItem, type) {
        menu.push(newMenuItem);
        if (newMenuItem.parentId != 0) {
            var parentMenu = menu.filter(function (item) { return item.id === newMenuItem.parentId; });
            if (parentMenu.length) {
                if (!parentMenu[0].hasSubMenu) {
                    parentMenu[0].hasSubMenu = true;
                    // parentMenu[0].routerLink = null;
                }
            }
        }
        var menu_wrapper = null;
        if (type == 'vertical') {
            menu_wrapper = document.getElementById('vertical-menu');
        }
        if (type == 'horizontal') {
            menu_wrapper = document.getElementById('horizontal-menu');
        }
        while (menu_wrapper.firstChild) {
            menu_wrapper.removeChild(menu_wrapper.firstChild);
        }
        this.createMenu(menu, menu_wrapper, type);
    };
    MenuService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MenuService);
    return MenuService;
}());



/***/ }),

/***/ "./src/app/theme/components/menu/menu.ts":
/*!***********************************************!*\
  !*** ./src/app/theme/components/menu/menu.ts ***!
  \***********************************************/
/*! exports provided: verticalMenuItems, horizontalMenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verticalMenuItems", function() { return verticalMenuItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "horizontalMenuItems", function() { return horizontalMenuItems; });
/* harmony import */ var _menu_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.model */ "./src/app/theme/components/menu/menu.model.ts");

var verticalMenuItems = [
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](1, 'Dashboard', '/pages/dashboard', null, 'tachometer', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](2, 'Membership', '/pages/membership', null, 'users', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](3, 'UI Features', null, null, 'laptop', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](4, 'Buttons', '/pages/ui/buttons', null, 'keyboard-o', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](5, 'Cards', '/pages/ui/cards', null, 'address-card-o', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](6, 'Components', '/pages/ui/components', null, 'creative-commons', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](7, 'Icons', '/pages/ui/icons', null, 'font-awesome', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](8, 'List Group', '/pages/ui/list-group', null, 'th-list', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](9, 'Media Objects', '/pages/ui/media-objects', null, 'object-group', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](10, 'Tabs & Accordions', '/pages/ui/tabs-accordions', null, 'server', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](11, 'Typography', '/pages/ui/typography', null, 'font', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](15, 'Dynamic Menu', '/pages/dynamic-menu', null, 'list-ul', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](16, 'Mailbox', '/pages/mailbox', null, 'envelope-o', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](20, 'Form Elements', null, null, 'pencil-square-o', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](21, 'Form Controls', '/pages/form-elements/controls', null, 'check-square-o', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](22, 'Form Layouts', '/pages/form-elements/layouts', null, 'th-large', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](23, 'Form Validations', '/pages/form-elements/validations', null, 'exclamation-triangle', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](24, 'Form Wizard', '/pages/form-elements/wizard', null, 'magic', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](25, 'Editor', '/pages/form-elements/editor', null, 'pencil', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](26, 'Tables', null, null, 'table', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](27, 'Basic Tables', '/pages/tables/basic-tables', null, 'th', null, false, 26),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](28, 'Dynamic Tables', null, null, 'th-large', null, true, 26),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](29, 'Smart DataTable', '/pages/tables/dynamic-tables/smart', null, 'caret-right', null, false, 28),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](30, 'NGX DataTable', '/pages/tables/dynamic-tables/ngx', null, 'caret-right', null, false, 28),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](151, 'Machine Learning', null, null, 'connectdevelop', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](152, 'Connected ML Studio', '/pages/ml', null, 'cube', null, false, 151),
    //new Menu(153,'ML.NET', null, null, 'delicious', null, false, 151),
    //new Menu(154,'Accordion', null, null, 'empire', null, false, 151),
    //new Menu(155,'TensorFlow', null, null, 'google-plus', null, false, 151),
    //new Menu(156,'NumPy', null, null, 'book', null, false, 151),
    //new Menu(157,'Keras', null, null, 'quora', null, false, 151),
    //new Menu(158,'Theano', null, null, 'pagelines', null, false, 151),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](150, 'New Page', '/pages/new', null, 'fa-home', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](31, 'Tools', null, null, 'wrench', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](32, 'Drag & Drop', '/pages/tools/drag-drop', null, 'hand-paper-o', null, false, 31),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](33, 'Resizable', '/pages/tools/resizable', null, 'expand', null, false, 31),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](34, 'Toaster', '/pages/tools/toaster', null, 'bell-o', null, false, 31),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](40, 'Pages', null, null, 'file-text-o', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](43, 'Login', '/login', null, 'sign-in', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](44, 'Register', '/register', null, 'registered', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](45, 'Blank', '/pages/blank', null, 'file-o', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](46, 'Error', '/pagenotfound', null, 'exclamation-circle', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](50, 'Calendar', '/pages/calendar', null, 'calendar', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](66, 'Maps', null, null, 'globe', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](67, 'Google Maps', '/pages/maps/googlemaps', null, 'map-marker', null, false, 66),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](68, 'Leaflet Maps', '/pages/maps/leafletmaps', null, 'map-o', null, false, 66),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](70, 'Charts', null, null, 'area-chart', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](71, 'Bar Charts', '/pages/charts/bar', null, 'bar-chart', null, false, 70),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](72, 'Pie Charts', '/pages/charts/pie', null, 'pie-chart', null, false, 70),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](73, 'Line Charts', '/pages/charts/line', null, 'line-chart', null, false, 70),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](74, 'Bubble Charts', '/pages/charts/bubble', null, 'comment-o', null, false, 70),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](140, 'Level 1', null, null, 'folder-open-o', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](141, 'Level 2', null, null, 'folder-open-o', null, true, 140),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](142, 'Level 3', null, null, 'folder-open-o', null, true, 141),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](143, 'Level 4', null, null, 'folder-open-o', null, true, 142),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](144, 'Level 5', null, null, 'folder-o', null, false, 143),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](200, 'External Link', null, 'http://themeseason.com', 'external-link', '_blank', false, 0)
];
var horizontalMenuItems = [
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](1, 'Dashboard', '/pages/dashboard', null, 'tachometer', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](2, 'Membership', '/pages/membership', null, 'users', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](3, 'UI Features', null, null, 'laptop', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](4, 'Buttons', '/pages/ui/buttons', null, 'keyboard-o', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](5, 'Cards', '/pages/ui/cards', null, 'address-card-o', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](6, 'Components', '/pages/ui/components', null, 'creative-commons', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](7, 'Icons', '/pages/ui/icons', null, 'font-awesome', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](8, 'List Group', '/pages/ui/list-group', null, 'th-list', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](9, 'Media Objects', '/pages/ui/media-objects', null, 'object-group', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](10, 'Tabs & Accordions', '/pages/ui/tabs-accordions', null, 'server', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](11, 'Typography', '/pages/ui/typography', null, 'font', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](31, 'Tools', null, null, 'wrench', null, true, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](32, 'Drag & Drop', '/pages/tools/drag-drop', null, 'hand-paper-o', null, false, 31),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](33, 'Resizable', '/pages/tools/resizable', null, 'expand', null, false, 31),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](34, 'Toaster', '/pages/tools/toaster', null, 'bell-o', null, false, 31),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](20, 'Form Elements', null, null, 'pencil-square-o', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](21, 'Form Controls', '/pages/form-elements/controls', null, 'check-square-o', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](22, 'Form Layouts', '/pages/form-elements/layouts', null, 'th-large', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](23, 'Form Validations', '/pages/form-elements/validations', null, 'exclamation-triangle', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](24, 'Form Wizard', '/pages/form-elements/wizard', null, 'magic', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](25, 'Editor', '/pages/form-elements/editor', null, 'pencil', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](26, 'Tables', null, null, 'table', null, true, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](27, 'Basic Tables', '/pages/tables/basic-tables', null, 'th', null, false, 26),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](28, 'Dynamic Tables', null, null, 'th-large', null, true, 26),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](29, 'Smart DataTable', '/pages/tables/dynamic-tables/smart', null, 'caret-right', null, false, 28),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](30, 'NGX DataTable', '/pages/tables/dynamic-tables/ngx', null, 'caret-right', null, false, 28),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](151, 'Machine Learning', null, null, 'connectdevelop', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](152, 'Connected ML Studio', '/pages/ml/connected-ml-studio', null, 'cube', null, false, 151),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](40, 'Pages', null, null, 'file-text-o', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](15, 'Dynamic Menu', '/pages/dynamic-menu', null, 'list-ul', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](43, 'Login', '/login', null, 'sign-in', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](44, 'Register', '/register', null, 'registered', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](45, 'Blank', '/pages/blank', null, 'file-o', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](46, 'Error', '/pagenotfound', null, 'exclamation-circle', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](50, 'Calendar', '/pages/calendar', null, 'calendar', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](16, 'Mailbox', '/pages/mailbox', null, 'envelope-o', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](200, 'External Link', null, 'http://themeseason.com', 'external-link', '_blank', false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](66, 'Maps', null, null, 'globe', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](67, 'Google Maps', '/pages/maps/googlemaps', null, 'map-marker', null, false, 66),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](68, 'Leaflet Maps', '/pages/maps/leafletmaps', null, 'map-o', null, false, 66),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](70, 'Charts', null, null, 'area-chart', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](71, 'Bar Charts', '/pages/charts/bar', null, 'bar-chart', null, false, 70),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](72, 'Pie Charts', '/pages/charts/pie', null, 'pie-chart', null, false, 70),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](73, 'Line Charts', '/pages/charts/line', null, 'line-chart', null, false, 70),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](74, 'Bubble Charts', '/pages/charts/bubble', null, 'comment-o', null, false, 70)
];


/***/ })

}]);
//# sourceMappingURL=app-pages-dynamic-menu-dynamic-menu-module~app-pages-membership-membership-module~app-pages-pages-mo~5cadc352.js.map