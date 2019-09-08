
import { CollectionCache, CollectionKey } from "../../../common";
import { ParticleEffects } from "./ParticleEffects";

export namespace CampaignVfxDescriptions {
  export const KEY = new CollectionKey("campaign_vfx_descriptions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _vfx: string;
    readonly xOffset: number;
    readonly yOffset: number;
    readonly zOffset: number;
    readonly oneShot: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._vfx = values["vfx"];
      this.xOffset = values["x_offset"];
      this.yOffset = values["y_offset"];
      this.zOffset = values["z_offset"];
      this.oneShot = !!values["one_shot"];
    }
    
    get vfx(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._vfx);
    }
  }
}

export default CampaignVfxDescriptions;
