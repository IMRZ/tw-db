import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityReligiousComponents } from "./CaiPersonalityReligiousComponents";
import { Religions } from "./Religions";
export declare namespace CaiPersonalityReligiousRelationsOverrides {
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
        readonly componentId: CaiPersonalityReligiousComponents.Entry | undefined;
        readonly source: Religions.Entry | undefined;
        readonly target: Religions.Entry | undefined;
    }
}
export default CaiPersonalityReligiousRelationsOverrides;
