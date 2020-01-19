
import { CollectionCache, CollectionKey } from "../../../common";
import { AudioGroupSounds } from "./AudioGroupSounds";

export namespace AudioArmourTypes {
  export const KEY = new CollectionKey("audio_armour_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly switch: string;
    readonly _groupMovement: string;
    readonly _groupCollision: string;
    readonly _groupImpact: string;
    readonly _groupMelee: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.switch = values["switch"];
      this._groupMovement = values["group_movement"];
      this._groupCollision = values["group_collision"];
      this._groupImpact = values["group_impact"];
      this._groupMelee = values["group_melee"];
    }
    
    get groupMovement(): AudioGroupSounds.Entry | undefined {
      const collection = <AudioGroupSounds.Entry[]>this.collectionCache.getCollection(AudioGroupSounds.KEY, AudioGroupSounds.Entry);
      return collection.find(entry => entry.name === this._groupMovement);
    }
    
    get groupCollision(): AudioGroupSounds.Entry | undefined {
      const collection = <AudioGroupSounds.Entry[]>this.collectionCache.getCollection(AudioGroupSounds.KEY, AudioGroupSounds.Entry);
      return collection.find(entry => entry.name === this._groupCollision);
    }
    
    get groupImpact(): AudioGroupSounds.Entry | undefined {
      const collection = <AudioGroupSounds.Entry[]>this.collectionCache.getCollection(AudioGroupSounds.KEY, AudioGroupSounds.Entry);
      return collection.find(entry => entry.name === this._groupImpact);
    }
    
    get groupMelee(): AudioGroupSounds.Entry | undefined {
      const collection = <AudioGroupSounds.Entry[]>this.collectionCache.getCollection(AudioGroupSounds.KEY, AudioGroupSounds.Entry);
      return collection.find(entry => entry.name === this._groupMelee);
    }
  }
}

export default AudioArmourTypes;
