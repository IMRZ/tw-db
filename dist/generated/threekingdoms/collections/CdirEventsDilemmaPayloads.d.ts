import { CollectionCache, CollectionKey } from "../../../common";
import { Dilemmas } from "./Dilemmas";
import { CdirEventsDilemmaChoices } from "./CdirEventsDilemmaChoices";
import { CdirEventsPayloads } from "./CdirEventsPayloads";
import { CdirEventsTargets } from "./CdirEventsTargets";
export declare namespace CdirEventsDilemmaPayloads {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _dilemmaKey: string;
        readonly _choiceKey: string;
        readonly _payloadKey: string;
        readonly value: string;
        readonly _targetKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get dilemmaKey(): Dilemmas.Entry | undefined;
        get choiceKey(): CdirEventsDilemmaChoices.Entry | undefined;
        get payloadKey(): CdirEventsPayloads.Entry | undefined;
        get targetKey(): CdirEventsTargets.Entry | undefined;
    }
}
export default CdirEventsDilemmaPayloads;
