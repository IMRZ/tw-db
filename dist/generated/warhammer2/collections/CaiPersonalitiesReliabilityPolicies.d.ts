import { CollectionCache, CollectionKey } from "../../../common";
import { DiplomacyStrings } from "./DiplomacyStrings";
export declare namespace CaiPersonalitiesReliabilityPolicies {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly joinAllyBias: number;
        readonly _shortDescription: string;
        readonly _longDescription: string;
        readonly noWarDeclarationGiftThresholdMin: number;
        readonly noWarDeclarationGiftThresholdMax: number;
        readonly noWarDeclarationGiftBonus: number;
        readonly noRaidingGiftThreshold: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly shortDescription: DiplomacyStrings.Entry | undefined;
        readonly longDescription: DiplomacyStrings.Entry | undefined;
    }
}
export default CaiPersonalitiesReliabilityPolicies;
