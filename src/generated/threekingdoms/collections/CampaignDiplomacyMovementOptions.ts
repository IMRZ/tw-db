
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyGroups } from "./CampaignDiplomacyGroups";
import { CampaignDiplomacyNegotiationTypes } from "./CampaignDiplomacyNegotiationTypes";
import { CampaignDiplomacyVariables } from "./CampaignDiplomacyVariables";

export namespace CampaignDiplomacyMovementOptions {
  export const KEY = new CollectionKey("campaign_diplomacy_movement_options");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _requirement: string;
    readonly priority: number;
    readonly _negotiationType: string;
    readonly _initiatorVariable: string;
    readonly _targetVariable: string;
    readonly localisedTitle: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._requirement = values["requirement"];
      this.priority = values["priority"];
      this._negotiationType = values["negotiation_type"];
      this._initiatorVariable = values["initiator_variable"];
      this._targetVariable = values["target_variable"];
      this.localisedTitle = values["localised_title"];
    }
    
    get requirement(): CampaignDiplomacyGroups.Entry | undefined {
      const collection = <CampaignDiplomacyGroups.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyGroups.KEY, CampaignDiplomacyGroups.Entry);
      return collection.find(entry => entry.key === this._requirement);
    }
    
    get negotiationType(): CampaignDiplomacyNegotiationTypes.Entry | undefined {
      const collection = <CampaignDiplomacyNegotiationTypes.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyNegotiationTypes.KEY, CampaignDiplomacyNegotiationTypes.Entry);
      return collection.find(entry => entry.key === this._negotiationType);
    }
    
    get initiatorVariable(): CampaignDiplomacyVariables.Entry | undefined {
      const collection = <CampaignDiplomacyVariables.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyVariables.KEY, CampaignDiplomacyVariables.Entry);
      return collection.find(entry => entry.key === this._initiatorVariable);
    }
    
    get targetVariable(): CampaignDiplomacyVariables.Entry | undefined {
      const collection = <CampaignDiplomacyVariables.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyVariables.KEY, CampaignDiplomacyVariables.Entry);
      return collection.find(entry => entry.key === this._targetVariable);
    }
  }
}

export default CampaignDiplomacyMovementOptions;
