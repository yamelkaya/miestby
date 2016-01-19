System.register(["../../../../app/common/media/media-item.component", '../../../../app/common/media/media.model'], function(exports_1) {
    var media_item_component_1, media_model_1;
    return {
        setters:[
            function (media_item_component_1_1) {
                media_item_component_1 = media_item_component_1_1;
            },
            function (media_model_1_1) {
                media_model_1 = media_model_1_1;
            }],
        execute: function() {
            describe('MediaItemBaseComponent', function () {
                it('should initialize media based on source on ngOnChanges', function (done) {
                    var item = new media_item_component_1.MediaItemBaseComponent(null);
                    item.source = 'http://i.imgur.com/test.png';
                    item.ngOnChanges();
                    expect(item.media.type).toBe(media_model_1.MediaType.Image);
                    done();
                });
                it('should emit event when media is zoomed in', function (done) {
                    var item = new media_item_component_1.MediaItemBaseComponent(null);
                    item.select.subscribe(function (res) {
                        expect(res).toBe(item);
                        done();
                    });
                    item.zoomIn();
                });
            });
        }
    }
});
//# sourceMappingURL=media-item.component.spec.js.map