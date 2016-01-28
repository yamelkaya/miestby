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
                    expect(container.selectedItem).toBe(null);
                    item.zoom.subscribe(function (selected) {
                        expect(container.selectedItem).toBe(item);
                        done();
                        return;
                    });
                    item.zoomIn();
                });
                describe('with multiple items', function () {
                    var container = new media_container_component_1.MediaContainerComponent();
                    var item1 = new media_item_component_1.MediaItemBaseComponent(container);
                    var item2 = new media_item_component_1.MediaItemBaseComponent(container);
                    var item3 = new media_item_component_1.MediaItemBaseComponent(container);
                    item1.source = '1';
                    item2.source = '2';
                    item3.source = '3';
                    beforeEach(function (done) {
                        var subscription = item2.zoom.subscribe(function (selected) {
                            expect(container.selectedItem).toBe(item2);
                            subscription.unsubscribe();
                            done();
                        });
                        item2.zoomIn();
                    });
                    it('should change selected item when go next', function (done) {
                        var subscription = item3.zoom.subscribe(function (selected) {
                            expect(container.selectedItem).toBe(item3);
                            subscription.unsubscribe();
                            done();
                        });
                        container.selectNext();
                    });
                    it('should change selected item when go prev', function (done) {
                        var subscription = item1.zoom.subscribe(function (selected) {
                            if (selected == item1) {
                                expect(container.selectedItem).toBe(item1);
                                subscription.unsubscribe();
                                done();
                            }
                        });
                        container.selectPrev();
                    });
                });
            });
        }
    }
});
//# sourceMappingURL=media-container.component.spec.js.map