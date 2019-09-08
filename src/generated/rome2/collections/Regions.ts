
import { CollectionCache, CollectionKey } from "../../../common";
import { EffectBundles } from "./EffectBundles";

export namespace Regions {
  export const KEY = new CollectionKey("regions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly onscreen: string;
    readonly paletteEntry: number;
    readonly r: number;
    readonly g: number;
    readonly b: number;
    readonly battleName: string;
    readonly inEncyclopedia: boolean;
    readonly isSea: boolean;
    readonly _ownerBundle: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.onscreen = values["onscreen"];
      this.paletteEntry = values["palette_entry"];
      this.r = values["r"];
      this.g = values["g"];
      this.b = values["b"];
      this.battleName = values["battle_name"];
      this.inEncyclopedia = !!values["in_encyclopedia"];
      this.isSea = !!values["is_sea"];
      this._ownerBundle = values["owner_bundle"];
    }
    
    get ownerBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._ownerBundle);
    }
  }
}

export default Regions;
