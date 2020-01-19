import { CollectionCache, CollectionKey } from "../../../common";
import { Missions } from "./Missions";
import { CdirEventsOptions } from "./CdirEventsOptions";
import { CdirEventsTargets } from "./CdirEventsTargets";
export declare namespace CdirEventsMissionOptionJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _missionKey: string;
        readonly _optionKey: string;
        readonly value: string;
        readonly _target: string;
        constructor(collectionCache: CollectionCache, values: any);
        get missionKey(): Missions.Entry | undefined;
        get optionKey(): CdirEventsOptions.Entry | undefined;
        get target(): CdirEventsTargets.Entry | undefined;
    }
}
export default CdirEventsMissionOptionJunctions;
