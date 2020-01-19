
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";

export namespace CampaignDiplomacyTreatyComponentCounterOfferReplacements {
  export const KEY = new CollectionKey("campaign_diplomacy_treaty_component_counter_offer_replacements");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _toBeReplaced: string;
    readonly _replacedBy: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._toBeReplaced = values["to_be_replaced"];
      this._replacedBy = values["replaced_by"];
    }
    
    get toBeReplaced(): CampaignDiplomacyTreatyComponents.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponents.KEY, CampaignDiplomacyTreatyComponents.Entry);
      return collection.find(entry => entry.key === this._toBeReplaced);
    }
    
    get replacedBy(): CampaignDiplomacyTreatyComponents.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponents.KEY, CampaignDiplomacyTreatyComponents.Entry);
      return collection.find(entry => entry.key === this._replacedBy);
    }
  }
}

export default CampaignDiplomacyTreatyComponentCounterOfferReplacements;
