
import { CollectionCache, CollectionKey } from "../../../common";


export namespace EffectsGeneralisedDescriptions {
  export const KEY = new CollectionKey("effects_generalised_descriptions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly localisedDescription: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.localisedDescription = values["localised_description"];
    }
    
  }
}

export default EffectsGeneralisedDescriptions;
