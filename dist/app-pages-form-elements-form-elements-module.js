(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-form-elements-form-elements-module"],{

/***/ "./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js":
/*!*******************************************************!*\
  !*** ./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ckeditor_module_1 = __webpack_require__(/*! ./src/ckeditor.module */ "./node_modules/ng2-ckeditor/lib/src/ckeditor.module.js");
exports.CKEditorModule = ckeditor_module_1.CKEditorModule;
var ckeditor_component_1 = __webpack_require__(/*! ./src/ckeditor.component */ "./node_modules/ng2-ckeditor/lib/src/ckeditor.component.js");
exports.CKEditorComponent = ckeditor_component_1.CKEditorComponent;
var ckbutton_directive_1 = __webpack_require__(/*! ./src/ckbutton.directive */ "./node_modules/ng2-ckeditor/lib/src/ckbutton.directive.js");
exports.CKButtonDirective = ckbutton_directive_1.CKButtonDirective;
var ckgroup_directive_1 = __webpack_require__(/*! ./src/ckgroup.directive */ "./node_modules/ng2-ckeditor/lib/src/ckgroup.directive.js");
exports.CKGroupDirective = ckgroup_directive_1.CKGroupDirective;
//# sourceMappingURL=ng2-ckeditor.js.map

/***/ }),

/***/ "./node_modules/ng2-ckeditor/lib/src/ckbutton.directive.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ng2-ckeditor/lib/src/ckbutton.directive.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * CKGroup component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500">
 *      <ckbutton [name]="'SaveButton'" [command]="'saveCommand'" (click)="save($event)"
 *                [icon]="'/save.png'" [toolbar]="'customGroup,1'" [label]="'Save'">
 *      </ckbutton>
 *   </ckeditor>
 */
var CKButtonDirective = /** @class */ (function () {
    function CKButtonDirective() {
        this.click = new core_1.EventEmitter();
    }
    CKButtonDirective.prototype.initialize = function (editor) {
        var _this = this;
        editor.instance.addCommand(this.command, {
            exec: function (evt) {
                _this.click.emit(evt);
            },
        });
        editor.instance.ui.addButton(this.name, {
            label: this.label,
            command: this.command,
            toolbar: this.toolbar,
            icon: this.icon,
        });
    };
    CKButtonDirective.prototype.ngOnInit = function () {
        if (!this.name)
            throw new Error('Attribute "name" is required on <ckbutton>');
        if (!this.command)
            throw new Error('Attribute "command" is required on <ckbutton>');
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKButtonDirective.prototype, "click", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CKButtonDirective.prototype, "label", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CKButtonDirective.prototype, "command", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CKButtonDirective.prototype, "toolbar", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CKButtonDirective.prototype, "name", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CKButtonDirective.prototype, "icon", void 0);
    CKButtonDirective = __decorate([
        core_1.Directive({
            selector: 'ckbutton',
        })
    ], CKButtonDirective);
    return CKButtonDirective;
}());
exports.CKButtonDirective = CKButtonDirective;
//# sourceMappingURL=ckbutton.directive.js.map

/***/ }),

/***/ "./node_modules/ng2-ckeditor/lib/src/ckeditor.component.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ng2-ckeditor/lib/src/ckeditor.component.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var ckbutton_directive_1 = __webpack_require__(/*! ./ckbutton.directive */ "./node_modules/ng2-ckeditor/lib/src/ckbutton.directive.js");
var ckgroup_directive_1 = __webpack_require__(/*! ./ckgroup.directive */ "./node_modules/ng2-ckeditor/lib/src/ckgroup.directive.js");
/**
 * CKEditor component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500"></ckeditor>
 */
var CKEditorComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function CKEditorComponent(zone) {
        this.zone = zone;
        this.change = new core_1.EventEmitter();
        this.editorChange = new core_1.EventEmitter();
        this.ready = new core_1.EventEmitter();
        this.blur = new core_1.EventEmitter();
        this.focus = new core_1.EventEmitter();
        this.contentDom = new core_1.EventEmitter();
        this.fileUploadRequest = new core_1.EventEmitter();
        this.fileUploadResponse = new core_1.EventEmitter();
        this.paste = new core_1.EventEmitter();
        this.drop = new core_1.EventEmitter();
        this._value = '';
    }
    CKEditorComponent_1 = CKEditorComponent;
    Object.defineProperty(CKEditorComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this.onChange(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    CKEditorComponent.prototype.ngOnChanges = function (changes) {
        if (changes.readonly && this.instance) {
            this.instance.setReadOnly(changes.readonly.currentValue);
        }
    };
    /**
     * On component destroy
     */
    CKEditorComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        if (this.instance) {
            setTimeout(function () {
                _this.instance.removeAllListeners();
                CKEDITOR.instances[_this.instance.name].destroy();
                _this.instance.destroy();
                _this.instance = null;
            });
        }
    };
    /**
     * On component view init
     */
    CKEditorComponent.prototype.ngAfterViewInit = function () {
        this.ckeditorInit(this.config || {});
    };
    /**
     * On component view checked
     */
    CKEditorComponent.prototype.ngAfterViewChecked = function () {
        this.ckeditorInit(this.config || {});
    };
    /**
     * Value update process
     */
    CKEditorComponent.prototype.updateValue = function (value) {
        var _this = this;
        this.zone.run(function () {
            _this.value = value;
            _this.onChange(value);
            _this.onTouched();
            _this.change.emit(value);
        });
    };
    /**
     * CKEditor init
     */
    CKEditorComponent.prototype.ckeditorInit = function (config) {
        var _this = this;
        if (typeof CKEDITOR === 'undefined') {
            console.warn('CKEditor 4.x is missing (http://ckeditor.com/)');
        }
        else {
            // Check textarea exists
            if (this.instance || !this.documentContains(this.host.nativeElement)) {
                return;
            }
            if (this.readonly) {
                config.readOnly = this.readonly;
            }
            // CKEditor replace textarea
            this.instance = CKEDITOR.replace(this.host.nativeElement, config);
            // Set initial value
            this.instance.setData(this.value);
            // listen for instanceReady event
            this.instance.on('instanceReady', function (evt) {
                // if value has changed while instance loading
                // update instance with current component value
                if (_this.instance.getData() !== _this.value) {
                    _this.instance.setData(_this.value);
                }
                // send the evt to the EventEmitter
                _this.ready.emit(evt);
            });
            // CKEditor change event
            this.instance.on('change', function (evt) {
                _this.onTouched();
                var value = _this.instance.getData();
                if (_this.value !== value) {
                    // Debounce update
                    if (_this.debounce) {
                        if (_this.debounceTimeout)
                            clearTimeout(_this.debounceTimeout);
                        _this.debounceTimeout = setTimeout(function () {
                            _this.updateValue(value);
                            _this.debounceTimeout = null;
                        }, parseInt(_this.debounce));
                        // Live update
                    }
                    else {
                        _this.updateValue(value);
                    }
                }
                // Original ckeditor event dispatch
                _this.editorChange.emit(evt);
            });
            // CKEditor blur event
            this.instance.on('blur', function (evt) {
                _this.blur.emit(evt);
            });
            // CKEditor focus event
            this.instance.on('focus', function (evt) {
                _this.focus.emit(evt);
            });
            // CKEditor contentDom event
            this.instance.on('contentDom', function (evt) {
                _this.contentDom.emit(evt);
            });
            // CKEditor fileUploadRequest event
            this.instance.on('fileUploadRequest', function (evt) {
                _this.fileUploadRequest.emit(evt);
            });
            // CKEditor fileUploadResponse event
            this.instance.on('fileUploadResponse', function (evt) {
                _this.fileUploadResponse.emit(evt);
            });
            // CKEditor paste event
            this.instance.on('paste', function (evt) {
                _this.paste.emit(evt);
            });
            // CKEditor drop event
            this.instance.on('drop', function (evt) {
                _this.drop.emit(evt);
            });
            // Add Toolbar Groups to Editor. This will also add Buttons within groups.
            this.toolbarGroups.forEach(function (group) {
                group.initialize(_this);
            });
            // Add Toolbar Buttons to Editor.
            this.toolbarButtons.forEach(function (button) {
                button.initialize(_this);
            });
        }
    };
    /**
     * Implements ControlValueAccessor
     */
    CKEditorComponent.prototype.writeValue = function (value) {
        this._value = value;
        if (this.instance)
            this.instance.setData(value);
    };
    CKEditorComponent.prototype.onChange = function (_) { };
    CKEditorComponent.prototype.onTouched = function () { };
    CKEditorComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    CKEditorComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    CKEditorComponent.prototype.documentContains = function (node) {
        return document.contains ? document.contains(node) : document.body.contains(node);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "config", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], CKEditorComponent.prototype, "readonly", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CKEditorComponent.prototype, "debounce", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "change", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "editorChange", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "ready", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "blur", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "focus", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "contentDom", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "fileUploadRequest", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "fileUploadResponse", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "paste", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "drop", void 0);
    __decorate([
        core_1.ViewChild('host'),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "host", void 0);
    __decorate([
        core_1.ContentChildren(ckbutton_directive_1.CKButtonDirective),
        __metadata("design:type", core_1.QueryList)
    ], CKEditorComponent.prototype, "toolbarButtons", void 0);
    __decorate([
        core_1.ContentChildren(ckgroup_directive_1.CKGroupDirective),
        __metadata("design:type", core_1.QueryList)
    ], CKEditorComponent.prototype, "toolbarGroups", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CKEditorComponent.prototype, "value", null);
    CKEditorComponent = CKEditorComponent_1 = __decorate([
        core_1.Component({
            selector: 'ckeditor',
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return CKEditorComponent_1; }),
                    multi: true,
                },
            ],
            template: "<textarea #host></textarea>",
        }),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], CKEditorComponent);
    return CKEditorComponent;
    var CKEditorComponent_1;
}());
exports.CKEditorComponent = CKEditorComponent;
//# sourceMappingURL=ckeditor.component.js.map

/***/ }),

/***/ "./node_modules/ng2-ckeditor/lib/src/ckeditor.module.js":
/*!**************************************************************!*\
  !*** ./node_modules/ng2-ckeditor/lib/src/ckeditor.module.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var ckeditor_component_1 = __webpack_require__(/*! ./ckeditor.component */ "./node_modules/ng2-ckeditor/lib/src/ckeditor.component.js");
var ckbutton_directive_1 = __webpack_require__(/*! ./ckbutton.directive */ "./node_modules/ng2-ckeditor/lib/src/ckbutton.directive.js");
var ckgroup_directive_1 = __webpack_require__(/*! ./ckgroup.directive */ "./node_modules/ng2-ckeditor/lib/src/ckgroup.directive.js");
/**
 * CKEditorModule
 */
var CKEditorModule = /** @class */ (function () {
    function CKEditorModule() {
    }
    CKEditorModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [ckeditor_component_1.CKEditorComponent, ckbutton_directive_1.CKButtonDirective, ckgroup_directive_1.CKGroupDirective],
            exports: [ckeditor_component_1.CKEditorComponent, ckbutton_directive_1.CKButtonDirective, ckgroup_directive_1.CKGroupDirective],
        })
    ], CKEditorModule);
    return CKEditorModule;
}());
exports.CKEditorModule = CKEditorModule;
//# sourceMappingURL=ckeditor.module.js.map

/***/ }),

/***/ "./node_modules/ng2-ckeditor/lib/src/ckgroup.directive.js":
/*!****************************************************************!*\
  !*** ./node_modules/ng2-ckeditor/lib/src/ckgroup.directive.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var ckbutton_directive_1 = __webpack_require__(/*! ./ckbutton.directive */ "./node_modules/ng2-ckeditor/lib/src/ckbutton.directive.js");
/**
 * CKGroup component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500">
 *      <ckgroup [name]="'exampleGroup2'" [previous]="'1'" [subgroupOf]="'exampleGroup1'">
 *          .
 *          .
 *      </ckgroup>
 *   </ckeditor>
 */
var CKGroupDirective = /** @class */ (function () {
    function CKGroupDirective() {
    }
    CKGroupDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        // Reconfigure each button's toolbar property within ckgroup to hold its parent's name
        this.toolbarButtons.forEach(function (button) { return (button.toolbar = _this.name); });
    };
    CKGroupDirective.prototype.initialize = function (editor) {
        editor.instance.ui.addToolbarGroup(this.name, this.previous, this.subgroupOf);
        // Initialize each button within ckgroup
        this.toolbarButtons.forEach(function (button) {
            button.initialize(editor);
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CKGroupDirective.prototype, "name", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CKGroupDirective.prototype, "previous", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CKGroupDirective.prototype, "subgroupOf", void 0);
    __decorate([
        core_1.ContentChildren(ckbutton_directive_1.CKButtonDirective),
        __metadata("design:type", core_1.QueryList)
    ], CKGroupDirective.prototype, "toolbarButtons", void 0);
    CKGroupDirective = __decorate([
        core_1.Directive({
            selector: 'ckgroup',
        })
    ], CKGroupDirective);
    return CKGroupDirective;
}());
exports.CKGroupDirective = CKGroupDirective;
//# sourceMappingURL=ckgroup.directive.js.map

/***/ }),

