
import { CollectionCache, CollectionKey } from "../../../common";


export namespace MpForceGenTemplates {
  export const KEY = new CollectionKey("mp_force_gen_templates");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default MpForceGenTemplates;
