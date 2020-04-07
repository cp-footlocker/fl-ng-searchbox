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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ng_searchbox_component_1 = require("../../ng/components/ng-searchbox.component");
var TestComponent = /** @class */ (function () {
    function TestComponent(ngSearchBoxComponent, changeDetectorRef) {
        this.ngSearchBoxComponent = ngSearchBoxComponent;
        this.changeDetectorRef = changeDetectorRef;
        this.searchOption = TestComponent_1.DEFAULT_OPTION;
        return this;
    }
    TestComponent_1 = TestComponent;
    TestComponent.prototype.ngOnInit = function () {
        this
            .ngSearchBoxComponent
            .addParameter(TestComponent_1.PARAMETER, {
            'defaultValue': this.searchOption,
            'reset': this.reset.bind(this)
        });
    };
    TestComponent.prototype.reset = function () {
        console.log('double check...');
        this.searchOption = TestComponent_1.DEFAULT_OPTION;
        this
            .changeDetectorRef
            .detectChanges();
    };
    TestComponent.prototype.change = function (text) {
        this
            .ngSearchBoxComponent
            .upsertParameter(TestComponent_1.PARAMETER, text);
    };
    TestComponent.DEFAULT_OPTION = '1';
    TestComponent.PARAMETER = 'option';
    TestComponent = TestComponent_1 = __decorate([
        core_1.Component({
            'selector': 'test-component',
            'template': `<div class="test-component"><label>Search By ...</label><ul class="search-option-list"><li [ngClass]="{ 'active': (searchOption === '1') }"><input type="radio" id="search-option-model" name="searchOption" [(ngModel)]="searchOption" (ngModelChange)="change($event);" value="1"/><label for="search-option-model">Model</label></li><li [ngClass]="{ 'active': (searchOption === '2') }"><input type="radio" id="search-option-style" name="searchOption" [(ngModel)]="searchOption" (ngModelChange)="change($event);" value="2"/><label for="search-option-style">Style</label></li></ul></div>`,
            'styles': [`:host div.test-component {
  margin-top: 10px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; }
  :host div.test-component > label {
    margin: 5px 10px 2px 0;
    display: inline-block; }
  :host div.test-component ul.search-option-list {
    display: inline-block;
    vertical-align: top;
    list-style-type: none;
    padding: 0;
    margin: 0; }
    :host div.test-component ul.search-option-list li {
      display: inline-block;
      vertical-align: top;
      padding: 3px 6px; }
      :host div.test-component ul.search-option-list li.active {
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        font-weight: bold;
        background: #dfefff; }
`]
        }),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return ng_searchbox_component_1.NgSearchboxComponent; }))),
        __metadata("design:paramtypes", [ng_searchbox_component_1.NgSearchboxComponent,
            core_1.ChangeDetectorRef])
    ], TestComponent);
    return TestComponent;
    var TestComponent_1;
}());
exports.TestComponent = TestComponent;
//# sourceMappingURL=test.component.js.map