import { CollectionCache, CollectionKey } from "../../../common";
import { DeployablesAbilities } from "./DeployablesAbilities";
import { SpecialAbilityInvalidUsageFlags } from "./SpecialAbilityInvalidUsageFlags";
export declare namespace DeployablesAbilityToInvalidUsageFlags {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _deployablesAbility: string;
        readonly _invalidUsageFlag: string;
        constructor(collectionCache: CollectionCache, values: any);
        get deployablesAbility(): DeployablesAbilities.Entry | undefined;
        get invalidUsageFlag(): SpecialAbilityInvalidUsageFlags.Entry | undefined;
    }
}
export default DeployablesAbilityToInvalidUsageFlags;
