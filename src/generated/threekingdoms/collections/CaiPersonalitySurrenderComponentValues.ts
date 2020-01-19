
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalitySurrenderComponents } from "./CaiPersonalitySurrenderComponents";
import { CaiPersonalitySurrenderComponentContexts } from "./CaiPersonalitySurrenderComponentContexts";

export namespace CaiPersonalitySurrenderComponentValues {
  export const KEY = new CollectionKey("cai_personality_surrender_component_values");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _componentKey: string;
    readonly _contextKey: string;
    readonly ratioMin: number;
    readonly ratioMax: number;
    readonly ratioCharacterMin: number;
    readonly ratioCharacterMax: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._componentKey = values["component_key"];
      this._contextKey = values["context_key"];
      this.ratioMin = values["ratio_min"];
      this.ratioMax = values["ratio_max"];
      this.ratioCharacterMin = values["ratio_character_min"];
      this.ratioCharacterMax = values["ratio_character_max"];
    }
    
    get componentKey(): CaiPersonalitySurrenderComponents.Entry | undefined {
      const collection = <CaiPersonalitySurrenderComponents.Entry[]>this.collectionCache.getCollection(CaiPersonalitySurrenderComponents.KEY, CaiPersonalitySurrenderComponents.Entry);
      return collection.find(entry => entry.key === this._componentKey);
    }
    
    get contextKey(): CaiPersonalitySurrenderComponentContexts.Entry | undefined {
      const collection = <CaiPersonalitySurrenderComponentContexts.Entry[]>this.collectionCache.getCollection(CaiPersonalitySurrenderComponentContexts.KEY, CaiPersonalitySurrenderComponentContexts.Entry);
      return collection.find(entry => entry.key === this._contextKey);
    }
  }
}

export default CaiPersonalitySurrenderComponentValues;