/***/ "./src/app/pages/form-elements/controls/controls.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/form-elements/controls/controls.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Form controls</h2>\r\n<p class=\"text-muted\">Form controls supported in all example form elements. Form controls automatically receives global styling. The <code>.form-group</code> class is the easiest way to add some structure to form elements like &lt;input&gt;, &lt;textarea&gt; and &lt;select&gt;.</p>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-lg-6 mb-4\">\r\n        <div widget class=\"card border-0 box-shadow\">\r\n            <div class=\"card-header transparent border-0 text-muted\">\r\n                <h5 class=\"mb-0\">Basic Inputs</h5>\r\n                <div class=\"widget-controls\"> \r\n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\r\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\r\n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\r\n                </div>        \r\n            </div>\r\n            <div class=\"card-body pt-0 widget-body\"> \r\n                <p class=\"text-left fs-13 text-gray\">Basic Form Input with diffrent elements and styles.</p>\r\n               \r\n                <form>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"input-1\">Text</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"input-1\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"input-2\">Password</label>\r\n                        <input type=\"password\" class=\"form-control\" id=\"input-2\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"input-3\">With placeholder</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"input-3\" placeholder=\"Enter your text here...\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"input-4\">With default value</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"input-4\" value=\"This is default value\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"input-5\">Rounded Corners</label>\r\n                        <input type=\"text\" class=\"form-control form-control-rounded\" id=\"input-5\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"input-6\">With help text</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"input-6\">\r\n                        <small class=\"text-muted\">A block of help text that breaks onto a new line and may extend beyond one line.</small>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"input-7\">Disabled</label>\r\n                        <input type=\"email\" class=\"form-control\" id=\"input-7\" disabled value=\"admin@themeseason.com\">\r\n                    </div>                    \r\n                    <div class=\"form-group\">\r\n                        <label for=\"textarea-1\">Textarea</label>\r\n                        <textarea class=\"form-control\" id=\"textarea-1\"></textarea>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"input-8\">Small Input</label>\r\n                        <input type=\"text\" class=\"form-control form-control-sm\" id=\"input-8\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"input-9\">Large Input</label>\r\n                        <input type=\"text\" class=\"form-control form-control-lg\" id=\"input-9\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"input-10\">Number</label>\r\n                        <input type=\"number\" class=\"form-control\" value=\"42\" id=\"input-10\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"input-11\">Date and time</label>\r\n                        <input type=\"datetime-local\" class=\"form-control\"  value=\"2011-08-19T13:45:00\" id=\"input-11\">                       \r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"input-12\">Date</label>\r\n                        <input type=\"date\" class=\"form-control\" value=\"2011-08-19\" id=\"input-12\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"input-13\">Month</label>\r\n                        <input type=\"month\" class=\"form-control\" value=\"2011-08\" id=\"input-13\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"input-14\">Week</label>\r\n                        <input type=\"week\" class=\"form-control\" value=\"2011-W33\" id=\"input-14\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"input-15\">Time</label>\r\n                        <input type=\"time\" class=\"form-control\" value=\"13:45:00\" id=\"input-15\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"input-16\">Color</label>\r\n                        <input type=\"color\" class=\"form-control\" value=\"#DD1B16\" id=\"input-16\">\r\n                        <small class=\"text-muted\"><strong>Note:</strong> type=\"color\" is not supported in Internet Explorer 11 and earlier versions or Safari 9.1 and earlier versions.</small>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-6 mb-4\">\r\n        <div widget class=\"card border-0 box-shadow\">\r\n            <div class=\"card-header transparent border-0 text-muted\">\r\n                <h5 class=\"mb-0\">Input group</h5>\r\n                <div class=\"widget-controls\"> \r\n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\r\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\r\n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\r\n                </div>        \r\n            </div>\r\n            <div class=\"card-body pt-0 widget-body\">\r\n                <p class=\"text-left fs-13 text-gray\">Easily extend form controls by adding text, buttons, or button groups on either side of textual <code>&lt;input&gt;</code>s.</p>\r\n               \r\n                 <div class=\"form-group\">\r\n                     <div class=\"input-group\">\r\n                        <input type=\"text\" class=\"form-control\">\r\n                        <div class=\"input-group-append\">\r\n                            <span class=\"input-group-text\"><i class=\"fa fa-user\"></i></span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                 <div class=\"form-group\">\r\n                    <label class=\"sr-only\" for=\"exampleInputAmount\">Amount (in dollars)</label>\r\n                    <div class=\"input-group\">\r\n                        <div class=\"input-group-prepend\"><span class=\"input-group-text\">$</span></div>\r\n                            <input type=\"text\" class=\"form-control\">\r\n                        <div class=\"input-group-append\"><span class=\"input-group-text\">.00</span></div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <div class=\"input-group\">\r\n                        <input type=\"email\" class=\"form-control\" placeholder=\"email\">\r\n                        <span class=\"input-group-append\">\r\n                            <span class=\"input-group-text text-primary\">@domain.com</span>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <div class=\"input-group\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\">\r\n                        <span class=\"input-group-append\">\r\n                            <button type=\"button\" class=\"btn btn-info\">Go!</button>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <div class=\"input-group\">\r\n                        <div class=\"input-group-prepend\"><span class=\"input-group-text\">$</span></div>\r\n                        <div class=\"input-group-prepend\"><span class=\"input-group-text\">0.00</span></div>\r\n                        <input type=\"text\" class=\"form-control\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <div class=\"input-group\">\r\n                        <span class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\"><input type=\"checkbox\"></span>\r\n                        </span>\r\n                        <input type=\"text\" class=\"form-control\">\r\n                    </div>\r\n                </div>\r\n              \r\n                <div class=\"form-group\">\r\n                    <div class=\"input-group\">\r\n                        <div class=\"input-group-prepend\">\r\n                            <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Action</button>\r\n                            <div class=\"dropdown-menu\">\r\n                                <a class=\"dropdown-item\" href=\"javascript:void(0);\">Action</a>\r\n                                <a class=\"dropdown-item\" href=\"javascript:void(0);\">Another action</a>\r\n                            </div>\r\n                        </div>\r\n                        <input type=\"text\" class=\"form-control\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <div class=\"input-group\">\r\n                        <div class=\"input-group-prepend\">\r\n                            <button type=\"button\" class=\"btn btn-secondary\">Action</button>\r\n                            <button type=\"button\" class=\"btn btn-secondary dropdown-toggle dropdown-toggle-split\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                <span class=\"sr-only\">Toggle Dropdown</span>\r\n                            </button>\r\n                            <div class=\"dropdown-menu\">\r\n                                <a class=\"dropdown-item\" href=\"javascript:void(0);\">Action</a>\r\n                                <a class=\"dropdown-item\" href=\"javascript:void(0);\">Another action</a>\r\n                            </div>\r\n                        </div>\r\n                        <input type=\"text\" class=\"form-control\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <div class=\"input-group\">                        \r\n                        <input type=\"text\" class=\"form-control\">\r\n                        <div class=\"input-group-append\">\r\n                            <button type=\"button\" class=\"btn btn-secondary\">Action</button>\r\n                            <button type=\"button\" class=\"btn btn-secondary dropdown-toggle dropdown-toggle-split\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                <span class=\"sr-only\">Toggle Dropdown</span>\r\n                            </button>\r\n                            <div class=\"dropdown-menu\">\r\n                                <a class=\"dropdown-item\" href=\"javascript:void(0);\">Action</a>\r\n                                <a class=\"dropdown-item\" href=\"javascript:void(0);\">Another action</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <div class=\"input-group\">\r\n                        <div class=\"input-group-prepend dropright\">\r\n                            <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                Dropright\r\n                            </button>\r\n                            <div class=\"dropdown-menu\">\r\n                                <a class=\"dropdown-item\" href=\"javascript:void(0);\">Action</a>\r\n                                <a class=\"dropdown-item\" href=\"javascript:void(0);\">Another action</a>\r\n                            </div>\r\n                        </div>\r\n                        <input type=\"text\" class=\"form-control\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <div class=\"input-group\">                        \r\n                        <input type=\"text\" class=\"form-control\">\r\n                        <div class=\"input-group-append dropleft\">\r\n                            <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                Dropleft\r\n                            </button>\r\n                            <div class=\"dropdown-menu\">\r\n                                <a class=\"dropdown-item\" href=\"javascript:void(0);\">Action</a>\r\n                                <a class=\"dropdown-item\" href=\"javascript:void(0);\">Another action</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>                \r\n\r\n                <div class=\"form-group\">\r\n                    <div class=\"input-group\">\r\n                        <div class=\"input-group-prepend\">\r\n                            <button class=\"btn btn-danger\" type=\"button\">Hate it</button>\r\n                        </div>\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Product name\">\r\n                        <div class=\"input-group-append\">\r\n                            <button class=\"btn btn-success\" type=\"button\">Love it</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <div class=\"input-group input-group-sm\">                        \r\n                        <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\"><i class=\"fa fa-paperclip\"></i></span>\r\n                        </div>\r\n                        <input type=\"text\" class=\"form-control\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <div class=\"input-group input-group-lg\">\r\n                         <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\"><i class=\"fa fa-paperclip\"></i></span>\r\n                        </div>\r\n                        <input type=\"text\" class=\"form-control\">\r\n                    </div>\r\n                </div>               \r\n\r\n                <h5 class=\"text-left mt-4\">Input colors</h5>\r\n\r\n                <div class=\"form-group has-success\">\r\n                    <label class=\"form-control-label\" for=\"inputSuccess1\">Input with success</label>\r\n                    <input type=\"text\" class=\"form-control form-control-success\" id=\"inputSuccess1\">\r\n                </div>\r\n\r\n                <div class=\"form-group has-warning\">\r\n                    <label class=\"form-control-label\" for=\"inputWarning1\">Input with warning</label>\r\n                    <input type=\"text\" class=\"form-control form-control-warning\" id=\"inputWarning1\">\r\n                </div>\r\n\r\n                <div class=\"form-group has-danger\">\r\n                    <label class=\"form-control-label\" for=\"inputDanger1\">Input with danger</label>\r\n                    <input type=\"text\" class=\"form-control form-control-danger\" id=\"inputDanger1\">\r\n                </div>\r\n\r\n                 <div class=\"form-group\">\r\n                    <label for=\"input-primary\" class=\"text-primary\">Primary input</label>\r\n                    <input type=\"text\" class=\"form-control bg-primary text-white\" id=\"input-primary\">\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"input-success\" class=\"text-success\">Success input</label>\r\n                    <input type=\"text\" class=\"form-control bg-success text-white\" id=\"input-success\">\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"input-info\" class=\"text-info\">Info input</label>\r\n                    <input type=\"text\" class=\"form-control bg-info text-white\" id=\"input-info\">\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"input-warning\" class=\"text-warning\">Warning input</label>\r\n                    <input type=\"text\" class=\"form-control bg-warning text-white\" id=\"input-warning\">\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"input-danger\" class=\"text-danger\">Danger input</label>\r\n                    <input type=\"text\" class=\"form-control bg-danger text-white\" id=\"input-danger\">\r\n                </div>   \r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-12 mb-4\">\r\n        <div widget class=\"card border-0 box-shadow\">\r\n            <div class=\"card-header transparent border-0 text-muted\">\r\n                <h5 class=\"mb-0\">Checkboxes and Radio Buttons</h5>\r\n                <div class=\"widget-controls\"> \r\n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\r\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\r\n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\r\n                </div>        \r\n            </div>\r\n            <div class=\"card-body pt-0 pb-0 widget-body\">\r\n                <div class=\"row mt-2\">\r\n                    <div class=\"col-md-4 mb-3\">   \r\n                        <h6>Custom checkbox</h6>\r\n                        <div class=\"form-group\">                        \r\n                            <div class=\"custom-control custom-checkbox\">\r\n                                <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkboxDefault\" checked>\r\n                                <label class=\"custom-control-label\" for=\"checkboxDefault\">Custom</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-checkbox\">\r\n                                <input type=\"checkbox\" class=\"custom-control-input checkbox-primary\" id=\"checkboxPrimary\" checked>\r\n                                <label class=\"custom-control-label\" for=\"checkboxPrimary\">Primary</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-checkbox\">\r\n                                <input type=\"checkbox\" class=\"custom-control-input checkbox-success\" id=\"checkboxSuccess\" checked>\r\n                                <label class=\"custom-control-label\" for=\"checkboxSuccess\">Success</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-checkbox\">\r\n                                <input type=\"checkbox\" class=\"custom-control-input checkbox-info\" id=\"checkboxInfo\" checked>\r\n                                <label class=\"custom-control-label\" for=\"checkboxInfo\">Info</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-checkbox\">\r\n                                <input type=\"checkbox\" class=\"custom-control-input checkbox-warning\" id=\"checkboxWarning\" checked>\r\n                                <label class=\"custom-control-label\" for=\"checkboxWarning\">Warning</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-checkbox\">\r\n                                <input type=\"checkbox\" class=\"custom-control-input checkbox-danger\" id=\"checkboxDanger\" checked>\r\n                                <label class=\"custom-control-label\" for=\"checkboxDanger\">Danger</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-checkbox\">\r\n                                <input type=\"checkbox\" class=\"custom-control-input checkbox-dark-gray\" id=\"checkboxMain\" checked>\r\n                                <label class=\"custom-control-label\" for=\"checkboxMain\">Dark gray</label>\r\n                            </div>\r\n                        </div>\r\n                    </div> \r\n                    <div class=\"col-md-4 mb-3\">   \r\n                        <h6>Circled checkbox</h6>\r\n                        <div class=\"form-group\">                        \r\n                            <div class=\"custom-control custom-checkbox checkbox-circle\">\r\n                                <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkboxDefault2\" checked>\r\n                                <label class=\"custom-control-label\" for=\"checkboxDefault2\">Custom</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-checkbox checkbox-circle\">\r\n                                <input type=\"checkbox\" class=\"custom-control-input checkbox-primary\" id=\"checkboxPrimary2\" checked>\r\n                                <label class=\"custom-control-label\" for=\"checkboxPrimary2\">Primary</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-checkbox checkbox-circle\">\r\n                                <input type=\"checkbox\" class=\"custom-control-input checkbox-success\" id=\"checkboxSuccess2\" checked>\r\n                                <label class=\"custom-control-label\" for=\"checkboxSuccess2\">Success</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-checkbox checkbox-circle\">\r\n                                <input type=\"checkbox\" class=\"custom-control-input checkbox-info\" id=\"checkboxInfo2\" checked>\r\n                                <label class=\"custom-control-label\" for=\"checkboxInfo2\">Info</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-checkbox checkbox-circle\">\r\n                                <input type=\"checkbox\" class=\"custom-control-input checkbox-warning\" id=\"checkboxWarning2\" checked>\r\n                                <label class=\"custom-control-label\" for=\"checkboxWarning2\">Warning</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-checkbox checkbox-circle\">\r\n                                <input type=\"checkbox\" class=\"custom-control-input checkbox-danger\" id=\"checkboxDanger2\" checked>\r\n                                <label class=\"custom-control-label\" for=\"checkboxDanger2\">Danger</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-checkbox checkbox-circle\">\r\n                                <input type=\"checkbox\" class=\"custom-control-input checkbox-dark-gray\" id=\"checkboxMain2\" checked>\r\n                                <label class=\"custom-control-label\" for=\"checkboxMain2\">Dark gray</label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-4\">   \r\n                        <h6>Custom radio buttons</h6>\r\n                        <div class=\"form-group\">                        \r\n                            <div class=\"custom-control custom-radio\">\r\n                                <input type=\"radio\" name=\"radio\" class=\"custom-control-input\" id=\"radioDefault\">\r\n                                <label class=\"custom-control-label\" for=\"radioDefault\">Custom</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-radio\">\r\n                                <input type=\"radio\" name=\"radio\" class=\"custom-control-input radio-primary\" id=\"radioPrimary\">\r\n                                <label class=\"custom-control-label\" for=\"radioPrimary\">Primary</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-radio\">\r\n                                <input type=\"radio\" name=\"radio\" class=\"custom-control-input radio-success\" id=\"radioSuccess\" checked>\r\n                                <label class=\"custom-control-label\" for=\"radioSuccess\">Success</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-radio\">\r\n                                <input type=\"radio\" name=\"radio\" class=\"custom-control-input radio-info\" id=\"radioInfo\">\r\n                                <label class=\"custom-control-label\" for=\"radioInfo\">Info</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-radio\">\r\n                                <input type=\"radio\" name=\"radio\" class=\"custom-control-input radio-warning\" id=\"radioWarning\">\r\n                                <label class=\"custom-control-label\" for=\"radioWarning\">Warning</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-radio\">\r\n                                <input type=\"radio\" name=\"radio\" class=\"custom-control-input radio-danger\" id=\"radioDanger\">\r\n                                <label class=\"custom-control-label\" for=\"radioDanger\">Danger</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-radio\">\r\n                                <input type=\"radio\" name=\"radio\" class=\"custom-control-input radio-dark-gray\" id=\"radioMain\">\r\n                                <label class=\"custom-control-label\" for=\"radioMain\">Dark gray</label>\r\n                            </div>\r\n                        </div>\r\n                    </div>  \r\n\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row mb-4\">\r\n    <div class=\"col\">\r\n        <div widget class=\"card border-0 box-shadow\">\r\n            <div class=\"card-header transparent border-0 text-muted\">\r\n                <h5 class=\"mb-0\">Selects</h5>\r\n                <div class=\"widget-controls\"> \r\n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\r\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\r\n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\r\n                </div>         \r\n            </div>\r\n            <div class=\"card-body pt-0 widget-body\"> \r\n               \r\n                <div class=\"row\">   \r\n                    <div class=\"col-lg-6 mb-4\"> \r\n\r\n                        <div class=\"form-group\">\r\n                            <label for=\"exampleSelect1\">Basic select</label>\r\n                            <select class=\"form-control\" id=\"exampleSelect1\">\r\n                                <option>1</option>\r\n                                <option>2</option>\r\n                                <option>3</option>\r\n                                <option>4</option>\r\n                                <option>5</option>\r\n                            </select>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label for=\"exampleSelect3\">Custom select</label>\r\n                            <select class=\"form-control custom-select\" id=\"exampleSelect3\">\r\n                                <option selected>Open this select menu</option>\r\n                                <option value=\"1\">One</option>\r\n                                <option value=\"2\">Two</option>\r\n                                <option value=\"3\">Three</option>\r\n                            </select>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label for=\"exampleSelect2\">Multiple select</label>\r\n                            <select multiple class=\"form-control\" id=\"exampleSelect2\">\r\n                                <option>1</option>\r\n                                <option>2</option>\r\n                                <option>3</option>\r\n                                <option>4</option>\r\n                                <option>5</option>\r\n                            </select>\r\n                        </div>             \r\n                        \r\n                    </div>\r\n                    <div class=\"col-lg-6\">\r\n\r\n                        <p class=\"text-left fs-13 text-gray\">Customizable dropdown multiselect in AngularX, TypeScript with bootstrap css. More information: <a href=\"https://github.com/softsimon/angular-2-dropdown-multiselect\" target=\"_blank\">Angular 2 Dropdown Multiselect</a></p>\r\n                        <div class=\" mb-4\">   \r\n                            <h6>Default</h6>\r\n                            <ss-multiselect-dropdown [options]=\"firstControlOptions\" [(ngModel)]=\"firstControlModel\" (ngModelChange)=\"onChange()\"></ss-multiselect-dropdown>\r\n                        </div> \r\n                        <div class=\"mb-4\">   \r\n                            <h6>Select all/none</h6>\r\n                            <ss-multiselect-dropdown [options]=\"secondControlOptions\" [texts]=\"secondControlTexts\" [settings]=\"secondControlSettings\" [(ngModel)]=\"secondControlModel\"></ss-multiselect-dropdown>\r\n                        </div>\r\n                        <div>   \r\n                            <h6>Select with search filter</h6>\r\n                            <ss-multiselect-dropdown class=\"custom-multiselect\" [options]=\"thirdControlOptions\" [texts]=\"thirdControlTexts\" [settings]=\"thirdControlSettings\" [(ngModel)]=\"thirdControlModel\"></ss-multiselect-dropdown>\r\n                        </div>       \r\n                      \r\n                    </div>                   \r\n                </div>  \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row mb-4\">\r\n    <div class=\"col\">\r\n        <div widget class=\"card border-0 box-shadow\">\r\n            <div class=\"card-header transparent border-0 text-muted\">\r\n                <h5 class=\"mb-0\">Datepicker</h5>\r\n                <div class=\"widget-controls\"> \r\n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\r\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\r\n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\r\n                </div>         \r\n            </div>\r\n            <div class=\"card-body pt-0 widget-body\"> \r\n                <p class=\"text-left fs-13 text-gray\">A lightweight and highly configurable datepicker directive. More information: <a href=\"https://ng-bootstrap.github.io/#/components/datepicker\" target=\"_blank\">ng-bootstrap datepicker</a></p>\r\n               \r\n                <div class=\"row\">   \r\n                    <div class=\"col-lg-4 mb-4\"> \r\n                        <h6>Basic datepicker</h6>\r\n                        <ngb-datepicker #dp [(ngModel)]=\"model\" (navigate)=\"date = $event.next\"></ngb-datepicker>\r\n                        <hr/>\r\n                        <button class=\"btn btn-sm btn-outline-primary\" (click)=\"selectToday()\">Select Today</button>\r\n                        <button class=\"btn btn-sm btn-outline-primary\" (click)=\"dp.navigateTo()\">To current month</button>\r\n                        <button class=\"btn btn-sm btn-outline-primary\" (click)=\"dp.navigateTo({year: 2013, month: 2})\">To Feb 2013</button>\r\n                        <hr/>\r\n                        <pre>Month: {{ date.month }}.{{ date.year }}</pre>\r\n                        <pre>Model: {{ model | json }}</pre>                        \r\n                    </div>\r\n                    <div class=\"col-lg-8 mb-4\">\r\n                        <h6>Multiple months</h6>\r\n                        <ngb-datepicker [displayMonths]=\"displayMonths\" [navigation]=\"navigation\"></ngb-datepicker>\r\n                        <hr/>\r\n                        <div class=\"form-group d-inline-block align-top\">\r\n                            <div class=\"input-group\">\r\n                                <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [displayMonths]=\"displayMonths\" [navigation]=\"navigation\" ngbDatepicker #d=\"ngbDatepicker\">\r\n                                <div class=\"input-group-append\" (click)=\"d.toggle()\">\r\n                                    <span class=\"input-group-text\"><i class=\"fa fa-calendar\"></i></span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <select class=\"custom-select mw-100 w-25\" [(ngModel)]=\"displayMonths\">\r\n                            <option [ngValue]=\"1\">One month</option>\r\n                            <option [ngValue]=\"2\">Two months</option>\r\n                            <option [ngValue]=\"3\">Three months</option>\r\n                        </select>\r\n                        <select class=\"custom-select mw-100 w-25\" [(ngModel)]=\"navigation\">\r\n                            <option value=\"none\">Without navigation</option>\r\n                            <option value=\"select\">With select boxes</option>\r\n                            <option value=\"arrows\">Without select boxes</option>\r\n                        </select>                      \r\n                    </div>         \r\n                </div> \r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-4 mb-4\">\r\n                        <h6>Datepicker in a popup</h6>\r\n                        <form class=\"form-inline\">\r\n                            <div class=\"form-group\">\r\n                                <div class=\"input-group\">\r\n                                <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"modelPopup\" ngbDatepicker #p=\"ngbDatepicker\">\r\n                                <div class=\"input-group-append\" (click)=\"p.toggle()\">\r\n                                    <span class=\"input-group-text\"><i class=\"fa fa-calendar\"></i></span>\r\n                                </div>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                        <hr/>\r\n                        <pre>Model: {{ modelPopup | json }}</pre>\r\n                    </div> \r\n                    <div class=\"col-lg-4 mb-4\">\r\n                        <h6>Custom day view</h6>\r\n                        <p class=\"text-left fs-13 text-gray\">This datepicker uses a custom template to display days. All week-ends are displayed with an orange background.</p>\r\n                        <form class=\"form-inline\">\r\n                            <div class=\"form-group\">\r\n                                <div class=\"input-group\">\r\n                                <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n                                        name=\"dp\" [(ngModel)]=\"modelCustom\" ngbDatepicker [dayTemplate]=\"customDay\" [markDisabled]=\"isDisabled\" #dc=\"ngbDatepicker\">\r\n                                <div class=\"input-group-append\" (click)=\"dc.toggle()\" >\r\n                                     <span class=\"input-group-text\"><i class=\"fa fa-calendar\"></i></span>\r\n                                </div>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                        <ng-template #customDay let-date=\"date\" let-currentMonth=\"currentMonth\" let-selected=\"selected\" let-disabled=\"disabled\">\r\n                            <span class=\"custom-day\" [class.weekend]=\"isWeekend(date)\" [class.bg-primary]=\"selected\" [class.hidden]=\"date.month !== currentMonth\" [class.text-muted]=\"disabled\">\r\n                                {{ date.day }}\r\n                            </span>\r\n                        </ng-template>\r\n                    </div> \r\n                    <div class=\"col-lg-4\">\r\n                        <h6>Disabled datepicker</h6>\r\n                        <ngb-datepicker [(ngModel)]=\"modelDisabled\" [disabled]=\"disabled\"></ngb-datepicker>\r\n                        <hr/>\r\n                        <button class=\"btn btn-sm btn-outline-{{disabled ? 'danger' : 'success'}}\" (click)=\"disabled = !disabled\">\r\n                            {{ disabled ? \"Disabled\" : \"Enabled\"}}\r\n                        </button>\r\n\r\n                    </div> \r\n                </div> \r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row mb-4\">\r\n    <div class=\"col\">\r\n        <div widget class=\"card border-0 box-shadow\">\r\n            <div class=\"card-header transparent border-0 text-muted\">\r\n                <h5 class=\"mb-0\">Timepicker</h5>\r\n                <div class=\"widget-controls\"> \r\n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\r\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\r\n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\r\n                </div>         \r\n            </div>\r\n            <div class=\"card-body pt-0 widget-body\"> \r\n                <p class=\"text-left fs-13 text-gray\">A lightweight & configurable timepicker directive. More information: <a href=\"https://ng-bootstrap.github.io/#/components/timepicker\" target=\"_blank\">ng-bootstrap timepicker</a></p>\r\n               \r\n                <div class=\"row\">   \r\n                    <div class=\"col-lg-4 col-md-6 mb-4\"> \r\n                        <h6>Basic timepicker</h6>\r\n                        <ngb-timepicker [(ngModel)]=\"time\"></ngb-timepicker>\r\n                        <hr class=\"mt-5\">\r\n                        <pre>Selected time: {{time | json}}</pre>                  \r\n                    </div>\r\n                    <div class=\"col-lg-4 col-md-6 mb-4\"> \r\n                        <h6>Meridian</h6>\r\n                        <ngb-timepicker [(ngModel)]=\"timeMeridian\" [meridian]=\"meridian\"></ngb-timepicker>\r\n                        <button class=\"btn btn-sm btn-outline-{{meridian ? 'success' : 'danger'}}\" (click)=\"meridian = !meridian\">\r\n                            Meridian - {{meridian ? \"ON\" : \"OFF\"}}\r\n                        </button>\r\n                        <hr>\r\n                        <pre>Selected time: {{timeMeridian | json}}</pre>                \r\n                    </div>  \r\n                    <div class=\"col-lg-4 col-md-6 mb-4\"> \r\n                        <h6>Basic timepicker</h6>\r\n                        <ngb-timepicker [(ngModel)]=\"timeSeconds\" [seconds]=\"seconds\"></ngb-timepicker>\r\n                        <button class=\"btn btn-sm btn-outline-{{seconds ? 'success' : 'danger'}}\" (click)=\"seconds = !seconds\">\r\n                            Seconds - {{seconds ? \"ON\" : \"OFF\"}}\r\n                        </button>\r\n                        <hr>\r\n                        <pre>Selected time: {{timeSeconds | json}}</pre>               \r\n                    </div> \r\n                    <div class=\"col-lg-4 col-md-6 mb-4\"> \r\n                        <h6>Spinners</h6>  \r\n                        <ngb-timepicker [(ngModel)]=\"timeSpinners\" [spinners]=\"spinners\"></ngb-timepicker>\r\n                        <button class=\"mt-3 btn btn-sm btn-outline-{{spinners ? 'success' : 'danger'}}\" (click)=\"spinners = !spinners\">\r\n                            Spinners - {{spinners ? \"ON\" : \"OFF\"}}\r\n                        </button>            \r\n                    </div> \r\n                    <div class=\"col-lg-4 col-md-6 mb-4\"> \r\n                        <h6>Custom steps</h6>\r\n                        <ngb-timepicker [(ngModel)]=\"timeCustomSteps\" [seconds]=\"true\" [hourStep]=\"hourStep\" [minuteStep]=\"minuteStep\" [secondStep]=\"secondStep\"></ngb-timepicker>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                                <label for=\"changeHourStep\">Hour Step</label>\r\n                                <input id=\"changeHourStep\" type=\"number\" class=\"form-control form-control-sm\" [(ngModel)]=\"hourStep\" />\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                                <label for=\"changeMinuteStep\">Minute Step</label>\r\n                                <input id=\"changeMinuteStep\" type=\"number\" class=\"form-control form-control-sm\" [(ngModel)]=\"minuteStep\" />\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                                <label for=\"changeSecondStep\">Second Step</label>\r\n                                <input id=\"changeSecondStep\" type=\"number\" class=\"form-control form-control-sm\" [(ngModel)]=\"secondStep\" />\r\n                            </div>\r\n                        </div>\r\n                        <hr>\r\n                        <pre>Selected time: {{timeCustomSteps | json}}</pre>             \r\n                    </div>\r\n                    <div class=\"col-lg-4 col-md-6\"> \r\n                        <h6>Custom validation</h6> \r\n                        <p class=\"text-left fs-13 text-gray\">Illustrates custom validation, you have to select time between 12:00 and 13:59</p>\r\n                        <div class=\"form-group\" [class.has-success]=\"ctrl.valid\" [class.has-danger]=\"!ctrl.valid\">\r\n                            <ngb-timepicker [(ngModel)]=\"timeValidation\" [formControl]=\"ctrl\" required></ngb-timepicker>\r\n                            <div class=\"form-control-feedback\">\r\n                                <div *ngIf=\"ctrl.valid\">Great choice</div>\r\n                                <div *ngIf=\"ctrl.errors && ctrl.errors['required']\">Select some time during lunchtime</div>\r\n                                <div *ngIf=\"ctrl.errors && ctrl.errors['tooLate']\">Oh no, it's way too late</div>\r\n                                <div *ngIf=\"ctrl.errors && ctrl.errors['tooEarly']\">It's a bit too early</div>\r\n                            </div>\r\n                        </div>\r\n                        <hr>\r\n                        <pre>Selected time: {{timeValidation | json}}</pre>            \r\n                    </div>            \r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row mb-4\">\r\n    <div class=\"col\">\r\n        <div widget class=\"card border-0 box-shadow\">\r\n            <div class=\"card-header transparent border-0 text-muted\">\r\n                <h5 class=\"mb-0\">Rating</h5>\r\n                <div class=\"widget-controls\"> \r\n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\r\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\r\n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\r\n                </div>         \r\n            </div>\r\n            <div class=\"card-body pt-0 widget-body\"> \r\n                <p class=\"text-left fs-13 text-gray\">Rating directive that will take care of visualising a star rating bar. More information: <a href=\"https://ng-bootstrap.github.io/#/components/rating\" target=\"_blank\">ng-bootstrap rating</a></p>\r\n               \r\n                <div class=\"row\">   \r\n                    <div class=\"col-lg-4 col-md-6 mb-4\"> \r\n                        <h6>Basic demo</h6> \r\n                        <ngb-rating [(rate)]=\"currentRate\"></ngb-rating>\r\n                        <hr>\r\n                        <pre>Rate: <b>{{currentRate}}</b></pre>                 \r\n                    </div>\r\n                    <div class=\"col-lg-4 col-md-6 mb-4\"> \r\n                        <h6>Events and readonly ratings</h6>\r\n                        <ngb-rating [(rate)]=\"selected\" (hover)=\"hovered=$event\" (leave)=\"hovered=0\" [readonly]=\"readonly\"></ngb-rating>\r\n                        <hr>\r\n                        <pre>Selected: <b>{{selected}}</b><br>Hovered: <b>{{hovered}}</b></pre>\r\n                        <button class=\"btn btn-sm btn-outline-{{readonly ? 'danger' : 'success'}}\" (click)=\"readonly = !readonly\">\r\n                            {{ readonly ? \"readonly\" : \"editable\"}}\r\n                        </button>               \r\n                    </div>  \r\n                    <div class=\"col-lg-4 col-md-6 mb-4\"> \r\n                        <h6>Custom star template</h6>\r\n                        <p class=\"text-left fs-13 text-gray\">Custom rating template provided as child element</p>\r\n                        <ngb-rating [(rate)]=\"currentRateCustom\">\r\n                        <ng-template let-fill=\"fill\">\r\n                            <span class=\"star\" [class.filled]=\"fill === 100\">&#9733;</span>\r\n                        </ng-template>\r\n                        </ngb-rating>\r\n                        <hr>\r\n                        <pre>Rate: <b>{{currentRateCustom}}</b></pre>             \r\n                    </div> \r\n                    <div class=\"col-md-6 mb-4\"> \r\n                        <h6>Custom decimal rating</h6>\r\n                        <p class=\"text-left fs-13 text-gray\">Custom rating template provided via a variable. Shows fine-grained rating display</p>\r\n                        <ng-template #t let-fill=\"fill\">\r\n                            <span *ngIf=\"fill === 100\" class=\"star full\">&hearts;</span>\r\n                            <span *ngIf=\"fill === 0\" class=\"star\">&hearts;</span>\r\n                            <span *ngIf=\"fill < 100 && fill > 0\" class=\"star\">\r\n                                <span class=\"half\" [style.width.%]=\"fill\">&hearts;</span>&hearts;\r\n                            </span>\r\n                        </ng-template>\r\n                        <ngb-rating [(rate)]=\"currentRateDecimal\" [starTemplate]=\"t\" [readonly]=\"true\" max=\"5\"></ngb-rating>\r\n                        <hr>\r\n                        <pre>Rate: <b>{{currentRateDecimal}}</b></pre>\r\n                        <button class=\"btn btn-sm btn-outline-primary\" (click)=\"currentRateDecimal = 1.35\">1.35</button>\r\n                        <button class=\"btn btn-sm btn-outline-primary\" (click)=\"currentRateDecimal = 4.72\">4.72</button>            \r\n                    </div> \r\n                    <div class=\"col-md-6\"> \r\n                        <h6>Form integration</h6> \r\n                        <p class=\"text-left fs-13 text-gray\">NgModel and reactive forms can be used without the 'rate' binding</p>\r\n                        <div class=\"form-group\" [class.has-success]=\"ctrlFormIntegration.valid\" [class.has-danger]=\"ctrlFormIntegration.invalid\">\r\n                            <ngb-rating [formControl]=\"ctrlFormIntegration\"></ngb-rating>\r\n                            <div class=\"form-control-feedback\">\r\n                                <div *ngIf=\"ctrlFormIntegration.valid\">Thanks!</div>\r\n                                <div *ngIf=\"ctrlFormIntegration.errors\">Please rate us</div>\r\n                            </div>\r\n                        </div>\r\n                        <hr>\r\n                        <pre>Model: <b>{{ ctrlFormIntegration.value }}</b></pre>\r\n                        <button class=\"btn btn-sm btn-outline-{{ ctrlFormIntegration.disabled ? 'danger' : 'success'}}\" (click)=\"toggle()\">\r\n                            {{ ctrlFormIntegration.disabled ? \"control disabled\" : \" control enabled\" }}\r\n                        </button>\r\n                        <button class=\"btn btn-sm btn-outline-primary\" (click)=\"ctrlFormIntegration.setValue(null)\">Clear</button>          \r\n                    </div>          \r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n     <div class=\"col\">\r\n        \r\n        <div widget class=\"card border-0 box-shadow\">\r\n            <div class=\"card-header  transparent border-0 text-muted\">\r\n                <h5 class=\"mb-0\">Uploads</h5>\r\n                <div class=\"widget-controls\">              \r\n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\r\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\r\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\r\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \r\n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\r\n                </div>        \r\n            </div>\r\n            <div class=\"card-body widget-body\">\r\n                \r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-4 mb-4\">\r\n                        <h6>File upload</h6>\r\n                        <app-file-uploader></app-file-uploader>\r\n\r\n                        <h6>Image upload</h6>\r\n                        <app-image-uploader></app-image-uploader>\r\n                    </div>\r\n\r\n                    <div class=\"col-lg-8 mb-4\">\r\n                        <h6 class=\"text-center\">Multiple Image Uploader</h6>\r\n                        <app-multiple-image-uploader></app-multiple-image-uploader>\r\n                    </div>\r\n                </div>                \r\n               \r\n            </div>\r\n        </div>\r\n\r\n    </div>    \r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/form-elements/controls/controls.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/form-elements/controls/controls.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-day {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  border-radius: 0.25rem;\n  display: inline-block;\n  width: 2rem; }\n\n.custom-day:hover {\n  background-color: #e6e6e6; }\n\n.weekend {\n  background-color: #f0ad4e;\n  border-radius: 1rem;\n  color: white; }\n\n.hidden {\n  display: none; }\n\n.input-group-addon .fa-calendar {\n  cursor: pointer; }\n\n.star {\n  position: relative;\n  display: inline-block;\n  font-size: 2rem;\n  color: #d3d3d3; }\n\n.full {\n  color: red; }\n\n.half {\n  position: absolute;\n  display: inline-block;\n  overflow: hidden;\n  color: red; }\n"

