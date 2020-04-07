import { OnInit, AfterViewInit, EventEmitter, ChangeDetectorRef, ElementRef, ViewContainerRef, Injector, NgModuleRef, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { UtilsService } from '../services/utils.service';
import { EventHandling } from '../services/event-handling.service';
import { FilteringService } from '../services/filtering.service';
import { PlaceholdersService } from '../services/placeholders.service';
import { API } from '../services/api.service';
import { Search } from '../../../interfaces/search';
import { NgSearchboxAddedFiltersWrapper } from './ng-searchbox-added-filters-wrapper.component';
import { NgSearchboxFilteringComponent } from "./ng-searchbox-filtering.component";
export declare class NgSearchboxComponent implements OnInit, AfterViewInit, OnDestroy {
    element: ElementRef;
    private changeDetectorRef;
    private componentFactoryResolver;
    private injector;
    private module;
    utils: UtilsService;
    static NG_SEARCHBOX_FILTERING: string;
    ngSearchboxDclBottom: ViewContainerRef;
    ngSearchboxAddedFiltersWrapper: NgSearchboxAddedFiltersWrapper;
    ngSearchboxFilteringComponent: NgSearchboxFilteringComponent;
    searchParams: Search.Parameters;
    ngSearchBoxFiltering: Search.AvailableFilter[];
    ngSearchBoxConfig: any;
    ngSearchBoxAutoComplete: any;
    ngSearchBoxCacheFilter: boolean;
    ngSearchBoxEnableFilterOperators: boolean;
    ngSearchBoxFilterSelectors: any;
    ngSearchBoxFilterOperators: any;
    ngSearchBoxDclAfter: string[];
    placeholder: string;
    onRegisterApi: EventEmitter<API>;
    onChange: EventEmitter<Search.BindingEventChange>;
    Placeholding: PlaceholdersService;
    Filtering: FilteringService;
    Event: EventHandling;
    Api: API;
    query: string;
    previousQuery: string;
    hasQuery: boolean;
    customParameters: any;
    customParametersChanged: string[];
    sid: string;
    defaultParams: Search.Parameters;
    constructor(element: ElementRef, changeDetectorRef: ChangeDetectorRef, componentFactoryResolver: ComponentFactoryResolver, injector: Injector, module: NgModuleRef<any>, utils: UtilsService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private getFactoryEntry(type);
    private constructDclAfterComponents();
    emit(name: string, data?: any): NgSearchboxComponent;
    queryChange(val: string, fire?: boolean): void;
    onKeyDown(event: any): void;
    configure(): NgSearchboxComponent;
    register(): NgSearchboxComponent;
    eraseQuery(): void;
    handleSearch(): void;
    handleEraser(): void;
    handleGarbage(): void;
    /**
     * @method addParameter
     * @param {string} name
     * @param options
     * @returns {NgSearchboxComponent}
     */
    addParameter(name: string, options: any): NgSearchboxComponent;
    upsertParameter(name: string, data: any): NgSearchboxComponent;
}
