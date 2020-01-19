import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace Regions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly onscreen: string;
        readonly r: number;
        readonly g: number;
        readonly b: number;
        readonly battleName: string;
        readonly inEncyclopedia: boolean;
        readonly isSea: boolean;
        readonly nameWithIconPath: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default Regions;
