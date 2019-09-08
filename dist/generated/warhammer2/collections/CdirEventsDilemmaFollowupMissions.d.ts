import { CollectionCache, CollectionKey } from "../../../common";
import { Dilemmas } from "./Dilemmas";
import { CdirEventsDilemmaChoices } from "./CdirEventsDilemmaChoices";
import { Missions } from "./Missions";
export declare namespace CdirEventsDilemmaFollowupMissions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _dilemmaKey: string;
        readonly _choiceKey: string;
        readonly _followupMissionKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly dilemmaKey: Dilemmas.Entry | undefined;
        readonly choiceKey: CdirEventsDilemmaChoices.Entry | undefined;
        readonly followupMissionKey: Missions.Entry | undefined;
    }
}
export default CdirEventsDilemmaFollowupMissions;
