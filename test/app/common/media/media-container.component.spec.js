System.register(["../../../../app/common/media/media-item.component", "../../../../app/common/media/media-container.component"], function(exports_1) {
    var media_item_component_1, media_container_component_1;
    return {
        setters:[
            function (media_item_component_1_1) {
                media_item_component_1 = media_item_component_1_1;
            },
            function (media_container_component_1_1) {
                media_container_component_1 = media_container_component_1_1;
            }],
        execute: function() {
            describe('MediaContainerComponent', function () {
                it('should add media item to the parent container', function (done) {
                    var container = new media_container_component_1.MediaContainerComponent();
                    var item = new media_item_component_1.MediaItemBaseComponent(container);
                    expect(container.items.length).toBe(1);
                    done();
                });
                it('should change selected item when child media zoomed in', function (done) {
                    var container = new media_container_component_1.MediaContainerComponent();
                    var item = new media_item_component_1.MediaItemBaseComponent(container);
                    expect(container.selectedItem).toBe(undefined);
                    item.select.subscribe(function (selected) {
                        expect(container.selectedItem).toBe(item);
                        done();
                    });
                    item.zoomIn();
                });
                describe('with multiple items', function () {
                    var container = new media_container_component_1.MediaContainerComponent();
                    var item1 = new media_item_component_1.MediaItemBaseComponent(container);
                    var item2 = new media_item_component_1.MediaItemBaseComponent(container);
                    var item3 = new media_item_component_1.MediaItemBaseComponent(container);
                    beforeEach(function (done) {
                        item2.select.subscribe(function (selected) {
                            expect(container.selectedItem).toBe(item2);
                            done();
                        });
                        item2.zoomIn();
                    });
                    it('should change selected item when go next', function (done) {
                        item3.select.subscribe(function (selected) {
                            expect(container.selectedItem).toBe(item3);
                            done();
                        });
                        container.selectNext();
                    });
                    it('should change selected item when go prev', function (done) {
                        item1.select.subscribe(function (selected) {
                            expect(container.selectedItem).toBe(item1);
                            done();
                        });
                        container.selectPrev();
                    });
                });
            });
        }
    }
});
//# sourceMappingURL=media-container.component.spec.js.map