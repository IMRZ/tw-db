
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosCharacters } from "./StartPosCharacters";
import { FamilyRelationshipTypes } from "./FamilyRelationshipTypes";

export namespace StartPosFamilyRelationships {
  export const KEY = new CollectionKey("start_pos_family_relationships");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _character: number;
    readonly _relatedTo: number;
    readonly _relationship: string;
    readonly bastard: boolean;
    readonly adopted: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._character = values["character"];
      this._relatedTo = values["related_to"];
      this._relationship = values["relationship"];
      this.bastard = !!values["bastard"];
      this.adopted = !!values["adopted"];
    }
    
    get character(): StartPosCharacters.Entry | undefined {
      const collection = <StartPosCharacters.Entry[]>this.collectionCache.getCollection(StartPosCharacters.KEY, StartPosCharacters.Entry);
      return collection.find(entry => entry.id === this._character);
    }
    
    get relatedTo(): StartPosCharacters.Entry | undefined {
      const collection = <StartPosCharacters.Entry[]>this.collectionCache.getCollection(StartPosCharacters.KEY, StartPosCharacters.Entry);
      return collection.find(entry => entry.id === this._relatedTo);
    }
    
    get relationship(): FamilyRelationshipTypes.Entry | undefined {
      const collection = <FamilyRelationshipTypes.Entry[]>this.collectionCache.getCollection(FamilyRelationshipTypes.KEY, FamilyRelationshipTypes.Entry);
      return collection.find(entry => entry.relationshipType === this._relationship);
    }
  }
}

export default StartPosFamilyRelationships;
