
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyNegotiationTypes } from "./CampaignDiplomacyNegotiationTypes";

export namespace StartPosDiplomacyDeals {
  export const KEY = new CollectionKey("start_pos_diplomacy_deals");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;
    readonly _negotiationType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._negotiationType = values["negotiation_type"];
    }
    
    get negotiationType(): CampaignDiplomacyNegotiationTypes.Entry | undefined {
      const collection = <CampaignDiplomacyNegotiationTypes.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyNegotiationTypes.KEY, CampaignDiplomacyNegotiationTypes.Entry);
      return collection.find(entry => entry.key === this._negotiationType);
    }
  }
}

export default StartPosDiplomacyDeals;
