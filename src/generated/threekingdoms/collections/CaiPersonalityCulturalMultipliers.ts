
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityCulturalComponents } from "./CaiPersonalityCulturalComponents";
import { Religions } from "./Religions";

export namespace CaiPersonalityCulturalMultipliers {
  export const KEY = new CollectionKey("cai_personality_cultural_multipliers");

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
    
    get source(): Religions.Entry | undefined {
      const collection = <Religions.Entry[]>this.collectionCache.getCollection(Religions.KEY, Religions.Entry);
      return collection.find(entry => entry.religionKey === this._source);
    }
    
    get target(): Religions.Entry | undefined {
      const collection = <Religions.Entry[]>this.collectionCache.getCollection(Religions.KEY, Religions.Entry);
      return collection.find(entry => entry.religionKey === this._target);
    }
  }
}

export default CaiPersonalityCulturalMultipliers;
