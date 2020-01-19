import { CollectionCache, CollectionKey } from "../../../common";
import { CaiValueSets } from "./CaiValueSets";
import { CaiStrategicContextTypes } from "./CaiStrategicContextTypes";
import { CaiValueTypes } from "./CaiValueTypes";
export declare namespace CaiValueSetsPerStrategicContext {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _valueSetKey: string;
        readonly _perItemKey: string;
        readonly value: number;
        readonly _valueTypeKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get valueSetKey(): CaiValueSets.Entry | undefined;
        get perItemKey(): CaiStrategicContextTypes.Entry | undefined;
        get valueTypeKey(): CaiValueTypes.Entry | undefined;
    }
}
export default CaiValueSetsPerStrategicContext;
