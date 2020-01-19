
import { CollectionCache, CollectionKey } from "../../../common";
import { BattlefieldSiegeVehicles } from "./BattlefieldSiegeVehicles";

export namespace BattlefieldSiegeVehiclesCustomBattles {
  export const KEY = new CollectionKey("battlefield_siege_vehicles_custom_battles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _vehicle: string;
    readonly cap: number;
    readonly probability: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._vehicle = values["vehicle"];
      this.cap = values["cap"];
      this.probability = values["probability"];
    }
    
    get vehicle(): BattlefieldSiegeVehicles.Entry | undefined {
      const collection = <BattlefieldSiegeVehicles.Entry[]>this.collectionCache.getCollection(BattlefieldSiegeVehicles.KEY, BattlefieldSiegeVehicles.Entry);
      return collection.find(entry => entry.key === this._vehicle);
    }
  }
}

export default BattlefieldSiegeVehiclesCustomBattles;
