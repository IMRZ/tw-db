import { CollectionCache, CollectionKey } from "../../../common";
import { Incidents } from "./Incidents";
import { CdirEventsPayloads } from "./CdirEventsPayloads";
export declare namespace CdirEventsIncidentPayloads {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _incidentKey: string;
        readonly _payloadKey: string;
        readonly value: string;
        constructor(collectionCache: CollectionCache, values: any);
        get incidentKey(): Incidents.Entry | undefined;
        get payloadKey(): CdirEventsPayloads.Entry | undefined;
    }
}
export default CdirEventsIncidentPayloads;
