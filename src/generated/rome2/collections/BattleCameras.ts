
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BattleCameras {
  export const KEY = new CollectionKey("battle_cameras");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly minHeight: number;
    readonly maxHeightSmall: number;
    readonly maxHeightLarge: number;
    readonly minFortMaxHeight: number;
    readonly moveSpeedMinMultiplier: number;
    readonly moveSpeedMaxMultiplier: number;
    readonly turnSpeedMultiplier: number;
    readonly moveFastMultiplier: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.minHeight = values["min_height"];
      this.maxHeightSmall = values["max_height_small"];
      this.maxHeightLarge = values["max_height_large"];
      this.minFortMaxHeight = values["min_fort_max_height"];
      this.moveSpeedMinMultiplier = values["move_speed_min_multiplier"];
      this.moveSpeedMaxMultiplier = values["move_speed_max_multiplier"];
      this.turnSpeedMultiplier = values["turn_speed_multiplier"];
      this.moveFastMultiplier = values["move_fast_multiplier"];
    }
    
  }
}

export default BattleCameras;
