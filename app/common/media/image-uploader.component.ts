import {Component} from "angular2/core";
import { Observable } from 'rxjs/Rx';
import {ImageService} from "./image.service";

@Component({
    selector: 'image-upload',
    templateUrl: 'app/common/media/image-uploader.component.html',
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
        this._setUploadMode()
    }

    clear(){
    }

    edit(){
        this._setUploadMode();
    }

    save(): any{
        if (this._changed){
            return this._imageService.upload(this._sourceBase64)
                .subscribe(res => {
                    this.source = res.link;
                    this._clearBase64();
                    this._setPreviewMode();
                });
        }
    }

    private _defaults(){
        this._sourceUrl = null;
        this._sourceBase64 = null;
        this._setPreviewMode();
    }

    private _clearBase64(){
        this._sourceBase64 = null;
    }

    private _fileSelected(e){
        let reader  = new FileReader();
        let self = this;

        reader.onloadend = function () {
            self._sourceBase64 = reader.result;
        }

        if (e.target.files.length > 0) {
            reader.readAsDataURL(e.target.files[0]);
        }
    }

    private _setPreviewMode(){
        this._previewMode = true;
    }

    private _setUploadMode(){
        this._previewMode = false;
    }
}
