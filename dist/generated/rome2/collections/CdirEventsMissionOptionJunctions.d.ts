import { CollectionCache, CollectionKey } from "../../../common";
import { Missions } from "./Missions";
import { CdirEventsMissionOptions } from "./CdirEventsMissionOptions";
export declare namespace CdirEventsMissionOptionJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _missionKey: string;
        readonly _optionKey: string;
        readonly value: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly missionKey: Missions.Entry | undefined;
        readonly optionKey: CdirEventsMissionOptions.Entry | undefined;
    }
}
export default CdirEventsMissionOptionJunctions;
