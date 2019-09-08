
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityDiplomaticComponents } from "./CaiPersonalityDiplomaticComponents";
import { CaiPersonalityDiplomaticTreatyTypes } from "./CaiPersonalityDiplomaticTreatyTypes";

export namespace CaiPersonalityDiplomaticTreatyValues {
  export const KEY = new CollectionKey("cai_personality_diplomatic_treaty_values");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _componentId: string;
    readonly initialValue: number;
    readonly value1: number;
    readonly turn1: number;
    readonly value2: number;
    readonly turn2: number;
    readonly _treaty: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._componentId = values["component_id"];
      this.initialValue = values["initial_value"];
      this.value1 = values["value1"];
      this.turn1 = values["turn1"];
      this.value2 = values["value2"];
      this.turn2 = values["turn2"];
      this._treaty = values["treaty"];
    }
    
    get componentId(): CaiPersonalityDiplomaticComponents.Entry | undefined {
      const collection = <CaiPersonalityDiplomaticComponents.Entry[]>this.collectionCache.getCollection(CaiPersonalityDiplomaticComponents.KEY, CaiPersonalityDiplomaticComponents.Entry);
      return collection.find(entry => entry.id === this._componentId);
    }
    
    get treaty(): CaiPersonalityDiplomaticTreatyTypes.Entry | undefined {
      const collection = <CaiPersonalityDiplomaticTreatyTypes.Entry[]>this.collectionCache.getCollection(CaiPersonalityDiplomaticTreatyTypes.KEY, CaiPersonalityDiplomaticTreatyTypes.Entry);
      return collection.find(entry => entry.key === this._treaty);
    }
  }
}

export default CaiPersonalityDiplomaticTreatyValues;
