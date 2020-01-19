
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BmdLayerGroups {
  export const KEY = new CollectionKey("bmd_layer_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly isBattle: boolean;
    readonly isCampaign: boolean;
    readonly isExclusive: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.isBattle = !!values["is_battle"];
      this.isCampaign = !!values["is_campaign"];
      this.isExclusive = !!values["is_exclusive"];
    }
    
  }
}

export default BmdLayerGroups;
