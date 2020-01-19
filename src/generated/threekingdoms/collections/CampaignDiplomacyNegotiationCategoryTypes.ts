
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyNegotiationCategories } from "./CampaignDiplomacyNegotiationCategories";
import { CampaignGroups } from "./CampaignGroups";
import { CampaignDiplomacyNegotiationTypes } from "./CampaignDiplomacyNegotiationTypes";

export namespace CampaignDiplomacyNegotiationCategoryTypes {
  export const KEY = new CollectionKey("campaign_diplomacy_negotiation_category_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _category: string;
    readonly _campaignGroup: string;
    readonly _negotiationType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._category = values["category"];
      this._campaignGroup = values["campaign_group"];
      this._negotiationType = values["negotiation_type"];
    }
    
    get category(): CampaignDiplomacyNegotiationCategories.Entry | undefined {
      const collection = <CampaignDiplomacyNegotiationCategories.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyNegotiationCategories.KEY, CampaignDiplomacyNegotiationCategories.Entry);
      return collection.find(entry => entry.category === this._category);
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
    
    get negotiationType(): CampaignDiplomacyNegotiationTypes.Entry | undefined {
      const collection = <CampaignDiplomacyNegotiationTypes.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyNegotiationTypes.KEY, CampaignDiplomacyNegotiationTypes.Entry);
      return collection.find(entry => entry.key === this._negotiationType);
    }
  }
}

export default CampaignDiplomacyNegotiationCategoryTypes;
