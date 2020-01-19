import { CollectionCache, CollectionKey } from "../../../common";
import { Missions } from "./Missions";
import { CdirEventsMissionStatuses } from "./CdirEventsMissionStatuses";
import { Dilemmas } from "./Dilemmas";
export declare namespace CdirEventsMissionFollowupDilemmas {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _missionKey: string;
        readonly _statusKey: string;
        readonly _followupDilemmaKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get missionKey(): Missions.Entry | undefined;
        get statusKey(): CdirEventsMissionStatuses.Entry | undefined;
        get followupDilemmaKey(): Dilemmas.Entry | undefined;
    }
}
export default CdirEventsMissionFollowupDilemmas;
