
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiPersonalityDiplomaticComponentTargets {
  export const KEY = new CollectionKey("cai_personality_diplomatic_component_targets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly target: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.target = values["target"];
    }
    
  }
}

export default CaiPersonalityDiplomaticComponentTargets;
