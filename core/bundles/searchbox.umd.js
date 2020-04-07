(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('lodash'), require('@fortawesome/fontawesome'), require('@fortawesome/fontawesome-free-solid'), require('@angular/common'), require('@angular/forms')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'lodash', '@fortawesome/fontawesome', '@fortawesome/fontawesome-free-solid', '@angular/common', '@angular/forms'], factory) :
	(factory((global.ngSearchbox = {}),global.core_1,global._,global.fontawesome,global.fontawesomeFreeSolid,global.common,global.forms));
}(this, (function (exports,core_1,_,fontawesome,fontawesomeFreeSolid,common,forms) { 'use strict';

core_1 = core_1 && core_1.hasOwnProperty('default') ? core_1['default'] : core_1;
_ = _ && _.hasOwnProperty('default') ? _['default'] : _;
fontawesome = fontawesome && fontawesome.hasOwnProperty('default') ? fontawesome['default'] : fontawesome;
fontawesomeFreeSolid = fontawesomeFreeSolid && fontawesomeFreeSolid.hasOwnProperty('default') ? fontawesomeFreeSolid['default'] : fontawesomeFreeSolid;
common = common && common.hasOwnProperty('default') ? common['default'] : common;
forms = forms && forms.hasOwnProperty('default') ? forms['default'] : forms;

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};



function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var utils_service = createCommonjsModule(function (module, exports) {
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });

var UtilsService = /** @class */ (function () {
    function UtilsService() {
        return this;
    }
    UtilsService.prototype.uuid = function () {
        var d = Date.now();
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
            .replace(/[xy]/g, function (c) {
            var r = (d + Math.round(Math.random() * 16)) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8))
                .toString(16);
        });
    };
    UtilsService.prototype.isJson = function (str) {
        try {
            JSON.parse(str);
        }
        catch (e) {
            return false;
        }
        return true;
    };
    UtilsService.prototype.removeObjectProperties = function (obj, props) {
        for (var i = 0; i < props.length; i++) {
            if (obj.hasOwnProperty(props[i])) {
                delete obj[props[i]];
            }
        }
    };
    UtilsService.prototype.getScrollbarWidth = function () {
        var scrollDiv = document.createElement('div');
        scrollDiv
            .classList
            .add('scrollbar-measure');
        document.body.appendChild(scrollDiv);
        var scrollbarWidth = (scrollDiv.offsetWidth - scrollDiv.clientWidth);
        document.body.removeChild(scrollDiv);
        return scrollbarWidth;
    };
    UtilsService.prototype.isURL = function (url) {
        var expression = '^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|' +
            '2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u' +
            '00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a' +
            '-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$', regex = new RegExp(expression, 'i');
        return regex.test(url);
    };
    UtilsService.prototype.getCSSProperty = function (element, property) {
        var elem = element.nativeElement;
        return window
            .getComputedStyle(elem, null)
            .getPropertyValue(property);
    };
    UtilsService.prototype.getHeightOf = function (element) {
        return parseInt(this.getCSSProperty(element, 'height')) +
            parseInt(this.getCSSProperty(element, 'padding-bottom')) +
            parseInt(this.getCSSProperty(element, 'padding-top')) +
            parseInt(this.getCSSProperty(element, 'border-bottom')) +
            parseInt(this.getCSSProperty(element, 'border-top'));
    };
    UtilsService.prototype.getWidthOf = function (element) {
        return parseInt(this.getCSSProperty(element, 'width')) +
            parseInt(this.getCSSProperty(element, 'padding-right')) +
            parseInt(this.getCSSProperty(element, 'padding-left')) +
            parseInt(this.getCSSProperty(element, 'border-left')) +
            parseInt(this.getCSSProperty(element, 'border-right'));
    };
    UtilsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], UtilsService);
    return UtilsService;
}());
exports.UtilsService = UtilsService;

});

unwrapExports(utils_service);
var utils_service_1 = utils_service.UtilsService;

var events_constant = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
var NgSearchboxEvent = /** @class */ (function () {
    function NgSearchboxEvent() {
    }
    NgSearchboxEvent.ON_CHANGE = 'onChange';
    NgSearchboxEvent.ON_QUERY_ADDED = 'onQueryAdded';
    NgSearchboxEvent.ON_QUERY_REMOVED = 'onQueryRemoved';
    NgSearchboxEvent.ON_QUERY_CHANGED = 'onQueryChanged';
    NgSearchboxEvent.ON_FILTER_ADDED = 'onFilterAdded';
    NgSearchboxEvent.ON_FILTER_REMOVED = 'onFilterRemoved';
    NgSearchboxEvent.ON_FILTER_CHANGED = 'onFilterChanged';
    NgSearchboxEvent.ON_OPERATOR_CHANGED = 'onOperatorChanged';
    NgSearchboxEvent.ON_FILTER_SELECTOR_CHANGED = 'onFilterSelectorChanged';
    NgSearchboxEvent.ON_ERASER = 'onEraser';
    NgSearchboxEvent.ON_GARBAGE = 'onGarbage';
    NgSearchboxEvent.ON_ENTERED_EDIT_MODE = 'onEnteredEditMode';
    NgSearchboxEvent.ON_LEAVED_EDIT_MODE = 'onLeavedEditMode';
    return NgSearchboxEvent;
}());
exports.NgSearchboxEvent = NgSearchboxEvent;

});

unwrapExports(events_constant);
var events_constant_1 = events_constant.NgSearchboxEvent;

var eventHandling_service = createCommonjsModule(function (module, exports) {
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });



var EventHandling = /** @class */ (function () {
    function EventHandling(ngSearchBoxComponent) {
        this.ngSearchBoxComponent = ngSearchBoxComponent;
        this.timer = null;
        return this;
    }
    EventHandling.prototype.fire = function (type, data) {
        var ev = {
            '$$lastChange': new Date().getTime()
        };
        type = type.toLowerCase();
        this
            .ngSearchBoxComponent
            .Api
            .$$registeredEvents
            .forEach(function (event) {
            if (event && event.type) {
                event.type = event.type.toLowerCase();
                if (event.type === type &&
                    typeof event.fn === 'function') {
                    event.fn(ev, data);
                }
            }
        });
        return this;
    };
    EventHandling.prototype.onChange = function (parameters, invocation) {
        var _this = this;
        if (invocation === void 0) { invocation = null; }
        if (!invocation ||
            typeof invocation !== 'function') {
            invocation = function () { };
        }
        if (this.timer) {
            window.clearTimeout(this.timer);
            this.timer = null;
        }
        if (this.ngSearchBoxComponent.ngSearchBoxConfig &&
            this.ngSearchBoxComponent.ngSearchBoxConfig.delay) {
            this.timer = window.setTimeout(function () {
                invocation();
                _this.fire(events_constant.NgSearchboxEvent.ON_CHANGE, parameters);
            }, this.ngSearchBoxComponent.ngSearchBoxConfig.delay);
        }
        else {
            invocation();
            this.fire(events_constant.NgSearchboxEvent.ON_CHANGE, parameters);
        }
        return this;
    };
    EventHandling.prototype.onQueryAdded = function (n, o) {
        if (o === null ||
            typeof o === 'undefined' ||
            (typeof o !== 'undefined' && !o.length)) {
            if (n && n.length) {
                this.fire('onQueryAdded', n);
            }
        }
        return this;
    };
    EventHandling.prototype.onQueryRemoved = function (n, o) {
        if (o === null ||
            typeof o !== 'undefined' && o && o.length) {
            if (!n ||
                (typeof n === 'string' && !n.length)) {
                this.fire('onQueryRemoved', n);
            }
        }
        return this;
    };
    EventHandling.prototype.onEraser = function () {
        this.fire('onEraser');
        return this;
    };
    EventHandling.prototype.onGarbage = function () {
        this.fire('onGarbage');
        return this;
    };
    EventHandling.prototype.onFilterChanged = function (filter) {
        this.fire('onFilterChanged', filter);
        return this;
    };
    EventHandling.prototype.onFilterSelectorChanged = function (selector, filter) {
        var opts = {
            'selector': selector,
            'filter': filter
        };
        this.fire('onFilterSelectorChanged', opts);
        return this;
    };
    EventHandling.prototype.onOperatorChanged = function (operator, filter) {
        var opts = {
            'name': operator ? operator.name : '',
            'filter': filter
        };
        this.fire('onOperatorChanged', opts);
        return this;
    };
    EventHandling = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [ngSearchbox_component.NgSearchboxComponent])
    ], EventHandling);
    return EventHandling;
}());
exports.EventHandling = EventHandling;

});

