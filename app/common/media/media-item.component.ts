import {Component, Input, Output, EventEmitter, Optional, Host} from 'angular2/core'
import {MediaContainerComponent} from "./media-container.component";
import {Media} from "./media.model";

export class MediaItemBaseComponent{
    @Input()
    source: string;
    @Output()
    zoom: EventEmitter<any>;
    @Input()
    hi;

    get media(){
        return this._media;
    }
    get preview(){
        return this._preview;
    }

    protected _media: Media;
    protected _preview: boolean;

    constructor(@Optional()@Host()container: MediaContainerComponent){
        this._defaults();

        if (container)
        {
            container.addItem(this);
        }
    }

    ngOnChanges(){
        this._media = new Media(this.source);
    }

    zoomIn(){
        this._preview = false;
        this.zoom.emit(this);
    }

    zoomOut(){
        this._preview = true;
        this.zoom.emit(this);
    }

    private _defaults() {
        this._preview = true;
        this.source = null;
        this.zoom = new EventEmitter()
    }
}

@Component({
    selector: 'image-item',
    templateUrl: 'app/common/media/image-item.component.html'
})
export class ImageItemComponent extends MediaItemBaseComponent{
    constructor(@Optional()container: MediaContainerComponent){
        super(container);
    }
}

@Component({
    selector: 'video-item',
    templateUrl: 'app/common/media/video-item.component.html'
})
export class VideoItemComponent extends MediaItemBaseComponent{
    constructor(@Optional()container: MediaContainerComponent){
        super(container);
    }
}

@Component({
    selector: 'media-item',
    templateUrl: 'app/common/media/media-item.component.html',
    directives: [VideoItemComponent, ImageItemComponent]
})
export class MediaItemComponent extends MediaItemBaseComponent{
    constructor(@Optional()container: MediaContainerComponent){
        super(container);
    }
}
