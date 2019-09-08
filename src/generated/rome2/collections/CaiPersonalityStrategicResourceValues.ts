
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityStrategicComponents } from "./CaiPersonalityStrategicComponents";
import { Resources } from "./Resources";

export namespace CaiPersonalityStrategicResourceValues {
  export const KEY = new CollectionKey("cai_personality_strategic_resource_values");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _strategicComponent: string;
    readonly _resource: string;
    readonly tradeValue: number;
    readonly tradeFalloff: number;
    readonly ownershipValue: number;
    readonly ownershipFalloff: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._strategicComponent = values["strategic_component"];
      this._resource = values["resource"];
      this.tradeValue = values["trade_value"];
      this.tradeFalloff = values["trade_falloff"];
      this.ownershipValue = values["ownership_value"];
      this.ownershipFalloff = values["ownership_falloff"];
    }
    
    get strategicComponent(): CaiPersonalityStrategicComponents.Entry | undefined {
      const collection = <CaiPersonalityStrategicComponents.Entry[]>this.collectionCache.getCollection(CaiPersonalityStrategicComponents.KEY, CaiPersonalityStrategicComponents.Entry);
      return collection.find(entry => entry.id === this._strategicComponent);
    }
    
    get resource(): Resources.Entry | undefined {
      const collection = <Resources.Entry[]>this.collectionCache.getCollection(Resources.KEY, Resources.Entry);
      return collection.find(entry => entry.key === this._resource);
    }
  }
}

export default CaiPersonalityStrategicResourceValues;
