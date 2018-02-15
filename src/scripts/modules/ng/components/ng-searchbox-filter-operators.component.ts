'use strict';

import * as _ from 'lodash';

import {
  Component,
  Input,
  Inject,
  ElementRef,
  forwardRef,
  AfterViewInit
} from '@angular/core';

import { ModifiedSearch, Search } from '../../../interfaces/search';

import { NgSearchboxOperators } from '../../../constants/operators.constant';

import { NgSearchboxAddedFilter } from './ng-searchbox-added-filter.component';

import { FilteringService } from '../services/filtering.service';

declare let window: Window;

@Component({

  'selector': 'ng-searchbox-filter-operators',

  'templateUrl': '../../../../views/modules/ng/components/ng-searchbox-filter-operators.component.pug',

  'styleUrls': ['../../../../styles/modules/ng/components/ng-searchbox-filter-operators.component.sass'],

})

export class NgSearchboxFilterOperators implements AfterViewInit {

  @Input('filter') public filter: ModifiedSearch.ModifiedFilter = null;

  public operators: Search.Operator[] = _.clone(NgSearchboxOperators);

  public selectedOperator: Search.Operator = null;

  public Filtering: FilteringService = null;

  public showOperators: boolean = false;

  public hasOperator: boolean = false;

  private proxiedFunction: EventListenerOrEventListenerObject;

  constructor (
    @Inject(forwardRef(() => NgSearchboxAddedFilter)) private ngAddedFilter: NgSearchboxAddedFilter,
    private element: ElementRef
  ) {

    this.Filtering = this.ngAddedFilter.Filtering;

    if (this.Filtering.getFilterCount() > 1) {

      this.hasOperator = true;

    }

    return this;

  }

  public toggleOperators (show?: boolean): void {

    let self: NgSearchboxFilterOperators = this;

    if (typeof show === 'boolean') {

      self.showOperators = show;

    } else {

      self.showOperators = !self.showOperators;

    }

    if (self.showOperators) {

      setTimeout((): void => {

        self.proxiedFunction = (event: MouseEvent): void => {

          this
            .windowClicked
            .apply(self, [event])

        };

        window.addEventListener('click', self.proxiedFunction);

      }, 25);

    } else {

      window.removeEventListener('click', this.proxiedFunction);

    }

  }

  private windowClicked (event: MouseEvent): void {

    let target = <HTMLElement>event.target,

      element: HTMLElement = this
        .element
        .nativeElement;

    if (!element.contains(target)) {

      this
        .toggleOperators(false);

    }

  }

  public takeOperator (operator: Search.Operator): void {

    let self: NgSearchboxFilterOperators = this;

    _.each(self.operators, (op: Search.Operator): void => {

      op.selected = false;

    });

    self
      .filter
      .operator = operator;

    self
      .Filtering
      .addOperatorToFilter(
        operator,
        self.filter,
        true
      );

    self
      .ngAddedFilter
      .Event
      .onOperatorChanged(
        operator,
        self.filter
      );

    operator.selected = true;

    this
      .toggleOperators(false);

  }

  public getDefaultOperator (): NgSearchboxFilterOperators {

    let operatorByFilter = null,

      self: NgSearchboxFilterOperators = this;

    if (operatorByFilter === null) {

      if (!this.filter.operator) {

        _.each(self.operators, (operator: Search.Operator): void => {

          if (operator.selected) {

            self.selectedOperator = operator;

          }

        });

        if (
          !self.filter.operator &&
          self.operators &&
          self.operators.length
        ) {

          let operator: Search.Operator = self.operators[0];

          operator.selected = true;

          self.selectedOperator = operator;

        }

      }

    }

    setTimeout((): void => {

      self.filter.operator = self.selectedOperator;

    });

    return this;

  }

  public addOperatorToFilter (): NgSearchboxFilterOperators {

    let self: NgSearchboxFilterOperators = this;

    if (!self.Filtering.hasOperatorAlready(self.filter)) {

      this
        .Filtering
        .addOperatorToFilter(self.selectedOperator, self.filter);

    }

    return this;

  }

  public ngAfterViewInit (): void {

    if (this.hasOperator) {

      this
        .Filtering
        .setOperator(this.filter, this);

      this
        .getDefaultOperator()
        .addOperatorToFilter();

    }

  }

}
