
import { CollectionCache, CollectionKey } from "../../../common";
import { CaptiveOptionRequirements } from "./CaptiveOptionRequirements";
import { CharacterRelationshipScopes } from "./CharacterRelationshipScopes";
import { FamilyRelationshipTypes } from "./FamilyRelationshipTypes";

export namespace CaptiveOptionFamilyRelationshipRequirements {
  export const KEY = new CollectionKey("captive_option_family_relationship_requirements");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _captiveOptionRequirements: string;
    readonly _relationshipScope: string;
    readonly scopeInCaptorFaction: boolean;
    readonly _familyRelationship: string;
    readonly invalidIfPresent: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._captiveOptionRequirements = values["captive_option_requirements"];
      this._relationshipScope = values["relationship_scope"];
      this.scopeInCaptorFaction = !!values["scope_in_captor_faction"];
      this._familyRelationship = values["family_relationship"];
      this.invalidIfPresent = !!values["invalid_if_present"];
    }
    
    get captiveOptionRequirements(): CaptiveOptionRequirements.Entry | undefined {
      const collection = <CaptiveOptionRequirements.Entry[]>this.collectionCache.getCollection(CaptiveOptionRequirements.KEY, CaptiveOptionRequirements.Entry);
      return collection.find(entry => entry.key === this._captiveOptionRequirements);
    }
    
    get relationshipScope(): CharacterRelationshipScopes.Entry | undefined {
      const collection = <CharacterRelationshipScopes.Entry[]>this.collectionCache.getCollection(CharacterRelationshipScopes.KEY, CharacterRelationshipScopes.Entry);
      return collection.find(entry => entry.key === this._relationshipScope);
    }
    
    get familyRelationship(): FamilyRelationshipTypes.Entry | undefined {
      const collection = <FamilyRelationshipTypes.Entry[]>this.collectionCache.getCollection(FamilyRelationshipTypes.KEY, FamilyRelationshipTypes.Entry);
      return collection.find(entry => entry.relationshipType === this._familyRelationship);
    }
  }
}

export default CaptiveOptionFamilyRelationshipRequirements;
