import { CollectionCache, CollectionKey } from "../../../common";
import { ProvincialInitiativeRecords } from "./ProvincialInitiativeRecords";
import { EffectBundles } from "./EffectBundles";
export declare namespace ProvincialInitiativeStrengthLevels {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _initiativeRecord: string;
        readonly strength: number;
        readonly _effectBundle: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly initiativeRecord: ProvincialInitiativeRecords.Entry | undefined;
        readonly effectBundle: EffectBundles.Entry | undefined;
    }
}
export default ProvincialInitiativeStrengthLevels;
