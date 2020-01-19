
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleAnimationsTable } from "./BattleAnimationsTable";
import { BattleEntities } from "./BattleEntities";
import { AudioArmourTypes } from "./AudioArmourTypes";
import { AudioVoiceoverCultures } from "./AudioVoiceoverCultures";

export namespace Mounts {
  export const KEY = new CollectionKey("mounts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _animation: string;
    readonly _entity: string;
    readonly _audioArmourType: string;
    readonly _voiceover: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._animation = values["animation"];
      this._entity = values["entity"];
      this._audioArmourType = values["audio_armour_type"];
      this._voiceover = values["voiceover"];
    }
    
    get animation(): BattleAnimationsTable.Entry | undefined {
      const collection = <BattleAnimationsTable.Entry[]>this.collectionCache.getCollection(BattleAnimationsTable.KEY, BattleAnimationsTable.Entry);
      return collection.find(entry => entry.key === this._animation);
    }
    
    get entity(): BattleEntities.Entry | undefined {
      const collection = <BattleEntities.Entry[]>this.collectionCache.getCollection(BattleEntities.KEY, BattleEntities.Entry);
      return collection.find(entry => entry.key === this._entity);
    }
    
    get audioArmourType(): AudioArmourTypes.Entry | undefined {
      const collection = <AudioArmourTypes.Entry[]>this.collectionCache.getCollection(AudioArmourTypes.KEY, AudioArmourTypes.Entry);
      return collection.find(entry => entry.key === this._audioArmourType);
    }
    
    get voiceover(): AudioVoiceoverCultures.Entry | undefined {
      const collection = <AudioVoiceoverCultures.Entry[]>this.collectionCache.getCollection(AudioVoiceoverCultures.KEY, AudioVoiceoverCultures.Entry);
      return collection.find(entry => entry.name === this._voiceover);
    }
  }
}

export default Mounts;
