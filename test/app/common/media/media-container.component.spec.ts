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
        expect(container.selectedItem).toBe(null);

        item.zoom.subscribe(selected => {
            expect(container.selectedItem).toBe(item);
            done();

            return
        });

        item.zoomIn();
    });

    describe('with multiple items', () => {
        let container = new MediaContainerComponent();
        let item1 = new MediaItemBaseComponent(container);
        let item2 = new MediaItemBaseComponent(container);
        let item3 = new MediaItemBaseComponent(container);

        item1.source = '1';
        item2.source = '2';
        item3.source = '3';

        beforeEach((done) => {
            let subscription = item2.zoom.subscribe(selected => {
                expect(container.selectedItem).toBe(item2);

                subscription.unsubscribe();
                done();
            });

            item2.zoomIn();
        });

        it('should change selected item when go next', done => {
            let subscription = item3.zoom.subscribe(selected => {
                expect(container.selectedItem).toBe(item3);

                subscription.unsubscribe();
                done();
            });

            container.selectNext();
        });

        it('should change selected item when go prev', done => {
            let subscription = item1.zoom.subscribe(selected => {
                if (selected == item1)
                {
                    expect(container.selectedItem).toBe(item1);

                    subscription.unsubscribe();
                    done();
                }
            });

            container.selectPrev();
        });
    });
});
