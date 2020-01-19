import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace DiplomaticRelationsRespectThresholds {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly minValue: number;
        readonly localisedTitle: string;
        readonly maxValue: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default DiplomaticRelationsRespectThresholds;
