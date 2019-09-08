import { CollectionCache, CollectionKey } from "../../../common";
import { BattleTypes } from "./BattleTypes";
export declare namespace Battles {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _type: string;
        readonly isNaval: boolean;
        readonly specification: string;
        readonly localisedName: string;
        readonly description: string;
        readonly objectivesTeam1: string;
        readonly objectivesTeam2: string;
        readonly screenshotPath: string;
        readonly mapPath: string;
        readonly teamSize1: number;
        readonly teamSize2: number;
        readonly release: boolean;
        readonly multiplayer: boolean;
        readonly singleplayer: boolean;
        readonly introMovie: string;
        readonly year: number;
        readonly defenderFundsRatio: number;
        readonly hasKeyBuildings: boolean;
        readonly matchmaking: boolean;
        readonly playableAreaWidth: number;
        readonly playableAreaHeight: number;
        readonly isLargeSettlement: boolean;
        readonly has15MWalls: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly type: BattleTypes.Entry | undefined;
    }
}
export default Battles;
