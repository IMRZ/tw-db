
import { CollectionCache, CollectionKey } from "../../../common";
import { AudioBattleEnvironments } from "./AudioBattleEnvironments";
import { AudioBattleEnvironmentReverbTypes } from "./AudioBattleEnvironmentReverbTypes";
import { AudioBattleEnvironmentReverbs } from "./AudioBattleEnvironmentReverbs";

export namespace AudioBattleEnvironmentReverbJunctions {
  export const KEY = new CollectionKey("audio_battle_environment_reverb_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _environment: string;
    readonly _type: string;
    readonly _reverb: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._environment = values["environment"];
      this._type = values["type"];
      this._reverb = values["reverb"];
    }
    
    get environment(): AudioBattleEnvironments.Entry | undefined {
      const collection = <AudioBattleEnvironments.Entry[]>this.collectionCache.getCollection(AudioBattleEnvironments.KEY, AudioBattleEnvironments.Entry);
      return collection.find(entry => entry.name === this._environment);
    }
    
    get type(): AudioBattleEnvironmentReverbTypes.Entry | undefined {
      const collection = <AudioBattleEnvironmentReverbTypes.Entry[]>this.collectionCache.getCollection(AudioBattleEnvironmentReverbTypes.KEY, AudioBattleEnvironmentReverbTypes.Entry);
      return collection.find(entry => entry.type === this._type);
    }
    
    get reverb(): AudioBattleEnvironmentReverbs.Entry | undefined {
      const collection = <AudioBattleEnvironmentReverbs.Entry[]>this.collectionCache.getCollection(AudioBattleEnvironmentReverbs.KEY, AudioBattleEnvironmentReverbs.Entry);
      return collection.find(entry => entry.name === this._reverb);
    }
  }
}

export default AudioBattleEnvironmentReverbJunctions;