/***/ }),

/***/ "./src/app/pages/form-elements/controls/controls.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/form-elements/controls/controls.component.ts ***!
  \********************************************************************/
/*! exports provided: ControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlsComponent", function() { return ControlsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ControlsComponent = /** @class */ (function () {
    function ControlsComponent() {
        this.firstControlOptions = [
            { id: 1, name: 'Option 1' },
            { id: 2, name: 'Option 2' },
            { id: 3, name: 'Option 3' }
        ];
        this.secondControlSettings = {
            checkedStyle: 'fontawesome',
            buttonClasses: 'btn btn-secondary btn-block',
            dynamicTitleMaxItems: 3,
            displayAllSelectedText: true,
            showCheckAll: true,
            showUncheckAll: true
        };
        this.secondControlTexts = {
            checkAll: 'Select all',
            uncheckAll: 'Unselect all',
            checked: 'item selected',
            checkedPlural: 'items selected',
            searchPlaceholder: 'Find',
            defaultTitle: 'Select countries',
            allSelected: 'All selected',
        };
        this.secondControlOptions = [
            { id: 1, name: 'Sweden' },
            { id: 2, name: 'Norway' },
            { id: 3, name: 'Canada' },
            { id: 4, name: 'USA' }
        ];
        this.thirdControlSettings = {
            enableSearch: true,
            checkedStyle: 'checkboxes',
            buttonClasses: 'btn btn-secondary btn-block',
            dynamicTitleMaxItems: 3,
            displayAllSelectedText: true
        };
        this.thirdControlTexts = {
            checkAll: 'Select all',
            uncheckAll: 'Unselect all',
            checked: 'item selected',
            checkedPlural: 'items selected',
            searchPlaceholder: 'Find...',
            defaultTitle: 'Select countries using search filter',
            allSelected: 'All selected',
        };
        this.thirdControlOptions = [
            { id: 1, name: 'Sweden' },
            { id: 2, name: 'Norway' },
            { id: 3, name: 'Canada' },
            { id: 4, name: 'USA' }
        ];
        //Multiple months
        this.displayMonths = 2;
        this.navigation = 'select';
        //Datepicker in a popup
        this.modelPopup = { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() - 3 };
        //Disabled datepicker
        this.modelDisabled = { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() };
        this.disabled = true;
        //Basic timepicker
        this.time = { hour: 13, minute: 30, second: 20 };
        //Meridian
        this.timeMeridian = { hour: 15, minute: 20, second: 25 };
        this.meridian = true;
        //Seconds
        this.timeSeconds = { hour: 16, minute: 40, second: 30 };
        this.seconds = true;
        //Spinners
        this.timeSpinners = { hour: 13, minute: 30 };
        this.spinners = true;
        //Custom steps
        this.timeCustomSteps = { hour: 13, minute: 30, second: 0 };
        this.hourStep = 1;
        this.minuteStep = 15;
        this.secondStep = 30;
        //Custom validation
        this.timeValidation = { hour: 11, minute: 30 };
        this.ctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', function (control) {
            var value = control.value;
            if (!value) {
                return null;
            }
            if (value.hour < 12) {
                return { tooEarly: true };
            }
            if (value.hour > 13) {
                return { tooLate: true };
            }
            return null;
        });
        //Rating
        this.currentRate = 8;
        //Events and readonly ratings
        this.selected = 0;
        this.hovered = 0;
        this.readonly = false;
        //Custom star template
        this.currentRateCustom = 6;
        //Custom decimal rating
        this.currentRateDecimal = 3.14;
        //Form integration
        this.ctrlFormIntegration = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
    }
    ControlsComponent.prototype.onChange = function () {
        console.log(this.firstControlModel);
    };
    ControlsComponent.prototype.selectToday = function () {
        this.model = { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() };
    };
    ControlsComponent.prototype.isWeekend = function (date) {
        var d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    };
    ControlsComponent.prototype.isDisabled = function (date, current) {
        return date.month !== current.month;
    };
    ControlsComponent.prototype.toggle = function () {
        if (this.ctrlFormIntegration.disabled) {
            this.ctrlFormIntegration.enable();
        }
        else {
            this.ctrlFormIntegration.disable();
        }
    };
    ControlsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-controls',
            template: __webpack_require__(/*! ./controls.component.html */ "./src/app/pages/form-elements/controls/controls.component.html"),
            styles: [__webpack_require__(/*! ./controls.component.scss */ "./src/app/pages/form-elements/controls/controls.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        })
    ], ControlsComponent);
    return ControlsComponent;
}());



