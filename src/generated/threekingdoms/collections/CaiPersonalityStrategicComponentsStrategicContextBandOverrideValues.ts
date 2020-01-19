
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityStrategicComponents } from "./CaiPersonalityStrategicComponents";
import { CaiStrategicContextTypes } from "./CaiStrategicContextTypes";

export namespace CaiPersonalityStrategicComponentsStrategicContextBandOverrideValues {
  export const KEY = new CollectionKey("cai_personality_strategic_components_strategic_context_band_override_values");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _caiPersonalityStrategicComponentsId: string;
    readonly _caiStrategicContextTypesKey: string;
    readonly strategicContextBandValue: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._caiPersonalityStrategicComponentsId = values["cai_personality_strategic_components_id"];
      this._caiStrategicContextTypesKey = values["cai_strategic_context_types_key"];
      this.strategicContextBandValue = values["strategic_context_band_value"];
    }
    
    get caiPersonalityStrategicComponentsId(): CaiPersonalityStrategicComponents.Entry | undefined {
      const collection = <CaiPersonalityStrategicComponents.Entry[]>this.collectionCache.getCollection(CaiPersonalityStrategicComponents.KEY, CaiPersonalityStrategicComponents.Entry);
      return collection.find(entry => entry.id === this._caiPersonalityStrategicComponentsId);
    }
    
    get caiStrategicContextTypesKey(): CaiStrategicContextTypes.Entry | undefined {
      const collection = <CaiStrategicContextTypes.Entry[]>this.collectionCache.getCollection(CaiStrategicContextTypes.KEY, CaiStrategicContextTypes.Entry);
      return collection.find(entry => entry.key === this._caiStrategicContextTypesKey);
    }
  }
}

export default CaiPersonalityStrategicComponentsStrategicContextBandOverrideValues;
