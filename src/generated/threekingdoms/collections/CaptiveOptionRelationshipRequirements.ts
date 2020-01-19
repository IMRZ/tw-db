
import { CollectionCache, CollectionKey } from "../../../common";
import { CaptiveOptionRequirements } from "./CaptiveOptionRequirements";
import { CharacterRelationshipScopes } from "./CharacterRelationshipScopes";
import { CharacterRelationships } from "./CharacterRelationships";

export namespace CaptiveOptionRelationshipRequirements {
  export const KEY = new CollectionKey("captive_option_relationship_requirements");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _captiveOptionRequirements: string;
    readonly _relationshipScope: string;
    readonly _relationship: string;
    readonly invalidIfPresent: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._captiveOptionRequirements = values["captive_option_requirements"];
      this._relationshipScope = values["relationship_scope"];
      this._relationship = values["relationship"];
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
    
    get relationship(): CharacterRelationships.Entry | undefined {
      const collection = <CharacterRelationships.Entry[]>this.collectionCache.getCollection(CharacterRelationships.KEY, CharacterRelationships.Entry);
      return collection.find(entry => entry.key === this._relationship);
    }
  }
}

export default CaptiveOptionRelationshipRequirements;
