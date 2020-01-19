
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyAutomaticDeals } from "./CampaignDiplomacyAutomaticDeals";
import { CampaignDiplomacyAutomaticDealParticipants } from "./CampaignDiplomacyAutomaticDealParticipants";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";

export namespace CampaignDiplomacyAutomaticSimpleDeals {
  export const KEY = new CollectionKey("campaign_diplomacy_automatic_simple_deals");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _deal: string;
    readonly _proposer: string;
    readonly _recipient: string;
    readonly _component: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._deal = values["deal"];
      this._proposer = values["proposer"];
      this._recipient = values["recipient"];
      this._component = values["component"];
    }
    
    get deal(): CampaignDiplomacyAutomaticDeals.Entry | undefined {
      const collection = <CampaignDiplomacyAutomaticDeals.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyAutomaticDeals.KEY, CampaignDiplomacyAutomaticDeals.Entry);
      return collection.find(entry => entry.id === this._deal);
    }
    
    get proposer(): CampaignDiplomacyAutomaticDealParticipants.Entry | undefined {
      const collection = <CampaignDiplomacyAutomaticDealParticipants.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyAutomaticDealParticipants.KEY, CampaignDiplomacyAutomaticDealParticipants.Entry);
      return collection.find(entry => entry.id === this._proposer);
    }
    
    get recipient(): CampaignDiplomacyAutomaticDealParticipants.Entry | undefined {
      const collection = <CampaignDiplomacyAutomaticDealParticipants.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyAutomaticDealParticipants.KEY, CampaignDiplomacyAutomaticDealParticipants.Entry);
      return collection.find(entry => entry.id === this._recipient);
    }
    
    get component(): CampaignDiplomacyTreatyComponents.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponents.KEY, CampaignDiplomacyTreatyComponents.Entry);
      return collection.find(entry => entry.key === this._component);
    }
  }
}

export default CampaignDiplomacyAutomaticSimpleDeals;
