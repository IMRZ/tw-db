
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosDiplomacyComplexDealComponents } from "./StartPosDiplomacyComplexDealComponents";
import { CampaignDiplomacyAllianceOaths } from "./CampaignDiplomacyAllianceOaths";

export namespace StartPosDiplomacyComplexDealComponentAllianceOathParameters {
  export const KEY = new CollectionKey("start_pos_diplomacy_complex_deal_component_alliance_oath_parameters");

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
    
    get component(): StartPosDiplomacyComplexDealComponents.Entry | undefined {
      const collection = <StartPosDiplomacyComplexDealComponents.Entry[]>this.collectionCache.getCollection(StartPosDiplomacyComplexDealComponents.KEY, StartPosDiplomacyComplexDealComponents.Entry);
      return collection.find(entry => entry.id === this._component);
    }
    
    get allianceOathParameter(): CampaignDiplomacyAllianceOaths.Entry | undefined {
      const collection = <CampaignDiplomacyAllianceOaths.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyAllianceOaths.KEY, CampaignDiplomacyAllianceOaths.Entry);
      return collection.find(entry => entry.key === this._allianceOathParameter);
    }
  }
}

export default StartPosDiplomacyComplexDealComponentAllianceOathParameters;
