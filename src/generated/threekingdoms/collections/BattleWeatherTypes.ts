
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BattleWeatherTypes {
  export const KEY = new CollectionKey("battle_weather_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly level: number;
    readonly precipitationType: string;
    readonly numParticles: number;
    readonly particleSize: number;
    readonly particleSpeed: number;
    readonly onscreen: string;
    readonly listOrder: number;
    readonly navalAppropriate: boolean;
    readonly accuracyMultiplier: number;
    readonly bowReloadBonus: number;
    readonly gunReloadBonus: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.level = values["level"];
      this.precipitationType = values["precipitation_type"];
      this.numParticles = values["num_particles"];
      this.particleSize = values["particle_size"];
      this.particleSpeed = values["particle_speed"];
      this.onscreen = values["onscreen"];
      this.listOrder = values["list_order"];
      this.navalAppropriate = !!values["naval_appropriate"];
      this.accuracyMultiplier = values["accuracy_multiplier"];
      this.bowReloadBonus = values["bow_reload_bonus"];
      this.gunReloadBonus = values["gun_reload_bonus"];
    }
    
  }
}

export default BattleWeatherTypes;
