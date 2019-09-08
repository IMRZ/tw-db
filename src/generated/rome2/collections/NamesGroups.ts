
import { CollectionCache, CollectionKey } from "../../../common";


export namespace NamesGroups {
  export const KEY = new CollectionKey("names_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;
    readonly description: string;
    readonly key: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["ID"];
      this.description = values["Description"];
      this.key = values["key"];
    }
    
  }
}

export default NamesGroups;