/***/ }),

/***/ "./src/app/pages/form-elements/controls/file-uploader/file-uploader.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/form-elements/controls/file-uploader/file-uploader.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\r\n    <div class=\"input-group file-upload\">\r\n        <input type=\"file\" (change)=\"fileChange(input)\" #input class=\"file-upload-btn\"/>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Choose a file...\" value=\"{{file}}\">\r\n        <i class=\"fa fa-times delete-file\" (click)=\"removeFile()\" *ngIf=\"file\"></i>\r\n        <span class=\"input-group-append\">\r\n            <button class=\"btn btn-primary\" type=\"button\"><i class=\"fa fa-upload\"></i></button>\r\n        </span>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/form-elements/controls/file-uploader/file-uploader.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/form-elements/controls/file-uploader/file-uploader.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".file-upload .file-upload-btn {\n  position: absolute;\n  width: 100%;\n  height: 35px;\n  z-index: 9;\n  opacity: 0; }\n\n.file-upload .delete-file {\n  position: absolute;\n  right: 50px;\n  top: 8px;\n  font-size: 16px;\n  opacity: .8;\n  cursor: pointer;\n  z-index: 99;\n  visibility: hidden; }\n\n.file-upload:hover .delete-file {\n  visibility: visible; }\n"

/***/ }),

/***/ "./src/app/pages/form-elements/controls/file-uploader/file-uploader.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/form-elements/controls/file-uploader/file-uploader.component.ts ***!
  \***************************************************************************************/
/*! exports provided: FileUploaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploaderComponent", function() { return FileUploaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FileUploaderComponent = /** @class */ (function () {
    function FileUploaderComponent() {
    }
    FileUploaderComponent.prototype.fileChange = function (input) {
        var reader = new FileReader();
        if (input.files.length) {
            this.file = input.files[0].name;
        }
    };
    FileUploaderComponent.prototype.removeFile = function () {
        this.file = '';
    };
    FileUploaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-file-uploader',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: __webpack_require__(/*! ./file-uploader.component.html */ "./src/app/pages/form-elements/controls/file-uploader/file-uploader.component.html"),
            styles: [__webpack_require__(/*! ./file-uploader.component.scss */ "./src/app/pages/form-elements/controls/file-uploader/file-uploader.component.scss")]
        })
    ], FileUploaderComponent);
    return FileUploaderComponent;
}());



/***/ }),

/***/ "./src/app/pages/form-elements/controls/image-uploader/image-uploader.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/form-elements/controls/image-uploader/image-uploader.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"file\" (change)=\"fileChange(input)\" #input class=\"img-upload-btn\"/>\r\n\r\n<button class=\"btn btn-info btn-block rounded-0\" type=\"button\">\r\n     <span *ngIf=\"!image\"><i class=\"fa fa-upload\"></i> Select Image... </span>\r\n     <span *ngIf=\"image\"><i class=\"fa fa-refresh\"></i> Change Image... </span>\r\n</button>\r\n\r\n<div class=\"image-wrapper\">\r\n    <i *ngIf=\"image\" class=\"fa fa-times delete-img\" (click)=\"removeImage()\"></i>\r\n    <img [attr.src]=\"image\" *ngIf=\"image\" width=\"100%\">\r\n    <img src=\"assets/img/app/no-image.png\" *ngIf=\"!image\" width=\"100%\">\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/form-elements/controls/image-uploader/image-uploader.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/form-elements/controls/image-uploader/image-uploader.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-upload-btn {\n  position: absolute;\n  padding: 0;\n  width: calc(100% - 30px);\n  height: 38px;\n  opacity: 0; }\n\n.image-wrapper {\n  position: relative; }\n\n.image-wrapper .delete-img {\n    position: absolute;\n    top: 8px;\n    right: 10px;\n    border: 2px solid #fff;\n    color: #fff;\n    padding: 3px 5px;\n    border-radius: 50%;\n    visibility: hidden;\n    cursor: pointer; }\n\n.image-wrapper:hover .delete-img {\n    visibility: visible; }\n"

/***/ }),

