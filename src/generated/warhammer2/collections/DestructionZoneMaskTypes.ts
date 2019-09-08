
import { CollectionCache, CollectionKey } from "../../../common";


export namespace DestructionZoneMaskTypes {
  export const KEY = new CollectionKey("destruction_zone_mask_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly layer0: string;
    readonly layer1: string;
    readonly layer2: string;
    readonly layer3: string;
    readonly battleDiffuse: string;
    readonly battleNormal: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.layer0 = values["layer_0"];
      this.layer1 = values["layer_1"];
      this.layer2 = values["layer_2"];
      this.layer3 = values["layer_3"];
      this.battleDiffuse = values["battle_diffuse"];
      this.battleNormal = values["battle_normal"];
    }
    
  }
}

export default DestructionZoneMaskTypes;
