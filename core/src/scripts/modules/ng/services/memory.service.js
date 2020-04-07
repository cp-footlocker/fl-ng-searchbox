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
var core_1 = require("@angular/core");
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
//# sourceMappingURL=memory.service.js.map