/***/ "./src/app/pages/form-elements/controls/image-uploader/image-uploader.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/form-elements/controls/image-uploader/image-uploader.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ImageUploaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUploaderComponent", function() { return ImageUploaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ImageUploaderComponent = /** @class */ (function () {
    function ImageUploaderComponent() {
    }
    ImageUploaderComponent.prototype.fileChange = function (input) {
        var _this = this;
        var reader = new FileReader();
        if (input.files.length) {
            var file = input.files[0];
            reader.onload = function () {
                _this.image = reader.result;
            };
            reader.readAsDataURL(file);
        }
    };
    ImageUploaderComponent.prototype.removeImage = function () {
        this.image = '';
    };
    ImageUploaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-uploader',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: __webpack_require__(/*! ./image-uploader.component.html */ "./src/app/pages/form-elements/controls/image-uploader/image-uploader.component.html"),
            styles: [__webpack_require__(/*! ./image-uploader.component.scss */ "./src/app/pages/form-elements/controls/image-uploader/image-uploader.component.scss")]
        })
    ], ImageUploaderComponent);
    return ImageUploaderComponent;
}());



/***/ }),

/***/ "./src/app/pages/form-elements/controls/multiple-image-uploader/multiple-image-uploader.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/form-elements/controls/multiple-image-uploader/multiple-image-uploader.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-8 offset-2\">\r\n    <input type=\"file\" multiple (change)=\"fileChange(input)\" #input class=\"m-img-upload-btn\"/>\r\n    <button class=\"btn btn-success btn-block\" type=\"button\">\r\n        <i class=\"fa fa-upload\"></i> Choose images...\r\n    </button>\r\n</div>\r\n\r\n<div class=\"card images-container\">\r\n    <div *ngFor=\"let image of images; let i=index;\" class=\"m-image-wrapper\">\r\n        <i class=\"fa fa-times m-delete-img\" (click)=\"removeImage(i)\"></i>\r\n        <img [attr.src]=\"image\"> \r\n    </div> \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/form-elements/controls/multiple-image-uploader/multiple-image-uploader.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/form-elements/controls/multiple-image-uploader/multiple-image-uploader.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".m-img-upload-btn {\n  position: absolute;\n  padding: 0;\n  width: calc(100% - 30px);\n  height: 38px;\n  opacity: 0; }\n\n.images-container {\n  width: 100%;\n  top: 15px;\n  border: 2px dashed #ccc;\n  background: #f1f1f1;\n  min-height: 293px;\n  padding: 10px;\n  display: block; }\n\n.images-container .m-image-wrapper {\n    position: relative;\n    display: inline-block;\n    margin: 10px;\n    width: 120px;\n    height: 120px; }\n\n.images-container .m-image-wrapper .m-delete-img {\n      position: absolute;\n      top: 8px;\n      right: 10px;\n      border: 2px solid #fff;\n      color: #fff;\n      padding: 3px 5px;\n      border-radius: 50%;\n      visibility: hidden;\n      cursor: pointer; }\n\n.images-container .m-image-wrapper:hover .m-delete-img {\n      visibility: visible; }\n\n.images-container .m-image-wrapper img {\n      width: 120px;\n      height: 120px; }\n"

/***/ }),

/***/ "./src/app/pages/form-elements/controls/multiple-image-uploader/multiple-image-uploader.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/form-elements/controls/multiple-image-uploader/multiple-image-uploader.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: MultipleImageUploaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleImageUploaderComponent", function() { return MultipleImageUploaderComponent; });
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

var MultipleImageUploaderComponent = /** @class */ (function () {
    function MultipleImageUploaderComponent(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.images = [];
    }
    MultipleImageUploaderComponent.prototype.fileChange = function (input) {
        this.readFiles(input.files);
    };
    MultipleImageUploaderComponent.prototype.readFile = function (file, reader, callback) {
        reader.onload = function () {
            callback(reader.result);
        };
        reader.readAsDataURL(file);
    };
    MultipleImageUploaderComponent.prototype.readFiles = function (files, index) {
        var _this = this;
        if (index === void 0) { index = 0; }
        var reader = new FileReader();
        if (index in files) {
            this.readFile(files[index], reader, function (result) {
                _this.images.push(result);
                _this.readFiles(files, index + 1);
            });
        }
        else {
            this.changeDetectorRef.detectChanges();
        }
    };
    MultipleImageUploaderComponent.prototype.removeImage = function (index) {
        this.images.splice(index, 1);
    };
    MultipleImageUploaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-multiple-image-uploader',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: __webpack_require__(/*! ./multiple-image-uploader.component.html */ "./src/app/pages/form-elements/controls/multiple-image-uploader/multiple-image-uploader.component.html"),
            styles: [__webpack_require__(/*! ./multiple-image-uploader.component.scss */ "./src/app/pages/form-elements/controls/multiple-image-uploader/multiple-image-uploader.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], MultipleImageUploaderComponent);
    return MultipleImageUploaderComponent;
}());



/***/ }),

/***/ "./src/app/pages/form-elements/editor/editor.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/form-elements/editor/editor.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <ckeditor\r\n    [(ngModel)]=\"ckeditorContent\"\r\n    [config]=\"config\"\r\n    (change)=\"onChange($event)\"\r\n    (ready)=\"onReady($event)\"\r\n    (focus)=\"onFocus($event)\"\r\n    (blur)=\"onBlur($event)\"\r\n    debounce=\"500\">\r\n  </ckeditor>"

/***/ }),

/***/ "./src/app/pages/form-elements/editor/editor.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/form-elements/editor/editor.component.ts ***!
  \****************************************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
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

var EditorComponent = /** @class */ (function () {
    function EditorComponent() {
        this.ckeditorContent = '<div>Hey we are testing CKEditor</div>';
        this.config = {
            uiColor: '#F0F3F4',
            height: '350',
            extraPlugins: 'divarea'
        };
    }
    EditorComponent.prototype.onChange = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.ckeditorContent = event;
        });
    };
    EditorComponent.prototype.onReady = function (event) { };
    EditorComponent.prototype.onFocus = function (event) {
        console.log("editor is focused");
    };
    EditorComponent.prototype.onBlur = function (event) {
    };
    EditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editor',
            template: __webpack_require__(/*! ./editor.component.html */ "./src/app/pages/form-elements/editor/editor.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], EditorComponent);
    return EditorComponent;
}());



/***/ }),

/***/ "./src/app/pages/form-elements/form-elements.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/form-elements/form-elements.module.ts ***!
  \*************************************************************/
/*! exports provided: routes, FormElementsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormElementsModule", function() { return FormElementsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_2_dropdown_multiselect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-2-dropdown-multiselect */ "./node_modules/angular-2-dropdown-multiselect/esm5/angular-2-dropdown-multiselect.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_ckeditor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../theme/directives/directives.module */ "./src/app/theme/directives/directives.module.ts");
/* harmony import */ var _controls_controls_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./controls/controls.component */ "./src/app/pages/form-elements/controls/controls.component.ts");
/* harmony import */ var _controls_file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./controls/file-uploader/file-uploader.component */ "./src/app/pages/form-elements/controls/file-uploader/file-uploader.component.ts");
/* harmony import */ var _controls_image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./controls/image-uploader/image-uploader.component */ "./src/app/pages/form-elements/controls/image-uploader/image-uploader.component.ts");
/* harmony import */ var _controls_multiple_image_uploader_multiple_image_uploader_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./controls/multiple-image-uploader/multiple-image-uploader.component */ "./src/app/pages/form-elements/controls/multiple-image-uploader/multiple-image-uploader.component.ts");
/* harmony import */ var _layouts_layouts_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layouts/layouts.component */ "./src/app/pages/form-elements/layouts/layouts.component.ts");
/* harmony import */ var _validations_validations_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./validations/validations.component */ "./src/app/pages/form-elements/validations/validations.component.ts");
/* harmony import */ var _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./wizard/wizard.component */ "./src/app/pages/form-elements/wizard/wizard.component.ts");
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./editor/editor.component */ "./src/app/pages/form-elements/editor/editor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    { path: '', redirectTo: 'controls', pathMatch: 'full' },
    { path: 'controls', component: _controls_controls_component__WEBPACK_IMPORTED_MODULE_9__["ControlsComponent"], data: { breadcrumb: 'Form Controls' } },
    { path: 'layouts', component: _layouts_layouts_component__WEBPACK_IMPORTED_MODULE_13__["LayoutsComponent"], data: { breadcrumb: 'Layouts' } },
    { path: 'validations', component: _validations_validations_component__WEBPACK_IMPORTED_MODULE_14__["ValidationsComponent"], data: { breadcrumb: 'Validations' } },
    { path: 'wizard', component: _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_15__["WizardComponent"], data: { breadcrumb: 'Wizard' } },
    { path: 'editor', component: _editor_editor_component__WEBPACK_IMPORTED_MODULE_16__["EditorComponent"], data: { breadcrumb: 'Editor' } }
];
var FormElementsModule = /** @class */ (function () {
    function FormElementsModule() {
    }
    FormElementsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                angular_2_dropdown_multiselect__WEBPACK_IMPORTED_MODULE_4__["MultiselectDropdownModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                ng2_validation__WEBPACK_IMPORTED_MODULE_6__["CustomFormsModule"],
                ng2_ckeditor__WEBPACK_IMPORTED_MODULE_7__["CKEditorModule"],
                _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_8__["DirectivesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _controls_controls_component__WEBPACK_IMPORTED_MODULE_9__["ControlsComponent"],
                _controls_file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_10__["FileUploaderComponent"],
                _controls_image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_11__["ImageUploaderComponent"],
                _controls_multiple_image_uploader_multiple_image_uploader_component__WEBPACK_IMPORTED_MODULE_12__["MultipleImageUploaderComponent"],
                _layouts_layouts_component__WEBPACK_IMPORTED_MODULE_13__["LayoutsComponent"],
                _validations_validations_component__WEBPACK_IMPORTED_MODULE_14__["ValidationsComponent"],
                _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_15__["WizardComponent"],
                _editor_editor_component__WEBPACK_IMPORTED_MODULE_16__["EditorComponent"]
            ]
        })
    ], FormElementsModule);
    return FormElementsModule;
}());



/***/ }),

/***/ "./src/app/pages/form-elements/layouts/layouts.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/form-elements/layouts/layouts.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Form Layouts</h2>\r\n<p class=\"text-muted\">Bootstrap provides several layout options and custom components for creating a wide variety of forms.</p>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-lg-6 mb-4\">\r\n        <div widget class=\"card border-0 box-shadow\">\r\n            <div class=\"card-header transparent border-0 text-muted\">\r\n                <h5 class=\"mb-0\">Basic form</h5>\r\n                <div class=\"widget-controls\"> \r\n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\r\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\r\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\r\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \r\n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\r\n                </div>        \r\n            </div>\r\n            <div class=\"card-body widget-body\">\r\n\r\n                <form class=\"form\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"email-b-f\">Email</label>\r\n                        <input id=\"email-b-f\" class=\"form-control\" type=\"email\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"password-b-f\">Password</label>\r\n                        <input id=\"password-b-f\" class=\"form-control\" type=\"password\">\r\n                    </div>\r\n                    <div class=\"form-group d-flex justify-content-between\">\r\n                        <div class=\"custom-control custom-checkbox\">\r\n                            <input type=\"checkbox\" class=\"custom-control-input checkbox-success\" id=\"login-keep\" checked>\r\n                            <label class=\"custom-control-label\" for=\"login-keep\">Keep me signed in</label>\r\n                        </div>\r\n                        <a href=\"javascript:void(0);\" class=\"text-primary align-middle\">Forgot password?</a>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <button class=\"btn btn-success btn-block\" type=\"submit\">Sign in</button>\r\n                    </div>\r\n                </form> \r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-6 mb-4\">\r\n        <div widget class=\"card border-0 box-shadow\">\r\n            <div class=\"card-header transparent border-0 text-muted\">\r\n                <h5 class=\"mb-0\">Horizontal form</h5>\r\n                <div class=\"widget-controls\"> \r\n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\r\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>                          \r\n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\r\n                </div>        \r\n            </div>\r\n            <div class=\"card-body widget-body\">\r\n\r\n                <h6 class=\"card-title text-center\">To enjoy more, sing in!</h6>\r\n\r\n                <form class=\"form-horizontal\">\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label for=\"email-h-f\" class=\"col-sm-3 form-control-label mt-1\">Email</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <input type=\"email\" class=\"form-control\" id=\"email-h-t\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label for=\"password-h-f\" class=\"col-sm-3 form-control-label mt-1\">Password</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <input type=\"password\" class=\"form-control\" id=\"password-h-f\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label for=\"re-password-h-f\" class=\"col-sm-3 form-control-label mt-1\">Re Password</label>\r\n                        <div class=\"col-sm-9\">\r\n                            <input type=\"password\" class=\"form-control\" id=\"re-password-h-f\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <div class=\"col-sm-9 offset-sm-3 d-flex justify-content-between\">\r\n                            <div class=\"custom-control custom-checkbox\">\r\n                                <input type=\"checkbox\" class=\"custom-control-input checkbox-dark-gray\" id=\"checkbox-sign\" checked>\r\n                                <label class=\"custom-control-label\" for=\"checkbox-sign\">Keep me signed in</label>\r\n                            </div>\r\n                            <button class=\"btn btn-inverse pull-right\" type=\"submit\">Sign in</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n               \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-lg-6 mb-4\">\r\n        <div widget class=\"card border-0 box-shadow\">\r\n            <div class=\"card-header transparent border-0 text-muted\">\r\n                <h5 class=\"mb-0\">Form without labels</h5>\r\n                <div class=\"widget-controls\"> \r\n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\r\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\r\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\r\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \r\n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\r\n                </div>        \r\n            </div>\r\n            <div class=\"card-body widget-body\">\r\n\r\n                <form>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Recipients\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Subject\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <textarea class=\"form-control\" placeholder=\"Message\" rows=\"3\"></textarea>\r\n                    </div>\r\n                    <button type=\"submit\" class=\"btn btn-primary\">Send</button>\r\n                </form>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-6 mb-4\">\r\n        <div widget class=\"card border-0 box-shadow\">\r\n            <div class=\"card-header transparent border-0 text-muted\">\r\n                <h5 class=\"mb-0\">Block form</h5>\r\n                <div class=\"widget-controls\"> \r\n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\r\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>                          \r\n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\r\n                </div>        \r\n            </div>\r\n            <div class=\"card-body widget-body\">\r\n\r\n                <h6 class=\"card-title text-center\">Fill in the fields!</h6>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                        <label for=\"inputFirstName\">First Name</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"inputFirstName\" placeholder=\"First Name\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                        <label for=\"inputLastName\">Last Name</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"inputLastName\" placeholder=\"Last Name\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                        <label for=\"inputFirstName\">Email</label>\r\n                        <input type=\"email\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Email\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                        <label for=\"inputWebsite\">Website</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"inputWebsite\" placeholder=\"Website\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row justify-content-center\">\r\n                    <button type=\"submit\" class=\"btn btn-secondary\">Submit</button>\r\n                </div>   \r\n               \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n     <div class=\"col\">\r\n        \r\n        <div widget class=\"card border-0 box-shadow\">\r\n            <div class=\"card-header  transparent border-0 text-muted\">\r\n                <h5 class=\"mb-0\">Inline form</h5>\r\n                <div class=\"widget-controls\">              \r\n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\r\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\r\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\r\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \r\n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\r\n                </div>        \r\n            </div>\r\n            <div class=\"card-body widget-body\">\r\n                \r\n                <form class=\"row form-inline\">\r\n                    <div class=\"form-group col-xl-3 col-sm-6 col-12\">\r\n                        <input type=\"email\" class=\"form-control\" placeholder=\"Email\">\r\n                    </div>\r\n                    <div class=\"form-group col-xl-3 col-sm-6 col-12\">\r\n                        <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\r\n                    </div> \r\n                    <div class=\"form-group col-xl-2 col-lg-3 col-sm-6 col-12\">\r\n                        <div class=\"custom-control custom-checkbox\">\r\n                            <input type=\"checkbox\" class=\"custom-control-input checkbox-primary\" id=\"checkboxRemember\">\r\n                            <label class=\"custom-control-label\" for=\"checkboxRemember\">Remember me</label>\r\n                        </div>\r\n                    </div> \r\n                    <div class=\"form-group col-xl-3 col-sm-6 col-12\">\r\n                        <button type=\"submit\" class=\"btn btn-primary\">Sign in</button>\r\n                    </div> \r\n                </form>              \r\n               \r\n            </div>\r\n        </div>\r\n\r\n    </div>    \r\n</div>"

