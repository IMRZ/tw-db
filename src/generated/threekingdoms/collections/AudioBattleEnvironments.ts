
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AudioBattleEnvironments {
  export const KEY = new CollectionKey("audio_battle_environments");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly name: string;
    readonly isDefault: boolean;
    readonly globalWaterRtpc: string;
    readonly globalPlainsRtpc: string;
    readonly globalForestRtpc: string;
    readonly globalUrbanRtpc: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.name = values["name"];
      this.isDefault = !!values["is_default"];
      this.globalWaterRtpc = values["global_water_rtpc"];
      this.globalPlainsRtpc = values["global_plains_rtpc"];
      this.globalForestRtpc = values["global_forest_rtpc"];
      this.globalUrbanRtpc = values["global_urban_rtpc"];
    }
    
  }
}

export default AudioBattleEnvironments;