unwrapExports(eventHandling_service);
var eventHandling_service_1 = eventHandling_service.EventHandling;

var selectors_constant = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.NgSearchboxSelectors = [
    {
        'name': 'Contains',
        'key': 'contains',
        'selected': true,
        'notAllowed': [
            'restrictedSuggestedValues'
        ]
    },
    {
        'name': 'Does not contain',
        'key': 'doesNotContain',
        'notAllowed': [
            'restrictedSuggestedValues'
        ]
    },
    {
        'name': 'Is Equal To',
        'key': 'isEqualTo'
    },
    {
        'name': 'Is Not Equal To',
        'key': 'isNotEqualTo'
    },
    {
        'name': 'Starts with',
        'key': 'startsWith'
    },
    {
        'name': 'Ends with',
        'key': 'endsWith'
    },
    {
        'name': 'Similiarity',
        'key': 'similiarity'
    }
];

});

unwrapExports(selectors_constant);
var selectors_constant_1 = selectors_constant.NgSearchboxSelectors;

var ngSearchboxFilterSelectors_component = createCommonjsModule(function (module, exports) {
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (commonjsGlobal && commonjsGlobal.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });




var NgSearchboxFilterSelectors = /** @class */ (function () {
    function NgSearchboxFilterSelectors(ngAddedFilter) {
        this.ngAddedFilter = ngAddedFilter;
        this.filter = null;
        this.selectors = _.clone(selectors_constant.NgSearchboxSelectors);
        this.shownStatus = true;
        return this;
    }
    NgSearchboxFilterSelectors.prototype.takeSelector = function (selector) {
        var self = this;
        self
            .selectors
            .forEach(function (selector) {
            selector.selected = false;
        });
        self.filter.selector = selector;
        selector.selected = true;
        if (self.filter.value) {
            this
                .ngAddedFilter
                .Filtering
                .update();
            this
                .ngAddedFilter
                .Event
                .onFilterSelectorChanged(selector, self.filter);
        }
        this
            .ngAddedFilter
            .setFocus();
    };
    NgSearchboxFilterSelectors.prototype.getDefaultSelector = function () {
        var self = this;
        setTimeout(function () {
            if (!self.filter.selector) {
                self
                    .selectors
                    .forEach(function (selector) {
                    if (selector.selected) {
                        self.filter.selector = selector;
                    }
                });
                if (!self.filter.selector
                    && self.selectors.length) {
                    var selector = self.selectors[0];
                    selector.selected = true;
                    self.filter.selector = selector;
                }
            }
            else {
                self
                    .selectors
                    .forEach(function (selector) {
                    selector.selected = (selector.key === self.filter.selector.key);
                });
            }
        });
        return this;
    };
    NgSearchboxFilterSelectors.prototype.ngAfterViewInit = function () {
        this.getDefaultSelector();
    };
    NgSearchboxFilterSelectors.prototype.setVisibility = function (visibility) {
        if (visibility === void 0) { visibility = null; }
        if (visibility === null) {
            this.shownStatus = !this.shownStatus;
        }
        else {
            this.shownStatus = visibility;
        }
        return this;
    };
    __decorate([
        core_1.Input('filter'),
        __metadata("design:type", Object)
    ], NgSearchboxFilterSelectors.prototype, "filter", void 0);
    NgSearchboxFilterSelectors = __decorate([
        core_1.Component({
            'selector': 'ng-searchbox-filter-selectors',
            'templateUrl': '../../../../views/modules/ng/components/ng-searchbox-filter-selectors.component.pug',
            'styleUrls': ['../../../../styles/modules/ng/components/ng-searchbox-filter-selectors.component.sass']
        }),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return ngSearchboxAddedFilter_component.NgSearchboxAddedFilter; }))),
        __metadata("design:paramtypes", [ngSearchboxAddedFilter_component.NgSearchboxAddedFilter])
    ], NgSearchboxFilterSelectors);
    return NgSearchboxFilterSelectors;
}());
exports.NgSearchboxFilterSelectors = NgSearchboxFilterSelectors;

});

unwrapExports(ngSearchboxFilterSelectors_component);
var ngSearchboxFilterSelectors_component_1 = ngSearchboxFilterSelectors_component.NgSearchboxFilterSelectors;

var ngSearchboxAddedFilter_component = createCommonjsModule(function (module, exports) {
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });



var NgSearchboxAddedFilter = /** @class */ (function () {
    function NgSearchboxAddedFilter(utils) {
        this.utils = utils;
        this.Filtering = null;
        this.Event = null;
        this.filter = null;
        this.searchbox = null;
        this.uuid = null;
        this.v = '';
        this.pv = '';
        this.uuid = this.utils.uuid();
        return this;
    }
    NgSearchboxAddedFilter.prototype.set = function (filteringSvc, searchbox, filter) {
        this.Filtering = filteringSvc;
        this.Event = searchbox.Event;
        this.filter = filter;
        this.searchbox = searchbox;
        if (filter.value) {
            this.v = filter.value;
        }
        if (filter.hideWhenAdded) {
            this.toggleActivation();
            this.closeFilter();
        }
        else {
            this.toggleActivation();
        }
        return this;
    };
    NgSearchboxAddedFilter.prototype.toggleActivation = function (force) {
        var _this = this;
        var self = this;
        if (typeof this.filter.active === 'undefined') {
            this.filter.active = true;
            this.filter.editing = true;
        }
        else {
            if (typeof force !== 'undefined') {
                this.filter.active = force;
            }
            else {
                this.filter.active = !this.filter.active;
            }
        }
        if (this.filter.active) {
            setTimeout(function () {
                self.proxiedFunction = function (event) {
                    _this
                        .windowClicked
                        .apply(self, [event]);
                };
                window.addEventListener('click', self.proxiedFunction);
            }, 25);
            self.setFocus();
        }
        else {
            window.removeEventListener('click', this.proxiedFunction);
            self.closeFilter();
        }
    };
    NgSearchboxAddedFilter.prototype.openFilter = function () {
        var _this = this;
        if (!this.filter.editing) {
            this
                .filter
                .editing = true;
            setTimeout(function () {
                window.addEventListener('click', _this.proxiedFunction);
            }, 25);
            this.setFocus();
        }
        return this;
    };
    NgSearchboxAddedFilter.prototype.setFocus = function () {
        var self = this;
        setTimeout(function () {
            var input = self
                .ngSearchboxAddedFilter
                .nativeElement
                .querySelector('input');
            if (input) {
                input.focus();
            }
        }, 25);
        return this;
    };
    NgSearchboxAddedFilter.prototype.closeFilter = function () {
        if (!this.filter.value &&
            !this.filter.isAllowedEmptyValue) {
            this
                .Filtering
                .removeByComponent(this, {
                'update': false
            });
        }
        else {
            this.filter.editing = false;
            this
                .ngFilterSelectors
                .setVisibility(false);
        }
        return this;
    };
    NgSearchboxAddedFilter.prototype.toggleFilterSelectors = function () {
        this
            .ngFilterSelectors
            .setVisibility();
    };
    NgSearchboxAddedFilter.prototype.valueChange = function (val) {
        this.filter.value = val;
        if (val !== this.pv) {
            this
                .Event
                .onFilterChanged(this.filter);
            this
                .Filtering
                .update(this.filter);
        }
    };
    NgSearchboxAddedFilter.prototype.onKeyDown = function (event) {
        this.pv = event.target.value;
        this.filter.$$lastValue = this.pv;
    };
    NgSearchboxAddedFilter.prototype.onKeyUp = function (event) {
        if (event.keyCode === 13) {
            this.closeFilter();
        }
    };
    NgSearchboxAddedFilter.prototype.windowClicked = function (event) {
        var target = event.target, element = this.ngSearchboxAddedFilter.nativeElement;
        if (!element.contains(target)) {
            window.removeEventListener('click', this.proxiedFunction);
            this.toggleActivation(false);
            this.closeFilter();
        }
    };
    /**
     * @method destroy
     * Unload this filter from our searchbox memory
     */
    NgSearchboxAddedFilter.prototype.destroy = function () {
        this
            .Filtering
            .removeByComponent(this);
    };
    __decorate([
        core_1.ViewChild('ngSearchboxAddedFilter'),
        __metadata("design:type", core_1.ElementRef)
    ], NgSearchboxAddedFilter.prototype, "ngSearchboxAddedFilter", void 0);
    __decorate([
        core_1.ViewChild('ngFilterSelectors'),
        __metadata("design:type", ngSearchboxFilterSelectors_component.NgSearchboxFilterSelectors)
    ], NgSearchboxAddedFilter.prototype, "ngFilterSelectors", void 0);
    NgSearchboxAddedFilter = __decorate([
        core_1.Component({
            'selector': 'ng-searchbox-added-filter',
            'templateUrl': '../../../../views/modules/ng/components/ng-searchbox-added-filter.component.pug',
            'styleUrls': ['../../../../styles/modules/ng/components/ng-searchbox-added-filter.component.sass']
        }),
        __metadata("design:paramtypes", [utils_service.UtilsService])
    ], NgSearchboxAddedFilter);
    return NgSearchboxAddedFilter;
}());
exports.NgSearchboxAddedFilter = NgSearchboxAddedFilter;

});

