
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";

export namespace CaiDiplomacyTreatyDecompositions {
  export const KEY = new CollectionKey("cai_diplomacy_treaty_decompositions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _decompositionKey: string;
    readonly _mainKey: string;
    readonly _secondaryKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._decompositionKey = values["decomposition_key"];
      this._mainKey = values["main_key"];
      this._secondaryKey = values["secondary_key"];
    }
    
    get decompositionKey(): CampaignDiplomacyTreatyComponents.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponents.KEY, CampaignDiplomacyTreatyComponents.Entry);
      return collection.find(entry => entry.key === this._decompositionKey);
    }
    
    get mainKey(): CampaignDiplomacyTreatyComponents.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponents.KEY, CampaignDiplomacyTreatyComponents.Entry);
      return collection.find(entry => entry.key === this._mainKey);
    }
    
    get secondaryKey(): CampaignDiplomacyTreatyComponents.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponents.KEY, CampaignDiplomacyTreatyComponents.Entry);
      return collection.find(entry => entry.key === this._secondaryKey);
    }
  }
}

export default CaiDiplomacyTreatyDecompositions;
