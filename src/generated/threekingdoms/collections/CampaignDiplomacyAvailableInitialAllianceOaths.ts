
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
import { CampaignDiplomacyAllianceOaths } from "./CampaignDiplomacyAllianceOaths";

export namespace CampaignDiplomacyAvailableInitialAllianceOaths {
  export const KEY = new CollectionKey("campaign_diplomacy_available_initial_alliance_oaths");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _treatyComponent: string;
    readonly _allianceOath: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._treatyComponent = values["treaty_component"];
      this._allianceOath = values["alliance_oath"];
    }
    
    get treatyComponent(): CampaignDiplomacyTreatyComponents.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponents.KEY, CampaignDiplomacyTreatyComponents.Entry);
      return collection.find(entry => entry.key === this._treatyComponent);
    }
    
    get allianceOath(): CampaignDiplomacyAllianceOaths.Entry | undefined {
      const collection = <CampaignDiplomacyAllianceOaths.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyAllianceOaths.KEY, CampaignDiplomacyAllianceOaths.Entry);
      return collection.find(entry => entry.key === this._allianceOath);
    }
  }
}

export default CampaignDiplomacyAvailableInitialAllianceOaths;
