
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyNegotiationTypes } from "./CampaignDiplomacyNegotiationTypes";

export namespace CampaignDiplomacyAutomaticDeals {
  export const KEY = new CollectionKey("campaign_diplomacy_automatic_deals");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;
    readonly _negotiationType: string;
    readonly canCreateFollowupNegotiations: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._negotiationType = values["negotiation_type"];
      this.canCreateFollowupNegotiations = !!values["can_create_followup_negotiations"];
    }
    
    get negotiationType(): CampaignDiplomacyNegotiationTypes.Entry | undefined {
      const collection = <CampaignDiplomacyNegotiationTypes.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyNegotiationTypes.KEY, CampaignDiplomacyNegotiationTypes.Entry);
      return collection.find(entry => entry.key === this._negotiationType);
    }
  }
}

export default CampaignDiplomacyAutomaticDeals;
