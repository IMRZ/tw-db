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
        constructor(collectionCache: CollectionCache, values: any);
        get startPosFaction(): StartPosFactions.Entry | undefined;
        get region(): Regions.Entry | undefined;
        get victoryType(): VictoryTypes.Entry | undefined;
    }
}
export default StartPosVictoryConditions;
