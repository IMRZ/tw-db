import { CollectionCache, CollectionKey } from "../../../common";
import { ProphecyOfSotekStages } from "./ProphecyOfSotekStages";
import { Missions } from "./Missions";
export declare namespace ProphecyOfSotekStagesToMissions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _stage: string;
        readonly _mission: string;
        readonly order: number;
        constructor(collectionCache: CollectionCache, values: any);
        get stage(): ProphecyOfSotekStages.Entry | undefined;
        get mission(): Missions.Entry | undefined;
    }
}
export default ProphecyOfSotekStagesToMissions;
