import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityCulturalComponents } from "./CaiPersonalityCulturalComponents";
import { CulturesSubcultures } from "./CulturesSubcultures";
export declare namespace CaiPersonalityCulturalRelationsOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _componentId: string;
        readonly _source: string;
        readonly _target: string;
        readonly positiveAttitudeMultiplier: number;
        readonly negativeAttitudeMultiplier: number;
        readonly attitudeBase: number;
        constructor(collectionCache: CollectionCache, values: any);
        get componentId(): CaiPersonalityCulturalComponents.Entry | undefined;
        get source(): CulturesSubcultures.Entry | undefined;
        get target(): CulturesSubcultures.Entry | undefined;
    }
}
export default CaiPersonalityCulturalRelationsOverrides;
