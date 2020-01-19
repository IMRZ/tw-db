
import { CollectionCache, CollectionKey } from "../../../common";
import { AudioEntityTypes } from "./AudioEntityTypes";
import { AudioGroupSoundSituations } from "./AudioGroupSoundSituations";
import { AudioAbilities } from "./AudioAbilities";
import { AudioGroupSounds } from "./AudioGroupSounds";

export namespace AudioGroupSoundAssignments {
  export const KEY = new CollectionKey("audio_group_sound_assignments");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _entityType: string;
    readonly _situation: string;
    readonly _ability: string;
    readonly _groupSound: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._entityType = values["entity_type"];
      this._situation = values["situation"];
      this._ability = values["ability"];
      this._groupSound = values["group_sound"];
    }
    
    get entityType(): AudioEntityTypes.Entry | undefined {
      const collection = <AudioEntityTypes.Entry[]>this.collectionCache.getCollection(AudioEntityTypes.KEY, AudioEntityTypes.Entry);
      return collection.find(entry => entry.key === this._entityType);
    }
    
    get situation(): AudioGroupSoundSituations.Entry | undefined {
      const collection = <AudioGroupSoundSituations.Entry[]>this.collectionCache.getCollection(AudioGroupSoundSituations.KEY, AudioGroupSoundSituations.Entry);
      return collection.find(entry => entry.situation === this._situation);
    }
    
    get ability(): AudioAbilities.Entry | undefined {
      const collection = <AudioAbilities.Entry[]>this.collectionCache.getCollection(AudioAbilities.KEY, AudioAbilities.Entry);
      return collection.find(entry => entry.key === this._ability);
    }
    
    get groupSound(): AudioGroupSounds.Entry | undefined {
      const collection = <AudioGroupSounds.Entry[]>this.collectionCache.getCollection(AudioGroupSounds.KEY, AudioGroupSounds.Entry);
      return collection.find(entry => entry.name === this._groupSound);
    }
  }
}

export default AudioGroupSoundAssignments;
