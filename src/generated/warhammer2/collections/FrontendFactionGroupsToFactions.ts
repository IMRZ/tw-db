
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { FrontendFactionGroups } from "./FrontendFactionGroups";

export namespace FrontendFactionGroupsToFactions {
  export const KEY = new CollectionKey("frontend_faction_groups_to_factions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _factionKey: string;
    readonly _factionGroup: string;
    readonly sortOrder: number;
    readonly isMajorFaction: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._factionKey = values["faction_key"];
      this._factionGroup = values["faction_group"];
      this.sortOrder = values["sort_order"];
      this.isMajorFaction = !!values["is_major_faction"];
    }
    
    get factionKey(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._factionKey);
    }
    
    get factionGroup(): FrontendFactionGroups.Entry | undefined {
      const collection = <FrontendFactionGroups.Entry[]>this.collectionCache.getCollection(FrontendFactionGroups.KEY, FrontendFactionGroups.Entry);
      return collection.find(entry => entry.key === this._factionGroup);
    }
  }
}

export default FrontendFactionGroupsToFactions;
