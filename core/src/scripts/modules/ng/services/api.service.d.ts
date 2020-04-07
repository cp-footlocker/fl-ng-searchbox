import { Search } from '../../../interfaces/search';
import { NgSearchboxComponent } from '../components/ng-searchbox.component';
export declare class API {
    private ngSearchBoxComponent;
    $$registeredEvents: Search.RegisteredEvent[];
    constructor(ngSearchBoxComponent: NgSearchboxComponent);
    /**
     * @method on
     * Add event listener to our search box
     * @param {string} type
     * @param {Function} fn
     * @returns {API}
     */
    on(type: string, fn: Function): API;
    /**
     * @method off
     * Remove event listener from our search box
     * @param {string} type
     * @param {Function} fn
     * @returns {API}
     */
    off(type: string, fn: Function): API;
    /**
     * @method offAll
     * Remove all event listeners attached to our search box
     * @returns {API}
     */
    offAll(): API;
    addFilterToMenu(filter: Search.SelectedFilter | Search.AvailableFilter[]): API;
    removeFilterFromMenu(filter: string | string[] | Search.AvailableFilter | Search.AvailableFilter[]): API;
    /**
     * @method addFilter
     * Add filters automatically to selected filters
     * @returns {API}
     */
    addFilter(filter: string | string[] | Search.SelectedFilter | Search.SelectedFilter[]): API;
    /**
     * @method setQuery
     * Automatically set query via API
     * @param {string} query
     * @param {boolean} fire
     */
    setQuery(query: string, fire?: boolean): void;
    getFilters(): Search.AvailableFilter[];
    /**
     * @method removeAllFilters
     * Remove all filters from searchbox
     * @param {boolean} update
     */
    removeAllFilters(update?: boolean): void;
    private hasEventErrors(evt, fn, emptyFnAllowed?);
    private hasInvalidEventType(evt);
}
