
import { CollectionCache, CollectionKey } from "../../../common";


export namespace ExperienceTriggersTargets {
  export const KEY = new CollectionKey("experience_triggers_targets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default ExperienceTriggersTargets;
