
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { PoliticalParties } from "./PoliticalParties";

export namespace FactionPoliticalPartiesJunctions {
  export const KEY = new CollectionKey("faction_political_parties_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _factionKey: string;
    readonly _politicalPartyKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._factionKey = values["faction_key"];
      this._politicalPartyKey = values["political_party_key"];
    }
    
    get factionKey(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._factionKey);
    }
    
    get politicalPartyKey(): PoliticalParties.Entry | undefined {
      const collection = <PoliticalParties.Entry[]>this.collectionCache.getCollection(PoliticalParties.KEY, PoliticalParties.Entry);
      return collection.find(entry => entry.key === this._politicalPartyKey);
    }
  }
}

export default FactionPoliticalPartiesJunctions;
