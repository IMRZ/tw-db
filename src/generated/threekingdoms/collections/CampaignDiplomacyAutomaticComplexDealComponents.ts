
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyAutomaticComplexDeals } from "./CampaignDiplomacyAutomaticComplexDeals";
import { CampaignDiplomacyAutomaticDealParticipants } from "./CampaignDiplomacyAutomaticDealParticipants";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";

export namespace CampaignDiplomacyAutomaticComplexDealComponents {
  export const KEY = new CollectionKey("campaign_diplomacy_automatic_complex_deal_components");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;
    readonly _deal: string;
    readonly _proposer: string;
    readonly _recipient: string;
    readonly _component: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._deal = values["deal"];
      this._proposer = values["proposer"];
      this._recipient = values["recipient"];
      this._component = values["component"];
    }
    
    get deal(): CampaignDiplomacyAutomaticComplexDeals.Entry | undefined {
      const collection = <CampaignDiplomacyAutomaticComplexDeals.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyAutomaticComplexDeals.KEY, CampaignDiplomacyAutomaticComplexDeals.Entry);
      return collection.find(entry => entry._deal === this._deal);
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

export default CampaignDiplomacyAutomaticComplexDealComponents;
