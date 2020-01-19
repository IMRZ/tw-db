
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignDiplomacyAutomaticDealSituations {
  export const KEY = new CollectionKey("campaign_diplomacy_automatic_deal_situations");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly situation: string;
    readonly comments: string;
    readonly description: string;
    readonly icon: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.situation = values["situation"];
      this.comments = values["comments"];
      this.description = values["description"];
      this.icon = values["icon"];
    }
    
  }
}

export default CampaignDiplomacyAutomaticDealSituations;
