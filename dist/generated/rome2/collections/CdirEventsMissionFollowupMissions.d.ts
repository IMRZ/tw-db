import { CollectionCache, CollectionKey } from "../../../common";
import { Missions } from "./Missions";
import { CdirEventsMissionStatuses } from "./CdirEventsMissionStatuses";
export declare namespace CdirEventsMissionFollowupMissions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _missionKey: string;
        readonly _statusKey: string;
        readonly _followupMissionKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly missionKey: Missions.Entry | undefined;
        readonly statusKey: CdirEventsMissionStatuses.Entry | undefined;
        readonly followupMissionKey: Missions.Entry | undefined;
    }
}
export default CdirEventsMissionFollowupMissions;
