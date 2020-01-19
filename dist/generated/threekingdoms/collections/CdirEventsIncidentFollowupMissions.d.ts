import { CollectionCache, CollectionKey } from "../../../common";
import { Incidents } from "./Incidents";
import { Missions } from "./Missions";
export declare namespace CdirEventsIncidentFollowupMissions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _incidentKey: string;
        readonly _followupMissionKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get incidentKey(): Incidents.Entry | undefined;
        get followupMissionKey(): Missions.Entry | undefined;
    }
}
export default CdirEventsIncidentFollowupMissions;
