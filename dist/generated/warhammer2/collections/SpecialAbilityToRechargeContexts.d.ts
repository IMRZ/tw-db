import { CollectionCache, CollectionKey } from "../../../common";
import { UnitSpecialAbilities } from "./UnitSpecialAbilities";
import { SpecialAbilityInvalidUsageFlags } from "./SpecialAbilityInvalidUsageFlags";
export declare namespace SpecialAbilityToRechargeContexts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _specialAbility: string;
        readonly _rechargeContext: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly specialAbility: UnitSpecialAbilities.Entry | undefined;
        readonly rechargeContext: SpecialAbilityInvalidUsageFlags.Entry | undefined;
    }
}
export default SpecialAbilityToRechargeContexts;
