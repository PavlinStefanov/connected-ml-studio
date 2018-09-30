(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-form-elements-form-elements-module~app-pages-membership-membership-module~app-pages-pages-~7190807b"],{

/***/ "./node_modules/angular-2-dropdown-multiselect/esm5/angular-2-dropdown-multiselect.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/angular-2-dropdown-multiselect/esm5/angular-2-dropdown-multiselect.js ***!
  \********************************************************************************************/
/*! exports provided: MultiSelectSearchFilter, MultiselectDropdownModule, MultiselectDropdownComponent, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSelectSearchFilter", function() { return MultiSelectSearchFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiselectDropdownModule", function() { return MultiselectDropdownModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiselectDropdownComponent", function() { return MultiselectDropdownComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return AutofocusDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var MultiSelectSearchFilter = /** @class */ (function () {
    function MultiSelectSearchFilter() {
        this._searchCache = {};
        this._searchCacheInclusive = {};
        this._prevSkippedItems = {};
    }
    MultiSelectSearchFilter.prototype.transform = function (options, str, limit, renderLimit) {
        if (str === void 0) { str = ''; }
        if (limit === void 0) { limit = 0; }
        if (renderLimit === void 0) { renderLimit = 0; }
        str = str.toLowerCase();
        if (options !== this._lastOptions) {
            this._lastOptions = options;
            this._searchCache = {};
            this._searchCacheInclusive = {};
            this._prevSkippedItems = {};
        }
        var filteredOpts = this._searchCache.hasOwnProperty(str)
            ? this._searchCache[str]
            : this._doSearch(options, str, limit);
        var isUnderLimit = options.length <= limit;
        return isUnderLimit
            ? filteredOpts
            : this._limitRenderedItems(filteredOpts, renderLimit);
    };
    MultiSelectSearchFilter.prototype._getSubsetOptions = function (options, prevOptions, prevSearchStr) {
        var prevInclusiveOrIdx = this._searchCacheInclusive[prevSearchStr];
        if (prevInclusiveOrIdx === true) {
            return prevOptions;
        }
        else if (typeof prevInclusiveOrIdx === 'number') {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(prevOptions, options.slice(prevInclusiveOrIdx));
        }
        return options;
    };
    MultiSelectSearchFilter.prototype._doSearch = function (options, str, limit) {
        var prevStr = str.slice(0, -1);
        var prevResults = this._searchCache[prevStr];
        var prevResultShift = this._prevSkippedItems[prevStr] || 0;
        if (prevResults) {
            options = this._getSubsetOptions(options, prevResults, prevStr);
        }
        var optsLength = options.length;
        var maxFound = limit > 0 ? Math.min(limit, optsLength) : optsLength;
        var regexp = new RegExp(this._escapeRegExp(str), 'i');
        var filteredOpts = [];
        var i = 0, founded = 0, removedFromPrevResult = 0;
        var doesOptionMatch = function (option) { return regexp.test(option.name); };
        var getChildren = function (option) { return options.filter(function (child) { return child.parentId === option.id; }); };
        var getParent = function (option) { return options.find(function (parent) { return option.parentId === parent.id; }); };
        var foundFn = function (item) { filteredOpts.push(item); founded++; };
        var notFoundFn = prevResults ? function () { return removedFromPrevResult++; } : function () { };
        for (; i < optsLength && founded < maxFound; ++i) {
            var option = options[i];
            var directMatch = doesOptionMatch(option);
            if (directMatch) {
                foundFn(option);
                continue;
            }
            if (typeof option.parentId === 'undefined') {
                var childrenMatch = getChildren(option).some(doesOptionMatch);
                if (childrenMatch) {
                    foundFn(option);
                    continue;
                }
            }
            if (typeof option.parentId !== 'undefined') {
                var parentMatch = doesOptionMatch(getParent(option));
                if (parentMatch) {
                    foundFn(option);
                    continue;
                }
            }
            notFoundFn();
        }
        var totalIterations = i + prevResultShift;
        this._searchCache[str] = filteredOpts;
        this._searchCacheInclusive[str] = i === optsLength || totalIterations;
        this._prevSkippedItems[str] = removedFromPrevResult + prevResultShift;
        return filteredOpts;
    };
    MultiSelectSearchFilter.prototype._limitRenderedItems = function (items, limit) {
        return items.length > limit && limit > 0 ? items.slice(0, limit) : items;
    };
    MultiSelectSearchFilter.prototype._escapeRegExp = function (str) {
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    };
    return MultiSelectSearchFilter;
}());
MultiSelectSearchFilter.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                name: 'searchFilter'
            },] },
];
var AutofocusDirective = /** @class */ (function () {
    function AutofocusDirective(elemRef) {
        this.elemRef = elemRef;
    }
    Object.defineProperty(AutofocusDirective.prototype, "element", {
        get: function () {
            return this.elemRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    AutofocusDirective.prototype.ngOnInit = function () {
        this.focus();
    };
    AutofocusDirective.prototype.ngOnChanges = function (changes) {
        var ssAutofocusChange = changes["ssAutofocus"];
        if (ssAutofocusChange && !ssAutofocusChange.isFirstChange()) {
            this.focus();
        }
    };
    AutofocusDirective.prototype.focus = function () {
        if (this.ssAutofocus) {
            return;
        }
        this.element.focus && this.element.focus();
    };
    return AutofocusDirective;
}());
AutofocusDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[ssAutofocus]'
            },] },
];
AutofocusDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"] },] },
]; };
AutofocusDirective.propDecorators = {
    "ssAutofocus": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
};
var MULTISELECT_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return MultiselectDropdownComponent; }),
    multi: true,
};
var MultiselectDropdownComponent = /** @class */ (function () {
    function MultiselectDropdownComponent(element, fb, searchFilter, differs, cdRef) {
        this.element = element;
        this.fb = fb;
        this.searchFilter = searchFilter;
        this.cdRef = cdRef;
        this.filterControl = this.fb.control('');
        this.disabled = false;
        this.disabledSelection = false;
        this.selectionLimitReached = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dropdownClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dropdownOpened = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onLazyLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onFilter = this.filterControl.valueChanges;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.filteredOptions = [];
        this.lazyLoadOptions = [];
        this.renderFilteredOptions = [];
        this.model = [];
        this.prevModel = [];
        this.numSelected = 0;
        this.renderItems = true;
        this.checkAllSearchRegister = new Set();
        this.checkAllStatus = false;
        this.loadedValueIds = [];
        this._focusBack = false;
        this.defaultSettings = {
            closeOnClickOutside: true,
            pullRight: false,
            enableSearch: false,
            searchRenderLimit: 0,
            searchRenderAfter: 1,
            searchMaxLimit: 0,
            searchMaxRenderedItems: 0,
            checkedStyle: 'checkboxes',
            buttonClasses: 'btn btn-primary dropdown-toggle',
            containerClasses: 'dropdown-inline',
            selectionLimit: 0,
            minSelectionLimit: 0,
            closeOnSelect: false,
            autoUnselect: false,
            showCheckAll: false,
            showUncheckAll: false,
            fixedTitle: false,
            dynamicTitleMaxItems: 3,
            maxHeight: '300px',
            isLazyLoad: false,
            stopScrollPropagation: false,
            loadViewDistance: 1,
            selectAddedValues: false,
            ignoreLabels: false,
            maintainSelectionOrderInTitle: false,
            focusBack: true
        };
        this.defaultTexts = {
            checkAll: 'Check all',
            uncheckAll: 'Uncheck all',
            checked: 'checked',
            checkedPlural: 'checked',
            searchPlaceholder: 'Search...',
            searchEmptyResult: 'Nothing found...',
            searchNoRenderText: 'Type in search box to see results...',
            defaultTitle: 'Select',
            allSelected: 'All selected',
        };
        this._isVisible = false;
        this._workerDocClicked = false;
        this.onModelChange = function (_) { };
        this.onModelTouched = function () { };
        this.differ = differs.find([]).create(null);
        this.settings = this.defaultSettings;
        this.texts = this.defaultTexts;
    }
    Object.defineProperty(MultiselectDropdownComponent.prototype, "focusBack", {
        get: function () {
            return this.settings.focusBack && this._focusBack;
        },
        enumerable: true,
        configurable: true
    });
    MultiselectDropdownComponent.prototype.onClick = function (target) {
        if (!this.isVisible || !this.settings.closeOnClickOutside) {
            return;
        }
        var parentFound = false;
        while (target != null && !parentFound) {
            if (target === this.element.nativeElement) {
                parentFound = true;
            }
            target = target.parentElement;
        }
        if (!parentFound) {
            this.isVisible = false;
            this._focusBack = true;
            this.dropdownClosed.emit();
        }
    };
    Object.defineProperty(MultiselectDropdownComponent.prototype, "isVisible", {
        get: function () {
            return this._isVisible;
        },
        set: function (val) {
            this._isVisible = val;
            this._workerDocClicked = val ? false : this._workerDocClicked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiselectDropdownComponent.prototype, "searchLimit", {
        get: function () {
            return this.settings.searchRenderLimit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiselectDropdownComponent.prototype, "searchRenderAfter", {
        get: function () {
            return this.settings.searchRenderAfter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiselectDropdownComponent.prototype, "searchLimitApplied", {
        get: function () {
            return this.searchLimit > 0 && this.options.length > this.searchLimit;
        },
        enumerable: true,
        configurable: true
    });
    MultiselectDropdownComponent.prototype.getItemStyle = function (option) {
        if (!option.isLabel) {
        }
        if (option.disabled) {
        }
    };
    MultiselectDropdownComponent.prototype.getItemStyleSelectionDisabled = function () {
        if (this.disabledSelection) {
            return { cursor: 'default' };
        }
    };
    MultiselectDropdownComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = this.texts.defaultTitle || '';
        this.filterControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed$)).subscribe(function () {
            _this.updateRenderItems();
            if (_this.settings.isLazyLoad) {
                _this.load();
            }
        });
    };
    MultiselectDropdownComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes['options']) {
            this.options = this.options || [];
            this.parents = this.options
                .filter(function (option) { return typeof option.parentId === 'number'; })
                .map(function (option) { return option.parentId; });
            this.updateRenderItems();
            if (this.settings.isLazyLoad &&
                this.settings.selectAddedValues &&
                this.loadedValueIds.length === 0) {
                this.loadedValueIds = this.loadedValueIds.concat(changes["options"].currentValue.map(function (value) { return value.id; }));
            }
            if (this.settings.isLazyLoad &&
                this.settings.selectAddedValues &&
                changes["options"].previousValue) {
                var addedValues_1 = changes["options"].currentValue.filter(function (value) { return _this.loadedValueIds.indexOf(value.id) === -1; });
                this.loadedValueIds.concat(addedValues_1.map(function (value) { return value.id; }));
                if (this.checkAllStatus) {
                    this.addChecks(addedValues_1);
                }
                else if (this.checkAllSearchRegister.size > 0) {
                    this.checkAllSearchRegister.forEach(function (searchValue) { return _this.addChecks(_this.applyFilters(addedValues_1, searchValue)); });
                }
            }
            if (this.texts) {
                this.updateTitle();
            }
            this.fireModelChange();
        }
        if (changes['settings']) {
            this.settings = Object.assign({}, this.defaultSettings, this.settings);
        }
        if (changes['texts']) {
            this.texts = Object.assign({}, this.defaultTexts, this.texts);
            if (!changes['texts'].isFirstChange()) {
                this.updateTitle();
            }
        }
    };
    MultiselectDropdownComponent.prototype.ngOnDestroy = function () {
        this.destroyed$.next();
    };
    MultiselectDropdownComponent.prototype.updateRenderItems = function () {
        this.renderItems =
            !this.searchLimitApplied ||
                this.filterControl.value.length >= this.searchRenderAfter;
        this.filteredOptions = this.applyFilters(this.options, this.settings.isLazyLoad ? '' : this.filterControl.value);
        this.renderFilteredOptions = this.renderItems ? this.filteredOptions : [];
        this.focusedItem = undefined;
    };
    MultiselectDropdownComponent.prototype.applyFilters = function (options, value) {
        return this.searchFilter.transform(options, value, this.settings.searchMaxLimit, this.settings.searchMaxRenderedItems);
    };
    MultiselectDropdownComponent.prototype.fireModelChange = function () {
        if (this.model != this.prevModel) {
            this.prevModel = this.model;
            this.onModelChange(this.model);
            this.onModelTouched();
            this.cdRef.markForCheck();
        }
    };
    MultiselectDropdownComponent.prototype.writeValue = function (value) {
        if (value !== undefined && value !== null) {
            this.model = Array.isArray(value) ? value : [value];
            this.ngDoCheck();
        }
        else {
            this.model = [];
        }
    };
    MultiselectDropdownComponent.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    MultiselectDropdownComponent.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    MultiselectDropdownComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    MultiselectDropdownComponent.prototype.ngDoCheck = function () {
        var changes = this.differ.diff(this.model);
        if (changes) {
            this.updateNumSelected();
            this.updateTitle();
        }
    };
    MultiselectDropdownComponent.prototype.validate = function (_c) {
        var _this = this;
        if (this.model && this.model.length) {
            return {
                required: {
                    valid: false
                }
            };
        }
        if (this.options.filter(function (o) { return _this.model.indexOf(o.id) && !o.disabled; }).length === 0) {
            return {
                selection: {
                    valid: false
                }
            };
        }
        return null;
    };
    MultiselectDropdownComponent.prototype.registerOnValidatorChange = function (_fn) {
        throw new Error('Method not implemented.');
    };
    MultiselectDropdownComponent.prototype.clearSearch = function (event) {
        this.maybeStopPropagation(event);
        this.filterControl.setValue('');
    };
    MultiselectDropdownComponent.prototype.toggleDropdown = function (e) {
        this.maybeStopPropagation(e);
        if (this.isVisible) {
            this._focusBack = true;
        }
        this.isVisible = !this.isVisible;
        this.isVisible ? this.dropdownOpened.emit() : this.dropdownClosed.emit();
        this.focusedItem = undefined;
    };
    MultiselectDropdownComponent.prototype.closeDropdown = function (e) {
        this.isVisible = true;
        this.toggleDropdown(e);
    };
    MultiselectDropdownComponent.prototype.isSelected = function (option) {
        return this.model && this.model.indexOf(option.id) > -1;
    };
    MultiselectDropdownComponent.prototype.setSelected = function (_event, option) {
        var _this = this;
        if (option.isLabel) {
            return;
        }
        if (option.disabled) {
            return;
        }
        if (this.disabledSelection) {
            return;
        }
        setTimeout(function () {
            _this.maybeStopPropagation(_event);
            _this.maybePreventDefault(_event);
            var index = _this.model.indexOf(option.id);
            var isAtSelectionLimit = _this.settings.selectionLimit > 0 &&
                _this.model.length >= _this.settings.selectionLimit;
            var removeItem = function (idx, id) {
                _this.model.splice(idx, 1);
                _this.onRemoved.emit(id);
                if (_this.settings.isLazyLoad &&
                    _this.lazyLoadOptions.some(function (val) { return val.id === id; })) {
                    _this.lazyLoadOptions.splice(_this.lazyLoadOptions.indexOf(_this.lazyLoadOptions.find(function (val) { return val.id === id; })), 1);
                }
            };
            if (index > -1) {
                if (_this.settings.minSelectionLimit === undefined ||
                    _this.numSelected > _this.settings.minSelectionLimit) {
                    removeItem(index, option.id);
                }
                var parentIndex = option.parentId && _this.model.indexOf(option.parentId);
                if (parentIndex > -1) {
                    removeItem(parentIndex, option.parentId);
                }
                else if (_this.parents.indexOf(option.id) > -1) {
                    _this.options
                        .filter(function (child) { return _this.model.indexOf(child.id) > -1 &&
                        child.parentId === option.id; })
                        .forEach(function (child) { return removeItem(_this.model.indexOf(child.id), child.id); });
                }
            }
            else if (isAtSelectionLimit && !_this.settings.autoUnselect) {
                _this.selectionLimitReached.emit(_this.model.length);
                return;
            }
            else {
                var addItem_1 = function (id) {
                    _this.model.push(id);
                    _this.onAdded.emit(id);
                    if (_this.settings.isLazyLoad &&
                        !_this.lazyLoadOptions.some(function (val) { return val.id === id; })) {
                        _this.lazyLoadOptions.push(option);
                    }
                };
                addItem_1(option.id);
                if (!isAtSelectionLimit) {
                    if (option.parentId && !_this.settings.ignoreLabels) {
                        var children = _this.options.filter(function (child) { return child.id !== option.id && child.parentId === option.parentId; });
                        if (children.every(function (child) { return _this.model.indexOf(child.id) > -1; })) {
                            addItem_1(option.parentId);
                        }
                    }
                    else if (_this.parents.indexOf(option.id) > -1) {
                        var children = _this.options.filter(function (child) { return _this.model.indexOf(child.id) < 0 && child.parentId === option.id; });
                        children.forEach(function (child) { return addItem_1(child.id); });
                    }
                }
                else {
                    removeItem(0, _this.model[0]);
                }
            }
            if (_this.settings.closeOnSelect) {
                _this.toggleDropdown();
            }
            _this.model = _this.model.slice();
            _this.fireModelChange();
        }, 0);
    };
    MultiselectDropdownComponent.prototype.updateNumSelected = function () {
        var _this = this;
        this.numSelected =
            this.model.filter(function (id) { return _this.parents.indexOf(id) < 0; }).length || 0;
    };
    MultiselectDropdownComponent.prototype.updateTitle = function () {
        var _this = this;
        var numSelectedOptions = this.options.length;
        if (this.settings.ignoreLabels) {
            numSelectedOptions = this.options.filter(function (option) { return !option.isLabel; }).length;
        }
        if (this.numSelected === 0 || this.settings.fixedTitle) {
            this.title = this.texts ? this.texts.defaultTitle : '';
        }
        else if (this.settings.displayAllSelectedText &&
            this.model.length === numSelectedOptions) {
            this.title = this.texts ? this.texts.allSelected : '';
        }
        else if (this.settings.dynamicTitleMaxItems &&
            this.settings.dynamicTitleMaxItems >= this.numSelected) {
            var useOptions_1 = this.settings.isLazyLoad && this.lazyLoadOptions.length
                ? this.lazyLoadOptions
                : this.options;
            var titleSelections = void 0;
            if (this.settings.maintainSelectionOrderInTitle) {
                var optionIds_1 = useOptions_1.map(function (selectOption, idx) { return selectOption.id; });
                titleSelections = this.model
                    .map(function (selectedId) { return optionIds_1.indexOf(selectedId); })
                    .filter(function (optionIndex) { return optionIndex > -1; })
                    .map(function (optionIndex) { return useOptions_1[optionIndex]; });
            }
            else {
                titleSelections = useOptions_1.filter(function (option) { return _this.model.indexOf(option.id) > -1; });
            }
            this.title = titleSelections.map(function (option) { return option.name; }).join(', ');
        }
        else {
            this.title =
                this.numSelected +
                    ' ' +
                    (this.numSelected === 1
                        ? this.texts.checked
                        : this.texts.checkedPlural);
        }
        this.cdRef.markForCheck();
    };
    MultiselectDropdownComponent.prototype.searchFilterApplied = function () {
        return (this.settings.enableSearch &&
            this.filterControl.value &&
            this.filterControl.value.length > 0);
    };
    MultiselectDropdownComponent.prototype.addChecks = function (options) {
        var _this = this;
        var checkedOptions = options
            .filter(function (option) {
            if (!option.disabled &&
                (_this.model.indexOf(option.id) === -1 &&
                    !(_this.settings.ignoreLabels && option.isLabel))) {
                _this.onAdded.emit(option.id);
                return true;
            }
            return false;
        })
            .map(function (option) { return option.id; });
        this.model = this.model.concat(checkedOptions);
    };
    MultiselectDropdownComponent.prototype.checkAll = function () {
        if (!this.disabledSelection) {
            this.addChecks(!this.searchFilterApplied() ? this.options : this.filteredOptions);
            if (this.settings.isLazyLoad && this.settings.selectAddedValues) {
                if (this.searchFilterApplied() && !this.checkAllStatus) {
                    this.checkAllSearchRegister.add(this.filterControl.value);
                }
                else {
                    this.checkAllSearchRegister.clear();
                    this.checkAllStatus = true;
                }
                this.load();
            }
            this.fireModelChange();
        }
    };
    MultiselectDropdownComponent.prototype.uncheckAll = function () {
        var _this = this;
        if (!this.disabledSelection) {
            var checkedOptions = this.model;
            var unCheckedOptions_1 = !this.searchFilterApplied()
                ? this.model
                : this.filteredOptions.map(function (option) { return option.id; });
            unCheckedOptions_1 = checkedOptions.filter(function (item) { return unCheckedOptions_1.indexOf(item) > -1; });
            this.model = this.model.filter(function (id) {
                if ((unCheckedOptions_1.indexOf(id) < 0 &&
                    _this.settings.minSelectionLimit === undefined) ||
                    unCheckedOptions_1.indexOf(id) < _this.settings.minSelectionLimit) {
                    return true;
                }
                else {
                    _this.onRemoved.emit(id);
                    return false;
                }
            });
            if (this.settings.isLazyLoad && this.settings.selectAddedValues) {
                if (this.searchFilterApplied()) {
                    if (this.checkAllSearchRegister.has(this.filterControl.value)) {
                        this.checkAllSearchRegister.delete(this.filterControl.value);
                        this.checkAllSearchRegister.forEach(function (searchTerm) {
                            var filterOptions = this.applyFilters(this.options.filter(function (option) { return unCheckedOptions_1.indexOf(option.id) > -1; }), searchTerm);
                            this.addChecks(filterOptions);
                        });
                    }
                }
                else {
                    this.checkAllSearchRegister.clear();
                    this.checkAllStatus = false;
                }
                this.load();
            }
            this.fireModelChange();
        }
    };
    MultiselectDropdownComponent.prototype.preventCheckboxCheck = function (event, option) {
        if (option.disabled ||
            (this.settings.selectionLimit &&
                !this.settings.autoUnselect &&
                this.model.length >= this.settings.selectionLimit &&
                this.model.indexOf(option.id) === -1 &&
                this.maybePreventDefault(event))) {
            this.maybePreventDefault(event);
        }
    };
    MultiselectDropdownComponent.prototype.isCheckboxDisabled = function (option) {
        return this.disabledSelection || option && option.disabled;
    };
    MultiselectDropdownComponent.prototype.checkScrollPosition = function (ev) {
        var scrollTop = ev.target.scrollTop;
        var scrollHeight = ev.target.scrollHeight;
        var scrollElementHeight = ev.target.clientHeight;
        var roundingPixel = 1;
        var gutterPixel = 1;
        if (scrollTop >=
            scrollHeight -
                (1 + this.settings.loadViewDistance) * scrollElementHeight -
                roundingPixel -
                gutterPixel) {
            this.load();
        }
    };
    MultiselectDropdownComponent.prototype.checkScrollPropagation = function (ev, element) {
        var scrollTop = element.scrollTop;
        var scrollHeight = element.scrollHeight;
        var scrollElementHeight = element.clientHeight;
        if ((ev.deltaY > 0 && scrollTop + scrollElementHeight >= scrollHeight) ||
            (ev.deltaY < 0 && scrollTop <= 0)) {
            ev = ev || window.event;
            this.maybePreventDefault(ev);
            ev.returnValue = false;
        }
    };
    MultiselectDropdownComponent.prototype.trackById = function (idx, selectOption) {
        return selectOption.id;
    };
    MultiselectDropdownComponent.prototype.load = function () {
        this.onLazyLoad.emit({
            length: this.options.length,
            filter: this.filterControl.value,
            checkAllSearches: this.checkAllSearchRegister,
            checkAllStatus: this.checkAllStatus,
        });
    };
    MultiselectDropdownComponent.prototype.focusItem = function (dir, e) {
        if (!this.isVisible) {
            return;
        }
        this.maybePreventDefault(e);
        var idx = this.filteredOptions.indexOf(this.focusedItem);
        if (idx === -1) {
            this.focusedItem = this.filteredOptions[0];
            return;
        }
        var nextIdx = idx + dir;
        var newIdx = nextIdx < 0
            ? this.filteredOptions.length - 1
            : nextIdx % this.filteredOptions.length;
        this.focusedItem = this.filteredOptions[newIdx];
    };
    MultiselectDropdownComponent.prototype.maybePreventDefault = function (e) {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
    };
    MultiselectDropdownComponent.prototype.maybeStopPropagation = function (e) {
        if (e && e.stopPropagation) {
            e.stopPropagation();
        }
    };
    return MultiselectDropdownComponent;
}());
MultiselectDropdownComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'ss-multiselect-dropdown',
                template: "<div class=\"dropdown\" [ngClass]=\"settings.containerClasses\" [class.open]=\"isVisible\">\n  <button type=\"button\" class=\"dropdown-toggle\" [ngClass]=\"settings.buttonClasses\" (click)=\"toggleDropdown($event)\" [disabled]=\"disabled\"\n    [ssAutofocus]=\"!focusBack\">\n    {{ title }}\n    <span class=\"caret\"></span>\n  </button>\n  <div #scroller *ngIf=\"isVisible\" class=\"dropdown-menu\" [ngClass]=\"{'chunkydropdown-menu': settings.checkedStyle == 'visual' }\"\n    (scroll)=\"settings.isLazyLoad ? checkScrollPosition($event) : null\" (wheel)=\"settings.stopScrollPropagation ? checkScrollPropagation($event, scroller) : null\"\n    [class.pull-right]=\"settings.pullRight\" [class.dropdown-menu-right]=\"settings.pullRight\" [style.max-height]=\"settings.maxHeight\"\n    style=\"display: block; height: auto; overflow-y: auto;\" (keydown.tab)=\"focusItem(1, $event)\" (keydown.shift.tab)=\"focusItem(-1, $event)\">\n    <div class=\"input-group search-container\" *ngIf=\"settings.enableSearch\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"basic-addon1\">\n          <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n        </span>\n      </div>\n      <input type=\"text\" class=\"form-control\" ssAutofocus [formControl]=\"filterControl\" [placeholder]=\"texts.searchPlaceholder\"\n        class=\"form-control\">\n      <div class=\"input-group-append\" *ngIf=\"filterControl.value.length>0\">\n        <button class=\"btn btn-default btn-secondary\" type=\"button\" (click)=\"clearSearch($event)\">\n          <i class=\"fa fa-times\"></i>\n        </button>\n      </div>\n    </div>\n    <a role=\"menuitem\" href=\"javascript:;\" tabindex=\"-1\" class=\"dropdown-item check-control check-control-check\" *ngIf=\"settings.showCheckAll && !disabledSelection\"\n      (click)=\"checkAll()\">\n      <span style=\"width: 16px;\"><span [ngClass]=\"{'glyphicon glyphicon-ok': settings.checkedStyle !== 'fontawesome','fa fa-check': settings.checkedStyle === 'fontawesome'}\"></span></span>\n      {{ texts.checkAll }}\n    </a>\n    <a role=\"menuitem\" href=\"javascript:;\" tabindex=\"-1\" class=\"dropdown-item check-control check-control-uncheck\" *ngIf=\"settings.showUncheckAll && !disabledSelection\"\n      (click)=\"uncheckAll()\">\n      <span style=\"width: 16px;\"><span [ngClass]=\"{'glyphicon glyphicon-remove': settings.checkedStyle !== 'fontawesome','fa fa-times': settings.checkedStyle === 'fontawesome'}\"></span></span>\n      {{ texts.uncheckAll }}\n    </a>\n    <a *ngIf=\"settings.showCheckAll || settings.showUncheckAll\" href=\"javascript:;\" class=\"dropdown-divider divider\"></a>\n    <a *ngIf=\"!renderItems\" href=\"javascript:;\" class=\"dropdown-item empty\">{{ texts.searchNoRenderText }}</a>\n    <a *ngIf=\"renderItems && !renderFilteredOptions.length\" href=\"javascript:;\" class=\"dropdown-item empty\">{{ texts.searchEmptyResult }}</a>\n    <a class=\"dropdown-item\" href=\"javascript:;\" *ngFor=\"let option of renderFilteredOptions; trackBy: trackById\" [class.active]=\"isSelected(option)\"\n      [ngStyle]=\"getItemStyle(option)\" [ngClass]=\"option.classes\" [class.dropdown-header]=\"option.isLabel\" [ssAutofocus]=\"option !== focusedItem\"\n      tabindex=\"-1\" (click)=\"setSelected($event, option)\" (keydown.space)=\"setSelected($event, option)\" (keydown.enter)=\"setSelected($event, option)\">\n      <span *ngIf=\"!option.isLabel; else label\" role=\"menuitem\" tabindex=\"-1\" [style.padding-left]=\"this.parents.length>0&&this.parents.indexOf(option.id)<0&&'30px'\"\n        [ngStyle]=\"getItemStyleSelectionDisabled()\">\n        <ng-container [ngSwitch]=\"settings.checkedStyle\">\n          <input *ngSwitchCase=\"'checkboxes'\" type=\"checkbox\" [checked]=\"isSelected(option)\" (click)=\"preventCheckboxCheck($event, option)\"\n            [disabled]=\"isCheckboxDisabled(option)\" [ngStyle]=\"getItemStyleSelectionDisabled()\" />\n          <span *ngSwitchCase=\"'glyphicon'\" style=\"width: 16px;\" class=\"glyphicon\" [class.glyphicon-ok]=\"isSelected(option)\" [class.glyphicon-lock]=\"isCheckboxDisabled(option)\"></span>\n          <span *ngSwitchCase=\"'fontawesome'\" style=\"width: 16px;display: inline-block;\">\n            <span *ngIf=\"isSelected(option)\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></span>\n            <span *ngIf=\"isCheckboxDisabled(option)\"><i class=\"fa fa-lock\" aria-hidden=\"true\"></i></span>\n          </span>\n          <span *ngSwitchCase=\"'visual'\" style=\"display:block;float:left; border-radius: 0.2em; border: 0.1em solid rgba(44, 44, 44, 0.63);background:rgba(0, 0, 0, 0.1);width: 5.5em;\">\n            <div class=\"slider\" [ngClass]=\"{'slideron': isSelected(option)}\">\n              <img *ngIf=\"option.image != null\" [src]=\"option.image\" style=\"height: 100%; width: 100%; object-fit: contain\" />\n              <div *ngIf=\"option.image == null\" style=\"height: 100%; width: 100%;text-align: center; display: table; background-color:rgba(0, 0, 0, 0.74)\">\n                <div class=\"content_wrapper\">\n                  <span style=\"font-size:3em;color:white\" class=\"glyphicon glyphicon-eye-close\"></span>\n                </div>\n              </div>\n            </div>\n          </span>\n        </ng-container>\n        <span [ngClass]=\"{'chunkyrow': settings.checkedStyle == 'visual' }\" [class.disabled]=\"isCheckboxDisabled(option)\" [ngClass]=\"settings.itemClasses\"\n          [style.font-weight]=\"this.parents.indexOf(option.id)>=0?'bold':'normal'\">\n          {{ option.name }}\n        </span>\n      </span>\n      <ng-template #label>\n        <span [class.disabled]=\"isCheckboxDisabled(option)\">{{ option.name }}</span>\n      </ng-template>\n    </a>\n  </div>\n</div>\n",
                styles: ["a{outline:0!important}.dropdown-inline{display:inline-block}.dropdown-toggle .caret{margin-left:4px;white-space:nowrap;display:inline-block}.chunkydropdown-menu{min-width:20em}.chunkyrow{line-height:2;margin-left:1em;font-size:2em}.slider{width:3.8em;height:3.8em;display:block;-webkit-transition:all 125ms linear;transition:all 125ms linear;margin-left:.125em;margin-top:auto}.slideron{margin-left:1.35em}.content_wrapper{display:table-cell;vertical-align:middle}.search-container{padding:0 5px 5px}"],
                providers: [MULTISELECT_VALUE_ACCESSOR, MultiSelectSearchFilter],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            },] },
];
MultiselectDropdownComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], },
    { type: MultiSelectSearchFilter, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], },
]; };
MultiselectDropdownComponent.propDecorators = {
    "options": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "settings": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "texts": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "disabledSelection": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "selectionLimitReached": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "dropdownClosed": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "dropdownOpened": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onAdded": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onRemoved": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onLazyLoad": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onFilter": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['document: click', ['$event.target'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['document: touchstart', ['$event.target'],] },],
};
var MultiselectDropdownModule = /** @class */ (function () {
    function MultiselectDropdownModule() {
    }
    return MultiselectDropdownModule;
}());
MultiselectDropdownModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
                exports: [
                    MultiselectDropdownComponent,
                    MultiSelectSearchFilter,
                ],
                declarations: [
                    MultiselectDropdownComponent,
                    MultiSelectSearchFilter,
                    AutofocusDirective,
                ],
            },] },
];


//# sourceMappingURL=angular-2-dropdown-multiselect.js.map


/***/ })

}]);
//# sourceMappingURL=app-pages-form-elements-form-elements-module~app-pages-membership-membership-module~app-pages-pages-~7190807b.js.map