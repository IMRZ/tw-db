
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignVfxCampaignVfxEventIds {
  export const KEY = new CollectionKey("campaign_vfx_campaign_vfx_event_ids");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly campaignVfxEvent: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.campaignVfxEvent = values["campaign_vfx_event"];
    }
    
  }
}

export default CampaignVfxCampaignVfxEventIds;
