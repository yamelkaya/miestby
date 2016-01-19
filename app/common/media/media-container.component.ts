import {Component} from 'angular2/core';
import {MediaItemBaseComponent} from "./media-item.component";

@Component({
    selector: 'media-container'
})
export class MediaContainerComponent{
    private _items: MediaItemBaseComponent[];
    private _selectedItem: MediaItemBaseComponent;
    private _selectedIndex: number;

    constructor(){
        this._items = [];
    }

    addItem(mediaItem: MediaItemBaseComponent){
        mediaItem.select.subscribe(this._onItemSelect);

        this._items.push(mediaItem);
    }

    selectNext(){
        if (this._canSelectNext()){
            this._selectedItem.zoomOut();
            this._items[this._selectedIndex + 1].zoomIn();
        }
    }

    selectPrev(){
        if (this._canSelectPrev()){
            this._selectedItem.zoomOut();
            this._items[this._selectedIndex - 1].zoomIn();
        }
    }

    private _canSelectNext(){
        return this._selectedIndex < this._items.length - 1;
    }

    private _canSelectPrev(){
        return this._selectedIndex > 0;
    }

    private _onItemSelect(mediaItem){
        this._selectedItem = mediaItem;
        this._selectedIndex = this._items.indexOf(this._selectedItem);
    }
}
