import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
import { Factions } from "./Factions";
import { Cultures } from "./Cultures";
import { CulturesSubcultures } from "./CulturesSubcultures";
export declare namespace CommanderUnitPermissions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _unitKey: string;
        readonly _factionKey: string;
        readonly _cultureKey: string;
        readonly _subcultureKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly unitKey: MainUnits.Entry | undefined;
        readonly factionKey: Factions.Entry | undefined;
        readonly cultureKey: Cultures.Entry | undefined;
        readonly subcultureKey: CulturesSubcultures.Entry | undefined;
    }
}
export default CommanderUnitPermissions;
