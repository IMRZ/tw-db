import { CollectionCache, CollectionKey } from "../../../common";
import { EffectBundles } from "./EffectBundles";
import { SubcultureSettlementOccupationSuitabilityTypes } from "./SubcultureSettlementOccupationSuitabilityTypes";
export declare namespace SubcultureSettlementOccupationEffectBundleSuitabilities {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effectBundle: string;
        readonly _suitability: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly effectBundle: EffectBundles.Entry | undefined;
        readonly suitability: SubcultureSettlementOccupationSuitabilityTypes.Entry | undefined;
    }
}
export default SubcultureSettlementOccupationEffectBundleSuitabilities;