/***/ }),

/***/ "./src/app/pages/form-elements/layouts/layouts.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/form-elements/layouts/layouts.component.ts ***!
  \******************************************************************/
/*! exports provided: LayoutsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutsComponent", function() { return LayoutsComponent; });
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

var LayoutsComponent = /** @class */ (function () {
    function LayoutsComponent() {
    }
    LayoutsComponent.prototype.ngOnInit = function () {
    };
    LayoutsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layouts',
            template: __webpack_require__(/*! ./layouts.component.html */ "./src/app/pages/form-elements/layouts/layouts.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], LayoutsComponent);
    return LayoutsComponent;
}());



/***/ }),

/***/ "./src/app/pages/form-elements/validations/validations.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/form-elements/validations/validations.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Form Validations</h2>\r\n<p class=\"text-muted\">Improve overall data quality by validating user input for accuracy and completeness. Angular supports validation for both it’s template driven and model driven approaches to forms. The model driven approach gives much greater control when it comes to validation.</p>\r\n\r\n<div class=\"clearfix\">            \r\n    <ul class=\"nav nav-tabs custom top nav-justified\">\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#template-driven\"><h5>Template driven</h5></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" data-toggle=\"tab\" href=\"#model-driven\"><h5>Model driven</h5></a>\r\n        </li>                         \r\n    </ul>\r\n</div>\r\n<div class=\"tab-content top\">\r\n    <div class=\"tab-pane active\" id=\"template-driven\">\r\n        <p class=\"text-muted\">Template driven forms, as the name suggests, are forms built entirely in your UI. This is the typical way we built forms in the past and is useful for building very simple forms in Angular.</p>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-9 col-12 offset-md-1\">\r\n\r\n                <form class=\"form-horizontal\" novalidate>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Required</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"requried\" #requried=\"ngModel\" required/>\r\n                            <small class=\"text-danger\" *ngIf=\"requried?.errors?.required\">Required error</small> \r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Min length</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"minlength\" #minlength=\"ngModel\" minlength=\"5\"/>\r\n                            <small class=\"text-danger\" *ngIf=\"minlength?.errors?.minlength\">Minlength error</small>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Max length</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"maxlength\" #maxlength=\"ngModel\" maxlength=\"10\" />\r\n                            <small class=\"text-danger\" *ngIf=\"maxlength?.errors?.maxlength\">Maxlength error</small>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Pattern</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                          <input class=\"form-control\" type=\"text\" ngModel name=\"pattern\" #pattern=\"ngModel\" pattern=\"[a-z]{6}\"/>\r\n                          <small class=\"text-danger\" *ngIf=\"pattern?.errors?.pattern\">Pattern error</small>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Base64</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"base64\" #base64=\"ngModel\" base64/>\r\n                            <small class=\"text-danger\" *ngIf=\"base64?.errors?.base64\">Base64 error</small>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Credit card</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"creditCard\" #creditCard=\"ngModel\" creditCard/>\r\n                            <small class=\"text-danger\" *ngIf=\"creditCard?.errors?.creditCard\">Credit card error</small>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Date</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"date\" #date=\"ngModel\" date/>\r\n                            <small class=\"text-danger\" *ngIf=\"date?.errors?.date\">Date error</small>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Date ISO</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"dateISO\" #dateISO=\"ngModel\" dateISO/>\r\n                            <small class=\"text-danger\" *ngIf=\"dateISO?.errors?.dateISO\">Date ISO error</small>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Max date</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"maxDate\" #maxDate=\"ngModel\" maxDate=\"2016-12-12\"/>\r\n                            <small class=\"text-danger\" *ngIf=\"maxDate?.errors?.maxDate\">Max date error</small>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Min date</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"minDate\" #minDate=\"ngModel\" minDate=\"2016-12-12\"/>\r\n                            <small class=\"text-danger\" *ngIf=\"minDate?.errors?.minDate\">Min date error</small>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Digits</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"digits\" #digits=\"ngModel\" digits/>\r\n                            <small class=\"text-danger\" *ngIf=\"digits?.errors?.digits\">Digits error</small>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Email</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"email\" #email=\"ngModel\" email/>\r\n                            <small class=\"text-danger\" *ngIf=\"email?.errors?.email\">Email error</small>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Equal</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"equal\" #equal=\"ngModel\" equal=\"aabbcc\"/>\r\n                            <small class=\"text-danger\" *ngIf=\"equal?.errors?.equal\">Equal error</small>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Not equal</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"notEqual\" #notEqual=\"ngModel\" notEqual=\"aabbcc\"/>\r\n                            <small class=\"text-danger\" *ngIf=\"notEqual?.errors?.notEqual\">Not equal error</small>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Equal To</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control mb-1\" type=\"text\" ngModel name=\"password\" #password=\"ngModel\"/>\r\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"equalTo\" #equalTo=\"ngModel\" [equalTo]=\"password\"/>\r\n                            <small class=\"text-danger\" *ngIf=\"equalTo?.errors?.equalTo\">Equal To error</small>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Not Equal To</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control mb-1\" type=\"text\" ngModel name=\"oldPassword\" #oldPassword=\"ngModel\"/>\r\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"notEqualTo\" #notEqualTo=\"ngModel\" [notEqualTo]=\"oldPassword\"/>\r\n                            <small class=\"text-danger\" *ngIf=\"notEqualTo?.errors?.notEqualTo\">Not Equal To error</small>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Greater than</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"gt\" #gt=\"ngModel\" gt=\"10\"/>\r\n                            <small class=\"text-danger\" *ngIf=\"gt?.errors?.gt\">Greater than error</small>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Greater than equal</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"gte\" #gte=\"ngModel\" gte=\"10\"/>\r\n                            <small class=\"text-danger\" *ngIf=\"gte?.errors?.gte\">Greater than equal error</small>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Less than</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"lt\" #lt=\"ngModel\" lt=\"5\"/>\r\n                            <small class=\"text-danger\" *ngIf=\"lt?.errors?.lt\">Less than error</small>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Less than equal</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"lte\" #lte=\"ngModel\" lte=\"5\"/>\r\n                            <small class=\"text-danger\" *ngIf=\"lte?.errors?.lte\">Less than equal error</small>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Json</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"json\" #json=\"ngModel\" json/>\r\n                            <small class=\"text-danger\" *ngIf=\"json?.errors?.json\">Json error</small>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Max</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"max\" #max=\"ngModel\" max=\"5\"/>\r\n                            <small class=\"text-danger\" *ngIf=\"max?.errors?.max\">Max error</small>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Min</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"min\" #min=\"ngModel\" min=\"5\"/>\r\n                            <small class=\"text-danger\" *ngIf=\"min?.errors?.min\">Min error</small>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Number</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"number\" #number=\"ngModel\" number/>\r\n                            <small class=\"text-danger\" *ngIf=\"number?.errors?.number\">Number error</small>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Phone</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"phone\" #phone=\"ngModel\" phone/>\r\n                            <small class=\"text-danger\" *ngIf=\"phone?.errors?.phone\">Phone error</small>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Range</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"range\" #range=\"ngModel\" [range]=\"[4,9]\"/>\r\n                            <small class=\"text-danger\" *ngIf=\"range?.errors?.range\">Range error</small>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                      <label class=\"col-sm-3\">Range length</label>\r\n                      <div class=\"col-sm-8 text-left\">\r\n                        <input class=\"form-control\" type=\"text\" ngModel name=\"rangeLength\" #rangeLength=\"ngModel\" [rangeLength]=\"[4,9]\"/>\r\n                        <small class=\"text-danger\" *ngIf=\"rangeLength?.errors?.rangeLength\">Range length error</small>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Url</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"url\" #url=\"ngModel\" url/>\r\n                            <small class=\"text-danger\" *ngIf=\"url?.errors?.url\">Url error</small>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">uuid</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"uuid\" #uuid=\"ngModel\" uuid=\"3\"/>\r\n                            <small class=\"text-danger\" *ngIf=\"uuid?.errors?.uuid\">uuid error</small>\r\n                        </div>\r\n                    </div>\r\n\r\n                </form>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"tab-pane\" id=\"model-driven\">\r\n        <p class=\"text-muted\">Model driven or reactive forms, while similar to template driven forms, add an additional layer of complexity and functionality by having you to declare the model of the form in your component class.</p>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-9 col-12 offset-md-1\">\r\n                <form [formGroup]=\"form\" (ngSubmit)=\"submitForm(form.value)\">\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Required</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control validation-field\" type=\"password\" formControlName=\"required\">\r\n                            <small class=\"text-danger\" *ngIf=\"form.controls.required.touched && form.controls.required.errors?.required\">Field is required</small> \r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Min length (3)</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"minLength\" minlength=\"3\">\r\n                            <small class=\"text-danger\" *ngIf=\"form.controls.minLength.touched\">\r\n                                <span class=\"text-danger\" *ngIf=\"form.controls.minLength.errors?.required\">Field is required</span>\r\n                                <span class=\"text-danger\" *ngIf=\"form.controls.minLength.errors?.minlength\">Minimum of 3 characters</span>\r\n                            </small>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Max length (10)</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"maxLength\">\r\n                            <small class=\"text-danger\" *ngIf=\"form.controls.maxLength.touched\">\r\n                                <span class=\"text-danger\" *ngIf=\"form.controls.maxLength.errors?.required\">Field is required</span>\r\n                                <span class=\"text-danger\" *ngIf=\"form.controls.maxLength.errors?.maxlength\">Maximum of 10 characters</span>\r\n                            </small>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Base64</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"base64\">\r\n                            <small class=\"text-danger\" *ngIf=\"form.controls.base64.errors?.base64\">Base64 is required</small> \r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Credit card</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"creditCard\">\r\n                            <small class=\"text-danger\" *ngIf=\"form.controls.creditCard.errors?.creditCard\">e.g. 4242 4242 4242 4242</small> \r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Date</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"date\">\r\n                            <small class=\"text-danger\" *ngIf=\"form.controls.date.errors?.date\">e.g. 12.08.2017</small> \r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Date ISO</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"dateISO\">\r\n                            <small class=\"text-danger\" *ngIf=\"form.controls.dateISO.errors?.dateISO\">e.g. 2017-09-25</small> \r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Max date</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"maxDate\">\r\n                            <small class=\"text-danger\" *ngIf=\"form.controls.maxDate.errors?.maxDate\">Date can not be more than 2017-09-09</small> \r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Min date</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"minDate\">\r\n                            <small class=\"text-danger\" *ngIf=\"form.controls.minDate.errors?.minDate\">Date can not be less than 2017-09-09</small> \r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Email</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"email\">\r\n                            <small class=\"text-danger\" *ngIf=\"form.controls.email.errors?.email\">Invalid email address</small> \r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Equal</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"equal\">\r\n                            <small class=\"text-danger\" *ngIf=\"form.controls.equal.errors?.equal\">The value must be equal 5</small> \r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Not equal</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"notEqual\">\r\n                            <small class=\"text-danger\" *ngIf=\"form.controls.notEqual.errors?.notEqual\">The value must not be equal 10</small> \r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Equal To</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control validation-field mb-1\" type=\"text\" formControlName=\"password\">\r\n                            <small class=\"text-danger\" *ngIf=\"form.controls.password.touched && form.controls.password.errors?.required\">Password is required</small> \r\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"certainPassword\">\r\n                            <small class=\"text-danger\" *ngIf=\"form.controls.certainPassword.errors?.equalTo\">Passwords do not match</small> \r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Not Equal To</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control validation-field mb-1\" type=\"text\" formControlName=\"first\">\r\n                            <small class=\"text-danger\" *ngIf=\"form.controls.first.touched && form.controls.first.errors?.required\">Field is required</small> \r\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"second\">\r\n                            <small class=\"text-danger\" *ngIf=\"form.controls.second.touched && form.controls.second.errors?.notEqualTo\">The first value should not be equal to the second value</small> \r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Greater than</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"greaterThan\">\r\n                            <small class=\"text-danger\" *ngIf=\"form.controls.greaterThan.errors?.gt\">The value must be greater than 10</small> \r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Greater than equal</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"greaterThanEqual\">\r\n                            <small class=\"text-danger\" *ngIf=\"form.controls.greaterThanEqual.errors?.gte\">The value must be greater than or equal to 15</small> \r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Less than</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"lessThan\">\r\n                            <small class=\"text-danger\" *ngIf=\"form.controls.lessThan.errors?.lt\">The value must be less than 10</small> \r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Less than equal</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"lessThanEqual\">\r\n                            <small class=\"text-danger\" *ngIf=\"form.controls.lessThanEqual.errors?.lte\">The value must be less than or equal to 10</small> \r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Max</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"max\">\r\n                            <small class=\"text-danger\" *ngIf=\"form.controls.max.errors?.max\">The value must be maximum 10</small> \r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Min</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"min\">\r\n                            <small class=\"text-danger\" *ngIf=\"form.controls.min.errors?.min\">The value must be minimum 10</small> \r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Number</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"number\">\r\n                            <small class=\"text-danger\" *ngIf=\"form.controls.number.errors?.number\">The value must be only number</small> \r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Phone</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"phone\">\r\n                            <small class=\"text-danger\" *ngIf=\"form.controls.phone.errors?.phone\">US phone number e.g. 2135556677</small> \r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Range</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"range\">\r\n                            <small class=\"text-danger\" *ngIf=\"form.controls.range.errors?.range\">The value must be between 10 and 20</small> \r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Range length</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"rangeLength\">\r\n                            <small class=\"text-danger\" *ngIf=\"form.controls.rangeLength.errors?.rangeLength\">The value length must be between 5 and 9</small> \r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row text-sm-right\">\r\n                        <label class=\"col-sm-3\">Url</label>\r\n                        <div class=\"col-sm-8 text-left\">\r\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"url\">\r\n                            <small class=\"text-danger\" *ngIf=\"form.controls.url.errors?.url\">e.g. http://themeseason.com</small> \r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <div class=\"col-sm-8 offset-sm-3 text-center\">\r\n                            <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"form.invalid\">Validate &amp; Submit</button>\r\n                        </div>\r\n                    </div>                  \r\n\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div> \r\n"

