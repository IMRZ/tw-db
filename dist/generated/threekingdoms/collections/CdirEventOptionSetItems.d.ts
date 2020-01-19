import { CollectionCache, CollectionKey } from "../../../common";
import { CdirEventsOptionSets } from "./CdirEventsOptionSets";
import { CdirEventsOptions } from "./CdirEventsOptions";
import { CdirEventsTargets } from "./CdirEventsTargets";
export declare namespace CdirEventOptionSetItems {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _optionSet: string;
        readonly _option: string;
        readonly value: string;
        readonly _target: string;
        constructor(collectionCache: CollectionCache, values: any);
        get optionSet(): CdirEventsOptionSets.Entry | undefined;
        get option(): CdirEventsOptions.Entry | undefined;
        get target(): CdirEventsTargets.Entry | undefined;
    }
}
export default CdirEventOptionSetItems;
