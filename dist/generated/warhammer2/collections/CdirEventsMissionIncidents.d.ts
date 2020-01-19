import { CollectionCache, CollectionKey } from "../../../common";
import { Missions } from "./Missions";
import { CdirEventsMissionStatuses } from "./CdirEventsMissionStatuses";
import { Incidents } from "./Incidents";
export declare namespace CdirEventsMissionIncidents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _missionKey: string;
        readonly _statusKey: string;
        readonly _incidentKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get missionKey(): Missions.Entry | undefined;
        get statusKey(): CdirEventsMissionStatuses.Entry | undefined;
        get incidentKey(): Incidents.Entry | undefined;
    }
}
export default CdirEventsMissionIncidents;
