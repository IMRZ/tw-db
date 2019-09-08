
import { CollectionCache, CollectionKey } from "../../../common";
import { EffectBundles } from "./EffectBundles";

export namespace PoliticalParties {
  export const KEY = new CollectionKey("political_parties");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly nameLocalised: string;
    readonly playable: boolean;
    readonly _effectBundle: string;
    readonly descriptionLocalised: string;
    readonly initialPower: number;
    readonly campaignKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.nameLocalised = values["name_localised"];
      this.playable = !!values["playable"];
      this._effectBundle = values["effect_bundle"];
      this.descriptionLocalised = values["description_localised"];
      this.initialPower = values["initial_power"];
      this.campaignKey = values["campaign_key"];
    }
    
    get effectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._effectBundle);
    }
  }
}

export default PoliticalParties;
