import { CollectionCache, CollectionKey } from "../../../common";
import { DiplomacyStrings } from "./DiplomacyStrings";
export declare namespace CaiPersonalityReligiousComponents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: string;
        readonly baseBonusMultiplier: number;
        readonly basePenaltyMultiplier: number;
        readonly eventBonusMultiplier: number;
        readonly eventPenaltyMultiplier: number;
        readonly _shortDescription: string;
        readonly _longDescription: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly shortDescription: DiplomacyStrings.Entry | undefined;
        readonly longDescription: DiplomacyStrings.Entry | undefined;
    }
}
export default CaiPersonalityReligiousComponents;