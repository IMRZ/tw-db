import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace Cursors {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly image: string;
        readonly frames: number;
        readonly framerate: number;
        readonly hotspotX: number;
        readonly hotspotY: number;
        readonly loop: boolean;
        readonly width: number;
        readonly height: number;
        readonly overlayImage: string;
        readonly isAniFile: boolean;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default Cursors;