unwrapExports(ngSearchboxAddedFilter_component);
var ngSearchboxAddedFilter_component_1 = ngSearchboxAddedFilter_component.NgSearchboxAddedFilter;

var filtering_service = createCommonjsModule(function (module, exports) {
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });




var FilteringService = /** @class */ (function () {
    function FilteringService(searchbox) {
        this.searchbox = searchbox;
        this.addedFilters = [];
        this.addedOperators = [];
        this.hasFilters = false;
        this.event = null;
        this.params = null;
        this.ngSearchboxAddedFilters = null;
        this.Event = null;
        this.utils = null;
        this.event = new core_1.EventEmitter();
        this.ngSearchboxAddedFilters = this.searchbox.ngSearchboxAddedFiltersWrapper;
        this.Event = this.searchbox.Event;
        this.utils = this.searchbox.utils;
        return this;
    }
    FilteringService.prototype.getPublisher = function () {
        return this.event;
    };
    FilteringService.prototype.getFilterCount = function () {
        return this.addedFilters.length;
    };
    FilteringService.prototype.addOperatorToFilter = function (operator, filter, update) {
        if (update === void 0) { update = false; }
        var self = this;
        if (filter) {
            var index_1 = null;
            _.each(self.addedFilters, function (addedFilter, addedIndex) {
                if (addedFilter.filter.uuid === filter.uuid) {
                    index_1 = addedIndex;
                }
            });
            if (index_1 !== null) {
                var filterIndex = (index_1 - 1);
                if (!self.addedOperators[filterIndex]) {
                    self
                        .addedOperators
                        .push(operator.name);
                }
                else {
                    self.addedOperators[filterIndex] = operator.name;
                }
            }
        }
        else {
            self
                .addedOperators
                .push(operator.name);
        }
        if (update) {
            this.update();
        }
        console.log(self.addedOperators);
    };
    FilteringService.prototype.hasOperatorAlready = function (filter) {
        var operators = this.getOperators(), filters = this.getFilters(), hasOperator = false;
        _.each(operators, function (o, oIndex) {
            _.each(filters, function (f, fIndex) {
                if (f.filter.uuid === filter.uuid) {
                    if ((fIndex - 1) === oIndex) {
                        hasOperator = true;
                    }
                }
            });
        });
        return hasOperator;
    };
    FilteringService.prototype.getOperators = function () {
        return this.addedOperators;
    };
    FilteringService.prototype.getFilters = function () {
        return this.addedFilters;
    };
    FilteringService.prototype.add = function (filter, selectedFilter) {
        if (selectedFilter === void 0) { selectedFilter = {}; }
        var factory = this
            .ngSearchboxAddedFilters
            .componentFactoryResolver
            .resolveComponentFactory(ngSearchboxAddedFilter_component.NgSearchboxAddedFilter), cmpRef = this
            .ngSearchboxAddedFilters
            .ngSearchboxAddedFiltersViewContainer
            .createComponent(factory);
        var modifiedFilter = _.clone(filter);
        modifiedFilter.uuid = this.utils.uuid();
        cmpRef
            .instance
            .set(this, this.searchbox, _.extend(modifiedFilter, selectedFilter));
        this
            .addedFilters
            .push({
            'component': cmpRef,
            'filter': modifiedFilter
        });
        if (this.addedFilters &&
            this.addedFilters.length) {
            this.hasFilters = true;
        }
    };
    FilteringService.prototype.removeByComponent = function (filter, options) {
        var self = this;
        this
            .addedFilters
            .slice()
            .reverse()
            .forEach(function (addedFilter) {
            if (addedFilter.component.instance === filter) {
                return self
                    .remove(addedFilter, options);
            }
        });
    };
    FilteringService.prototype.setOperator = function (filter, op) {
        this
            .addedFilters
            .slice()
            .reverse()
            .forEach(function (addedFilter) {
            if (addedFilter.filter.uuid === filter.uuid) {
                addedFilter.operator = op;
            }
        });
    };
    FilteringService.prototype.getOperatorByFilterIndex = function (filter) {
        var self = this, index = null, oIndex = 0, op = null;
        _.each(self.addedFilters, function (addedFilter, addedIndex) {
            if (addedFilter.filter.uuid === filter.uuid) {
                index = addedIndex;
            }
        });
        oIndex = (index - 1);
        if (Math.sign(oIndex) !== -1) {
            op = self.addedOperators[oIndex];
            if (typeof op === 'undefined') {
                op = null;
            }
        }
        return op;
    };
    FilteringService.prototype.remove = function (filter, options) {
        var self = this, operators = self.getOperators(), fIndex = null;
        self
            .addedFilters
            .forEach(function (sAddedFilter, sAddedIndex) {
            if (sAddedFilter.filter.uuid === filter.filter.uuid) {
                fIndex = sAddedIndex;
            }
        });
        self
            .addedFilters
            .slice()
            .reverse()
            .forEach(function (addedFilter, addedIndex, addedObject) {
            if (addedFilter.component === filter.component) {
                if (operators && operators.length) {
                    var oIndex = (fIndex - 1);
                    if (Math.sign(oIndex) === -1) {
                        var ffIndex = (fIndex + 1), nextFilter = self.addedFilters[ffIndex];
                        if (nextFilter && nextFilter.operator) {
                            nextFilter
                                .operator
                                .hasOperator = false;
                        }
                        oIndex = 0;
                    }
                    self
                        .addedOperators
                        .splice(oIndex, 1);
                }
                self
                    .addedFilters
                    .splice(addedObject.length - 1 - addedIndex, 1);
                filter
                    .component
                    .destroy();
            }
        });
        if (this.addedFilters &&
            !this.addedFilters.length) {
            this.hasFilters = false;
        }
        if (!options ||
            (options && typeof options.update === 'boolean' && options.update)) {
            this.update();
        }
    };
    FilteringService.prototype.removeAll = function (options) {
        if (options === void 0) { options = null; }
        var self = this;
        this
            .addedFilters
            .slice()
            .reverse()
            .forEach(function (filter) {
            return self.remove(filter, options);
        });
    };
    FilteringService.prototype.buildExtendedParameter = function (filter) {
        if (filter &&
            !filter.$$timestamp) {
            filter.$$timestamp = new Date().getTime();
        }
        filter.$$modified = new Date().getTime();
        return filter;
    };
    FilteringService.prototype.buildParameter = function (filter) {
        var operator = this.getOperatorByFilterIndex(filter) || null;
        var _param = {
            'name': filter.name,
            'value': filter.value,
            'condition': filter.selector.key,
            '$$lastValue': filter.$$lastValue,
            '$$modified': filter.$$timestamp || null,
            '$$timestamp': filter.$$timestamp || null,
            '$$operator': operator
        };
        return (this.buildExtendedParameter(_param));
    };
    FilteringService.prototype.update = function (filter) {
        var self = this, params = [];
        self
            .addedFilters
            .forEach(function (addedFilter) {
            if (addedFilter.filter.value) {
                if (filter &&
                    addedFilter.filter.uuid === filter.uuid) {
                    addedFilter.filter = filter;
                }
                var modifiedFilter = self.buildParameter(addedFilter.filter);
                _.extend(addedFilter.filter, {
                    '$$timestamp': modifiedFilter.$$timestamp,
                    '$$modified': modifiedFilter.$$modified,
                    '$$lastValue': modifiedFilter.$$lastValue
                });
                params.push(modifiedFilter);
            }
        });
        if (this.params !== params) {
            this
                .event
                .emit(params);
        }
        this.params = params;
    };
    FilteringService.prototype.removeByFilterType = function (item) {
        var _this = this;
        this
            .addedFilters
            .slice()
            .reverse()
            .forEach(function (addedFilter) {
            if (addedFilter.filter &&
                (typeof item === 'string' && addedFilter.filter.name === item) ||
                (typeof item === 'object' && item.name === addedFilter.filter.name)) {
                _this.remove(addedFilter);
            }
        });
    };
    FilteringService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [ngSearchbox_component.NgSearchboxComponent])
    ], FilteringService);
    return FilteringService;
}());
exports.FilteringService = FilteringService;

});

