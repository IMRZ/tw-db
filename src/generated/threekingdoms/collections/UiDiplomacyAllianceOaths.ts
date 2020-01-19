
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyAllianceOaths } from "./CampaignDiplomacyAllianceOaths";

export namespace UiDiplomacyAllianceOaths {
  export const KEY = new CollectionKey("ui_diplomacy_alliance_oaths");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _campaignDiplomacyAllianceOath: string;
    readonly localisedTitle: string;
    readonly localisedDescription: string;
    readonly iconPath: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._campaignDiplomacyAllianceOath = values["campaign_diplomacy_alliance_oath"];
      this.localisedTitle = values["localised_title"];
      this.localisedDescription = values["localised_description"];
      this.iconPath = values["icon_path"];
    }
    
    get campaignDiplomacyAllianceOath(): CampaignDiplomacyAllianceOaths.Entry | undefined {
      const collection = <CampaignDiplomacyAllianceOaths.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyAllianceOaths.KEY, CampaignDiplomacyAllianceOaths.Entry);
      return collection.find(entry => entry.key === this._campaignDiplomacyAllianceOath);
    }
  }
}

export default UiDiplomacyAllianceOaths;
