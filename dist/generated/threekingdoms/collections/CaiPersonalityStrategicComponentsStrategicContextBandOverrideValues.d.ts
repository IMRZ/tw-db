import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityStrategicComponents } from "./CaiPersonalityStrategicComponents";
import { CaiStrategicContextTypes } from "./CaiStrategicContextTypes";
export declare namespace CaiPersonalityStrategicComponentsStrategicContextBandOverrideValues {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _caiPersonalityStrategicComponentsId: string;
        readonly _caiStrategicContextTypesKey: string;
        readonly strategicContextBandValue: number;
        constructor(collectionCache: CollectionCache, values: any);
        get caiPersonalityStrategicComponentsId(): CaiPersonalityStrategicComponents.Entry | undefined;
        get caiStrategicContextTypesKey(): CaiStrategicContextTypes.Entry | undefined;
    }
}
export default CaiPersonalityStrategicComponentsStrategicContextBandOverrideValues;
