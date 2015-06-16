var path = require('path');
var request = require('request')

module.exports = new ImageService();

function ImageService(){
    var _host = 'https://api.imgur.com';
    var _albumPath = '/3/album';
    var _imagePath = '/3/image';
    var _usersAlbumId = 'e614D';
    var _newsAlbumId = '6ffHE';
    var _clientId = 'e93f60e23a23c87';
    var _clientSecret = '99c27868c333fceb1ebe6adbde0e86737ff61d36';

    var getRequestHeader = function(){
        return {
            'Authorization' : 'Client-ID ' + _clientId,
            'Accept' : 'application/json'
        }
    }

    var getImageById = function(id, callback){
        return request.get({
            url: _host+path.join(_imagePath, id),
            method: 'GET',
            headers: getRequestHeader()
        }, function(res){
            if (callback) {
                callback(res.data);
            }
        })
    }

    this.uploadNewsImage = function(){
        //"deletehash": "TopvaSlsxbMNV7V"
    }

    this.uploadUserImage = function(imageBase64, callback){
        return request.post(
            {
                url: _host +_imagePath,
                method: 'POST',
                headers: getRequestHeader(),
                json: true,
                body: {
                    image: imageBase64,
                    type: 'base64',
                    album: 'TopvaSlsxbMNV7V'
                }
            },

            function(err,res,body){
                if (err) {
                    throw new Error(err);
                }

                if (body.data){
                    if (callback) {
                        callback(body.data.link);
                    }
                }
            });
    }
}


