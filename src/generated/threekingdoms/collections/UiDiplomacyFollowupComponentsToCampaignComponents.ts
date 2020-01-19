
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
import { UiDiplomacyFollowupNegotiationComponents } from "./UiDiplomacyFollowupNegotiationComponents";

export namespace UiDiplomacyFollowupComponentsToCampaignComponents {
  export const KEY = new CollectionKey("ui_diplomacy_followup_components_to_campaign_components");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignDiplomacyTreatyComponent: string;
    readonly _uiDiplomacyFollowupNegotiationComponent: string;
    readonly sortOrder: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignDiplomacyTreatyComponent = values["campaign_diplomacy_treaty_component"];
      this._uiDiplomacyFollowupNegotiationComponent = values["ui_diplomacy_followup_negotiation_component"];
      this.sortOrder = values["sort_order"];
    }
    
    get campaignDiplomacyTreatyComponent(): CampaignDiplomacyTreatyComponents.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponents.KEY, CampaignDiplomacyTreatyComponents.Entry);
      return collection.find(entry => entry.key === this._campaignDiplomacyTreatyComponent);
    }
    
    get uiDiplomacyFollowupNegotiationComponent(): UiDiplomacyFollowupNegotiationComponents.Entry | undefined {
      const collection = <UiDiplomacyFollowupNegotiationComponents.Entry[]>this.collectionCache.getCollection(UiDiplomacyFollowupNegotiationComponents.KEY, UiDiplomacyFollowupNegotiationComponents.Entry);
      return collection.find(entry => entry.key === this._uiDiplomacyFollowupNegotiationComponent);
    }
  }
}

export default UiDiplomacyFollowupComponentsToCampaignComponents;
