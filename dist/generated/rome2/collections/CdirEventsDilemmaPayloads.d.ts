import { CollectionCache, CollectionKey } from "../../../common";
import { Dilemmas } from "./Dilemmas";
import { CdirEventsDilemmaChoices } from "./CdirEventsDilemmaChoices";
import { CdirEventsPayloads } from "./CdirEventsPayloads";
export declare namespace CdirEventsDilemmaPayloads {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _dilemmaKey: string;
        readonly _choiceKey: string;
        readonly _payloadKey: string;
        readonly value: string;
        constructor(collectionCache: CollectionCache, values: any);
        get dilemmaKey(): Dilemmas.Entry | undefined;
        get choiceKey(): CdirEventsDilemmaChoices.Entry | undefined;
        get payloadKey(): CdirEventsPayloads.Entry | undefined;
    }
}
export default CdirEventsDilemmaPayloads;
