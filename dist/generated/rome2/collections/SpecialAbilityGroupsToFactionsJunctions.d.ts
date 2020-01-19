import { CollectionCache, CollectionKey } from "../../../common";
import { SpecialAbilityGroups } from "./SpecialAbilityGroups";
import { Factions } from "./Factions";
export declare namespace SpecialAbilityGroupsToFactionsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _abilityGroup: string;
        readonly _faction: string;
        constructor(collectionCache: CollectionCache, values: any);
        get abilityGroup(): SpecialAbilityGroups.Entry | undefined;
        get faction(): Factions.Entry | undefined;
    }
}
export default SpecialAbilityGroupsToFactionsJunctions;
