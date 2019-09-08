import { CollectionCache, CollectionKey } from "../../../common";
import { PoliticalActions } from "./PoliticalActions";
import { Missions } from "./Missions";
export declare namespace PoliticalActionsMissionJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _politicalAction: string;
        readonly _mission: string;
        readonly weighting: number;
        readonly optimalOutcome: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly politicalAction: PoliticalActions.Entry | undefined;
        readonly mission: Missions.Entry | undefined;
    }
}
export default PoliticalActionsMissionJunctions;
