
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyGroupTypes } from "./CampaignDiplomacyGroupTypes";
import { CampaignDiplomacyTreatyAvailabilityReasons } from "./CampaignDiplomacyTreatyAvailabilityReasons";

export namespace CampaignDiplomacyGroups {
  export const KEY = new CollectionKey("campaign_diplomacy_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _type: string;
    readonly _reason: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._type = values["type"];
      this._reason = values["reason"];
    }
    
    get type(): CampaignDiplomacyGroupTypes.Entry | undefined {
      const collection = <CampaignDiplomacyGroupTypes.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyGroupTypes.KEY, CampaignDiplomacyGroupTypes.Entry);
      return collection.find(entry => entry.type === this._type);
    }
    
    get reason(): CampaignDiplomacyTreatyAvailabilityReasons.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyAvailabilityReasons.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyAvailabilityReasons.KEY, CampaignDiplomacyTreatyAvailabilityReasons.Entry);
      return collection.find(entry => entry.key === this._reason);
    }
  }
}

export default CampaignDiplomacyGroups;
