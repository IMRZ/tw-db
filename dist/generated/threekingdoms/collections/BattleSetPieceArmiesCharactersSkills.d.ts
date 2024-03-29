import { CollectionCache, CollectionKey } from "../../../common";
import { BattleSetPieceArmiesCharacters } from "./BattleSetPieceArmiesCharacters";
import { CharacterSkills } from "./CharacterSkills";
export declare namespace BattleSetPieceArmiesCharactersSkills {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _characterName: string;
        readonly _skill: string;
        readonly level: number;
        constructor(collectionCache: CollectionCache, values: any);
        get characterName(): BattleSetPieceArmiesCharacters.Entry | undefined;
        get skill(): CharacterSkills.Entry | undefined;
    }
}
export default BattleSetPieceArmiesCharactersSkills;
