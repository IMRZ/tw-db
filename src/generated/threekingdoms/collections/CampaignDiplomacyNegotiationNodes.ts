
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyNegotiationParticipantSets } from "./CampaignDiplomacyNegotiationParticipantSets";

export namespace CampaignDiplomacyNegotiationNodes {
  export const KEY = new CollectionKey("campaign_diplomacy_negotiation_nodes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _scope: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._scope = values["scope"];
    }
    
    get scope(): CampaignDiplomacyNegotiationParticipantSets.Entry | undefined {
      const collection = <CampaignDiplomacyNegotiationParticipantSets.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyNegotiationParticipantSets.KEY, CampaignDiplomacyNegotiationParticipantSets.Entry);
      return collection.find(entry => entry.set === this._scope);
    }
  }
}

export default CampaignDiplomacyNegotiationNodes;
