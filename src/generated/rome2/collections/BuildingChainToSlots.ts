
import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingChains } from "./BuildingChains";
import { Slots } from "./Slots";

export namespace BuildingChainToSlots {
  export const KEY = new CollectionKey("building_chain_to_slots");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _chain: string;
    readonly _slot: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._chain = values["chain"];
      this._slot = values["slot"];
    }
    
    get chain(): BuildingChains.Entry | undefined {
      const collection = <BuildingChains.Entry[]>this.collectionCache.getCollection(BuildingChains.KEY, BuildingChains.Entry);
      return collection.find(entry => entry.key === this._chain);
    }
    
    get slot(): Slots.Entry | undefined {
      const collection = <Slots.Entry[]>this.collectionCache.getCollection(Slots.KEY, Slots.Entry);
      return collection.find(entry => entry.slot === this._slot);
    }
  }
}

export default BuildingChainToSlots;
