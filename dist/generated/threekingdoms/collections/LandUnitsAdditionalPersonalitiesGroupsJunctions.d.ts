import { CollectionCache, CollectionKey } from "../../../common";
import { LandUnitsAdditionalPersonalitiesGroups } from "./LandUnitsAdditionalPersonalitiesGroups";
import { BattlePersonalities } from "./BattlePersonalities";
export declare namespace LandUnitsAdditionalPersonalitiesGroupsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _group: string;
        readonly _battlePersonality: string;
        constructor(collectionCache: CollectionCache, values: any);
        get group(): LandUnitsAdditionalPersonalitiesGroups.Entry | undefined;
        get battlePersonality(): BattlePersonalities.Entry | undefined;
    }
}
export default LandUnitsAdditionalPersonalitiesGroupsJunctions;
