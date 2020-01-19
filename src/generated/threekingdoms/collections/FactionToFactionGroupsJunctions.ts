
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { FactionGroups } from "./FactionGroups";

export namespace FactionToFactionGroupsJunctions {
  export const KEY = new CollectionKey("faction_to_faction_groups_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _factionKey: string;
    readonly _factionGroupKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._factionKey = values["faction_key"];
      this._factionGroupKey = values["faction_group_key"];
    }
    
    get factionKey(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._factionKey);
    }
    
    get factionGroupKey(): FactionGroups.Entry | undefined {
      const collection = <FactionGroups.Entry[]>this.collectionCache.getCollection(FactionGroups.KEY, FactionGroups.Entry);
      return collection.find(entry => entry.key === this._factionGroupKey);
    }
  }
}

export default FactionToFactionGroupsJunctions;
