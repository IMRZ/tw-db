import { CollectionCache, CollectionKey } from "../../../common";
import { CaptiveOptionRequirements } from "./CaptiveOptionRequirements";
import { CharacterRelationshipScopes } from "./CharacterRelationshipScopes";
import { CharacterRelationships } from "./CharacterRelationships";
export declare namespace CaptiveOptionRelationshipRequirements {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _captiveOptionRequirements: string;
        readonly _relationshipScope: string;
        readonly _relationship: string;
        readonly invalidIfPresent: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get captiveOptionRequirements(): CaptiveOptionRequirements.Entry | undefined;
        get relationshipScope(): CharacterRelationshipScopes.Entry | undefined;
        get relationship(): CharacterRelationships.Entry | undefined;
    }
}
export default CaptiveOptionRelationshipRequirements;
