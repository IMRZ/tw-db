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
        readonly dilemmaKey: Dilemmas.Entry | undefined;
        readonly choiceKey: CdirEventsDilemmaChoices.Entry | undefined;
        readonly incidentKey: Incidents.Entry | undefined;
    }
}
export default CdirEventsDilemmaIncidents;
