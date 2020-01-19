import { CollectionCache, CollectionKey } from "../../../common";
import { CaiValueSets } from "./CaiValueSets";
import { CaiValueTypes } from "./CaiValueTypes";
export declare namespace CaiValueSetsPerValueType {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _valueSetKey: string;
        readonly _valueTypeKey: string;
        readonly value: number;
        constructor(collectionCache: CollectionCache, values: any);
        get valueSetKey(): CaiValueSets.Entry | undefined;
        get valueTypeKey(): CaiValueTypes.Entry | undefined;
    }
}
export default CaiValueSetsPerValueType;
