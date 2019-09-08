
import { CollectionCache, CollectionKey } from "../../../common";


export namespace Effects {
  export const KEY = new CollectionKey("effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly effect: string;
    readonly icon: string;
    readonly description: string;
    readonly priority: number;
    readonly iconNegative: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.effect = values["effect"];
      this.icon = values["icon"];
      this.description = values["description"];
      this.priority = values["priority"];
      this.iconNegative = values["icon_negative"];
    }
    
  }
}

export default Effects;
