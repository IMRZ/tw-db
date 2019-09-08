
import { CollectionCache, CollectionKey } from "../../../common";
import { BattlefieldSiegeVehicles } from "./BattlefieldSiegeVehicles";
import { BattlefieldEnginesAutonomous } from "./BattlefieldEnginesAutonomous";

export namespace BattlefieldSiegeVehiclesToAutonomousEngines {
  export const KEY = new CollectionKey("battlefield_siege_vehicles_to_autonomous_engines");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _vehicle: string;
    readonly _engine: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._vehicle = values["vehicle"];
      this._engine = values["engine"];
    }
    
    get vehicle(): BattlefieldSiegeVehicles.Entry | undefined {
      const collection = <BattlefieldSiegeVehicles.Entry[]>this.collectionCache.getCollection(BattlefieldSiegeVehicles.KEY, BattlefieldSiegeVehicles.Entry);
      return collection.find(entry => entry.key === this._vehicle);
    }
    
    get engine(): BattlefieldEnginesAutonomous.Entry | undefined {
      const collection = <BattlefieldEnginesAutonomous.Entry[]>this.collectionCache.getCollection(BattlefieldEnginesAutonomous.KEY, BattlefieldEnginesAutonomous.Entry);
      return collection.find(entry => entry.key === this._engine);
    }
  }
}

export default BattlefieldSiegeVehiclesToAutonomousEngines;
