
import { CollectionCache, CollectionKey } from "../../../common";


export namespace StartPosFamilyRelationshipTypes {
  export const KEY = new CollectionKey("start_pos_family_relationship_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default StartPosFamilyRelationshipTypes;
