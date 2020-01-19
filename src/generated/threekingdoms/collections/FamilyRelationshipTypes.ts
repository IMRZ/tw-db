
import { CollectionCache, CollectionKey } from "../../../common";


export namespace FamilyRelationshipTypes {
  export const KEY = new CollectionKey("family_relationship_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly relationshipType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.relationshipType = values["relationship_type"];
    }
    
  }
}

export default FamilyRelationshipTypes;
