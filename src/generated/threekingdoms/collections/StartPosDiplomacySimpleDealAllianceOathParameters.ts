
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosDiplomacySimpleDeals } from "./StartPosDiplomacySimpleDeals";
import { CampaignDiplomacyAllianceOaths } from "./CampaignDiplomacyAllianceOaths";

export namespace StartPosDiplomacySimpleDealAllianceOathParameters {
  export const KEY = new CollectionKey("start_pos_diplomacy_simple_deal_alliance_oath_parameters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _deal: string;
    readonly parameterIndex: number;
    readonly _allianceOathParameter: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._deal = values["deal"];
      this.parameterIndex = values["parameter_index"];
      this._allianceOathParameter = values["alliance_oath_parameter"];
    }
    
    get deal(): StartPosDiplomacySimpleDeals.Entry | undefined {
      const collection = <StartPosDiplomacySimpleDeals.Entry[]>this.collectionCache.getCollection(StartPosDiplomacySimpleDeals.KEY, StartPosDiplomacySimpleDeals.Entry);
      return collection.find(entry => entry._id === this._deal);
    }
    
    get allianceOathParameter(): CampaignDiplomacyAllianceOaths.Entry | undefined {
      const collection = <CampaignDiplomacyAllianceOaths.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyAllianceOaths.KEY, CampaignDiplomacyAllianceOaths.Entry);
      return collection.find(entry => entry.key === this._allianceOathParameter);
    }
  }
}

export default StartPosDiplomacySimpleDealAllianceOathParameters;
