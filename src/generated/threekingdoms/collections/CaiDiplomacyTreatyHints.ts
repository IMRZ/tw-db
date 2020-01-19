
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";

export namespace CaiDiplomacyTreatyHints {
  export const KEY = new CollectionKey("cai_diplomacy_treaty_hints");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _key: string;
    readonly divisible: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._key = values["key"];
      this.divisible = !!values["divisible"];
    }
    
    get key(): CampaignDiplomacyTreatyComponents.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponents.KEY, CampaignDiplomacyTreatyComponents.Entry);
      return collection.find(entry => entry.key === this._key);
    }
  }
}

export default CaiDiplomacyTreatyHints;