unwrapExports(filtering_service);
var filtering_service_1 = filtering_service.FilteringService;

var placeholders_service = createCommonjsModule(function (module, exports) {
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });


var PlaceholdersService = /** @class */ (function () {
    function PlaceholdersService(searchbox) {
        this.searchbox = searchbox;
        this.index = 0;
        this.position = 0;
        this.stopped = true;
        this.val = '';
        this.timer = null;
        this.config = null;
        this.setup();
        return this;
    }
    PlaceholdersService.prototype.setup = function () {
        this.config = this.searchbox.ngSearchBoxConfig;
        if (this.config &&
            this.config.placeholders) {
            this.start(this.index);
        }
        return this;
    };
    PlaceholdersService.prototype.stop = function () {
        this.stopped = true;
        return clearTimeout(this.timer);
    };
    PlaceholdersService.prototype.start = function (index) {
        this.stopped = false;
        if (typeof index !== 'undefined') {
            this.index = index;
        }
        else {
            if (typeof this.index !== 'undefined') {
                this.index = 0;
            }
            else {
                if (typeof this.index === 'number') {
                    this.index++;
                }
            }
        }
        this.position = 0;
        this.val = '';
        this.change();
    };
    PlaceholdersService.prototype.change = function (reverse) {
        var elem = (this.searchbox.element.nativeElement);
        var visible = elem.offsetWidth > 0 && elem.offsetHeight > 0;
        if (this.stopped || !visible) {
            return;
        }
        var self = this;
        if (reverse) {
            self.timer = setTimeout(function () {
                self.val = self.val.slice(0, self.val.length - 1);
                self.searchbox.placeholder = self.val;
                if (self.val.length) {
                    self.change(true);
                }
                else {
                    self.position = 0;
                    self.index++;
                    if (self.index > (self.config.placeholders.length - 1)) {
                        self.index = 0;
                    }
                    self.change();
                }
            }, self.config.placeholderSpeedOutInterval || 25);
        }
        else {
            self.timer = setTimeout(function () {
                var val = self.config.placeholders[self.index], len = val.length;
                self.val += val[self.position];
                self.searchbox.placeholder = self.val;
                self.position++;
                if (self.position < len) {
                    self.change();
                }
                else {
                    self.timer = setTimeout(function () {
                        self.change(true);
                    }, self.config.placeholderInterval || 2000);
                }
            }, self.config.placeholderSpeedInInterval || 75);
        }
    };
    PlaceholdersService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [ngSearchbox_component.NgSearchboxComponent])
    ], PlaceholdersService);
    return PlaceholdersService;
}());
exports.PlaceholdersService = PlaceholdersService;

});

unwrapExports(placeholders_service);
var placeholders_service_1 = placeholders_service.PlaceholdersService;

var api_service = createCommonjsModule(function (module, exports) {
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });




var API = /** @class */ (function () {
    function API(ngSearchBoxComponent) {
        this.ngSearchBoxComponent = ngSearchBoxComponent;
        this.$$registeredEvents = [];
        return this;
    }
    /**
     * @method on
     * Add event listener to our search box
     * @param {string} type
     * @param {Function} fn
     * @returns {API}
     */
    API.prototype.on = function (type, fn) {
        var self = this, isRegisteredAlready = false;
        this
            .hasEventErrors(type, fn)
            .hasInvalidEventType(type);
        this
            .$$registeredEvents
            .forEach(function (event) {
            if (event &&
                event.fn === fn &&
                event.type === type) {
                isRegisteredAlready = true;
            }
        });
        if (!isRegisteredAlready) {
            self
                .$$registeredEvents
                .push({
                'type': type,
                'fn': fn
            });
        }
        return this;
    };
    /**
     * @method off
     * Remove event listener from our search box
     * @param {string} type
     * @param {Function} fn
     * @returns {API}
     */
    API.prototype.off = function (type, fn) {
        var self = this, isFnEmpty = false;
        this
            .hasEventErrors(type, fn, true)
            .hasInvalidEventType(type);
        if (typeof fn !== 'function') {
            isFnEmpty = true;
        }
        self
            .$$registeredEvents
            .slice()
            .reverse()
            .forEach(function (addedEvent, addedIndex, addedObject) {
            if ((addedEvent && addedEvent.fn === fn && addedEvent.type === type) ||
                (isFnEmpty && addedEvent && addedEvent.type === type)) {
                self
                    .$$registeredEvents
                    .splice(addedObject.length - 1 - addedIndex, 1);
            }
        });
        return this;
    };
    /**
     * @method offAll
     * Remove all event listeners attached to our search box
     * @returns {API}
     */
    API.prototype.offAll = function () {
        var self = this;
        self
            .$$registeredEvents
            .slice()
            .reverse()
            .forEach(function (addedEvent, addedIndex, addedObject) {
            self
                .$$registeredEvents
                .splice(addedObject.length - 1 - addedIndex, 1);
        });
        return this;
    };
    API.prototype.addFilterToMenu = function (filter) {
        var _this = this;
        var filters = [];
        if (_.isArray(filter)) {
            filters = filter;
        }
        else {
            filters = [filter];
        }
        filters.forEach(function (item) {
            _this
                .ngSearchBoxComponent
                .ngSearchboxFilteringComponent
                .addToFilterList(item);
        });
        return this;
    };
    API.prototype.removeFilterFromMenu = function (filter) {
        var _this = this;
        var filters = [];
        if (_.isArray(filter)) {
            filters = filter;
        }
        else {
            filters = [filter];
        }
        filters.forEach(function (item) {
            _this
                .ngSearchBoxComponent
                .ngSearchboxFilteringComponent
                .removeFromFilterList(item);
            _this
                .ngSearchBoxComponent
                .Filtering
                .removeByFilterType(item);
        });
        return this;
    };
    /**
     * @method addFilter
     * Add filters automatically to selected filters
     * @returns {API}
     */
    API.prototype.addFilter = function (filter) {
        var _this = this;
        var filters = [];
        if (_.isArray(filter)) {
            filters = filter;
        }
        else {
            filters = [filter];
        }
        filters.forEach(function (item) {
            var f = {};
            if (typeof item === 'string') {
                f.name = item;
            }
            else {
                f = item;
            }
            if (f.name) {
                var availableFilters = _this.ngSearchBoxComponent.ngSearchboxFilteringComponent.getAvailableFilters, foundFilter_1 = _.find(availableFilters, { 'name': f.name });
                if (foundFilter_1) {
                    f.isAllowedEmptyValue = true;
                    f.hideWhenAdded = true;
                    if (!f.value) {
                        f.value = '';
                    }
                    setTimeout(function () {
                        _this
                            .ngSearchBoxComponent
                            .Filtering
                            .add(foundFilter_1, f);
                    });
                }
            }
            else {
                throw new Error('NgSearchbox API - Missing \'name\' key!');
            }
        });
        return this;
    };
    /**
     * @method setQuery
     * Automatically set query via API
     * @param {string} query
     * @param {boolean} fire
     */
    API.prototype.setQuery = function (query, fire) {
        if (fire === void 0) { fire = true; }
        this
            .ngSearchBoxComponent
            .query = query;
        this
            .ngSearchBoxComponent
            .queryChange(query, fire);
    };
    API.prototype.getFilters = function () {
        return this
            .ngSearchBoxComponent
            .ngSearchboxFilteringComponent
            .getAvailableFilters;
    };
    /**
     * @method removeAllFilters
     * Remove all filters from searchbox
     * @param {boolean} update
     */
    API.prototype.removeAllFilters = function (update) {
        if (update === void 0) { update = true; }
        return this
            .ngSearchBoxComponent
            .Filtering
            .removeAll({ update: update });
    };
    API.prototype.hasEventErrors = function (evt, fn, emptyFnAllowed) {
        if (emptyFnAllowed === void 0) { emptyFnAllowed = false; }
        if (typeof evt !== 'string') {
            throw new TypeError('NgSearchbox API - Event Name parameter must be type String!');
        }
        if (typeof fn !== 'function' && !emptyFnAllowed) {
            throw new TypeError('NgSearchbox API - Event Function parameter must be type Function!');
        }
        return this;
    };
    API.prototype.hasInvalidEventType = function (evt) {
        var validType = false, names = Object.keys(events_constant.NgSearchboxEvent), types = [];
        _.map(names, function (name) {
            types.push(events_constant.NgSearchboxEvent[name]);
        });
        types.forEach(function (type) {
            type = type.toLowerCase();
            evt = evt.toLowerCase();
            if (type === evt) {
                validType = true;
            }
        });
        if (!validType) {
            throw new ReferenceError('NgSearchbox API - Invalid Event Type Provided!');
        }
        return this;
    };
    API = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [ngSearchbox_component.NgSearchboxComponent])
    ], API);
    return API;
}());
exports.API = API;

});

