
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyFollowupNegotiationProposedComponents } from "./CampaignDiplomacyFollowupNegotiationProposedComponents";
import { Factions } from "./Factions";

export namespace CampaignDiplomacyFollowupNegotiationProposedComponentAllianceParameters {
  export const KEY = new CollectionKey("campaign_diplomacy_followup_negotiation_proposed_component_alliance_parameters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _component: string;
    readonly parameterIndex: number;
    readonly _allianceFactionParameter: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._component = values["component"];
      this.parameterIndex = values["parameter_index"];
      this._allianceFactionParameter = values["alliance_faction_parameter"];
    }
    
    get component(): CampaignDiplomacyFollowupNegotiationProposedComponents.Entry | undefined {
      const collection = <CampaignDiplomacyFollowupNegotiationProposedComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyFollowupNegotiationProposedComponents.KEY, CampaignDiplomacyFollowupNegotiationProposedComponents.Entry);
      return collection.find(entry => entry.id === this._component);
    }
    
    get allianceFactionParameter(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._allianceFactionParameter);
    }
  }
}

export default CampaignDiplomacyFollowupNegotiationProposedComponentAllianceParameters;
