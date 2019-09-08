
import { CollectionCache, CollectionKey } from "../../../common";
import { BattlefieldSiegeVehicles } from "./BattlefieldSiegeVehicles";

export namespace BattlefieldDeployableSiegeItems {
  export const KEY = new CollectionKey("battlefield_deployable_siege_items");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _battlefieldSiegeVehicle: string;
    readonly level: number;
    readonly type: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._battlefieldSiegeVehicle = values["battlefield_siege_vehicle"];
      this.level = values["level"];
      this.type = values["type"];
    }
    
    get battlefieldSiegeVehicle(): BattlefieldSiegeVehicles.Entry | undefined {
      const collection = <BattlefieldSiegeVehicles.Entry[]>this.collectionCache.getCollection(BattlefieldSiegeVehicles.KEY, BattlefieldSiegeVehicles.Entry);
      return collection.find(entry => entry.key === this._battlefieldSiegeVehicle);
    }
  }
}

export default BattlefieldDeployableSiegeItems;
