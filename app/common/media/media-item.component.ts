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
    get preview(){
        return this._preview;
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
    selector: 'image-item',
    templateUrl: 'app/common/media/image-item.component.html'
})
export class ImageItemComponent extends MediaItemBaseComponent{

}

@Component({
    selector: 'video-item',
    templateUrl: 'app/common/media/video-item.component.html'
})
export class VideoItemComponent extends MediaItemBaseComponent{

}

@Component({
    selector: 'media-item',
    templateUrl: 'app/common/media/media-item.component.html',
    directives: [VideoItemComponent, ImageItemComponent]
})
export class MediaItemComponent extends MediaItemBaseComponent{

}
