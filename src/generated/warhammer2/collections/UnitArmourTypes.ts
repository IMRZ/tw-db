
import { CollectionCache, CollectionKey } from "../../../common";
import { AudioArmourTypes } from "./AudioArmourTypes";

export namespace UnitArmourTypes {
  export const KEY = new CollectionKey("unit_armour_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly armourValue: number;
    readonly _audioType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.armourValue = values["armour_value"];
      this._audioType = values["audio_type"];
    }
    
    get audioType(): AudioArmourTypes.Entry | undefined {
      const collection = <AudioArmourTypes.Entry[]>this.collectionCache.getCollection(AudioArmourTypes.KEY, AudioArmourTypes.Entry);
      return collection.find(entry => entry.key === this._audioType);
    }
  }
}

export default UnitArmourTypes;
