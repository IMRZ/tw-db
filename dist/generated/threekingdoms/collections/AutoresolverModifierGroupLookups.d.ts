import { CollectionCache, CollectionKey } from "../../../common";
import { AutoresolverBattleTypes } from "./AutoresolverBattleTypes";
import { AutoresolverPlayerTypes } from "./AutoresolverPlayerTypes";
import { AutoresolverModifierGroupKeys } from "./AutoresolverModifierGroupKeys";
import { AutoresolverModifierMultiplierMechanicEnums } from "./AutoresolverModifierMultiplierMechanicEnums";
export declare namespace AutoresolverModifierGroupLookups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _battleType: string;
        readonly _playerType: string;
        readonly _modifierGroupApplied: string;
        readonly _modifierValueMultiplierMechanic: string;
        constructor(collectionCache: CollectionCache, values: any);
        get battleType(): AutoresolverBattleTypes.Entry | undefined;
        get playerType(): AutoresolverPlayerTypes.Entry | undefined;
        get modifierGroupApplied(): AutoresolverModifierGroupKeys.Entry | undefined;
        get modifierValueMultiplierMechanic(): AutoresolverModifierMultiplierMechanicEnums.Entry | undefined;
    }
}
export default AutoresolverModifierGroupLookups;
