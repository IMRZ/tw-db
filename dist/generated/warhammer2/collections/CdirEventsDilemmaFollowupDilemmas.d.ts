import { CollectionCache, CollectionKey } from "../../../common";
import { Dilemmas } from "./Dilemmas";
import { CdirEventsDilemmaChoices } from "./CdirEventsDilemmaChoices";
export declare namespace CdirEventsDilemmaFollowupDilemmas {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _dilemmaKey: string;
        readonly _choiceKey: string;
        readonly _followupDilemmaKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly dilemmaKey: Dilemmas.Entry | undefined;
        readonly choiceKey: CdirEventsDilemmaChoices.Entry | undefined;
        readonly followupDilemmaKey: Dilemmas.Entry | undefined;
    }
}
export default CdirEventsDilemmaFollowupDilemmas;
