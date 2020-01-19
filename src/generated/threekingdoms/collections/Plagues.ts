
import { CollectionCache, CollectionKey } from "../../../common";
import { EffectBundles } from "./EffectBundles";

export namespace Plagues {
  export const KEY = new CollectionKey("plagues");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly name: string;
    readonly grade: number;
    readonly minimumSqualor: number;
    readonly infectivity: number;
    readonly lifetime: number;
    readonly _regionEffectBundle: string;
    readonly _militaryForceEffectsBundle: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.name = values["name"];
      this.grade = values["grade"];
      this.minimumSqualor = values["minimum_squalor"];
      this.infectivity = values["infectivity"];
      this.lifetime = values["lifetime"];
      this._regionEffectBundle = values["region_effect_bundle"];
      this._militaryForceEffectsBundle = values["military_force_effects_bundle"];
    }
    
    get regionEffectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._regionEffectBundle);
    }
    
    get militaryForceEffectsBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._militaryForceEffectsBundle);
    }
  }
}

export default Plagues;
