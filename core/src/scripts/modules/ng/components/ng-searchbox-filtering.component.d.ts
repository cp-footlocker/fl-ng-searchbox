import { EventEmitter, AfterViewInit, ChangeDetectorRef, ElementRef, NgZone } from '@angular/core';
import { NgSearchboxComponent } from './ng-searchbox.component';
import { Search, ModifiedSearch } from '../../../interfaces/search';
import { FilteringService } from '../services/filtering.service';
import { UtilsService } from '../services/utils.service';
export declare class NgSearchboxFilteringComponent implements AfterViewInit {
    private changeDetectionRef;
    private utils;
    private zone;
    ngSearchboxFilteringList: ElementRef;
    observer: EventEmitter<Search.BindingEventChange>;
    Filtering: FilteringService;
    availableFilters: Search.AvailableFilter[];
    active: boolean;
    searchbox: NgSearchboxComponent;
    private proxiedFunction;
    constructor(changeDetectionRef: ChangeDetectorRef, utils: UtilsService, zone: NgZone);
    private handleResize();
    toggleFilters(active?: boolean): void;
    setPosition(): void;
    ngAfterViewInit(): void;
    setFilters(filters: Search.AvailableFilter[]): void;
    addToFilterList(filter: Search.AvailableFilter): void;
    removeFromFilterList(filter: string | Search.AvailableFilter): void;
    excludeFromFilters(filters: Search.AvailableFilter[]): Search.AvailableFilter[];
    addFilterAndClose(filter: ModifiedSearch.ModifiedFilter): void;
    addFilter(event: MouseEvent, name: string): void;
    readonly getAvailableFilters: Search.AvailableFilter[];
}
