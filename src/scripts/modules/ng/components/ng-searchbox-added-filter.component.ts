'use strict';

import {
  Component,
  ViewChild,
  ElementRef
} from '@angular/core';

import { FilteringService } from '../services/filtering.service';
import { UtilsService } from '../services/utils.service';
import { EventHandling } from '../services/event-handling.service';

import { NgSearchboxComponent } from './ng-searchbox.component';
import { NgSearchboxFilterSelectors } from './ng-searchbox-filter-selectors.component';

import { ModifiedSearch } from '../../../interfaces/search';

declare let window: Window;

@Component({

  'selector': 'ng-searchbox-added-filter',

  'templateUrl': '../../../../views/modules/ng/components/ng-searchbox-added-filter.component.pug',

  'styleUrls': ['../../../../styles/modules/ng/components/ng-searchbox-added-filter.component.sass']

})

export class NgSearchboxAddedFilter {

  @ViewChild('ngSearchboxAddedFilter') public ngSearchboxAddedFilter: ElementRef;

  @ViewChild('ngFilterSelectors') public ngFilterSelectors: NgSearchboxFilterSelectors;

  public Filtering: FilteringService = null;

  public Event: EventHandling = null;

  public filter: ModifiedSearch.ModifiedFilter = null;

  public searchbox: NgSearchboxComponent = null;

  public uuid: string = null;

  public v: string = '';

  public pv: string = '';

  private proxiedFunction: EventListenerOrEventListenerObject;

  constructor (
    private utils: UtilsService
  ) {

    this.uuid = this.utils.uuid();

    return this;

  }

  public set (
    filteringSvc: FilteringService,
    searchbox: NgSearchboxComponent,
    filter: ModifiedSearch.ModifiedFilter
  ): NgSearchboxAddedFilter {

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

    } else {

      this.toggleActivation();

    }

    return this;

  }

  public toggleActivation (force?: boolean): void {

    let self: NgSearchboxAddedFilter = <NgSearchboxAddedFilter>this;

    if (typeof this.filter.active === 'undefined') {

        this.filter.active = true;

        this.filter.editing = true;

    } else {

      if (typeof force !== 'undefined') {

        this.filter.active = force;

      } else {

        this.filter.active = !this.filter.active;

      }

    }

    if (this.filter.active) {

      setTimeout((): void => {

        self.proxiedFunction = (event: MouseEvent): void => {

          this
            .windowClicked
            .apply(self, [event])

        };

        window.addEventListener('click', self.proxiedFunction);

      }, 25);

      self.setFocus();

    } else {

      window.removeEventListener('click', this.proxiedFunction);

      self.closeFilter();

    }

  }

  public openFilter (): NgSearchboxAddedFilter {

    if (!this.filter.editing) {

      this
        .filter
        .editing = true;

      setTimeout((): void => {

        window.addEventListener('click', this.proxiedFunction);

      }, 25);

      this.setFocus();

    }

    return this;

  }

  public setFocus (): NgSearchboxAddedFilter {

    let self: NgSearchboxAddedFilter = this;

    setTimeout((): void => {

      let input = self
        .ngSearchboxAddedFilter
        .nativeElement
        .querySelector('input');

      if (input) {

        input.focus();

      }

    }, 25);

    return this;

  }

  public closeFilter (): NgSearchboxAddedFilter {

    if (
      !this.filter.value &&
      !this.filter.isAllowedEmptyValue
    ) {

      this
        .Filtering
        .removeByComponent(this, {

          'update': false

        });

    } else {

      this.filter.editing = false;

      this
        .ngFilterSelectors
        .setVisibility(false);

    }

    return this;

  }

  public toggleFilterSelectors (): void {

    this
      .ngFilterSelectors
      .setVisibility();

  }

  public valueChange (val: string): void {

    this.filter.value = val;

    if (val !== this.pv) {

      this
        .Event
        .onFilterChanged(
          this.filter
        );

      this
        .Filtering
        .update(
          this.filter
        );

    }

  }

  public onKeyDown (event: any): void {

    this.pv = event.target.value;

    this.filter.$$lastValue = this.pv;

  }

  public onKeyUp (event: KeyboardEvent): void {

    if(event.keyCode === 13) {

      this.closeFilter();

    }

  }

  public windowClicked (event: MouseEvent): void {

    let target = <HTMLElement>event.target,

      element: HTMLElement = this.ngSearchboxAddedFilter.nativeElement;

    if (!element.contains(target)) {

      window.removeEventListener('click', this.proxiedFunction);

      this.toggleActivation(false);

      this.closeFilter();

    }

  }

  /**
   * @method destroy
   * Unload this filter from our searchbox memory
   */

  public destroy (): void {

    this
      .Filtering
      .removeByComponent(this);

  }

}
