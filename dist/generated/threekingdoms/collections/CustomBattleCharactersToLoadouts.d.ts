import { CollectionCache, CollectionKey } from "../../../common";
import { CustomBattleCharacters } from "./CustomBattleCharacters";
import { CustomBattleLoadouts } from "./CustomBattleLoadouts";
export declare namespace CustomBattleCharactersToLoadouts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _character: string;
        readonly _loadout: string;
        constructor(collectionCache: CollectionCache, values: any);
        get character(): CustomBattleCharacters.Entry | undefined;
        get loadout(): CustomBattleLoadouts.Entry | undefined;
    }
}
export default CustomBattleCharactersToLoadouts;
