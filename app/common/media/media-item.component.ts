import {Component, Input, Output, EventEmitter} from 'angular2/core'
import {MediaContainerComponent} from "./media-container.component";
import {Media} from "./media.model";
import {EventEmitter} from "../../../node_modules/angular2/ts/src/facade/async";

@Component({
    selector: 'media-item'
})
export class MediaItemComponent extends MediaItemBaseComponent{

}

@Component({
    selector: 'image-item'
})
export class ImageItemComponent extends MediaItemBaseComponent{

}

@Component({
    selector: 'video-item'
})
export class VideoItemComponent extends MediaItemBaseComponent{

}

export class MediaItemBaseComponent{
    @Input()
    source: string;

    select: EventEmitter<any>;

    protected _media: Media;
    protected _preview: boolean;

    constructor(mediaContainer: MediaContainerComponent){
        if (mediaContainer){
            mediaContainer.addItem(this);
        }
    }

    ngOnChanges(){
        this._media = new Media(this.source);
    }

    zoomIn(){
        this._preview = false;
        this.select.emit(this)
    }

    zoomOut(){
        this._preview = true;
    }
}
