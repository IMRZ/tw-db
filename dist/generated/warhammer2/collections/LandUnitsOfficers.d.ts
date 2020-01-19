import { CollectionCache, CollectionKey } from "../../../common";
import { BattlePersonalities } from "./BattlePersonalities";
import { PersonalityLocationEnums } from "./PersonalityLocationEnums";
import { LandUnitsAdditionalPersonalitiesGroups } from "./LandUnitsAdditionalPersonalitiesGroups";
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
        readonly _additionalPersonalities: string;
        constructor(collectionCache: CollectionCache, values: any);
        get officer1(): BattlePersonalities.Entry | undefined;
        get officer2(): BattlePersonalities.Entry | undefined;
        get standardBearer1(): BattlePersonalities.Entry | undefined;
        get standardBearer2(): BattlePersonalities.Entry | undefined;
        get musician1(): BattlePersonalities.Entry | undefined;
        get musician2(): BattlePersonalities.Entry | undefined;
        get personalityLocation(): PersonalityLocationEnums.Entry | undefined;
        get additionalPersonalities(): LandUnitsAdditionalPersonalitiesGroups.Entry | undefined;
    }
}
export default LandUnitsOfficers;
