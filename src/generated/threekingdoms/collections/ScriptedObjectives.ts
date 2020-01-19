
import { CollectionCache, CollectionKey } from "../../../common";


export namespace ScriptedObjectives {
  export const KEY = new CollectionKey("scripted_objectives");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly localisedText: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.localisedText = values["localised_text"];
    }
    
  }
}

export default ScriptedObjectives;
