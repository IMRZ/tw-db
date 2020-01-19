import { CollectionCache, CollectionKey } from "../../../common";
import { CustomBattleLoadouts } from "./CustomBattleLoadouts";
import { Ceos } from "./Ceos";
export declare namespace CustomBattleLoadoutsToCeos {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _loadout: string;
        readonly _ceo: string;
        constructor(collectionCache: CollectionCache, values: any);
        get loadout(): CustomBattleLoadouts.Entry | undefined;
        get ceo(): Ceos.Entry | undefined;
    }
}
export default CustomBattleLoadoutsToCeos;
