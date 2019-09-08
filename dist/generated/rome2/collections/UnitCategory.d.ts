import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace UnitCategory {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly localisedName: string;
        readonly rColour: number;
        readonly gColour: number;
        readonly bColour: number;
        readonly minBattleRows: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default UnitCategory;
