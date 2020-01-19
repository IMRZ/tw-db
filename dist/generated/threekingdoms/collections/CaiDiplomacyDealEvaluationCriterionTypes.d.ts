import { CollectionCache, CollectionKey } from "../../../common";
import { DiplomacyStrings } from "./DiplomacyStrings";
export declare namespace CaiDiplomacyDealEvaluationCriterionTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _displayName: string;
        constructor(collectionCache: CollectionCache, values: any);
        get displayName(): DiplomacyStrings.Entry | undefined;
    }
}
export default CaiDiplomacyDealEvaluationCriterionTypes;
