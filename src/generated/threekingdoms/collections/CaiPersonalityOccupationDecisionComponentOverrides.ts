
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityOccupationDecisionComponents } from "./CaiPersonalityOccupationDecisionComponents";

export namespace CaiPersonalityOccupationDecisionComponentOverrides {
  export const KEY = new CollectionKey("cai_personality_occupation_decision_component_overrides");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _component: string;
    readonly _parent: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._component = values["component"];
      this._parent = values["parent"];
    }
    
    get component(): CaiPersonalityOccupationDecisionComponents.Entry | undefined {
      const collection = <CaiPersonalityOccupationDecisionComponents.Entry[]>this.collectionCache.getCollection(CaiPersonalityOccupationDecisionComponents.KEY, CaiPersonalityOccupationDecisionComponents.Entry);
      return collection.find(entry => entry.id === this._component);
    }
    
    get parent(): CaiPersonalityOccupationDecisionComponents.Entry | undefined {
      const collection = <CaiPersonalityOccupationDecisionComponents.Entry[]>this.collectionCache.getCollection(CaiPersonalityOccupationDecisionComponents.KEY, CaiPersonalityOccupationDecisionComponents.Entry);
      return collection.find(entry => entry.id === this._parent);
    }
  }
}

export default CaiPersonalityOccupationDecisionComponentOverrides;
