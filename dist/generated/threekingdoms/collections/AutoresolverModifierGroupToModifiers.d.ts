import { CollectionCache, CollectionKey } from "../../../common";
import { AutoresolverModifierGroupKeys } from "./AutoresolverModifierGroupKeys";
import { AutoresolverModifierTargets } from "./AutoresolverModifierTargets";
import { AutoresolverModifierBonusTypes } from "./AutoresolverModifierBonusTypes";
export declare namespace AutoresolverModifierGroupToModifiers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _group: string;
        readonly _modifierTarget: string;
        readonly _modifierBonus: string;
        readonly value: number;
        readonly id: number;
        constructor(collectionCache: CollectionCache, values: any);
        get group(): AutoresolverModifierGroupKeys.Entry | undefined;
        get modifierTarget(): AutoresolverModifierTargets.Entry | undefined;
        get modifierBonus(): AutoresolverModifierBonusTypes.Entry | undefined;
    }
}
export default AutoresolverModifierGroupToModifiers;
