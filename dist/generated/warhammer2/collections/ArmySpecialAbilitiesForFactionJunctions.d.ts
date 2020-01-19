import { CollectionCache, CollectionKey } from "../../../common";
import { ArmySpecialAbilities } from "./ArmySpecialAbilities";
import { Factions } from "./Factions";
export declare namespace ArmySpecialAbilitiesForFactionJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _armySpecialAbility: string;
        readonly _faction: string;
        constructor(collectionCache: CollectionCache, values: any);
        get armySpecialAbility(): ArmySpecialAbilities.Entry | undefined;
        get faction(): Factions.Entry | undefined;
    }
}
export default ArmySpecialAbilitiesForFactionJunctions;
