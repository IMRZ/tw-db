
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyPoolSources } from "./CampaignDiplomacyPoolSources";

export namespace CampaignDiplomacyPools {
  export const KEY = new CollectionKey("campaign_diplomacy_pools");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _source: string;
    readonly knowable: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._source = values["source"];
      this.knowable = !!values["knowable"];
    }
    
    get source(): CampaignDiplomacyPoolSources.Entry | undefined {
      const collection = <CampaignDiplomacyPoolSources.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyPoolSources.KEY, CampaignDiplomacyPoolSources.Entry);
      return collection.find(entry => entry.key === this._source);
    }
  }
}

export default CampaignDiplomacyPools;
