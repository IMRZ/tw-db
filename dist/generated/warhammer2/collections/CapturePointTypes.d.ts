import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CapturePointTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly onscreenName: string;
        readonly iconName: string;
        readonly visibilitySpottingRange: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CapturePointTypes;
