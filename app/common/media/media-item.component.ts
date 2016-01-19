import {Component, Input, Output, EventEmitter} from 'angular2/core'
import {MediaContainerComponent} from "./media-container.component";
import {Media} from "./media.model";

export class MediaItemBaseComponent{
    @Input()
    source: string;
    select: EventEmitter<any>;
    get media(){
        return this._media;
    }

    protected _media: Media;
    protected _preview: boolean;

    constructor(mediaContainer: MediaContainerComponent){
        this._defaults();
        if (mediaContainer){
            mediaContainer.addItem(this);
        }
    }

    ngOnChanges(){
        this._media = new Media(this.source);
    }

    zoomIn(){
        this._preview = false;
        this.select.emit(this);
    }

    zoomOut(){
        this._preview = true;
    }

    private _defaults() {
        this._preview = true;
        this.source = null;
        this.select = new EventEmitter()
    }
}

@Component({
    selector: 'media-item',
    template: 'app/common/media/media-item.component.html'
})
export class MediaItemComponent extends MediaItemBaseComponent{

}

@Component({
    selector: 'image-item',
    template: 'app/common/media/image-item.component.html'
})
export class ImageItemComponent extends MediaItemBaseComponent{

}

@Component({
    selector: 'video-item',
    template: 'app/common/media/video-item.component.html'
})
export class VideoItemComponent extends MediaItemBaseComponent{

}
