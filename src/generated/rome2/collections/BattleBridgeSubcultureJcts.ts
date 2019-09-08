
import { CollectionCache, CollectionKey } from "../../../common";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { BattlefieldBuildings } from "./BattlefieldBuildings";

export namespace BattleBridgeSubcultureJcts {
  export const KEY = new CollectionKey("battle_bridge_subculture_jcts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _subculture: string;
    readonly _simpleBridge: string;
    readonly _refinedBridge: any;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._subculture = values["subculture"];
      this._simpleBridge = values["simple_bridge"];
      this._refinedBridge = values["refined_bridge"];
    }
    
    get subculture(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subculture);
    }
    
    get simpleBridge(): BattlefieldBuildings.Entry | undefined {
      const collection = <BattlefieldBuildings.Entry[]>this.collectionCache.getCollection(BattlefieldBuildings.KEY, BattlefieldBuildings.Entry);
      return collection.find(entry => entry.key === this._simpleBridge);
    }
  }
}

export default BattleBridgeSubcultureJcts;
