import { CollectionCache, CollectionKey } from "../../../common";
import { Missions } from "./Missions";
import { MissionGroups } from "./MissionGroups";
export declare namespace MissionGroupsToMissions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _mission: string;
        readonly _group: string;
        readonly order: number;
        constructor(collectionCache: CollectionCache, values: any);
        get mission(): Missions.Entry | undefined;
        get group(): MissionGroups.Entry | undefined;
    }
}
export default MissionGroupsToMissions;
