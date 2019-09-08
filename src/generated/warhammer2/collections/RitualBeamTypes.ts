
import { CollectionCache, CollectionKey } from "../../../common";


export namespace RitualBeamTypes {
  export const KEY = new CollectionKey("ritual_beam_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly type: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.type = values["type"];
    }
    
  }
}

export default RitualBeamTypes;
