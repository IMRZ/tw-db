import { CollectionCache, CollectionKey } from "../../../common";
import { Incidents } from "./Incidents";
import { CdirEventsPayloads } from "./CdirEventsPayloads";
import { CdirEventsTargets } from "./CdirEventsTargets";
export declare namespace CdirEventsIncidentPayloads {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _incidentKey: string;
        readonly _payloadKey: string;
        readonly value: string;
        readonly _targetKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get incidentKey(): Incidents.Entry | undefined;
        get payloadKey(): CdirEventsPayloads.Entry | undefined;
        get targetKey(): CdirEventsTargets.Entry | undefined;
    }
}
export default CdirEventsIncidentPayloads;
