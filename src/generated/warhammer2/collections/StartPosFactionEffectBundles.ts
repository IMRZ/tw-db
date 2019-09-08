
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosFactions } from "./StartPosFactions";
import { EffectBundles } from "./EffectBundles";

export namespace StartPosFactionEffectBundles {
  export const KEY = new CollectionKey("start_pos_faction_effect_bundles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _startPosFaction: number;
    readonly _effectBundle: string;
    readonly duration: number;
    readonly unique: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._startPosFaction = values["start_pos_faction"];
      this._effectBundle = values["effect_bundle"];
      this.duration = values["duration"];
      this.unique = !!values["unique"];
    }
    
    get startPosFaction(): StartPosFactions.Entry | undefined {
      const collection = <StartPosFactions.Entry[]>this.collectionCache.getCollection(StartPosFactions.KEY, StartPosFactions.Entry);
      return collection.find(entry => entry.id === this._startPosFaction);
    }
    
    get effectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._effectBundle);
    }
  }
}

export default StartPosFactionEffectBundles;
