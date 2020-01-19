
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyMovementOptionSimpleDeals } from "./CampaignDiplomacyMovementOptionSimpleDeals";
import { Factions } from "./Factions";

export namespace CampaignDiplomacyMovementOptionSimpleDealFactionParameters {
  export const KEY = new CollectionKey("campaign_diplomacy_movement_option_simple_deal_faction_parameters");

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
    
    get deal(): CampaignDiplomacyMovementOptionSimpleDeals.Entry | undefined {
      const collection = <CampaignDiplomacyMovementOptionSimpleDeals.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyMovementOptionSimpleDeals.KEY, CampaignDiplomacyMovementOptionSimpleDeals.Entry);
      return collection.find(entry => entry._movementOption === this._deal);
    }
    
    get factionParameter(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._factionParameter);
    }
  }
}

export default CampaignDiplomacyMovementOptionSimpleDealFactionParameters;
