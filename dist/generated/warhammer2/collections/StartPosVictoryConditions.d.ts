import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosFactions } from "./StartPosFactions";
import { Regions } from "./Regions";
import { VictoryTypes } from "./VictoryTypes";
export declare namespace StartPosVictoryConditions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _startPosFaction: number;
        readonly _region: string;
        readonly _victoryType: string;
        readonly unique: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly startPosFaction: StartPosFactions.Entry | undefined;
        readonly region: Regions.Entry | undefined;
        readonly victoryType: VictoryTypes.Entry | undefined;
    }
}
export default StartPosVictoryConditions;
