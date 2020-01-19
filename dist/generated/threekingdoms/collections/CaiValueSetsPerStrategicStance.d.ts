import { CollectionCache, CollectionKey } from "../../../common";
import { CaiValueSets } from "./CaiValueSets";
import { CaiStrategicStances } from "./CaiStrategicStances";
import { CaiValueTypes } from "./CaiValueTypes";
export declare namespace CaiValueSetsPerStrategicStance {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _valueSetKey: string;
        readonly _perItemKey: string;
        readonly value: number;
        readonly _valueTypeKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get valueSetKey(): CaiValueSets.Entry | undefined;
        get perItemKey(): CaiStrategicStances.Entry | undefined;
        get valueTypeKey(): CaiValueTypes.Entry | undefined;
    }
}
export default CaiValueSetsPerStrategicStance;
