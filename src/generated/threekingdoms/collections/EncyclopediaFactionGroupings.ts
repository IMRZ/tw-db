
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { EncyclopediaFactionGroups } from "./EncyclopediaFactionGroups";

export namespace EncyclopediaFactionGroupings {
  export const KEY = new CollectionKey("encyclopedia_faction_groupings");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _faction: string;
    readonly _group: string;
    readonly order: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._faction = values["faction"];
      this._group = values["group"];
      this.order = values["order"];
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
    
    get group(): EncyclopediaFactionGroups.Entry | undefined {
      const collection = <EncyclopediaFactionGroups.Entry[]>this.collectionCache.getCollection(EncyclopediaFactionGroups.KEY, EncyclopediaFactionGroups.Entry);
      return collection.find(entry => entry.groupId === this._group);
    }
  }
}

export default EncyclopediaFactionGroupings;
