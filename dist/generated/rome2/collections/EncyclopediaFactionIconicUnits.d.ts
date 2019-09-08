import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
import { Factions } from "./Factions";
export declare namespace EncyclopediaFactionIconicUnits {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _mainUnitKey: string;
        readonly _factionKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly mainUnitKey: MainUnits.Entry | undefined;
        readonly factionKey: Factions.Entry | undefined;
    }
}
export default EncyclopediaFactionIconicUnits;
