
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiPersonalityDiplomaticComponents {
  export const KEY = new CollectionKey("cai_personality_diplomatic_components");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
    }
    
  }
}

export default CaiPersonalityDiplomaticComponents;
