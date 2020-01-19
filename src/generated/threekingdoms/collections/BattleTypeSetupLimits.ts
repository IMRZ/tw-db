
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleTypes } from "./BattleTypes";

export namespace BattleTypeSetupLimits {
  export const KEY = new CollectionKey("battle_type_setup_limits");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _battleType: string;
    readonly weightingType: string;
    readonly armySize: string;
    readonly era: string;
    readonly maxInfantry: number;
    readonly maxCavalry: number;
    readonly maxArtillery: number;
    readonly maxSmallShip: number;
    readonly maxFrigate: number;
    readonly maxLineOfBattle: number;
    readonly id: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._battleType = values["battle_type"];
      this.weightingType = values["weighting_type"];
      this.armySize = values["army_size"];
      this.era = values["era"];
      this.maxInfantry = values["max_infantry"];
      this.maxCavalry = values["max_cavalry"];
      this.maxArtillery = values["max_artillery"];
      this.maxSmallShip = values["max_small_ship"];
      this.maxFrigate = values["max_frigate"];
      this.maxLineOfBattle = values["max_line_of_battle"];
      this.id = values["id"];
    }
    
    get battleType(): BattleTypes.Entry | undefined {
      const collection = <BattleTypes.Entry[]>this.collectionCache.getCollection(BattleTypes.KEY, BattleTypes.Entry);
      return collection.find(entry => entry.type === this._battleType);
    }
  }
}

export default BattleTypeSetupLimits;
