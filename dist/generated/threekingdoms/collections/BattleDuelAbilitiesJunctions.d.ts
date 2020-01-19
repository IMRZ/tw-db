import { CollectionCache, CollectionKey } from "../../../common";
import { UnitAbilities } from "./UnitAbilities";
import { BattleDuelAbilityTypeEnums } from "./BattleDuelAbilityTypeEnums";
export declare namespace BattleDuelAbilitiesJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _abilityKey: string;
        readonly _duelAbilityType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get abilityKey(): UnitAbilities.Entry | undefined;
        get duelAbilityType(): BattleDuelAbilityTypeEnums.Entry | undefined;
    }
}
export default BattleDuelAbilitiesJunctions;
