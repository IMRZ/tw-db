import { CollectionCache, CollectionKey } from "../../../common";
import { BattleSetPieceArmiesCharactersSkillsets } from "./BattleSetPieceArmiesCharactersSkillsets";
import { CharacterSkills } from "./CharacterSkills";
export declare namespace BattleSetPieceArmiesCharactersSkillsetsSkills {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _skillsetKey: string;
        readonly _skill: string;
        readonly sortOrder: number;
        constructor(collectionCache: CollectionCache, values: any);
        get skillsetKey(): BattleSetPieceArmiesCharactersSkillsets.Entry | undefined;
        get skill(): CharacterSkills.Entry | undefined;
    }
}
export default BattleSetPieceArmiesCharactersSkillsetsSkills;
