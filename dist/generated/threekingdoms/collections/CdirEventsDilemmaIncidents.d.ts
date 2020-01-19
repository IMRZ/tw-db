import { CollectionCache, CollectionKey } from "../../../common";
import { Dilemmas } from "./Dilemmas";
import { CdirEventsDilemmaChoices } from "./CdirEventsDilemmaChoices";
import { Incidents } from "./Incidents";
export declare namespace CdirEventsDilemmaIncidents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _dilemmaKey: string;
        readonly _choiceKey: string;
        readonly _incidentKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get dilemmaKey(): Dilemmas.Entry | undefined;
        get choiceKey(): CdirEventsDilemmaChoices.Entry | undefined;
        get incidentKey(): Incidents.Entry | undefined;
    }
}
export default CdirEventsDilemmaIncidents;
