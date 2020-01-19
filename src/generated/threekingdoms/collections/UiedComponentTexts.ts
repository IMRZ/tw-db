
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UiedComponentTexts {
  export const KEY = new CollectionKey("uied_component_texts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly componentLabel: string;
    readonly localisedString: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.componentLabel = values["component_label"];
      this.localisedString = values["localised_string"];
    }
    
  }
}

export default UiedComponentTexts;
