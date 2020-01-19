
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyParameterTypes } from "./CampaignDiplomacyParameterTypes";

export namespace CampaignDiplomacyParameters {
  export const KEY = new CollectionKey("campaign_diplomacy_parameters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _type: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._type = values["type"];
    }
    
    get type(): CampaignDiplomacyParameterTypes.Entry | undefined {
      const collection = <CampaignDiplomacyParameterTypes.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyParameterTypes.KEY, CampaignDiplomacyParameterTypes.Entry);
      return collection.find(entry => entry.key === this._type);
    }
  }
}

export default CampaignDiplomacyParameters;
