import { CollectionCache, CollectionKey } from "../../../common";
import { Deployables } from "./Deployables";
import { BattleAiAbilitiesUsageTemplateNames } from "./BattleAiAbilitiesUsageTemplateNames";
import { SpecialAbilityStances } from "./SpecialAbilityStances";
export declare namespace DeployablesAbilities {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly abilityKey: string;
        readonly _deployable: string;
        readonly uniqueId: number;
        readonly numUses: number;
        readonly rechargeTime: number;
        readonly windUpTime: number;
        readonly dragGround: boolean;
        readonly clickGround: boolean;
        readonly interceptDistance: number;
        readonly _aiUsage: string;
        readonly _windUpStance: string;
        readonly effectText: string;
        constructor(collectionCache: CollectionCache, values: any);
        get deployable(): Deployables.Entry | undefined;
        get aiUsage(): BattleAiAbilitiesUsageTemplateNames.Entry | undefined;
        get windUpStance(): SpecialAbilityStances.Entry | undefined;
    }
}
export default DeployablesAbilities;
