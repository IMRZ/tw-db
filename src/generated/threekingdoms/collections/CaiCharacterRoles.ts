
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiCharacterRoles {
  export const KEY = new CollectionKey("cai_character_roles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
    }
    
  }
}

export default CaiCharacterRoles;
