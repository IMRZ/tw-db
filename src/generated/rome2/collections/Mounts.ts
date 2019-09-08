
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleAnimationsTable } from "./BattleAnimationsTable";
import { BattleEntities } from "./BattleEntities";
import { Variants } from "./Variants";
import { AudioMaterialsEnums } from "./AudioMaterialsEnums";

export namespace Mounts {
  export const KEY = new CollectionKey("mounts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _animation: string;
    readonly _entity: string;
    readonly mountArmour: number;
    readonly _variant: string;
    readonly _audioArmourType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._animation = values["animation"];
      this._entity = values["entity"];
      this.mountArmour = values["mount_armour"];
      this._variant = values["variant"];
      this._audioArmourType = values["audio_armour_type"];
    }
    
    get animation(): BattleAnimationsTable.Entry | undefined {
      const collection = <BattleAnimationsTable.Entry[]>this.collectionCache.getCollection(BattleAnimationsTable.KEY, BattleAnimationsTable.Entry);
      return collection.find(entry => entry.key === this._animation);
    }
    
    get entity(): BattleEntities.Entry | undefined {
      const collection = <BattleEntities.Entry[]>this.collectionCache.getCollection(BattleEntities.KEY, BattleEntities.Entry);
      return collection.find(entry => entry.key === this._entity);
    }
    
    get variant(): Variants.Entry | undefined {
      const collection = <Variants.Entry[]>this.collectionCache.getCollection(Variants.KEY, Variants.Entry);
      return collection.find(entry => entry.variantName === this._variant);
    }
    
    get audioArmourType(): AudioMaterialsEnums.Entry | undefined {
      const collection = <AudioMaterialsEnums.Entry[]>this.collectionCache.getCollection(AudioMaterialsEnums.KEY, AudioMaterialsEnums.Entry);
      return collection.find(entry => entry.key === this._audioArmourType);
    }
  }
}

export default Mounts;
