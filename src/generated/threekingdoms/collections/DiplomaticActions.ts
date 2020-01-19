
import { CollectionCache, CollectionKey } from "../../../common";


export namespace DiplomaticActions {
  export const KEY = new CollectionKey("diplomatic_actions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly category: string;
    readonly sortOrder: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.category = values["category"];
      this.sortOrder = values["sort_order"];
    }
    
  }
}

export default DiplomaticActions;
