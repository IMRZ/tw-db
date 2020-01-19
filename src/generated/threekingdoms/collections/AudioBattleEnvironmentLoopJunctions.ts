
import { CollectionCache, CollectionKey } from "../../../common";
import { AudioBattleEnvironments } from "./AudioBattleEnvironments";
import { AudioBattleEnvironmentTypes } from "./AudioBattleEnvironmentTypes";
import { AudioBattleEnvironmentLoops } from "./AudioBattleEnvironmentLoops";

export namespace AudioBattleEnvironmentLoopJunctions {
  export const KEY = new CollectionKey("audio_battle_environment_loop_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _environment: string;
    readonly _type: string;
    readonly _loop: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._environment = values["environment"];
      this._type = values["type"];
      this._loop = values["loop"];
    }
    
    get environment(): AudioBattleEnvironments.Entry | undefined {
      const collection = <AudioBattleEnvironments.Entry[]>this.collectionCache.getCollection(AudioBattleEnvironments.KEY, AudioBattleEnvironments.Entry);
      return collection.find(entry => entry.name === this._environment);
    }
    
    get type(): AudioBattleEnvironmentTypes.Entry | undefined {
      const collection = <AudioBattleEnvironmentTypes.Entry[]>this.collectionCache.getCollection(AudioBattleEnvironmentTypes.KEY, AudioBattleEnvironmentTypes.Entry);
      return collection.find(entry => entry.name === this._type);
    }
    
    get loop(): AudioBattleEnvironmentLoops.Entry | undefined {
      const collection = <AudioBattleEnvironmentLoops.Entry[]>this.collectionCache.getCollection(AudioBattleEnvironmentLoops.KEY, AudioBattleEnvironmentLoops.Entry);
      return collection.find(entry => entry.name === this._loop);
    }
  }
}

export default AudioBattleEnvironmentLoopJunctions;
