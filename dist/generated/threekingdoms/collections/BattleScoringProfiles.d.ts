import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace BattleScoringProfiles {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly timePeriodMin: number;
        readonly timePeriodMax: number;
        readonly timePeriodScore: number;
        readonly killUnitScore: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default BattleScoringProfiles;