unwrapExports(api_service);
var api_service_1 = api_service.API;

var search = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
var Search;
(function (Search) {
    Search.InformationChange = 'informationChange';
})(Search = exports.Search || (exports.Search = {}));

});

unwrapExports(search);
var search_1 = search.Search;

var ngSearchboxAddedFiltersWrapper_component = createCommonjsModule(function (module, exports) {
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });



var NgSearchboxAddedFiltersWrapper = /** @class */ (function () {
    function NgSearchboxAddedFiltersWrapper(componentFactoryResolver, changeDetectionRef) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.changeDetectionRef = changeDetectionRef;
        this.observer = null;
        this.Filtering = null;
        this.searchbox = null;
        return this;
    }
    NgSearchboxAddedFiltersWrapper.prototype.ngAfterViewInit = function () {
        var self = this;
        this
            .observer
            .subscribe(function (change) {
            switch (change.name) {
                case search.Search.InformationChange:
                    var data = change.data;
                    self.searchbox = data.component;
                    if (self.searchbox) {
                        self.Filtering = self
                            .searchbox
                            .Filtering;
                    }
                    break;
            }
            self
                .changeDetectionRef
                .detectChanges();
        });
    };
    __decorate([
        core_1.ViewChild('ngSearchboxAddedFilters', { 'read': core_1.ViewContainerRef }),
        __metadata("design:type", core_1.ViewContainerRef)
    ], NgSearchboxAddedFiltersWrapper.prototype, "ngSearchboxAddedFiltersViewContainer", void 0);
    __decorate([
        core_1.ViewChild('ngSearchboxAddedFilters'),
        __metadata("design:type", NgSearchboxAddedFiltersWrapper)
    ], NgSearchboxAddedFiltersWrapper.prototype, "ngSearchboxAddedFilters", void 0);
    __decorate([
        core_1.Input('observer'),
        __metadata("design:type", core_1.EventEmitter)
    ], NgSearchboxAddedFiltersWrapper.prototype, "observer", void 0);
    NgSearchboxAddedFiltersWrapper = __decorate([
        core_1.Component({
            'selector': 'ng-searchbox-added-filters-wrapper',
            'templateUrl': '../../../../views/modules/ng/components/ng-searchbox-added-filters-wrapper.component.pug',
            'styleUrls': ['../../../../styles/modules/ng/components/ng-searchbox-added-filters-wrapper.component.sass'],
            'entryComponents': [
                ngSearchboxAddedFilter_component.NgSearchboxAddedFilter
            ]
        }),
        __metadata("design:paramtypes", [core_1.ComponentFactoryResolver,
            core_1.ChangeDetectorRef])
    ], NgSearchboxAddedFiltersWrapper);
    return NgSearchboxAddedFiltersWrapper;
}());
exports.NgSearchboxAddedFiltersWrapper = NgSearchboxAddedFiltersWrapper;

});

unwrapExports(ngSearchboxAddedFiltersWrapper_component);
var ngSearchboxAddedFiltersWrapper_component_1 = ngSearchboxAddedFiltersWrapper_component.NgSearchboxAddedFiltersWrapper;

var angular_constant = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.ANGULAR_FACTORIES = '_factories';
exports.DECORATED_ANNOTATIONS = '__annotations__';

});

unwrapExports(angular_constant);
var angular_constant_1 = angular_constant.ANGULAR_FACTORIES;
var angular_constant_2 = angular_constant.DECORATED_ANNOTATIONS;

var ngSearchboxFiltering_component = createCommonjsModule(function (module, exports) {
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });




