
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignPayloads } from "./CampaignPayloads";
import { EffectBundles } from "./EffectBundles";

export namespace CampaignPayloadEffectBundles {
  export const KEY = new CollectionKey("campaign_payload_effect_bundles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _payload: string;
    readonly _effectBundle: string;
    readonly duration: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._payload = values["payload"];
      this._effectBundle = values["effect_bundle"];
      this.duration = values["duration"];
    }
    
    get payload(): CampaignPayloads.Entry | undefined {
      const collection = <CampaignPayloads.Entry[]>this.collectionCache.getCollection(CampaignPayloads.KEY, CampaignPayloads.Entry);
      return collection.find(entry => entry.key === this._payload);
    }
    
    get effectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._effectBundle);
    }
  }
}

export default CampaignPayloadEffectBundles;
