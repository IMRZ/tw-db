
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyAllianceOaths } from "./CampaignDiplomacyAllianceOaths";

export namespace CampaignDiplomacyAllianceOathTransitions {
  export const KEY = new CollectionKey("campaign_diplomacy_alliance_oath_transitions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _oathFrom: string;
    readonly _oathTo: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._oathFrom = values["oath_from"];
      this._oathTo = values["oath_to"];
    }
    
    get oathFrom(): CampaignDiplomacyAllianceOaths.Entry | undefined {
      const collection = <CampaignDiplomacyAllianceOaths.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyAllianceOaths.KEY, CampaignDiplomacyAllianceOaths.Entry);
      return collection.find(entry => entry.key === this._oathFrom);
    }
    
    get oathTo(): CampaignDiplomacyAllianceOaths.Entry | undefined {
      const collection = <CampaignDiplomacyAllianceOaths.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyAllianceOaths.KEY, CampaignDiplomacyAllianceOaths.Entry);
      return collection.find(entry => entry.key === this._oathTo);
    }
  }
}

export default CampaignDiplomacyAllianceOathTransitions;
