
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyNegotiationNodes } from "./CampaignDiplomacyNegotiationNodes";
import { CampaignDiplomacyNegotiationParticipantSets } from "./CampaignDiplomacyNegotiationParticipantSets";

export namespace CampaignDiplomacyNegotiationTypes {
  export const KEY = new CollectionKey("campaign_diplomacy_negotiation_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _startNode: string;
    readonly _participants: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._startNode = values["start_node"];
      this._participants = values["participants"];
    }
    
    get startNode(): CampaignDiplomacyNegotiationNodes.Entry | undefined {
      const collection = <CampaignDiplomacyNegotiationNodes.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyNegotiationNodes.KEY, CampaignDiplomacyNegotiationNodes.Entry);
      return collection.find(entry => entry.key === this._startNode);
    }
    
    get participants(): CampaignDiplomacyNegotiationParticipantSets.Entry | undefined {
      const collection = <CampaignDiplomacyNegotiationParticipantSets.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyNegotiationParticipantSets.KEY, CampaignDiplomacyNegotiationParticipantSets.Entry);
      return collection.find(entry => entry.set === this._participants);
    }
  }
}

export default CampaignDiplomacyNegotiationTypes;
