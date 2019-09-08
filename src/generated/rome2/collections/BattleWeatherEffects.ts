
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleWeatherTypes } from "./BattleWeatherTypes";
import { UiUnitStats } from "./UiUnitStats";

export namespace BattleWeatherEffects {
  export const KEY = new CollectionKey("battle_weather_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _weatherType: string;
    readonly _stat: string;
    readonly value: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._weatherType = values["weather_type"];
      this._stat = values["stat"];
      this.value = values["value"];
    }
    
    get weatherType(): BattleWeatherTypes.Entry | undefined {
      const collection = <BattleWeatherTypes.Entry[]>this.collectionCache.getCollection(BattleWeatherTypes.KEY, BattleWeatherTypes.Entry);
      return collection.find(entry => entry.key === this._weatherType);
    }
    
    get stat(): UiUnitStats.Entry | undefined {
      const collection = <UiUnitStats.Entry[]>this.collectionCache.getCollection(UiUnitStats.KEY, UiUnitStats.Entry);
      return collection.find(entry => entry.key === this._stat);
    }
  }
}

export default BattleWeatherEffects;
