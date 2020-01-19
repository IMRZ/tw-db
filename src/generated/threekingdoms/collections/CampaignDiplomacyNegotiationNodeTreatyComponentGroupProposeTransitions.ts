
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyNegotiationNodes } from "./CampaignDiplomacyNegotiationNodes";
import { CampaignDiplomacyTreatyComponentGroups } from "./CampaignDiplomacyTreatyComponentGroups";

export namespace CampaignDiplomacyNegotiationNodeTreatyComponentGroupProposeTransitions {
  export const KEY = new CollectionKey("campaign_diplomacy_negotiation_node_treaty_component_group_propose_transitions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _nodeFrom: string;
    readonly _nodeTo: string;
    readonly _treatyComponentGroup: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._nodeFrom = values["node_from"];
      this._nodeTo = values["node_to"];
      this._treatyComponentGroup = values["treaty_component_group"];
    }
    
    get nodeFrom(): CampaignDiplomacyNegotiationNodes.Entry | undefined {
      const collection = <CampaignDiplomacyNegotiationNodes.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyNegotiationNodes.KEY, CampaignDiplomacyNegotiationNodes.Entry);
      return collection.find(entry => entry.key === this._nodeFrom);
    }
    
    get nodeTo(): CampaignDiplomacyNegotiationNodes.Entry | undefined {
      const collection = <CampaignDiplomacyNegotiationNodes.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyNegotiationNodes.KEY, CampaignDiplomacyNegotiationNodes.Entry);
      return collection.find(entry => entry.key === this._nodeTo);
    }
    
    get treatyComponentGroup(): CampaignDiplomacyTreatyComponentGroups.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponentGroups.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponentGroups.KEY, CampaignDiplomacyTreatyComponentGroups.Entry);
      return collection.find(entry => entry.key === this._treatyComponentGroup);
    }
  }
}

export default CampaignDiplomacyNegotiationNodeTreatyComponentGroupProposeTransitions;
