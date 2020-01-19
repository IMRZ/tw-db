
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosCharacters } from "./StartPosCharacters";
import { StartPosFamilyRelationshipTypes } from "./StartPosFamilyRelationshipTypes";

export namespace StartPosFamilyRelationships {
  export const KEY = new CollectionKey("start_pos_family_relationships");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _character: number;
    readonly _relatedTo: number;
    readonly _relationship: string;
    readonly unique: boolean;
    readonly bastard: boolean;
    readonly adopted: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._character = values["character"];
      this._relatedTo = values["related_to"];
      this._relationship = values["relationship"];
      this.unique = !!values["unique"];
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
    
    get relationship(): StartPosFamilyRelationshipTypes.Entry | undefined {
      const collection = <StartPosFamilyRelationshipTypes.Entry[]>this.collectionCache.getCollection(StartPosFamilyRelationshipTypes.KEY, StartPosFamilyRelationshipTypes.Entry);
      return collection.find(entry => entry.key === this._relationship);
    }
  }
}

export default StartPosFamilyRelationships;
