
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyNegotiationNodes } from "./CampaignDiplomacyNegotiationNodes";
import { CampaignDiplomacyNegotiationRoles } from "./CampaignDiplomacyNegotiationRoles";
import { DiplomacyKeys } from "./DiplomacyKeys";

export namespace CampaignDiplomacyNegotiationNodeSpeeches {
  export const KEY = new CollectionKey("campaign_diplomacy_negotiation_node_speeches");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _negotiationNode: string;
    readonly _participantSpeaking: string;
    readonly _speechType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._negotiationNode = values["negotiation_node"];
      this._participantSpeaking = values["participant_speaking"];
      this._speechType = values["speech_type"];
    }
    
    get negotiationNode(): CampaignDiplomacyNegotiationNodes.Entry | undefined {
      const collection = <CampaignDiplomacyNegotiationNodes.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyNegotiationNodes.KEY, CampaignDiplomacyNegotiationNodes.Entry);
      return collection.find(entry => entry.key === this._negotiationNode);
    }
    
    get participantSpeaking(): CampaignDiplomacyNegotiationRoles.Entry | undefined {
      const collection = <CampaignDiplomacyNegotiationRoles.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyNegotiationRoles.KEY, CampaignDiplomacyNegotiationRoles.Entry);
      return collection.find(entry => entry.key === this._participantSpeaking);
    }
    
    get speechType(): DiplomacyKeys.Entry | undefined {
      const collection = <DiplomacyKeys.Entry[]>this.collectionCache.getCollection(DiplomacyKeys.KEY, DiplomacyKeys.Entry);
      return collection.find(entry => entry.key === this._speechType);
    }
  }
}

export default CampaignDiplomacyNegotiationNodeSpeeches;
