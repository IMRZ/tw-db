
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyAutomaticComplexDealComponents } from "./CampaignDiplomacyAutomaticComplexDealComponents";
import { Factions } from "./Factions";

export namespace CampaignDiplomacyAutomaticComplexDealComponentFactionParameters {
  export const KEY = new CollectionKey("campaign_diplomacy_automatic_complex_deal_component_faction_parameters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _component: string;
    readonly parameterIndex: number;
    readonly _factionParameter: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._component = values["component"];
      this.parameterIndex = values["parameter_index"];
      this._factionParameter = values["faction_parameter"];
    }
    
    get component(): CampaignDiplomacyAutomaticComplexDealComponents.Entry | undefined {
      const collection = <CampaignDiplomacyAutomaticComplexDealComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyAutomaticComplexDealComponents.KEY, CampaignDiplomacyAutomaticComplexDealComponents.Entry);
      return collection.find(entry => entry.id === this._component);
    }
    
    get factionParameter(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._factionParameter);
    }
  }
}

export default CampaignDiplomacyAutomaticComplexDealComponentFactionParameters;
