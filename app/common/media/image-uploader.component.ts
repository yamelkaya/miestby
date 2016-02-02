import {Component} from "angular2/core";
import {ImageService} from "./image.service";

@Component({
    selector: 'image-upload',
    providers: [ImageService]
})
export class ImageUploaderComponent{
    private _imageService: ImageService;
    private _sourceUrl;
    private _sourceBase64;
    private _previewMode;

    get empty(){
        return this._sourceUrl == null;
    }

    get source(){
        return this._sourceUrl;
    }

    set source(value){
        this._sourceUrl = value;
    }

    private get _sourceInternal(){
        return this._changed ?
            this._sourceBase64 :
            this._sourceUrl;
    }

    private get _changed(){
        return this._sourceBase64 != null;
    }

    constructor(imageService: ImageService){
        this._imageService = imageService;
        this._defaults();
    }


    add(){

    }

    clear(){

    }

    edit(){

    }

    save(){
        if (this._changed){
            this._imageService.upload(this._sourceBase64);
        }
    }

    private _defaults(){
        this._sourceUrl = null;
        this._sourceBase64 = null;
    }
}
