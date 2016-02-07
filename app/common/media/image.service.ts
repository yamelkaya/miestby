import {Injectable} from 'angular2/core';
import {Http,Request,Headers} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ImageService{
    private _http: Http;

    private _host = 'https://api.imgur.com';
    private _usersAlbumId = 'e614D';
    private _newsAlbumId = '6ffHE';
    private _clientId = 'e93f60e23a23c87';
    private _clientSecret = '99c27868c333fceb1ebe6adbde0e86737ff61d36';
    private _albumId = 'IQTAn';

    private get _albumApiPath () {
        return this._host + '/3/album';
    };
    private get _imageApiPath() {
        return this._host + '/3/image';
    }

    constructor(http: Http){
        this._http = http;
    }

    upload(imgBase64): any{
        return this._http
            .post(this._imageApiPath, this._prepareImageBody(imgBase64),this._prepareImageOptions())
            .map(res => {
                let data = res.json().data;
                return {
                    id: data.id,
                    link: data.link,
                    deletehash: data.deletehash
                }
            });
    }

    delete(id){
        return this._http
            .delete(this._imageApiPath + `/${id}`, this._prepareImageOptions())
            .flatMap(res => {
                if (res.statusText == 'Ok'){
                    let data = res.json();
                    return Observable.of(data);
                }
                else {
                    return Observable.of(null);
                }
            });
    }

    private _prepareImageBody(imgBase64){
        imgBase64 = imgBase64.replace(/^data:image\/\w+;base64,/, "");
        let body = `image=${imgBase64}}`;
        return body;
    }

    private _prepareImageOptions() {
        return {
            headers: new Headers(
                {
                    'Authorization': 'Client-ID ' + this._clientId,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            )
        };
    }
}