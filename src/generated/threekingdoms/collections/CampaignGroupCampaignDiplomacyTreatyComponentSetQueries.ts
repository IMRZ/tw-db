
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyGroups } from "./CampaignDiplomacyGroups";
import { CampaignDiplomacyVariables } from "./CampaignDiplomacyVariables";

export namespace CampaignGroupCampaignDiplomacyTreatyComponentSetQueries {
  export const KEY = new CollectionKey("campaign_group_campaign_diplomacy_treaty_component_set_queries");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly system: string;
    readonly _sourceRequirement: string;
    readonly _sourceVariable: string;
    readonly _destinationRequirement: string;
    readonly _destinationVariable: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.system = values["system"];
      this._sourceRequirement = values["source_requirement"];
      this._sourceVariable = values["source_variable"];
      this._destinationRequirement = values["destination_requirement"];
      this._destinationVariable = values["destination_variable"];
    }
    
    get sourceRequirement(): CampaignDiplomacyGroups.Entry | undefined {
      const collection = <CampaignDiplomacyGroups.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyGroups.KEY, CampaignDiplomacyGroups.Entry);
      return collection.find(entry => entry.key === this._sourceRequirement);
    }
    
    get sourceVariable(): CampaignDiplomacyVariables.Entry | undefined {
      const collection = <CampaignDiplomacyVariables.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyVariables.KEY, CampaignDiplomacyVariables.Entry);
      return collection.find(entry => entry.key === this._sourceVariable);
    }
    
    get destinationRequirement(): CampaignDiplomacyGroups.Entry | undefined {
      const collection = <CampaignDiplomacyGroups.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyGroups.KEY, CampaignDiplomacyGroups.Entry);
      return collection.find(entry => entry.key === this._destinationRequirement);
    }
    
    get destinationVariable(): CampaignDiplomacyVariables.Entry | undefined {
      const collection = <CampaignDiplomacyVariables.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyVariables.KEY, CampaignDiplomacyVariables.Entry);
      return collection.find(entry => entry.key === this._destinationVariable);
    }
  }
}

export default CampaignGroupCampaignDiplomacyTreatyComponentSetQueries;
