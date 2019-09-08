import { CollectionCache, CollectionKey } from "../../../common";
import { Incidents } from "./Incidents";
import { Dilemmas } from "./Dilemmas";
export declare namespace CdirEventsIncidentFollowupDilemmas {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _incidentKey: string;
        readonly _followupDliemmaKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly incidentKey: Incidents.Entry | undefined;
        readonly followupDliemmaKey: Dilemmas.Entry | undefined;
    }
}
export default CdirEventsIncidentFollowupDilemmas;