var NgSearchboxFilteringComponent = /** @class */ (function () {
    function NgSearchboxFilteringComponent(changeDetectionRef, utils, zone) {
        this.changeDetectionRef = changeDetectionRef;
        this.utils = utils;
        this.zone = zone;
        this.observer = null;
        this.Filtering = null;
        this.active = false;
        this.searchbox = null;
        return this;
    }
    NgSearchboxFilteringComponent.prototype.handleResize = function () {
        if (this.active) {
            this.setPosition();
        }
    };
    NgSearchboxFilteringComponent.prototype.toggleFilters = function (active) {
        var self = this;
        if (typeof active !== 'undefined') {
            this.active = active;
        }
        else {
            this.active = !this.active;
        }
        this
            .zone
            .run(function () {
            if (self.active) {
                self.setPosition();
            }
        });
    };
    NgSearchboxFilteringComponent.prototype.setPosition = function () {
        var el = this.searchbox.element, list = this.ngSearchboxFilteringList.nativeElement, h = this.utils.getHeightOf(el);
        list.style.top = h + 'px';
    };
    NgSearchboxFilteringComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var self = this;
        this
            .observer
            .subscribe(function (change) {
            switch (change.name) {
                case search.Search.InformationChange:
                    var data = change.data;
                    self.searchbox = data.component;
                    if (self.searchbox) {
                        self.availableFilters = _this.excludeFromFilters(self
                            .searchbox
                            .ngSearchBoxFiltering);
                        self.Filtering = self.searchbox.Filtering;
                    }
                    break;
            }
            self
                .changeDetectionRef
                .detectChanges();
        });
    };
    NgSearchboxFilteringComponent.prototype.setFilters = function (filters) {
        this.availableFilters = this.excludeFromFilters(filters);
    };
    NgSearchboxFilteringComponent.prototype.addToFilterList = function (filter) {
        this
            .availableFilters
            .push(filter);
    };
    NgSearchboxFilteringComponent.prototype.removeFromFilterList = function (filter) {
        var name = null;
        if (typeof filter === 'string') {
            name = filter;
        }
        else {
            name = filter.name;
        }
        var index = _.findIndex(this.availableFilters, { 'name': name });
        if (index !== -1) {
            this
                .availableFilters
                .splice(index, 1);
        }
    };
    NgSearchboxFilteringComponent.prototype.excludeFromFilters = function (filters) {
        var excludedFilters = JSON.parse(JSON.stringify(filters));
        excludedFilters
            .slice()
            .reverse()
            .forEach(function (filter, filterIndex, filterObject) {
            if (filter.excluded) {
                excludedFilters
                    .splice(filterObject.length - 1 - filterIndex, 1);
            }
        });
        return excludedFilters;
    };
    NgSearchboxFilteringComponent.prototype.addFilterAndClose = function (filter) {
        this.toggleFilters(false);
        this
            .Filtering
            .add(filter);
        return;
    };
    NgSearchboxFilteringComponent.prototype.addFilter = function (event, name) {
        var self = this;
        if (this.availableFilters) {
            this
                .availableFilters
                .forEach(function (filter) {
                var modifiedFilter = filter;
                if (modifiedFilter.name === name) {
                    if (modifiedFilter.restrictedSuggestedValues) {
                        self.addFilterAndClose(modifiedFilter);
                    }
                    else {
                        if (!modifiedFilter.multi) {
                            modifiedFilter.notFiltered = !modifiedFilter.notFiltered;
                            if (!modifiedFilter.notFiltered) {
                                self.addFilterAndClose(modifiedFilter);
                            }
                        }
                        else {
                            self.addFilterAndClose(modifiedFilter);
                        }
                    }
                }
            });
        }
    };
    Object.defineProperty(NgSearchboxFilteringComponent.prototype, "getAvailableFilters", {
        get: function () {
            return this.availableFilters;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.ViewChild('ngSearchboxFilteringList'),
        __metadata("design:type", core_1.ElementRef)
    ], NgSearchboxFilteringComponent.prototype, "ngSearchboxFilteringList", void 0);
    __decorate([
        core_1.Input('observer'),
        __metadata("design:type", core_1.EventEmitter)
    ], NgSearchboxFilteringComponent.prototype, "observer", void 0);
    __decorate([
        core_1.HostListener('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NgSearchboxFilteringComponent.prototype, "handleResize", null);
    NgSearchboxFilteringComponent = __decorate([
        core_1.Component({
            'selector': 'ng-searchbox-filtering',
            'templateUrl': '../../../../views/modules/ng/components/ng-searchbox-filtering.component.pug',
            'styleUrls': ['../../../../styles/modules/ng/components/ng-searchbox-filtering.component.sass']
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef,
            utils_service.UtilsService,
            core_1.NgZone])
    ], NgSearchboxFilteringComponent);
    return NgSearchboxFilteringComponent;
}());
exports.NgSearchboxFilteringComponent = NgSearchboxFilteringComponent;

});

unwrapExports(ngSearchboxFiltering_component);
var ngSearchboxFiltering_component_1 = ngSearchboxFiltering_component.NgSearchboxFilteringComponent;

var ngSearchbox_component = createCommonjsModule(function (module, exports) {
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });











var NgSearchboxComponent = /** @class */ (function () {
    function NgSearchboxComponent(element, changeDetectorRef, componentFactoryResolver, injector, module, utils) {
        this.element = element;
        this.changeDetectorRef = changeDetectorRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
        this.module = module;
        this.utils = utils;
        this.searchParams = null;
        this.ngSearchBoxFiltering = null;
        this.ngSearchBoxConfig = null;
        this.ngSearchBoxAutoComplete = null;
        this.ngSearchBoxCacheFilter = false;
        this.ngSearchBoxEnableFilterOperators = false;
        this.ngSearchBoxFilterSelectors = null;
        this.ngSearchBoxFilterOperators = null;
        this.ngSearchBoxDclAfter = [];
        this.placeholder = '';
        this.onRegisterApi = new core_1.EventEmitter();
        this.onChange = new core_1.EventEmitter();
        this.Placeholding = null;
        this.Filtering = null;
        this.Event = null;
        this.Api = null;
        this.query = '';
        this.previousQuery = null;
        this.hasQuery = false;
        this.customParameters = {};
        this.customParametersChanged = [];
        this.sid = '';
        this.defaultParams = {
            'query': '',
            'filters': [],
            'operators': []
        };
        return this;
    }
    NgSearchboxComponent_1 = NgSearchboxComponent;
    NgSearchboxComponent.prototype.ngOnInit = function () {
        this.sid = this.utils.uuid();
        if (this.ngSearchBoxEnableFilterOperators) {
            this
                .defaultParams
                .operators = [];
        }
        this.configure();
    };
    NgSearchboxComponent.prototype.ngAfterViewInit = function () {
        var self = this;
        this.Api = new api_service.API(self);
        this.Event = new eventHandling_service.EventHandling(self);
        this.Filtering = new filtering_service.FilteringService(self);
        this.Placeholding = new placeholders_service.PlaceholdersService(self);
        if (this.Placeholding) {
            this.Placeholding.setup();
        }
        self
            .Filtering
            .getPublisher()
            .subscribe(function (filters) {
            self
                .searchParams
                .filters = filters;
            self
                .Event
                .onChange(self.searchParams);
        });
        var searchBoxInformationExchange = {
            'component': self
        };
        self.emit(search.Search.InformationChange, searchBoxInformationExchange);
        self
            .constructDclAfterComponents()
            .register();
        self
            .changeDetectorRef
            .detectChanges();
    };
    NgSearchboxComponent.prototype.ngOnDestroy = function () {
        this.Placeholding.stop();
    };
    NgSearchboxComponent.prototype.getFactoryEntry = function (type) {
        var t = null;
        if (this.componentFactoryResolver &&
            this.componentFactoryResolver[angular_constant.ANGULAR_FACTORIES]) {
            var factory = this.componentFactoryResolver[angular_constant.ANGULAR_FACTORIES];
            if (factory &&
                typeof factory.entries === 'function') {
                var entries = Array.from(factory.entries());
                _.forEach(entries, function (entry) {
                    var component = entry[0];
                    if (component &&
                        component.name &&
                        type === component.name) {
                        t = entry[1];
                    }
                });
            }
        }
        return t;
    };
    NgSearchboxComponent.prototype.constructDclAfterComponents = function () {
        var _this = this;
        var names = this.ngSearchBoxDclAfter;
        if (!_.isArray(names)) {
            names = [this.ngSearchBoxDclAfter];
        }
        _.forEach(names, function (name) {
            var factory = _this.getFactoryEntry(name);
            if (factory) {
                var cmpRef = factory.create(_this.injector, [], null, _this.module);
                _this
                    .ngSearchboxDclBottom
                    .insert(cmpRef.hostView);
            }
        });
        return this;
    };
    NgSearchboxComponent.prototype.emit = function (name, data) {
        this
            .onChange
            .emit({
            'name': name,
            'data': data
        });
        return this;
    };
    NgSearchboxComponent.prototype.queryChange = function (val, fire) {
        if (fire === void 0) { fire = true; }
        var self = this;
        if (!val &&
            !this.previousQuery &&
            typeof val === 'string' &&
            typeof this.previousQuery === 'string') {
            return;
        }
        if (typeof val !== 'undefined') {
            self.hasQuery = !!(val && val.length);
            self.searchParams.query = val;
            if (fire) {
                self
                    .Event
                    .onChange(self.searchParams)
                    .onQueryAdded(val, this.previousQuery)
                    .onQueryRemoved(val, this.previousQuery);
            }
        }
    };
    NgSearchboxComponent.prototype.onKeyDown = function (event) {
        this.previousQuery = event.target.value;
    };
    NgSearchboxComponent.prototype.configure = function () {
        this.searchParams = this.defaultParams;
        return this;
    };
    NgSearchboxComponent.prototype.register = function () {
        this
            .onRegisterApi
            .emit(this.Api);
        return this;
    };
    NgSearchboxComponent.prototype.eraseQuery = function () {
        this.previousQuery = null;
        this.query = '';
        this.queryChange(this.query);
    };
    NgSearchboxComponent.prototype.handleSearch = function () {
        this
            .Event
            .onChange(this.searchParams);
    };
    NgSearchboxComponent.prototype.handleEraser = function () {
        if (this.searchParams.query) {
            this.eraseQuery();
            this
                .Event
                .onEraser();
        }
    };
    NgSearchboxComponent.prototype.handleGarbage = function () {
        var _this = this;
        if (this.searchParams.query ||
            this.Filtering.hasFilters ||
            (this.customParametersChanged && this.customParametersChanged.length)) {
            if (this.searchParams.query) {
                this.eraseQuery();
            }
            this.Filtering.removeAll();
            this.Event.onGarbage();
            _.forEach(this.customParametersChanged, function (parameter) {
                if (_this.customParameters &&
                    _this.customParameters[parameter]) {
                    if (typeof _this.customParameters[parameter].defaultValue !== 'undefined') {
                        _this.searchParams[parameter] = _this.customParameters[parameter].defaultValue || null;
                    }
                    if (typeof _this.customParameters[parameter].reset === 'function') {
                        _this
                            .customParameters[parameter]
                            .reset();
                    }
                }
                else {
                    _this.searchParams[parameter] = null;
                }
            });
            this.customParametersChanged = [];
            this
                .Event
                .onChange(this.searchParams);
        }
    };
    /**
     * @method addParameter
     * @param {string} name
     * @param options
     * @returns {NgSearchboxComponent}
     */
    NgSearchboxComponent.prototype.addParameter = function (name, options) {
        this.customParameters[name] = _.extend({
            'name': name
        }, options);
        if (options && typeof options.defaultValue !== 'undefined') {
            this.searchParams[name] = options.defaultValue || null;
        }
        return this;
    };
    NgSearchboxComponent.prototype.upsertParameter = function (name, data) {
        var self = this;
        this.searchParams[name] = data;
        self
            .Event
            .onChange(self.searchParams, function () {
            self
                .customParametersChanged
                .push(name);
        });
        return this;
    };
    NgSearchboxComponent.NG_SEARCHBOX_FILTERING = 'ngSearchBoxFiltering';
    __decorate([
        core_1.ViewChild('ngSearchboxDclBottom', { read: core_1.ViewContainerRef }),
        __metadata("design:type", core_1.ViewContainerRef)
    ], NgSearchboxComponent.prototype, "ngSearchboxDclBottom", void 0);
    __decorate([
        core_1.ViewChild('ngSearchboxAddedFiltersWrapper'),
        __metadata("design:type", ngSearchboxAddedFiltersWrapper_component.NgSearchboxAddedFiltersWrapper)
    ], NgSearchboxComponent.prototype, "ngSearchboxAddedFiltersWrapper", void 0);
    __decorate([
        core_1.ViewChild('ngSearchboxFilteringComponent'),
        __metadata("design:type", ngSearchboxFiltering_component.NgSearchboxFilteringComponent)
    ], NgSearchboxComponent.prototype, "ngSearchboxFilteringComponent", void 0);
    __decorate([
        core_1.Input('searchParams'),
        __metadata("design:type", Object)
    ], NgSearchboxComponent.prototype, "searchParams", void 0);
    __decorate([
        core_1.Input(NgSearchboxComponent_1.NG_SEARCHBOX_FILTERING),
        __metadata("design:type", Array)
    ], NgSearchboxComponent.prototype, "ngSearchBoxFiltering", void 0);
    __decorate([
        core_1.Input('ngSearchBoxConfig'),
        __metadata("design:type", Object)
    ], NgSearchboxComponent.prototype, "ngSearchBoxConfig", void 0);
    __decorate([
        core_1.Input('ngSearchBoxAutoComplete'),
        __metadata("design:type", Object)
    ], NgSearchboxComponent.prototype, "ngSearchBoxAutoComplete", void 0);
    __decorate([
        core_1.Input('ngSearchBoxCacheFilter'),
        __metadata("design:type", Boolean)
    ], NgSearchboxComponent.prototype, "ngSearchBoxCacheFilter", void 0);
    __decorate([
        core_1.Input('ngSearchBoxEnableFilterOperators'),
        __metadata("design:type", Boolean)
    ], NgSearchboxComponent.prototype, "ngSearchBoxEnableFilterOperators", void 0);
    __decorate([
        core_1.Input('ngSearchBoxFilterSelectors'),
        __metadata("design:type", Object)
    ], NgSearchboxComponent.prototype, "ngSearchBoxFilterSelectors", void 0);
    __decorate([
        core_1.Input('ngSearchBoxFilterOperators'),
        __metadata("design:type", Object)
    ], NgSearchboxComponent.prototype, "ngSearchBoxFilterOperators", void 0);
    __decorate([
        core_1.Input('ngSearchBoxDclAfter'),
        __metadata("design:type", Array)
    ], NgSearchboxComponent.prototype, "ngSearchBoxDclAfter", void 0);
    __decorate([
        core_1.Input('placeholder'),
        __metadata("design:type", String)
    ], NgSearchboxComponent.prototype, "placeholder", void 0);
    __decorate([
        core_1.Output('onRegisterApi'),
        __metadata("design:type", core_1.EventEmitter)
    ], NgSearchboxComponent.prototype, "onRegisterApi", void 0);
    NgSearchboxComponent = NgSearchboxComponent_1 = __decorate([
        core_1.Component({
            'selector': 'ng-searchbox',
            'templateUrl': '../../../../views/modules/ng/components/ng-searchbox.component.pug',
            'styleUrls': ['../../../../styles/modules/ng/components/ng-searchbox.component.sass']
        }),
        __metadata("design:paramtypes", [core_1.ElementRef,
            core_1.ChangeDetectorRef,
            core_1.ComponentFactoryResolver,
            core_1.Injector,
            core_1.NgModuleRef,
            utils_service.UtilsService])
    ], NgSearchboxComponent);
    return NgSearchboxComponent;
    var NgSearchboxComponent_1;
}());
exports.NgSearchboxComponent = NgSearchboxComponent;

});

