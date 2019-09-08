import { CollectionCache, CollectionKey } from "../../../common";
import { Dilemmas } from "./Dilemmas";
import { CdirEventsOptions } from "./CdirEventsOptions";
export declare namespace CdirEventsDilemmaOptionJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _dilemmaKey: string;
        readonly _optionKey: string;
        readonly value: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly dilemmaKey: Dilemmas.Entry | undefined;
        readonly optionKey: CdirEventsOptions.Entry | undefined;
    }
}
export default CdirEventsDilemmaOptionJunctions;
