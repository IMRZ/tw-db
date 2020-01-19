
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyRequirementOptions } from "./CampaignDiplomacyTreatyRequirementOptions";
import { CampaignDiplomacyTreatyRequirementSources } from "./CampaignDiplomacyTreatyRequirementSources";

export namespace CampaignDiplomacyTreatyRequirementCivilWarStates {
  export const KEY = new CollectionKey("campaign_diplomacy_treaty_requirement_civil_war_states");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _option: string;
    readonly _source: string;
    readonly civilWar: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._option = values["option"];
      this._source = values["source"];
      this.civilWar = !!values["civil_war"];
    }
    
    get option(): CampaignDiplomacyTreatyRequirementOptions.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyRequirementOptions.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyRequirementOptions.KEY, CampaignDiplomacyTreatyRequirementOptions.Entry);
      return collection.find(entry => entry.key === this._option);
    }
    
    get source(): CampaignDiplomacyTreatyRequirementSources.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyRequirementSources.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyRequirementSources.KEY, CampaignDiplomacyTreatyRequirementSources.Entry);
      return collection.find(entry => entry.source === this._source);
    }
  }
}

export default CampaignDiplomacyTreatyRequirementCivilWarStates;
