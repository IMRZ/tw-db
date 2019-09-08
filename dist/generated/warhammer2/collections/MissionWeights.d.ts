import { CollectionCache, CollectionKey } from "../../../common";
import { Missions } from "./Missions";
export declare namespace MissionWeights {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _missionKey: string;
        readonly weight: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly missionKey: Missions.Entry | undefined;
    }
}
export default MissionWeights;
