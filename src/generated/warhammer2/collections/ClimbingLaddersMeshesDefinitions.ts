
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { Variants } from "./Variants";

export namespace ClimbingLaddersMeshesDefinitions {
  export const KEY = new CollectionKey("climbing_ladders_meshes_definitions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _factionKey: string;
    readonly _variantName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._factionKey = values["faction_key"];
      this._variantName = values["variant_name"];
    }
    
    get factionKey(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._factionKey);
    }
    
    get variantName(): Variants.Entry | undefined {
      const collection = <Variants.Entry[]>this.collectionCache.getCollection(Variants.KEY, Variants.Entry);
      return collection.find(entry => entry.variantName === this._variantName);
    }
  }
}

export default ClimbingLaddersMeshesDefinitions;
