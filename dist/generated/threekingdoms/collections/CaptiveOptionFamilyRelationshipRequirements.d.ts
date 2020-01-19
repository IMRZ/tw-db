import { CollectionCache, CollectionKey } from "../../../common";
import { CaptiveOptionRequirements } from "./CaptiveOptionRequirements";
import { CharacterRelationshipScopes } from "./CharacterRelationshipScopes";
import { FamilyRelationshipTypes } from "./FamilyRelationshipTypes";
export declare namespace CaptiveOptionFamilyRelationshipRequirements {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _captiveOptionRequirements: string;
        readonly _relationshipScope: string;
        readonly scopeInCaptorFaction: boolean;
        readonly _familyRelationship: string;
        readonly invalidIfPresent: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get captiveOptionRequirements(): CaptiveOptionRequirements.Entry | undefined;
        get relationshipScope(): CharacterRelationshipScopes.Entry | undefined;
        get familyRelationship(): FamilyRelationshipTypes.Entry | undefined;
    }
}
export default CaptiveOptionFamilyRelationshipRequirements;