unwrapExports(ngSearchbox_component);
var ngSearchbox_component_1 = ngSearchbox_component.NgSearchboxComponent;

var operators_constant = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.NgSearchboxOperators = [
    {
        'name': 'AND',
        'selected': true
    }, {
        'name': 'OR'
    }, {
        'name': 'NOR'
    }, {
        'name': 'NOT'
    }
];

});

unwrapExports(operators_constant);
var operators_constant_1 = operators_constant.NgSearchboxOperators;

var ngSearchboxFilterOperators_component = createCommonjsModule(function (module, exports) {
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (commonjsGlobal && commonjsGlobal.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });




var NgSearchboxFilterOperators = /** @class */ (function () {
    function NgSearchboxFilterOperators(ngAddedFilter, element) {
        this.ngAddedFilter = ngAddedFilter;
        this.element = element;
        this.filter = null;
        this.operators = _.clone(operators_constant.NgSearchboxOperators);
        this.selectedOperator = null;
        this.Filtering = null;
        this.showOperators = false;
        this.hasOperator = false;
        this.Filtering = this.ngAddedFilter.Filtering;
        if (this.Filtering.getFilterCount() > 1) {
            this.hasOperator = true;
        }
        return this;
    }
    NgSearchboxFilterOperators.prototype.toggleOperators = function (show) {
        var _this = this;
        var self = this;
        if (typeof show === 'boolean') {
            self.showOperators = show;
        }
        else {
            self.showOperators = !self.showOperators;
        }
        if (self.showOperators) {
            setTimeout(function () {
                self.proxiedFunction = function (event) {
                    _this
                        .windowClicked
                        .apply(self, [event]);
                };
                window.addEventListener('click', self.proxiedFunction);
            }, 25);
        }
        else {
            window.removeEventListener('click', this.proxiedFunction);
        }
    };
    NgSearchboxFilterOperators.prototype.windowClicked = function (event) {
        var target = event.target, element = this
            .element
            .nativeElement;
        if (!element.contains(target)) {
            this
                .toggleOperators(false);
        }
    };
    NgSearchboxFilterOperators.prototype.takeOperator = function (operator) {
        var self = this;
        _.each(self.operators, function (op) {
            op.selected = false;
        });
        self
            .filter
            .operator = operator;
        self
            .Filtering
            .addOperatorToFilter(operator, self.filter, true);
        self
            .ngAddedFilter
            .Event
            .onOperatorChanged(operator, self.filter);
        operator.selected = true;
        this
            .toggleOperators(false);
    };
    NgSearchboxFilterOperators.prototype.getDefaultOperator = function () {
        var operatorByFilter = null, self = this;
        if (operatorByFilter === null) {
            if (!this.filter.operator) {
                _.each(self.operators, function (operator) {
                    if (operator.selected) {
                        self.selectedOperator = operator;
                    }
                });
                if (!self.filter.operator &&
                    self.operators &&
                    self.operators.length) {
                    var operator = self.operators[0];
                    operator.selected = true;
                    self.selectedOperator = operator;
                }
            }
        }
        setTimeout(function () {
            self.filter.operator = self.selectedOperator;
        });
        return this;
    };
    NgSearchboxFilterOperators.prototype.addOperatorToFilter = function () {
        var self = this;
        if (!self.Filtering.hasOperatorAlready(self.filter)) {
            this
                .Filtering
                .addOperatorToFilter(self.selectedOperator, self.filter);
        }
        return this;
    };
    NgSearchboxFilterOperators.prototype.ngAfterViewInit = function () {
        if (this.hasOperator) {
            this
                .Filtering
                .setOperator(this.filter, this);
            this
                .getDefaultOperator()
                .addOperatorToFilter();
        }
    };
    __decorate([
        core_1.Input('filter'),
        __metadata("design:type", Object)
    ], NgSearchboxFilterOperators.prototype, "filter", void 0);
    NgSearchboxFilterOperators = __decorate([
        core_1.Component({
            'selector': 'ng-searchbox-filter-operators',
            'templateUrl': '../../../../views/modules/ng/components/ng-searchbox-filter-operators.component.pug',
            'styleUrls': ['../../../../styles/modules/ng/components/ng-searchbox-filter-operators.component.sass'],
        }),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return ngSearchboxAddedFilter_component.NgSearchboxAddedFilter; }))),
        __metadata("design:paramtypes", [ngSearchboxAddedFilter_component.NgSearchboxAddedFilter,
            core_1.ElementRef])
    ], NgSearchboxFilterOperators);
    return NgSearchboxFilterOperators;
}());
exports.NgSearchboxFilterOperators = NgSearchboxFilterOperators;

});

