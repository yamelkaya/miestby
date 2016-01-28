import {Component} from 'angular2/core';
import {MediaItemBaseComponent} from "./media-item.component";
import {QueryList, Query, ContentChildren} from "angular2/core";

@Component({
    selector: 'media-container',
    templateUrl: 'app/common/media/media-container.component.html'
})
export class MediaContainerComponent {
    items: Array<MediaItemBaseComponent>;
    selectedItem: MediaItemBaseComponent;

    private _selectedIndex: number;

    constructor() {
        this._selectedIndex = -1;
        this.selectedItem = null;
        this.items = [];
    }

    addItem(item){
        let self = this;

        item.zoom.subscribe(() => {
            let zoomed = self.items.find(i => !i.preview);

            if (zoomed) {
                this.selectedItem = zoomed;
                this._selectedIndex = self.items.indexOf(zoomed);
            }
            else {
                this.selectedItem = null;
                this._selectedIndex = -1;
            }
        });
        this.items.push(item);
    }

    selectNext(){
        if (this._canSelectNext()){
            this.selectedItem.zoomOut();
            this.items[this._selectedIndex + 1].zoomIn();
        }
    }

    selectPrev(){
        if (this._canSelectPrev()){
            this.selectedItem.zoomOut();
            this.items[this._selectedIndex - 1].zoomIn();
        }
    }

    private _canSelectNext(){
        return this._selectedIndex < this.items.length - 1;
    }

    private _canSelectPrev(){
        return this._selectedIndex > 0;
    }

    private _itemSelected(){
        return this.selectedItem != null && this.items != undefined;
    }
}
