import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace BattleDuelOutcomes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly outcomeType: string;
        readonly effectsAppliedForHistorical: boolean;
        readonly adcDisplayedForHistorical: boolean;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default BattleDuelOutcomes;
