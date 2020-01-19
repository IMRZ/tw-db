
import { CollectionCache, CollectionKey } from "../../../common";
import { UiDiplomacyTreatyComponents } from "./UiDiplomacyTreatyComponents";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
import { UiDiplomacyRequestDirections } from "./UiDiplomacyRequestDirections";

export namespace UiDiplomacyTreatyComponentsToCampaignDiplomacyTreatyComponentJunctions {
  export const KEY = new CollectionKey("ui_diplomacy_treaty_components_to_campaign_diplomacy_treaty_component_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _uiDiplomacyTreatyComponent: string;
    readonly _campaignDiplomacyTreatyComponent: string;
    readonly _requestDirection: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._uiDiplomacyTreatyComponent = values["ui_diplomacy_treaty_component"];
      this._campaignDiplomacyTreatyComponent = values["campaign_diplomacy_treaty_component"];
      this._requestDirection = values["request_direction"];
    }
    
    get uiDiplomacyTreatyComponent(): UiDiplomacyTreatyComponents.Entry | undefined {
      const collection = <UiDiplomacyTreatyComponents.Entry[]>this.collectionCache.getCollection(UiDiplomacyTreatyComponents.KEY, UiDiplomacyTreatyComponents.Entry);
      return collection.find(entry => entry.key === this._uiDiplomacyTreatyComponent);
    }
    
    get campaignDiplomacyTreatyComponent(): CampaignDiplomacyTreatyComponents.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponents.KEY, CampaignDiplomacyTreatyComponents.Entry);
      return collection.find(entry => entry.key === this._campaignDiplomacyTreatyComponent);
    }
    
    get requestDirection(): UiDiplomacyRequestDirections.Entry | undefined {
      const collection = <UiDiplomacyRequestDirections.Entry[]>this.collectionCache.getCollection(UiDiplomacyRequestDirections.KEY, UiDiplomacyRequestDirections.Entry);
      return collection.find(entry => entry.key === this._requestDirection);
    }
  }
}

export default UiDiplomacyTreatyComponentsToCampaignDiplomacyTreatyComponentJunctions;
