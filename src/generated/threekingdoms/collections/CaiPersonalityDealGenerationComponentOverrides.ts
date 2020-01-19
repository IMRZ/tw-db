
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityDealGenerationComponents } from "./CaiPersonalityDealGenerationComponents";

export namespace CaiPersonalityDealGenerationComponentOverrides {
  export const KEY = new CollectionKey("cai_personality_deal_generation_component_overrides");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _component: string;
    readonly _parent: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._component = values["component"];
      this._parent = values["parent"];
    }
    
    get component(): CaiPersonalityDealGenerationComponents.Entry | undefined {
      const collection = <CaiPersonalityDealGenerationComponents.Entry[]>this.collectionCache.getCollection(CaiPersonalityDealGenerationComponents.KEY, CaiPersonalityDealGenerationComponents.Entry);
      return collection.find(entry => entry.id === this._component);
    }
    
    get parent(): CaiPersonalityDealGenerationComponents.Entry | undefined {
      const collection = <CaiPersonalityDealGenerationComponents.Entry[]>this.collectionCache.getCollection(CaiPersonalityDealGenerationComponents.KEY, CaiPersonalityDealGenerationComponents.Entry);
      return collection.find(entry => entry.id === this._parent);
    }
  }
}

export default CaiPersonalityDealGenerationComponentOverrides;
