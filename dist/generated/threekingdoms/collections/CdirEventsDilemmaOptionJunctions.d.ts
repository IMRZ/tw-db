import { CollectionCache, CollectionKey } from "../../../common";
import { Dilemmas } from "./Dilemmas";
import { CdirEventsOptions } from "./CdirEventsOptions";
import { CdirEventsTargets } from "./CdirEventsTargets";
export declare namespace CdirEventsDilemmaOptionJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _dilemmaKey: string;
        readonly _optionKey: string;
        readonly value: string;
        readonly _target: string;
        constructor(collectionCache: CollectionCache, values: any);
        get dilemmaKey(): Dilemmas.Entry | undefined;
        get optionKey(): CdirEventsOptions.Entry | undefined;
        get target(): CdirEventsTargets.Entry | undefined;
    }
}
export default CdirEventsDilemmaOptionJunctions;
