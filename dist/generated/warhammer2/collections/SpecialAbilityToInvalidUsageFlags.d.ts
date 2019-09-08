import { CollectionCache, CollectionKey } from "../../../common";
import { UnitSpecialAbilities } from "./UnitSpecialAbilities";
import { SpecialAbilityInvalidUsageFlags } from "./SpecialAbilityInvalidUsageFlags";
export declare namespace SpecialAbilityToInvalidUsageFlags {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _specialAbility: string;
        readonly _invalidUsageFlag: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly specialAbility: UnitSpecialAbilities.Entry | undefined;
        readonly invalidUsageFlag: SpecialAbilityInvalidUsageFlags.Entry | undefined;
    }
}
export default SpecialAbilityToInvalidUsageFlags;