/***/ }),

/***/ "./src/app/pages/form-elements/validations/validations.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/form-elements/validations/validations.component.ts ***!
  \**************************************************************************/
/*! exports provided: ValidationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationsComponent", function() { return ValidationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ValidationsComponent = /** @class */ (function () {
    function ValidationsComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    ValidationsComponent.prototype.ngOnInit = function () {
        var password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        var certainPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].equalTo(password));
        var first = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        var second = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].notEqualTo(first));
        this.form = this.formBuilder.group({
            required: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            minLength: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].min(3)])],
            maxLength: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)])],
            base64: ['', ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].base64],
            creditCard: ['', ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].creditCard],
            date: ['', ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].date],
            dateISO: ['', ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].dateISO],
            maxDate: ['', ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].maxDate('2017-09-09')],
            minDate: ['', ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].minDate('2017-09-09')],
            digits: ['', ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].digits],
            email: ['', ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].email],
            equal: ['', ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].equal('5')],
            notEqual: ['', ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].notEqual('10')],
            password: password,
            certainPassword: certainPassword,
            first: first,
            second: second,
            greaterThan: ['', ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].gt(10)],
            greaterThanEqual: ['', ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].gte(15)],
            lessThan: ['', ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].lt(10)],
            lessThanEqual: ['', ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].lte(10)],
            max: ['', ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].max(10)],
            min: ['', ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].min(10)],
            number: ['', ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].number],
            phone: ['', ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].phone('US')],
            range: ['', ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].range([10, 20])],
            rangeLength: ['', ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].rangeLength([5, 9])],
            url: ['', ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].url]
        });
    };
    ValidationsComponent.prototype.submitForm = function (value) {
        console.log(value);
    };
    ValidationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-validations',
            template: __webpack_require__(/*! ./validations.component.html */ "./src/app/pages/form-elements/validations/validations.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ValidationsComponent);
    return ValidationsComponent;
}());



/***/ }),

/***/ "./src/app/pages/form-elements/wizard/wizard.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/form-elements/wizard/wizard.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Form Wizard</h2>\r\n<p class=\"text-muted\">If you want to be more selective about what fields appear on the form, you can use the Form Wizard instead.</p>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col\">\r\n        <div widget class=\"card border-0 box-shadow\">\r\n            <div class=\"card-header transparent border-0 text-muted\">\r\n                <h5 class=\"mb-0\">Form Wizard</h5>\r\n                <div class=\"widget-controls\"> \r\n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\r\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\r\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\r\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \r\n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\r\n                </div>        \r\n            </div>\r\n            <div *ngIf=\"!confirmed\" class=\"card-body widget-body\">\r\n                <div class=\"row\">\r\n                    <div *ngFor=\"let step of steps; let last = last\" class=\"col-md-3 col-sm-6 col-12 step text-center\">\r\n                        <div class=\"d-flex justify-content-center align-items-center text-white pl-2 pr-2 mb-2 rounded step-content\" [class.bg-success]=\"step.valid\" [class.bg-danger]=\"step.active\" [class.confirmed]=\"confirmed\">\r\n                            <i class=\"fa {{ step.icon }} mr-2\" aria-hidden=\"true\"></i>\r\n                            <span class=\"step-name\">{{step.name}}</span> \r\n                        </div>\r\n                    </div> \r\n                </div>               \r\n             \r\n                <div *ngFor=\"let step of steps\" [hidden]=\"!step.active\" class=\"col\">\r\n                    <div class=\"row\">\r\n                        <h4 class=\"mt-3 mb-3\"><i class=\"fa {{ step.icon }}\"></i> {{step.name}}</h4>\r\n                    </div>\r\n                        \r\n                    <form *ngIf=\"step.name=='Account Information'\" [formGroup]=\"accountForm\" class=\"row bg-light pt-2\">\r\n\r\n                        <div class=\"form-group col-md-7\" [ngClass]=\"{'has-danger' : step.hasError && accountForm.get('username').hasError('required'), 'has-success' : !accountForm.get('username').hasError('required') }\">\r\n                            <label class=\"form-control-label\">Username</label>\r\n                            <div class=\"input-group\"> \r\n                                <div class=\"input-group-prepend\"><span class=\"input-group-text\"><i class=\"fa fa-user-o\"></i></span></div>  \r\n                                <input formControlName=\"username\" class=\"form-control\" [ngClass]=\"{'form-control-danger' :  accountForm.get('username').hasError('required'), 'form-control-success' :  !accountForm.get('username').hasError('required') }\" type=\"text\"> \r\n                            </div>\r\n                            <small class=\"text-danger\" *ngIf=\"step.hasError && accountForm.get('username').hasError('required')\">Username is required</small>                             \r\n                        </div>\r\n\r\n                        <div class=\"form-group col-md-7\" [ngClass]=\"{'has-danger' : (step.hasError && accountForm.get('password').hasError('required')) || (step.hasError && accountForm.get('password').hasError('minlength')), \r\n                                                                     'has-success' : !accountForm.get('password').hasError('required') && !accountForm.get('password').hasError('minlength')}\">\r\n                            <label class=\"form-control-label\">Password</label> \r\n                            <div class=\"input-group\"> \r\n                                <div class=\"input-group-prepend\"><span class=\"input-group-text\"><i class=\"fa fa-key\"></i></span></div>                       \r\n                                <input formControlName=\"password\" class=\"form-control\" [ngClass]=\"{'form-control-danger' : (step.hasError && accountForm.get('password').hasError('required')) || (step.hasError && accountForm.get('password').hasError('minlength')),                                                                                                        'form-control-success' : !accountForm.get('password').hasError('required') && !accountForm.get('password').hasError('minlength')}\" type=\"password\">\r\n                            </div>\r\n                            <small class=\"text-danger\" *ngIf=\"step.hasError && accountForm.get('password').hasError('required')\">Password is required</small>                              \r\n                            <small class=\"text-danger\" *ngIf=\"step.hasError && accountForm.get('password').hasError('minlength')\">Password isn't long enough, minimum of 6 characters</small>                            \r\n                        </div>\r\n\r\n                        <div class=\"form-group col-md-7\" [ngClass]=\"{'has-danger' : (step.hasError && accountForm.get('confirmPassword').hasError('required')) || (step.hasError && accountForm.get('confirmPassword').hasError('equalTo')), \r\n                                                                     'has-success' : !accountForm.get('confirmPassword').hasError('required') && !accountForm.get('confirmPassword').hasError('equalTo')}\">\r\n                            <label class=\"form-control-label\">Confirm Password</label>                              \r\n                            <div class=\"input-group\"> \r\n                                <div class=\"input-group-prepend\"><span class=\"input-group-text\"><i class=\"fa fa-key\"></i></span></div>     \r\n                                <input formControlName=\"confirmPassword\" class=\"form-control\" [ngClass]=\"{'form-control-danger' : (step.hasError && accountForm.get('confirmPassword').hasError('required')) || (step.hasError && accountForm.get('confirmPassword').hasError('equalTo')), \r\n                                                                                                          'form-control-success' : !accountForm.get('confirmPassword').hasError('required') && !accountForm.get('confirmPassword').hasError('equalTo')}\" type=\"password\" >\r\n                            </div>\r\n                            <small class=\"text-danger\" *ngIf=\"step.hasError && accountForm.get('confirmPassword').hasError('required')\">Password is required</small>                              \r\n                            <small class=\"text-danger\" *ngIf=\"step.hasError && accountForm.get('confirmPassword').hasError('equalTo')\">Passwords do not match</small> \r\n                        </div>\r\n\r\n                        <div class=\"form-group col-md-7\" [ngClass]=\"{'has-danger' : (step.hasError && accountForm.get('email').hasError('required')) || (step.hasError && accountForm.get('email').hasError('email')), \r\n                                                            'has-success' : !accountForm.get('email').hasError('required') && !accountForm.get('email').hasError('email')}\">\r\n                            <label class=\"form-control-label\">Email</label>\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\"><span class=\"input-group-text\"><i class=\"fa fa-envelope\"></i></span></div>\r\n                                <input formControlName=\"email\" class=\"form-control\" [ngClass]=\"{'form-control-danger' : (step.hasError && accountForm.get('email').hasError('required')) || (step.hasError && accountForm.get('email').hasError('email')), \r\n                                                                                                'form-control-success' :  !accountForm.get('email').hasError('required') && !accountForm.get('email').hasError('email')}\" type=\"text\">                      \r\n                            </div>\r\n                            <small class=\"text-danger\" *ngIf=\"step.hasError && accountForm.get('email').hasError('required')\">Email is required</small>                              \r\n                            <small class=\"text-danger\" *ngIf=\"step.hasError && accountForm.get('email').hasError('email')\">Invalid email address</small>\r\n                        </div>\r\n                    </form>\r\n\r\n                    <form *ngIf=\"step.name=='Personal Information'\" [formGroup]=\"personalForm\" class=\"row bg-light pt-2\">\r\n                        <div class=\"form-group col-md-2\">\r\n                            <label class=\"form-control-label\">Salutation</label>\r\n                            <select formControlName=\"salutation\" class=\"form-control\">\r\n                                <option>Mr</option>\r\n                                <option>Mrs</option>\r\n                            </select>\r\n                        </div>      \r\n\r\n                        <div class=\"form-group col-md-5\" [ngClass]=\"{'has-danger' : step.hasError && personalForm.get('firstname').hasError('required'), 'has-success' : !personalForm.get('firstname').hasError('required') }\">\r\n                            <label class=\"form-control-label\">First Name</label>\r\n                            <input formControlName=\"firstname\" class=\"form-control\" [ngClass]=\"{'form-control-danger' :  personalForm.get('firstname').hasError('required'), 'form-control-success' :  !personalForm.get('firstname').hasError('required') }\" type=\"text\"> \r\n                            <small class=\"text-danger\" *ngIf=\"step.hasError && personalForm.get('firstname').hasError('required')\">First Name is required</small>                             \r\n                        </div>\r\n\r\n                        <div class=\"form-group col-md-5\" [ngClass]=\"{'has-danger' : step.hasError && personalForm.get('lastname').hasError('required'), 'has-success' : !personalForm.get('lastname').hasError('required') }\">\r\n                            <label class=\"form-control-label\">Last Name</label>\r\n                            <input formControlName=\"lastname\" class=\"form-control\" [ngClass]=\"{'form-control-danger' :  personalForm.get('lastname').hasError('required'), 'form-control-success' :  !personalForm.get('lastname').hasError('required') }\" type=\"text\"> \r\n                            <small class=\"text-danger\" *ngIf=\"step.hasError && personalForm.get('lastname').hasError('required')\">Last Name is required</small>                             \r\n                        </div>\r\n\r\n                        <div class=\"form-group col-md-3\">\r\n                            <label class=\"form-control-label\">Gender</label>\r\n                            <select formControlName=\"gender\" class=\"form-control\">\r\n                                <option>Male</option>\r\n                                <option>Female</option>\r\n                            </select>\r\n                        </div>\r\n\r\n                        <div class=\"form-group col-md-5\" [ngClass]=\"{'has-danger' : (step.hasError && personalForm.get('email').hasError('required')) || (step.hasError && personalForm.get('email').hasError('email')), \r\n                                                                     'has-success' : !personalForm.get('email').hasError('required') && !personalForm.get('email').hasError('email')}\">\r\n                            <label class=\"form-control-label\">Contact email</label>\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\"><span class=\"input-group-text\"><i class=\"fa fa-envelope\"></i></span></div>\r\n                                <input formControlName=\"email\" class=\"form-control\" [ngClass]=\"{'form-control-danger' : (step.hasError && personalForm.get('email').hasError('required')) || (step.hasError && personalForm.get('email').hasError('email')), \r\n                                                                                                'form-control-success' :  !personalForm.get('email').hasError('required') && !personalForm.get('email').hasError('email')}\" type=\"text\">                      \r\n                            </div>\r\n                            <small class=\"text-danger\" *ngIf=\"step.hasError && personalForm.get('email').hasError('required')\">Email is required</small>                              \r\n                            <small class=\"text-danger\" *ngIf=\"step.hasError && personalForm.get('email').hasError('email')\">Invalid email address</small>\r\n                        </div>\r\n\r\n                        <div class=\"form-group col-md-4\" [ngClass]=\"{'has-danger' : step.hasError && personalForm.get('phone').hasError('required'), 'has-success' : !personalForm.get('phone').hasError('required') }\">\r\n                            <label class=\"form-control-label\">Phone</label>\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\"><span class=\"input-group-text\"><i class=\"fa fa-phone\"></i></span></div>\r\n                                <input formControlName=\"phone\" class=\"form-control\" [ngClass]=\"{'form-control-danger' :  personalForm.get('phone').hasError('required'), 'form-control-success' :  !personalForm.get('phone').hasError('required') }\" type=\"number\"> \r\n                            </div>\r\n                            <small class=\"text-danger\" *ngIf=\"step.hasError && personalForm.get('phone').hasError('required')\">Phone is required</small>                             \r\n                        </div>\r\n\r\n                        <div class=\"form-group col-md-2\" [ngClass]=\"{'has-danger' : step.hasError && personalForm.get('zipcode').hasError('required'), 'has-success' : !personalForm.get('zipcode').hasError('required') }\">\r\n                            <label class=\"form-control-label\">Zip Code</label>\r\n                            <input formControlName=\"zipcode\" class=\"form-control\" [ngClass]=\"{'form-control-danger' :  personalForm.get('zipcode').hasError('required'), 'form-control-success' :  !personalForm.get('zipcode').hasError('required') }\" type=\"text\"> \r\n                            <small class=\"text-danger\" *ngIf=\"step.hasError && personalForm.get('zipcode').hasError('required')\">required</small>                             \r\n                        </div>\r\n\r\n                        <div class=\"form-group col-md-5\" [ngClass]=\"{'has-danger' : step.hasError && personalForm.get('country').hasError('required'), 'has-success' : !personalForm.get('country').hasError('required') }\">\r\n                            <label class=\"form-control-label\">Select Country</label>\r\n                            <select formControlName=\"country\" class=\"form-control\" [ngClass]=\"{'form-control-danger' : step.hasError && personalForm.get('country').hasError('required'), 'form-control-success' : !personalForm.get('country').hasError('required') }\">\r\n                                <option>USA</option>\r\n                                <option>Canada</option>\r\n                                <option>Mexico</option>\r\n                                <option>UK</option>\r\n                                <option>France</option>\r\n                                <option>Italy</option>\r\n                            </select>\r\n                            <small class=\"text-danger\" *ngIf=\"step.hasError && personalForm.get('country').hasError('required')\">Country is required</small>                             \r\n                        </div>\r\n\r\n                        <div class=\"form-group col-md-5\">\r\n                            <label class=\"form-control-label\">Select State</label>\r\n                            <select formControlName=\"state\" class=\"form-control\">\r\n                                <option>Arkansas</option>\r\n                                <option>Texas</option>\r\n                                <option>California</option>\r\n                                <option>Florida</option>\r\n                                <option>Other</option>\r\n                            </select>\r\n                        </div>\r\n                        \r\n                        <div class=\"form-group col\">\r\n                            <label class=\"form-control-label\">Address</label>\r\n                            <textarea formControlName=\"address\" class=\"form-control\"></textarea>\r\n                        </div>                     \r\n                    </form>\r\n\r\n                    <form *ngIf=\"step.name=='Payment Information'\" [formGroup]=\"paymentForm\" class=\"row bg-light pt-2\">\r\n                        <div class=\"form-group col-md-7\" [ngClass]=\"{'has-danger' : step.hasError && paymentForm.get('cardtype').hasError('required'), 'has-success' : !paymentForm.get('cardtype').hasError('required') }\">\r\n                            <label class=\"form-control-label\">Card Type</label>\r\n                            <select formControlName=\"cardtype\" class=\"form-control\" [ngClass]=\"{'form-control-danger' : step.hasError && paymentForm.get('cardtype').hasError('required'), 'form-control-success' : !paymentForm.get('cardtype').hasError('required') }\">\r\n                                <option>Visa</option>\r\n                                <option>Master Card</option>\r\n                                <option>Other</option>\r\n                            </select>\r\n                            <small class=\"text-danger\" *ngIf=\"step.hasError && paymentForm.get('cardtype').hasError('required')\">Card Type is required</small>                             \r\n                        </div>\r\n\r\n                        <div class=\"form-group col-md-7\" [ngClass]=\"{'has-danger' : (step.hasError && paymentForm.get('cardnumber').hasError('required')) || (step.hasError && paymentForm.get('cardnumber').hasError('creditCard')), \r\n                                                                     'has-success' : !paymentForm.get('cardnumber').hasError('required') && !paymentForm.get('cardnumber').hasError('creditCard')}\">\r\n                            <label class=\"form-control-label\">Card Number</label>\r\n                            <input formControlName=\"cardnumber\" class=\"form-control\" [ngClass]=\"{'form-control-danger' : (step.hasError && paymentForm.get('cardnumber').hasError('required')) || (step.hasError && paymentForm.get('cardnumber').hasError('creditCard')), \r\n                                                                                                 'form-control-success' : !paymentForm.get('cardnumber').hasError('required') && !paymentForm.get('cardnumber').hasError('creditCard') }\" type=\"text\"> \r\n                            <small class=\"text-danger\" *ngIf=\"step.hasError && paymentForm.get('cardnumber').hasError('required')\">Card Number is required</small>                             \r\n                            <small class=\"text-danger\" *ngIf=\"step.hasError && paymentForm.get('cardnumber').hasError('creditCard')\">Invalid Card Number  e.g. 4242 4242 4242 4242</small>\r\n                        </div> \r\n\r\n                        <div class=\"form-group col-md-7\" [ngClass]=\"{'has-danger' : (step.hasError && paymentForm.get('cvc').hasError('required')) || (step.hasError && paymentForm.get('cvc').hasError('number')), \r\n                                                                     'has-success' : !paymentForm.get('cvc').hasError('required') && !paymentForm.get('cvc').hasError('number') }\">\r\n                            <label class=\"form-control-label\">CVC</label>\r\n                            <input formControlName=\"cvc\" class=\"form-control\" [ngClass]=\"{'form-control-danger' : (step.hasError && paymentForm.get('cvc').hasError('required')) || (step.hasError && paymentForm.get('cvc').hasError('number')), \r\n                                                                                          'form-control-success' : !paymentForm.get('cvc').hasError('required') && !paymentForm.get('cvc').hasError('number') }\" type=\"text\" maxlength=\"3\"> \r\n                            <small class=\"text-danger\" *ngIf=\"step.hasError && paymentForm.get('cvc').hasError('required')\">CVC is required</small>                             \r\n                            <small class=\"text-danger\" *ngIf=\"step.hasError && paymentForm.get('cvc').hasError('number')\">Invalid CVC</small>\r\n                        </div> \r\n\r\n                        <div class=\"form-group col-md-7\" [ngClass]=\"{'has-danger' : step.hasError && paymentForm.get('expirymonth').hasError('required'), 'has-success' : !paymentForm.get('expirymonth').hasError('required') }\">\r\n                            <label class=\"form-control-label\">Expiry Month</label>\r\n                            <select formControlName=\"expirymonth\" class=\"form-control\" [ngClass]=\"{'form-control-danger' : step.hasError && paymentForm.get('expirymonth').hasError('required'), 'form-control-success' : !paymentForm.get('expirymonth').hasError('required') }\">\r\n                                <option>01</option>\r\n                                <option>02</option>\r\n                                <option>03</option>\r\n                                <option>04</option>\r\n                                <option>05</option>\r\n                                <option>06</option>\r\n                                <option>07</option>\r\n                                <option>08</option>\r\n                                <option>09</option>\r\n                                <option>10</option>\r\n                                <option>11</option>\r\n                                <option>12</option>\r\n                            </select>\r\n                            <small class=\"text-danger\" *ngIf=\"step.hasError && paymentForm.get('expirymonth').hasError('required')\">Expiry Month is required</small>                             \r\n                        </div>\r\n\r\n                        <div class=\"form-group col-md-7\" [ngClass]=\"{'has-danger' : step.hasError && paymentForm.get('expiryyear').hasError('required'), 'has-success' : !paymentForm.get('expiryyear').hasError('required') }\">\r\n                            <label class=\"form-control-label\">Expiry Year</label>\r\n                            <select formControlName=\"expiryyear\" class=\"form-control\" [ngClass]=\"{'form-control-danger' : step.hasError && paymentForm.get('expiryyear').hasError('required'), 'form-control-success' : !paymentForm.get('expiryyear').hasError('required') }\">\r\n                                <option>2017</option>\r\n                                <option>2018</option>\r\n                                <option>2019</option>\r\n                                <option>2020</option>\r\n                                <option>2021</option>\r\n                                <option>2022</option>\r\n                                <option>2023</option>\r\n                                <option>2024</option>\r\n                            </select>\r\n                            <small class=\"text-danger\" *ngIf=\"step.hasError && paymentForm.get('expiryyear').hasError('required')\">Expiry Year is required</small>                             \r\n                        </div>\r\n                    </form>\r\n                   \r\n                    <div *ngIf=\"step.name=='Confirm Your Details'\" class=\"row bg-light pt-2\">\r\n                        <div class=\"col-2\"><strong class=\"text-truncate\">Username</strong></div>\r\n                        <div class=\"col-10\"><i>{{details.username}}</i></div>\r\n                        <div class=\"col-2\"><strong class=\"text-truncate\">Full Name</strong></div>\r\n                        <div class=\"col-10\"><i>{{details.fullname}}</i></div>\r\n                        <div class=\"col-2\"><strong class=\"text-truncate\">Gender</strong></div>\r\n                        <div class=\"col-10\"><i>{{details.gender}} &nbsp;</i></div>\r\n                        <div class=\"col-2\"><strong class=\"text-truncate\">Contact Email</strong></div>\r\n                        <div class=\"col-10\"><i>{{details.email}}</i></div>\r\n                        <div class=\"col-2\"><strong class=\"text-truncate\">Phone NO.</strong></div>\r\n                        <div class=\"col-10\"><i>{{details.phone}}</i></div>\r\n                        <div class=\"col-2\"><strong class=\"text-truncate\">Address</strong></div>\r\n                        <div class=\"col-10\"><i>{{details.address}} &nbsp;</i></div>\r\n                        <div class=\"col-2\"><strong class=\"text-truncate\">Country</strong></div>\r\n                        <div class=\"col-10\"><i>{{details.country}}</i></div>\r\n                        <div class=\"col-2\"><strong class=\"text-truncate\">Zip Code</strong></div>\r\n                        <div class=\"col-10\"><i>{{details.zipcode}}</i></div>\r\n                        <div class=\"col-2\"><strong class=\"text-truncate\">Card Type</strong></div>\r\n                        <div class=\"col-10\"><i>{{details.cardtype}}</i></div>\r\n                        <div class=\"col-2\"><strong class=\"text-truncate\">Card Number</strong></div>\r\n                        <div class=\"col-10\"><i>{{details.cardnumber}}</i></div>\r\n                    </div>\r\n\r\n                </div> \r\n\r\n                <div class=\"row mt-3\"> \r\n                    <div class=\"col\">\r\n                        <button class=\"btn btn-primary pull-left\" (click)=\"prev()\"><i class=\"fa fa-chevron-left arrow\"></i>&nbsp; Prev Step</button>\r\n                        <button *ngIf=\"!steps[steps.length-1].active\" class=\"btn btn-primary pull-right\" (click)=\"next()\">Next Step &nbsp;<i class=\"fa fa-chevron-right arrow\"></i></button>\r\n                        <button *ngIf=\"steps[steps.length-1].active\" class=\"btn btn-primary pull-right\" (click)=\"confirm()\">Confirm &nbsp;<i class=\"fa fa-check arrow\"></i></button>\r\n                    </div> \r\n                </div>         \r\n\r\n            </div>\r\n\r\n            <div *ngIf=\"confirmed\" class=\"card-body widget-body\">\r\n               \r\n                <div class=\"col bg-light p-5\">\r\n                    <div class=\"d-flex justify-content-center align-items-center flex-column bg-light confirmed-content\">\r\n                        <i class=\"fa fa-check text-success\" aria-hidden=\"true\"></i>\r\n                        <h2 class=\"p-3\">That's all, thank you!</h2>\r\n                        <h5 class=\"p-3\">Order number is: 308521089</h5>\r\n                        <p class=\"p-2\">You will receive an email confirmation shortly at {{this.details.email}}</p>\r\n                        <i class=\"fa fa-print text-muted\" aria-hidden=\"true\"></i>\r\n                    </div>\r\n                </div>              \r\n\r\n            </div>  \r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/form-elements/wizard/wizard.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/form-elements/wizard/wizard.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".step .step-content {\n  background: #b9b9b9;\n  height: 40px;\n  font-size: 1.5rem; }\n  .step .step-content .step-name {\n    font-size: 14px; }\n  .step .step-content.confirmed {\n    background-color: #4BAE4F !important; }\n  .confirmed-content .fa-check {\n  font-size: 120px; }\n  .confirmed-content .fa-print {\n  font-size: 24px; }\n"

/***/ }),

