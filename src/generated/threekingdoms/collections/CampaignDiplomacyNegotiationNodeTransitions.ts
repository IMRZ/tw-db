
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyNegotiationNodes } from "./CampaignDiplomacyNegotiationNodes";
import { CampaignDiplomacyNegotiationNodeTransitionTypes } from "./CampaignDiplomacyNegotiationNodeTransitionTypes";

export namespace CampaignDiplomacyNegotiationNodeTransitions {
  export const KEY = new CollectionKey("campaign_diplomacy_negotiation_node_transitions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _from: string;
    readonly _to: string;
    readonly _transition: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._from = values["from"];
      this._to = values["to"];
      this._transition = values["transition"];
    }
    
    get from(): CampaignDiplomacyNegotiationNodes.Entry | undefined {
      const collection = <CampaignDiplomacyNegotiationNodes.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyNegotiationNodes.KEY, CampaignDiplomacyNegotiationNodes.Entry);
      return collection.find(entry => entry.key === this._from);
    }
    
    get to(): CampaignDiplomacyNegotiationNodes.Entry | undefined {
      const collection = <CampaignDiplomacyNegotiationNodes.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyNegotiationNodes.KEY, CampaignDiplomacyNegotiationNodes.Entry);
      return collection.find(entry => entry.key === this._to);
    }
    
    get transition(): CampaignDiplomacyNegotiationNodeTransitionTypes.Entry | undefined {
      const collection = <CampaignDiplomacyNegotiationNodeTransitionTypes.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyNegotiationNodeTransitionTypes.KEY, CampaignDiplomacyNegotiationNodeTransitionTypes.Entry);
      return collection.find(entry => entry.key === this._transition);
    }
  }
}

export default CampaignDiplomacyNegotiationNodeTransitions;
