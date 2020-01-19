import { CollectionCache, CollectionKey } from "../../../common";
import { FamilyRelationshipTypes } from "./FamilyRelationshipTypes";
export declare namespace FamilyRelationshipsToDuelOutcomeModifiers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _familyRelationshipType: string;
        readonly spareKillModifier: number;
        constructor(collectionCache: CollectionCache, values: any);
        get familyRelationshipType(): FamilyRelationshipTypes.Entry | undefined;
    }
}
export default FamilyRelationshipsToDuelOutcomeModifiers;
