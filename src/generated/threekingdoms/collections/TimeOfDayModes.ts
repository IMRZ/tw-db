
import { CollectionCache, CollectionKey } from "../../../common";


export namespace TimeOfDayModes {
  export const KEY = new CollectionKey("time_of_day_modes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly isDynamic: boolean;
    readonly isRealtimeSpeed: boolean;
    readonly hour: number;
    readonly name: string;
    readonly description: string;
    readonly speedMultiplier: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this.isDynamic = !!values["is_dynamic"];
      this.isRealtimeSpeed = !!values["is_realtime_speed"];
      this.hour = values["hour"];
      this.name = values["name"];
      this.description = values["description"];
      this.speedMultiplier = values["speed_multiplier"];
    }
    
  }
}

export default TimeOfDayModes;
