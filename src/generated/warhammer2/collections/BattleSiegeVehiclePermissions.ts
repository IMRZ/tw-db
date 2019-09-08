
import { CollectionCache, CollectionKey } from "../../../common";
import { BattlefieldSiegeVehicles } from "./BattlefieldSiegeVehicles";
import { Factions } from "./Factions";

export namespace BattleSiegeVehiclePermissions {
  export const KEY = new CollectionKey("battle_siege_vehicle_permissions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _vehicle: string;
    readonly _faction: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._vehicle = values["vehicle"];
      this._faction = values["faction"];
    }
    
    get vehicle(): BattlefieldSiegeVehicles.Entry | undefined {
      const collection = <BattlefieldSiegeVehicles.Entry[]>this.collectionCache.getCollection(BattlefieldSiegeVehicles.KEY, BattlefieldSiegeVehicles.Entry);
      return collection.find(entry => entry.key === this._vehicle);
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
  }
}

export default BattleSiegeVehiclePermissions;
