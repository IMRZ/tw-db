
import { CollectionCache, CollectionKey } from "../../../common";
import { FamilyRelationshipTypes } from "./FamilyRelationshipTypes";

export namespace FamilyRelationshipsToDuelOutcomeModifiers {
  export const KEY = new CollectionKey("family_relationships_to_duel_outcome_modifiers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _familyRelationshipType: string;
    readonly spareKillModifier: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._familyRelationshipType = values["family_relationship_type"];
      this.spareKillModifier = values["spare_kill_modifier"];
    }
    
    get familyRelationshipType(): FamilyRelationshipTypes.Entry | undefined {
      const collection = <FamilyRelationshipTypes.Entry[]>this.collectionCache.getCollection(FamilyRelationshipTypes.KEY, FamilyRelationshipTypes.Entry);
      return collection.find(entry => entry.relationshipType === this._familyRelationshipType);
    }
  }
}

export default FamilyRelationshipsToDuelOutcomeModifiers;
