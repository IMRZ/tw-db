import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityCulturalComponents } from "./CaiPersonalityCulturalComponents";
import { Religions } from "./Religions";
export declare namespace CaiPersonalityCulturalMultipliers {
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
        get source(): Religions.Entry | undefined;
        get target(): Religions.Entry | undefined;
    }
}
export default CaiPersonalityCulturalMultipliers;
