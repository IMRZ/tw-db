
import { CollectionCache, CollectionKey } from "../../../common";
import { PoliticalParties } from "./PoliticalParties";
import { EffectBundles } from "./EffectBundles";

export namespace PoliticalPartiesPowerEffectBundles {
  export const KEY = new CollectionKey("political_parties_power_effect_bundles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _politicalPartyKey: string;
    readonly _effectBundle: string;
    readonly powerLevel: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._politicalPartyKey = values["political_party_key"];
      this._effectBundle = values["effect_bundle"];
      this.powerLevel = values["power_level"];
    }
    
    get politicalPartyKey(): PoliticalParties.Entry | undefined {
      const collection = <PoliticalParties.Entry[]>this.collectionCache.getCollection(PoliticalParties.KEY, PoliticalParties.Entry);
      return collection.find(entry => entry.key === this._politicalPartyKey);
    }
    
    get effectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._effectBundle);
    }
  }
}

export default PoliticalPartiesPowerEffectBundles;
