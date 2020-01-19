import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterGenerationTemplates } from "./CharacterGenerationTemplates";
import { Factions } from "./Factions";
import { MainUnits } from "./MainUnits";
import { CustomBattleLoadouts } from "./CustomBattleLoadouts";
export declare namespace DynastyModeCharacters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _character: string;
        readonly _faction: string;
        readonly _unitRecord: string;
        readonly _loadout: string;
        constructor(collectionCache: CollectionCache, values: any);
        get character(): CharacterGenerationTemplates.Entry | undefined;
        get faction(): Factions.Entry | undefined;
        get unitRecord(): MainUnits.Entry | undefined;
        get loadout(): CustomBattleLoadouts.Entry | undefined;
    }
}
export default DynastyModeCharacters;
