
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyPools } from "./CampaignDiplomacyPools";
import { CampaignDiplomacyPoolAvailableLimitTypes } from "./CampaignDiplomacyPoolAvailableLimitTypes";

export namespace CampaignDiplomacyPoolAvailableLimits {
  export const KEY = new CollectionKey("campaign_diplomacy_pool_available_limits");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _pool: string;
    readonly duration: number;
    readonly amountProportion: number;
    readonly incomeProportion: number;
    readonly _type: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._pool = values["pool"];
      this.duration = values["duration"];
      this.amountProportion = values["amount_proportion"];
      this.incomeProportion = values["income_proportion"];
      this._type = values["type"];
    }
    
    get pool(): CampaignDiplomacyPools.Entry | undefined {
      const collection = <CampaignDiplomacyPools.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyPools.KEY, CampaignDiplomacyPools.Entry);
      return collection.find(entry => entry.key === this._pool);
    }
    
    get type(): CampaignDiplomacyPoolAvailableLimitTypes.Entry | undefined {
      const collection = <CampaignDiplomacyPoolAvailableLimitTypes.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyPoolAvailableLimitTypes.KEY, CampaignDiplomacyPoolAvailableLimitTypes.Entry);
      return collection.find(entry => entry.type === this._type);
    }
  }
}

export default CampaignDiplomacyPoolAvailableLimits;
