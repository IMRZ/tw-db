
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyAutomaticSimpleDeals } from "./CampaignDiplomacyAutomaticSimpleDeals";
import { Factions } from "./Factions";

export namespace CampaignDiplomacyAutomaticSimpleDealFactionParameters {
  export const KEY = new CollectionKey("campaign_diplomacy_automatic_simple_deal_faction_parameters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _deal: string;
    readonly parameterIndex: number;
    readonly _factionParameter: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._deal = values["deal"];
      this.parameterIndex = values["parameter_index"];
      this._factionParameter = values["faction_parameter"];
    }
    
    get deal(): CampaignDiplomacyAutomaticSimpleDeals.Entry | undefined {
      const collection = <CampaignDiplomacyAutomaticSimpleDeals.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyAutomaticSimpleDeals.KEY, CampaignDiplomacyAutomaticSimpleDeals.Entry);
      return collection.find(entry => entry._deal === this._deal);
    }
    
    get factionParameter(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._factionParameter);
    }
  }
}

export default CampaignDiplomacyAutomaticSimpleDealFactionParameters;
