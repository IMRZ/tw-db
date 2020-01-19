
import { CollectionCache, CollectionKey } from "../../../common";
import { MercenaryPools } from "./MercenaryPools";
import { MercenaryUnitGroups } from "./MercenaryUnitGroups";
import { Factions } from "./Factions";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { Technologies } from "./Technologies";

export namespace MercenaryPoolToGroupsJunctions {
  export const KEY = new CollectionKey("mercenary_pool_to_groups_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: number;
    readonly _pool: string;
    readonly _group: string;
    readonly initialUnitCount: number;
    readonly _factionRequirement: string;
    readonly _subcultureRequirement: string;
    readonly _techRequirement: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._pool = values["pool"];
      this._group = values["group"];
      this.initialUnitCount = values["initial_unit_count"];
      this._factionRequirement = values["faction_requirement"];
      this._subcultureRequirement = values["subculture_requirement"];
      this._techRequirement = values["tech_requirement"];
    }
    
    get pool(): MercenaryPools.Entry | undefined {
      const collection = <MercenaryPools.Entry[]>this.collectionCache.getCollection(MercenaryPools.KEY, MercenaryPools.Entry);
      return collection.find(entry => entry.key === this._pool);
    }
    
    get group(): MercenaryUnitGroups.Entry | undefined {
      const collection = <MercenaryUnitGroups.Entry[]>this.collectionCache.getCollection(MercenaryUnitGroups.KEY, MercenaryUnitGroups.Entry);
      return collection.find(entry => entry.key === this._group);
    }
    
    get factionRequirement(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._factionRequirement);
    }
    
    get subcultureRequirement(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subcultureRequirement);
    }
    
    get techRequirement(): Technologies.Entry | undefined {
      const collection = <Technologies.Entry[]>this.collectionCache.getCollection(Technologies.KEY, Technologies.Entry);
      return collection.find(entry => entry.key === this._techRequirement);
    }
  }
}

export default MercenaryPoolToGroupsJunctions;
