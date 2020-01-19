
import { CollectionCache, CollectionKey } from "../../../common";


export namespace GroundTypeStatEffectGroups {
  export const KEY = new CollectionKey("ground_type_stat_effect_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly groupName: string;
    readonly onscreenName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.groupName = values["group_name"];
      this.onscreenName = values["onscreen_name"];
    }
    
  }
}

export default GroundTypeStatEffectGroups;
