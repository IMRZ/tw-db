
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UiedForDeletionComponentTexts {
  export const KEY = new CollectionKey("uied_for_deletion_component_texts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly componentLabel: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.componentLabel = values["component_label"];
    }
    
  }
}

export default UiedForDeletionComponentTexts;
