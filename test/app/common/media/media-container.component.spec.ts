import {MediaItemBaseComponent} from "../../../../app/common/media/media-item.component";
import {MediaType} from '../../../../app/common/media/media.model';
import {MediaContainerComponent} from "../../../../app/common/media/media-container.component";

describe('MediaContainerComponent', () => {
    it('should add media item to the parent container', done => {
        let container = new MediaContainerComponent();
        let item = new MediaItemBaseComponent(container);

        expect(container.items.length).toBe(1);
        done();
    });

    it('should change selected item when child media zoomed in', done => {
        let container = new MediaContainerComponent();
        let item = new MediaItemBaseComponent(container);
        expect(container.selectedItem).toBe(undefined);

        item.zoom.subscribe(selected => {
            expect(container.selectedItem).toBe(item);
            done();
        });

        item.zoomIn();
    });

    describe('with multiple items', () => {
        let container = new MediaContainerComponent();
        let item1 = new MediaItemBaseComponent(container);
        let item2 = new MediaItemBaseComponent(container);
        let item3 = new MediaItemBaseComponent(container);

        beforeEach((done) => {
            item2.zoom.subscribe(selected => {
                expect(container.selectedItem).toBe(item2);
                done();
            });

            item2.zoomIn();
        });

        it('should change selected item when go next', done => {
            item3.zoom.subscribe(selected => {
                expect(container.selectedItem).toBe(item3);
                done();
            });

            container.selectNext();
        });

        it('should change selected item when go prev', done => {
            item1.zoom.subscribe(selected => {
                expect(container.selectedItem).toBe(item1);
                done();
            });

            container.selectPrev();
        });
    });
});
