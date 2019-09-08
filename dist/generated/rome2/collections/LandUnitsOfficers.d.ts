import { CollectionCache, CollectionKey } from "../../../common";
import { BattlePersonalities } from "./BattlePersonalities";
import { PersonalityLocationEnums } from "./PersonalityLocationEnums";
export declare namespace LandUnitsOfficers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _officer1: string;
        readonly _officer2: string;
        readonly _standardBearer1: string;
        readonly _standardBearer2: string;
        readonly _musician1: string;
        readonly _musician2: string;
        readonly _personalityLocation: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly officer1: BattlePersonalities.Entry | undefined;
        readonly officer2: BattlePersonalities.Entry | undefined;
        readonly standardBearer1: BattlePersonalities.Entry | undefined;
        readonly standardBearer2: BattlePersonalities.Entry | undefined;
        readonly musician1: BattlePersonalities.Entry | undefined;
        readonly musician2: BattlePersonalities.Entry | undefined;
        readonly personalityLocation: PersonalityLocationEnums.Entry | undefined;
    }
}
export default LandUnitsOfficers;