/***/ "./src/app/pages/form-elements/wizard/wizard.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/form-elements/wizard/wizard.component.ts ***!
  \****************************************************************/
/*! exports provided: WizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardComponent", function() { return WizardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WizardComponent = /** @class */ (function () {
    function WizardComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.details = {};
        var password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]));
        var confirmPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].equalTo(password)]));
        this.steps = [
            { name: 'Account Information', icon: 'fa-lock', active: true, valid: false, hasError: false },
            { name: 'Personal Information', icon: 'fa-user', active: false, valid: false, hasError: false },
            { name: 'Payment Information', icon: 'fa-credit-card', active: false, valid: false, hasError: false },
            { name: 'Confirm Your Details', icon: 'fa-check-square-o', active: false, valid: false, hasError: false }
        ];
        this.accountForm = this.formBuilder.group({
            'username': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'password': password,
            'confirmPassword': confirmPassword,
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].email])]
        });
        this.personalForm = this.formBuilder.group({
            'salutation': [''],
            'firstname': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'lastname': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'gender': [''],
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].email])],
            'phone': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'zipcode': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'country': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'state': [''],
            'address': ['']
        });
        this.paymentForm = this.formBuilder.group({
            'cardtype': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'cardnumber': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].creditCard])],
            'cvc': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].number])],
            'expirymonth': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'expiryyear': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    WizardComponent.prototype.next = function () {
        var accountForm = this.accountForm;
        var personalForm = this.personalForm;
        var paymentForm = this.paymentForm;
        if (this.steps[this.steps.length - 1].active)
            return false;
        this.steps.some(function (step, index, steps) {
            if (index < steps.length - 1) {
                if (step.active) {
                    if (step.name == 'Account Information') {
                        if (accountForm.valid) {
                            step.active = false;
                            step.valid = true;
                            steps[index + 1].active = true;
                            return true;
                        }
                        else {
                            step.hasError = true;
                        }
                    }
                    if (step.name == 'Personal Information') {
                        if (personalForm.valid) {
                            step.active = false;
                            step.valid = true;
                            steps[index + 1].active = true;
                            return true;
                        }
                        else {
                            step.hasError = true;
                        }
                    }
                    if (step.name == 'Payment Information') {
                        if (paymentForm.valid) {
                            step.active = false;
                            step.valid = true;
                            steps[index + 1].active = true;
                            return true;
                        }
                        else {
                            step.hasError = true;
                        }
                    }
                }
            }
        });
        this.details.username = this.accountForm.value.username;
        this.details.fullname = this.personalForm.value.firstname + " " + this.personalForm.value.lastname;
        this.details.gender = this.personalForm.value.gender;
        this.details.email = this.personalForm.value.email;
        this.details.phone = this.personalForm.value.phone;
        this.details.country = this.personalForm.value.country;
        this.details.zipcode = this.personalForm.value.zipcode;
        this.details.address = this.personalForm.value.address;
        this.details.cardtype = this.paymentForm.value.cardtype;
        this.details.cardnumber = this.paymentForm.value.cardnumber;
    };
    WizardComponent.prototype.prev = function () {
        if (this.steps[0].active)
            return false;
        this.steps.some(function (step, index, steps) {
            if (index != 0) {
                if (step.active) {
                    step.active = false;
                    steps[index - 1].active = true;
                    return true;
                }
            }
        });
    };
    WizardComponent.prototype.confirm = function () {
        this.steps.forEach(function (step) { return step.valid = true; });
        this.confirmed = true;
    };
    WizardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wizard',
            template: __webpack_require__(/*! ./wizard.component.html */ "./src/app/pages/form-elements/wizard/wizard.component.html"),
            styles: [__webpack_require__(/*! ./wizard.component.scss */ "./src/app/pages/form-elements/wizard/wizard.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], WizardComponent);
    return WizardComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-pages-form-elements-form-elements-module.js.map