'use strict';
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
var _ = require("lodash");
var core_1 = require("@angular/core");
var utils_service_1 = require("../services/utils.service");
var event_handling_service_1 = require("../services/event-handling.service");
var filtering_service_1 = require("../services/filtering.service");
var placeholders_service_1 = require("../services/placeholders.service");
var api_service_1 = require("../services/api.service");
var search_1 = require("../../../interfaces/search");
var ng_searchbox_added_filters_wrapper_component_1 = require("./ng-searchbox-added-filters-wrapper.component");
var angular_constant_1 = require("../../../constants/angular.constant");
var ng_searchbox_filtering_component_1 = require("./ng-searchbox-filtering.component");
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
        this.Api = new api_service_1.API(self);
        this.Event = new event_handling_service_1.EventHandling(self);
        this.Filtering = new filtering_service_1.FilteringService(self);
        this.Placeholding = new placeholders_service_1.PlaceholdersService(self);
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
        self.emit(search_1.Search.InformationChange, searchBoxInformationExchange);
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
            this.componentFactoryResolver[angular_constant_1.ANGULAR_FACTORIES]) {
            var factory = this.componentFactoryResolver[angular_constant_1.ANGULAR_FACTORIES];
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
        __metadata("design:type", ng_searchbox_added_filters_wrapper_component_1.NgSearchboxAddedFiltersWrapper)
    ], NgSearchboxComponent.prototype, "ngSearchboxAddedFiltersWrapper", void 0);
    __decorate([
        core_1.ViewChild('ngSearchboxFilteringComponent'),
        __metadata("design:type", ng_searchbox_filtering_component_1.NgSearchboxFilteringComponent)
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
            'template': `<div class="ng-searchbox"><ng-searchbox-filtering #ngSearchboxFilteringComponent="" [observer]="onChange"></ng-searchbox-filtering><div class="ng-searchbox-wrapper"><input [id]="sid" type="text" [(ngModel)]="query" (ngModelChange)="queryChange($event);" (keydown)="onKeyDown($event);" [placeholder]="placeholder"/><div class="ng-searchbox-buttons"><span class="ng-searchbox-button" *ngIf="hasQuery" (click)="handleEraser();"><i class="fa fa-eraser"></i></span><span class="ng-searchbox-button" *ngIf="(hasQuery || (Filtering &amp;&amp; Filtering.hasFilters) || (customParametersChanged &amp;&amp; customParametersChanged.length))" (click)="handleGarbage();"><i class="fa fa-trash"></i></span><span class="ng-searchbox-button"><i class="fa fa-search" (click)="handleSearch();"></i></span></div></div><div class="ng-searchbox-dcl-bottom"><div #ngSearchboxDclBottom=""></div></div><ng-searchbox-added-filters-wrapper [ngClass]="{ 'active': (Filtering &amp;&amp; Filtering.hasFilters) }" #ngSearchboxAddedFiltersWrapper="" [observer]="onChange"></ng-searchbox-added-filters-wrapper></div>`,
            'styles': [`:host {
  border: 1px solid rgba(4, 4, 4, 0.3);
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  position: relative;
  border-radius: 4px;
  display: block;
  background: #FFF;
  padding: 4px; }
  :host div.ng-searchbox-wrapper {
    position: relative; }
    :host div.ng-searchbox-wrapper input {
      font-size: 18px;
      border: none;
      width: calc(100% - 58px);
      outline: none;
      padding: 9px 8px 9px 50px;
      color: rgba(0, 0, 0, 0.68);
      font-weight: normal;
      font-style: italic; }
    :host div.ng-searchbox-wrapper div.ng-searchbox-buttons {
      position: absolute;
      z-index: 1;
      right: 10px;
      transform: translate(0, 50%);
      top: 0;
      font-size: 18px; }
      :host div.ng-searchbox-wrapper div.ng-searchbox-buttons span.ng-searchbox-button {
        margin-right: 5px; }
        :host div.ng-searchbox-wrapper div.ng-searchbox-buttons span.ng-searchbox-button:last-child {
          margin-right: 0; }
      :host div.ng-searchbox-wrapper div.ng-searchbox-buttons svg {
        margin-right: 5px;
        cursor: pointer; }
        :host div.ng-searchbox-wrapper div.ng-searchbox-buttons svg.fa-trash, :host div.ng-searchbox-wrapper div.ng-searchbox-buttons svg.fa-eraser {
          color: #4A92D0; }
        :host div.ng-searchbox-wrapper div.ng-searchbox-buttons svg:last-child {
          margin-right: 0; }
`]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef,
            core_1.ChangeDetectorRef,
            core_1.ComponentFactoryResolver,
            core_1.Injector,
            core_1.NgModuleRef,
            utils_service_1.UtilsService])
    ], NgSearchboxComponent);
    return NgSearchboxComponent;
    var NgSearchboxComponent_1;
}());
exports.NgSearchboxComponent = NgSearchboxComponent;
//# sourceMappingURL=ng-searchbox.component.js.map