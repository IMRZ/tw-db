import { CollectionCache, CollectionKey } from "../../../common";
import { Incidents } from "./Incidents";
export declare namespace CdirEventsIncidentFollowupIncidents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _incidentKey: string;
        readonly _followupIncidentKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly incidentKey: Incidents.Entry | undefined;
        readonly followupIncidentKey: Incidents.Entry | undefined;
    }
}
export default CdirEventsIncidentFollowupIncidents;