unwrapExports(ngSearchboxFilterOperators_component);
var ngSearchboxFilterOperators_component_1 = ngSearchboxFilterOperators_component.NgSearchboxFilterOperators;

var memory_service = createCommonjsModule(function (module, exports) {
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });

var MemoryService = /** @class */ (function () {
    function MemoryService() {
        this.storage = null;
        this.storage = window.localStorage;
        return this;
    }
    MemoryService_1 = MemoryService;
    MemoryService.prototype.getAndSet = function (key, value) {
        if (!this.storage.getItem(MemoryService_1.HASH)) {
            this
                .storage
                .setItem(MemoryService_1.HASH, '{}');
        }
        var store = this.storage.getItem(MemoryService_1.HASH);
        if (store) {
            store = JSON.parse(store);
            if (typeof value === 'undefined') {
                return store[key];
            }
            else {
                store[key] = value;
                this
                    .storage
                    .setItem(MemoryService_1.HASH, JSON.stringify(store));
            }
        }
    };
    MemoryService.prototype.getAll = function () {
        var data = JSON.parse(this.storage.getItem(MemoryService_1.HASH));
        if (data) {
            delete data.cache;
            return data;
        }
        return {};
    };
    MemoryService.prototype.removeAll = function () {
        var cache = this.getAndSet('cache'), obj = {};
        if (cache !== null) {
            obj.cache = cache;
        }
        this
            .storage
            .setItem(MemoryService_1.HASH, JSON.stringify(obj));
    };
    MemoryService.HASH = 'ng-searchbox';
    MemoryService = MemoryService_1 = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], MemoryService);
    return MemoryService;
    var MemoryService_1;
}());
exports.MemoryService = MemoryService;

});

unwrapExports(memory_service);
var memory_service_1 = memory_service.MemoryService;

var ngSearchbox_fontAwesome = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });


fontawesome.icon(fontawesomeFreeSolid.faTrash);
fontawesome.icon(fontawesomeFreeSolid.faSearch);
fontawesome.icon(fontawesomeFreeSolid.faEraser);
fontawesome.icon(fontawesomeFreeSolid.faTimes);
fontawesome.icon(fontawesomeFreeSolid.faArrowLeft);
fontawesome.icon(fontawesomeFreeSolid.faArrowRight);
fontawesome.icon(fontawesomeFreeSolid.faLevelDownAlt);
fontawesome.icon(fontawesomeFreeSolid.faAngleDoubleRight);
fontawesome.icon(fontawesomeFreeSolid.faLevelUpAlt);

});

unwrapExports(ngSearchbox_fontAwesome);

var ngSearchbox_module = createCommonjsModule(function (module, exports) {
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });












var NgSearchboxModule = /** @class */ (function () {
    function NgSearchboxModule() {
    }
    NgSearchboxModule = __decorate([
        core_1.NgModule({
            'imports': [
                common.CommonModule,
                forms.FormsModule
            ],
            'declarations': [
                ngSearchbox_component.NgSearchboxComponent,
                ngSearchboxAddedFilter_component.NgSearchboxAddedFilter,
                ngSearchboxAddedFiltersWrapper_component.NgSearchboxAddedFiltersWrapper,
                ngSearchboxFilterOperators_component.NgSearchboxFilterOperators,
                ngSearchboxFilterSelectors_component.NgSearchboxFilterSelectors,
                ngSearchboxFiltering_component.NgSearchboxFilteringComponent
            ],
            'providers': [
                memory_service.MemoryService,
                utils_service.UtilsService
            ],
            'exports': [
                ngSearchbox_component.NgSearchboxComponent
            ]
        })
    ], NgSearchboxModule);
    return NgSearchboxModule;
}());
exports.NgSearchboxModule = NgSearchboxModule;

});

unwrapExports(ngSearchbox_module);
var ngSearchbox_module_1 = ngSearchbox_module.NgSearchboxModule;

var validation_service = createCommonjsModule(function (module, exports) {
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });

var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.prototype.has = function (filter) {
        return !!(filter && filter.validation);
    };
    ValidationService = __decorate([
        core_1.Injectable()
    ], ValidationService);
    return ValidationService;
}());
exports.ValidationService = ValidationService;

});

unwrapExports(validation_service);
var validation_service_1 = validation_service.ValidationService;

var core = createCommonjsModule(function (module, exports) {
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
// modules
__export(ngSearchbox_module);
// components

exports.NgSearchboxComponent = ngSearchbox_component.NgSearchboxComponent;

exports.NgSearchboxAddedFilter = ngSearchboxAddedFilter_component.NgSearchboxAddedFilter;

exports.NgSearchboxAddedFiltersWrapper = ngSearchboxAddedFiltersWrapper_component.NgSearchboxAddedFiltersWrapper;

exports.NgSearchboxFilterOperators = ngSearchboxFilterOperators_component.NgSearchboxFilterOperators;

exports.NgSearchboxFilterSelectors = ngSearchboxFilterSelectors_component.NgSearchboxFilterSelectors;

exports.NgSearchboxFilteringComponent = ngSearchboxFiltering_component.NgSearchboxFilteringComponent;
// services

exports.API = api_service.API;

exports.EventHandling = eventHandling_service.EventHandling;

exports.FilteringService = filtering_service.FilteringService;

exports.MemoryService = memory_service.MemoryService;

exports.PlaceholdersService = placeholders_service.PlaceholdersService;

exports.UtilsService = utils_service.UtilsService;

exports.ValidationService = validation_service.ValidationService;
// constants

exports.NgSearchboxEvent = events_constant.NgSearchboxEvent;

exports.NgSearchboxOperators = operators_constant.NgSearchboxOperators;

exports.NgSearchboxSelectors = selectors_constant.NgSearchboxSelectors;
// interfaces

exports.Search = search.Search;

});

var index = unwrapExports(core);
var core_1$2 = core.NgSearchboxComponent;
var core_2 = core.NgSearchboxAddedFilter;
var core_3 = core.NgSearchboxAddedFiltersWrapper;
var core_4 = core.NgSearchboxFilterOperators;
var core_5 = core.NgSearchboxFilterSelectors;
var core_6 = core.NgSearchboxFilteringComponent;
var core_7 = core.API;
var core_8 = core.EventHandling;
var core_9 = core.FilteringService;
var core_10 = core.MemoryService;
var core_11 = core.PlaceholdersService;
var core_12 = core.UtilsService;
var core_13 = core.ValidationService;
var core_14 = core.NgSearchboxEvent;
var core_15 = core.NgSearchboxOperators;
var core_16 = core.NgSearchboxSelectors;
var core_17 = core.Search;

exports.default = index;
exports.NgSearchboxComponent = core_1$2;
exports.NgSearchboxAddedFilter = core_2;
exports.NgSearchboxAddedFiltersWrapper = core_3;
exports.NgSearchboxFilterOperators = core_4;
exports.NgSearchboxFilterSelectors = core_5;
exports.NgSearchboxFilteringComponent = core_6;
exports.API = core_7;
exports.EventHandling = core_8;
exports.FilteringService = core_9;
exports.MemoryService = core_10;
exports.PlaceholdersService = core_11;
exports.UtilsService = core_12;
exports.ValidationService = core_13;
exports.NgSearchboxEvent = core_14;
exports.NgSearchboxOperators = core_15;
exports.NgSearchboxSelectors = core_16;
exports.Search = core_17;

Object.defineProperty(exports, '__esModule', { value: true });

})));
