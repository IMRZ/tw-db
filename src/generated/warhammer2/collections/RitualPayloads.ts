
import { CollectionCache, CollectionKey } from "../../../common";


export namespace RitualPayloads {
  export const KEY = new CollectionKey("ritual_payloads");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly humanOnly: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.humanOnly = !!values["human_only"];
    }
    
  }
}

export default RitualPayloads;
