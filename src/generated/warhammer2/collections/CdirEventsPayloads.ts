
import { CollectionCache, CollectionKey } from "../../../common";
import { EffectBundles } from "./EffectBundles";

export namespace CdirEventsPayloads {
  export const KEY = new CollectionKey("cdir_events_payloads");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly payloadKey: string;
    readonly _effectBundleKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.payloadKey = values["payload_key"];
      this._effectBundleKey = values["effect_bundle_key"];
    }
    
    get effectBundleKey(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._effectBundleKey);
    }
  }
}

export default CdirEventsPayloads;
