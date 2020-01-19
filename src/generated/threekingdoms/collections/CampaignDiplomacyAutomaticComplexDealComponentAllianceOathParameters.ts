
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyAutomaticComplexDealComponents } from "./CampaignDiplomacyAutomaticComplexDealComponents";
import { CampaignDiplomacyAllianceOaths } from "./CampaignDiplomacyAllianceOaths";

export namespace CampaignDiplomacyAutomaticComplexDealComponentAllianceOathParameters {
  export const KEY = new CollectionKey("campaign_diplomacy_automatic_complex_deal_component_alliance_oath_parameters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _component: string;
    readonly parameterIndex: number;
    readonly _allianceOathParameter: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._component = values["component"];
      this.parameterIndex = values["parameter_index"];
      this._allianceOathParameter = values["alliance_oath_parameter"];
    }
    
    get component(): CampaignDiplomacyAutomaticComplexDealComponents.Entry | undefined {
      const collection = <CampaignDiplomacyAutomaticComplexDealComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyAutomaticComplexDealComponents.KEY, CampaignDiplomacyAutomaticComplexDealComponents.Entry);
      return collection.find(entry => entry.id === this._component);
    }
    
    get allianceOathParameter(): CampaignDiplomacyAllianceOaths.Entry | undefined {
      const collection = <CampaignDiplomacyAllianceOaths.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyAllianceOaths.KEY, CampaignDiplomacyAllianceOaths.Entry);
      return collection.find(entry => entry.key === this._allianceOathParameter);
    }
  }
}

export default CampaignDiplomacyAutomaticComplexDealComponentAllianceOathParameters;
