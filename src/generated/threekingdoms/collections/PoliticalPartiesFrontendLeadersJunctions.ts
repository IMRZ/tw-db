
import { CollectionCache, CollectionKey } from "../../../common";
import { PoliticalParties } from "./PoliticalParties";
import { FrontendFactionLeaders } from "./FrontendFactionLeaders";

export namespace PoliticalPartiesFrontendLeadersJunctions {
  export const KEY = new CollectionKey("political_parties_frontend_leaders_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _politicalParty: string;
    readonly _frontendLeader: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._politicalParty = values["political_party"];
      this._frontendLeader = values["frontend_leader"];
    }
    
    get politicalParty(): PoliticalParties.Entry | undefined {
      const collection = <PoliticalParties.Entry[]>this.collectionCache.getCollection(PoliticalParties.KEY, PoliticalParties.Entry);
      return collection.find(entry => entry.key === this._politicalParty);
    }
    
    get frontendLeader(): FrontendFactionLeaders.Entry | undefined {
      const collection = <FrontendFactionLeaders.Entry[]>this.collectionCache.getCollection(FrontendFactionLeaders.KEY, FrontendFactionLeaders.Entry);
      return collection.find(entry => entry.key === this._frontendLeader);
    }
  }
}

export default PoliticalPartiesFrontendLeadersJunctions;
