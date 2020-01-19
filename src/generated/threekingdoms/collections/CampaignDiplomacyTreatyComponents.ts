
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyDurations } from "./CampaignDiplomacyTreatyDurations";
import { CampaignDiplomacyComponentDimensionalities } from "./CampaignDiplomacyComponentDimensionalities";
import { CampaignDiplomacyRequirementSets } from "./CampaignDiplomacyRequirementSets";

export namespace CampaignDiplomacyTreatyComponents {
  export const KEY = new CollectionKey("campaign_diplomacy_treaty_components");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _duration: string;
    readonly _dimensionality: string;
    readonly _requirementSet: string;
    readonly appliedBidirectionally: boolean;
    readonly onscreenName: string;
    readonly isThreat: boolean;
    readonly displayPriority: number;
    readonly opponentIsProposer: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._duration = values["duration"];
      this._dimensionality = values["dimensionality"];
      this._requirementSet = values["requirement_set"];
      this.appliedBidirectionally = !!values["applied_bidirectionally"];
      this.onscreenName = values["onscreen_name"];
      this.isThreat = !!values["is_threat"];
      this.displayPriority = values["display_priority"];
      this.opponentIsProposer = !!values["opponent_is_proposer"];
    }
    
    get duration(): CampaignDiplomacyTreatyDurations.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyDurations.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyDurations.KEY, CampaignDiplomacyTreatyDurations.Entry);
      return collection.find(entry => entry.key === this._duration);
    }
    
    get dimensionality(): CampaignDiplomacyComponentDimensionalities.Entry | undefined {
      const collection = <CampaignDiplomacyComponentDimensionalities.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyComponentDimensionalities.KEY, CampaignDiplomacyComponentDimensionalities.Entry);
      return collection.find(entry => entry.key === this._dimensionality);
    }
    
    get requirementSet(): CampaignDiplomacyRequirementSets.Entry | undefined {
      const collection = <CampaignDiplomacyRequirementSets.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyRequirementSets.KEY, CampaignDiplomacyRequirementSets.Entry);
      return collection.find(entry => entry.key === this._requirementSet);
    }
  }
}

export default CampaignDiplomacyTreatyComponents;
