import { CollectionCache, CollectionKey } from "../../../common";
import { CustomBattleLoadouts } from "./CustomBattleLoadouts";
import { CharacterSkills } from "./CharacterSkills";
export declare namespace CustomBattleLoadoutsToSkills {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _loadout: string;
        readonly _skill: string;
        readonly level: number;
        constructor(collectionCache: CollectionCache, values: any);
        get loadout(): CustomBattleLoadouts.Entry | undefined;
        get skill(): CharacterSkills.Entry | undefined;
    }
}
export default CustomBattleLoadoutsToSkills;
