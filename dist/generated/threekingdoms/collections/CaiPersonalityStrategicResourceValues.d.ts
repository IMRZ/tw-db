import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityStrategicComponents } from "./CaiPersonalityStrategicComponents";
import { Resources } from "./Resources";
export declare namespace CaiPersonalityStrategicResourceValues {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _strategicComponent: string;
        readonly _resource: string;
        readonly tradeValue: number;
        readonly tradeFalloff: number;
        readonly ownershipValue: number;
        readonly ownershipFalloff: number;
        constructor(collectionCache: CollectionCache, values: any);
        get strategicComponent(): CaiPersonalityStrategicComponents.Entry | undefined;
        get resource(): Resources.Entry | undefined;
    }
}
export default CaiPersonalityStrategicResourceValues;
