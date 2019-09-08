
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignPostBattleCaptiveOptionIds {
  export const KEY = new CollectionKey("campaign_post_battle_captive_option_ids");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly captiveOption: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.captiveOption = values["captive_option"];
    }
    
  }
}

export default CampaignPostBattleCaptiveOptionIds;
