import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { SettlementOccupationOptions } from "./SettlementOccupationOptions";
import { EffectBundles } from "./EffectBundles";
import { ResourceCosts } from "./ResourceCosts";
export declare namespace CultureSettlementOccupationOptions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _group: string;
        readonly _option: string;
        readonly _actingArmyFactionEffectBundle: string;
        readonly actingArmyFactionEffectBundleTurns: number;
        readonly _targetSettlementFactionEffectBundle: string;
        readonly targetSettlementFactionEffectBundleTurns: number;
        readonly _actingArmyEffectBundle: string;
        readonly actingArmyEffectBundleTurns: number;
        readonly id: number;
        readonly tooltip: string;
        readonly icon: string;
        readonly baseLoot: number;
        readonly buildingLootMod: number;
        readonly _resourceTransaction: string;
        constructor(collectionCache: CollectionCache, values: any);
        get group(): CampaignGroups.Entry | undefined;
        get option(): SettlementOccupationOptions.Entry | undefined;
        get actingArmyFactionEffectBundle(): EffectBundles.Entry | undefined;
        get targetSettlementFactionEffectBundle(): EffectBundles.Entry | undefined;
        get actingArmyEffectBundle(): EffectBundles.Entry | undefined;
        get resourceTransaction(): ResourceCosts.Entry | undefined;
    }
}
export default CultureSettlementOccupationOptions;
