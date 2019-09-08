import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace TeamColours {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly alliance: number;
        readonly r: number;
        readonly g: number;
        readonly b: number;
        readonly armyIndex: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default TeamColours;
