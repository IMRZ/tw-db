import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace AiUsageGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly melee: boolean;
        readonly rangedIndirect: boolean;
        readonly fast: boolean;
        readonly support: boolean;
        readonly rangedDirect: boolean;
        readonly flanker: boolean;
        readonly flying: boolean;
        readonly highValue: boolean;
        readonly gateCrusher: boolean;
        readonly bomber: boolean;
        readonly shock: boolean;
        readonly useSkirmish: boolean;
        readonly harasser: boolean;
        readonly stalker: boolean;
        readonly blocker: boolean;
        readonly cavalryBlocker: boolean;
        readonly targetHighValue: boolean;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default AiUsageGroups;
