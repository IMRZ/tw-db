
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";

export namespace UiDiplomacyQuickDealTreatyComponents {
  export const KEY = new CollectionKey("ui_diplomacy_quick_deal_treaty_components");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _campaignDiplomacyTreatyComponent: string;
    readonly sortOrder: number;
    readonly localisedQuickDealTitle: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._campaignDiplomacyTreatyComponent = values["campaign_diplomacy_treaty_component"];
      this.sortOrder = values["sort_order"];
      this.localisedQuickDealTitle = values["localised_quick_deal_title"];
    }
    
    get campaignDiplomacyTreatyComponent(): CampaignDiplomacyTreatyComponents.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponents.KEY, CampaignDiplomacyTreatyComponents.Entry);
      return collection.find(entry => entry.key === this._campaignDiplomacyTreatyComponent);
    }
  }
}

export default UiDiplomacyQuickDealTreatyComponents;
