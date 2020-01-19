
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityDiplomaticComponents } from "./CaiPersonalityDiplomaticComponents";

export namespace CaiPersonalityDiplomaticComponentOverrides {
  export const KEY = new CollectionKey("cai_personality_diplomatic_component_overrides");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _component: string;
    readonly _parent: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._component = values["component"];
      this._parent = values["parent"];
    }
    
    get component(): CaiPersonalityDiplomaticComponents.Entry | undefined {
      const collection = <CaiPersonalityDiplomaticComponents.Entry[]>this.collectionCache.getCollection(CaiPersonalityDiplomaticComponents.KEY, CaiPersonalityDiplomaticComponents.Entry);
      return collection.find(entry => entry.id === this._component);
    }
    
    get parent(): CaiPersonalityDiplomaticComponents.Entry | undefined {
      const collection = <CaiPersonalityDiplomaticComponents.Entry[]>this.collectionCache.getCollection(CaiPersonalityDiplomaticComponents.KEY, CaiPersonalityDiplomaticComponents.Entry);
      return collection.find(entry => entry.id === this._parent);
    }
  }
}

export default CaiPersonalityDiplomaticComponentOverrides;
