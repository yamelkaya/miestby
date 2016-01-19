import {Component} from 'angular2/core';
import {MediaItemBaseComponent} from "./media-item.component";

@Component({
    selector: 'media-container'
})
export class MediaContainerComponent{
    items: MediaItemBaseComponent[];
    selectedItem: MediaItemBaseComponent;

    private _selectedIndex: number;

    constructor(){
        this.items = [];
    }

    addItem(mediaItem: MediaItemBaseComponent){
        mediaItem.select.subscribe(selectedItem => {
            this.selectedItem = selectedItem;
            this._selectedIndex = this.items.indexOf(this.selectedItem);
        });

        this.items.push(mediaItem);
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
}
