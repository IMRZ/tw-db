import { CollectionCache, CollectionKey } from "../../../common";
import { Dilemmas } from "./Dilemmas";
import { CdirEventsDilemmaOptions } from "./CdirEventsDilemmaOptions";
export declare namespace CdirEventsDilemmaOptionJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _dilemmaKey: string;
        readonly _optionKey: string;
        readonly value: string;
        constructor(collectionCache: CollectionCache, values: any);
        get dilemmaKey(): Dilemmas.Entry | undefined;
        get optionKey(): CdirEventsDilemmaOptions.Entry | undefined;
    }
}
export default CdirEventsDilemmaOptionJunctions;
