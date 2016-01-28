import {Injectable} from 'angular2/core';
import {Http,Request} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ImageService{
    private _http: Http;

    private _host = 'https://api.imgur.com';
    private _usersAlbumId = 'e614D';
    private _newsAlbumId = '6ffHE';
    private _clientId = 'e93f60e23a23c87';
    private _clientSecret = '99c27868c333fceb1ebe6adbde0e86737ff61d36';
    private _albumId = 'TopvaSlsxbMNV7V';

    private get _albumApiPath () {
        return this._host + '/3/album';
    };
    private get _imageApiPath() {
        return this._host + '/3/image';
    }

    constructor(http: Http){
        this._http = http;
    }

    upload(imgBase64): Observable{
        this._http.post(this._imageApiPath, this._prepareImageBody(imgBase64),this._prepareImageOptions())
            .subscribe(res => {
                if (res.statusText == 'Ok'){
                    let data = res.json();
                    return Observable.of(data.link);
                }
                else {
                    return Observable.of(null);
                }
            });
    }

    private _prepareImageBody(imgBase64){
        return {
            image: imgBase64,
            type: 'base64',
            album: this._albumId
        }
    }

    private _prepareImageOptions() {
        return {
            headers: {
                'Authorization': 'Client-ID ' + this._clientId,
                'Accept': 'application/json'
            }
        };
    }
}