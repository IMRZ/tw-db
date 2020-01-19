import { CollectionCache, CollectionKey } from "../../../common";
import { Missions } from "./Missions";
import { MissionIssuers } from "./MissionIssuers";
export declare namespace CdirEventsMissionIssuerJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _missionKey: string;
        readonly _issuerKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get missionKey(): Missions.Entry | undefined;
        get issuerKey(): MissionIssuers.Entry | undefined;
    }
}
export default CdirEventsMissionIssuerJunctions;
