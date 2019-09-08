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
        readonly componentId: CaiPersonalityCulturalComponents.Entry | undefined;
        readonly source: CulturesSubcultures.Entry | undefined;
        readonly target: CulturesSubcultures.Entry | undefined;
    }
}
export default CaiPersonalityCulturalRelationsOverrides;
