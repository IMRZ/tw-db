import { CollectionCache, CollectionKey } from "../../../common";
import { Missions } from "./Missions";
import { CdirEventsMissionStatuses } from "./CdirEventsMissionStatuses";
import { CdirEventsPayloads } from "./CdirEventsPayloads";
export declare namespace CdirEventsMissionPayloads {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _missionKey: string;
        readonly _statusKey: string;
        readonly _payloadKey: string;
        readonly value: string;
        constructor(collectionCache: CollectionCache, values: any);
        get missionKey(): Missions.Entry | undefined;
        get statusKey(): CdirEventsMissionStatuses.Entry | undefined;
        get payloadKey(): CdirEventsPayloads.Entry | undefined;
    }
}
export default CdirEventsMissionPayloads;
