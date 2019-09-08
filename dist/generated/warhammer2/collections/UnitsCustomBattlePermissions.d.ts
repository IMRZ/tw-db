import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
import { Factions } from "./Factions";
import { AgentUniforms } from "./AgentUniforms";
import { BattleSetPieceArmiesCharacters } from "./BattleSetPieceArmiesCharacters";
export declare namespace UnitsCustomBattlePermissions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _unit: string;
        readonly _faction: string;
        readonly generalUnit: boolean;
        readonly siegeUnitAttacker: boolean;
        readonly siegeUnitDefender: boolean;
        readonly generalPortrait: string;
        readonly _generalUniform: string;
        readonly _setPieceCharacter: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly unit: MainUnits.Entry | undefined;
        readonly faction: Factions.Entry | undefined;
        readonly generalUniform: AgentUniforms.Entry | undefined;
        readonly setPieceCharacter: BattleSetPieceArmiesCharacters.Entry | undefined;
    }
}
export default UnitsCustomBattlePermissions;
