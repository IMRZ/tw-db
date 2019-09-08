import { CollectionCache, CollectionKey } from "../../../common";
import { UnitSpecialAbilities } from "./UnitSpecialAbilities";
import { SpecialAbilityInvalidUsageFlags } from "./SpecialAbilityInvalidUsageFlags";
export declare namespace SpecialAbilityToAutoDeactivateFlags {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _specialAbility: string;
        readonly _deactivateFlag: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly specialAbility: UnitSpecialAbilities.Entry | undefined;
        readonly deactivateFlag: SpecialAbilityInvalidUsageFlags.Entry | undefined;
    }
}
export default SpecialAbilityToAutoDeactivateFlags;
