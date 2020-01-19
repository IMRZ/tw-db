import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterGenerationTemplates } from "./CharacterGenerationTemplates";
import { Factions } from "./Factions";
import { MainUnits } from "./MainUnits";
export declare namespace CustomBattleCharacters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _character: string;
        readonly _faction: string;
        readonly _unitRecordRomance: string;
        readonly _unitRecordHistorical: string;
        readonly hideInCustomBattle: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get character(): CharacterGenerationTemplates.Entry | undefined;
        get faction(): Factions.Entry | undefined;
        get unitRecordRomance(): MainUnits.Entry | undefined;
        get unitRecordHistorical(): MainUnits.Entry | undefined;
    }
}
export default CustomBattleCharacters;
