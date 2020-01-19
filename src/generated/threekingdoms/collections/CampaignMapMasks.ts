
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignMapMasks {
  export const KEY = new CollectionKey("campaign_map_masks");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly maskName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.maskName = values["mask_name"];
    }
    
  }
}

export default CampaignMapMasks;
