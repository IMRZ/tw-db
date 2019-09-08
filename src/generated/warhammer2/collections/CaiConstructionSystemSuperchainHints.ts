
import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingSuperchains } from "./BuildingSuperchains";

export namespace CaiConstructionSystemSuperchainHints {
  export const KEY = new CollectionKey("cai_construction_system_superchain_hints");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _superChainKey: string;
    readonly militarySpecialisationRecommended: boolean;
    readonly economicSpecialisationRecommended: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._superChainKey = values["super_chain_key"];
      this.militarySpecialisationRecommended = !!values["military_specialisation_recommended"];
      this.economicSpecialisationRecommended = !!values["economic_specialisation_recommended"];
    }
    
    get superChainKey(): BuildingSuperchains.Entry | undefined {
      const collection = <BuildingSuperchains.Entry[]>this.collectionCache.getCollection(BuildingSuperchains.KEY, BuildingSuperchains.Entry);
      return collection.find(entry => entry.key === this._superChainKey);
    }
  }
}

export default CaiConstructionSystemSuperchainHints;
