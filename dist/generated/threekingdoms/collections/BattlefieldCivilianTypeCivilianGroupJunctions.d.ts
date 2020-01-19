import { CollectionCache, CollectionKey } from "../../../common";
import { BattlefieldCivilianTypes } from "./BattlefieldCivilianTypes";
import { Cultures } from "./Cultures";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { Factions } from "./Factions";
import { BattlefieldCivilianGroups } from "./BattlefieldCivilianGroups";
export declare namespace BattlefieldCivilianTypeCivilianGroupJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _civilianType: string;
        readonly _cultureLookup: string;
        readonly _subcultureLookup: string;
        readonly _factionLookup: string;
        readonly _civilianGroup: string;
        constructor(collectionCache: CollectionCache, values: any);
        get civilianType(): BattlefieldCivilianTypes.Entry | undefined;
        get cultureLookup(): Cultures.Entry | undefined;
        get subcultureLookup(): CulturesSubcultures.Entry | undefined;
        get factionLookup(): Factions.Entry | undefined;
        get civilianGroup(): BattlefieldCivilianGroups.Entry | undefined;
    }
}
export default BattlefieldCivilianTypeCivilianGroupJunctions;
