
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityCulturalComponents } from "./CaiPersonalityCulturalComponents";
import { CulturesSubcultures } from "./CulturesSubcultures";

export namespace CaiPersonalityCulturalRelationsOverrides {
  export const KEY = new CollectionKey("cai_personality_cultural_relations_overrides");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _componentId: string;
    readonly _source: string;
    readonly _target: string;
    readonly positiveAttitudeMultiplier: number;
    readonly negativeAttitudeMultiplier: number;
    readonly attitudeBase: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._componentId = values["component_id"];
      this._source = values["source"];
      this._target = values["target"];
      this.positiveAttitudeMultiplier = values["positive_attitude_multiplier"];
      this.negativeAttitudeMultiplier = values["negative_attitude_multiplier"];
      this.attitudeBase = values["attitude_base"];
    }
    
    get componentId(): CaiPersonalityCulturalComponents.Entry | undefined {
      const collection = <CaiPersonalityCulturalComponents.Entry[]>this.collectionCache.getCollection(CaiPersonalityCulturalComponents.KEY, CaiPersonalityCulturalComponents.Entry);
      return collection.find(entry => entry.id === this._componentId);
    }
    
    get source(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._source);
    }
    
    get target(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._target);
    }
  }
}

export default CaiPersonalityCulturalRelationsOverrides;
