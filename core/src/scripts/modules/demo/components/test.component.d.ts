import { ChangeDetectorRef, OnInit } from '@angular/core';
import { NgSearchboxComponent } from '../../ng/components/ng-searchbox.component';
export declare class TestComponent implements OnInit {
    ngSearchBoxComponent: NgSearchboxComponent;
    private changeDetectorRef;
    static DEFAULT_OPTION: string;
    static PARAMETER: string;
    searchOption: string;
    constructor(ngSearchBoxComponent: NgSearchboxComponent, changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    private reset();
    change(text: string): void;
}
