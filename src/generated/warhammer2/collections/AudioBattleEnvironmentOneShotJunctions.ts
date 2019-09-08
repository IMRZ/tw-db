
import { CollectionCache, CollectionKey } from "../../../common";
import { AudioBattleEnvironments } from "./AudioBattleEnvironments";
import { AudioBattleEnvironmentTypes } from "./AudioBattleEnvironmentTypes";
import { AudioBattleEnvironmentOneShots } from "./AudioBattleEnvironmentOneShots";

export namespace AudioBattleEnvironmentOneShotJunctions {
  export const KEY = new CollectionKey("audio_battle_environment_one_shot_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _environment: string;
    readonly _type: string;
    readonly _oneShot: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._environment = values["environment"];
      this._type = values["type"];
      this._oneShot = values["one_shot"];
    }
    
    get environment(): AudioBattleEnvironments.Entry | undefined {
      const collection = <AudioBattleEnvironments.Entry[]>this.collectionCache.getCollection(AudioBattleEnvironments.KEY, AudioBattleEnvironments.Entry);
      return collection.find(entry => entry.name === this._environment);
    }
    
    get type(): AudioBattleEnvironmentTypes.Entry | undefined {
      const collection = <AudioBattleEnvironmentTypes.Entry[]>this.collectionCache.getCollection(AudioBattleEnvironmentTypes.KEY, AudioBattleEnvironmentTypes.Entry);
      return collection.find(entry => entry.name === this._type);
    }
    
    get oneShot(): AudioBattleEnvironmentOneShots.Entry | undefined {
      const collection = <AudioBattleEnvironmentOneShots.Entry[]>this.collectionCache.getCollection(AudioBattleEnvironmentOneShots.KEY, AudioBattleEnvironmentOneShots.Entry);
      return collection.find(entry => entry.name === this._oneShot);
    }
  }
}

export default AudioBattleEnvironmentOneShotJunctions;
