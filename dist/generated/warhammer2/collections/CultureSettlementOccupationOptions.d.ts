import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { SettlementOccupationOptions } from "./SettlementOccupationOptions";
import { EffectBundles } from "./EffectBundles";
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
        constructor(collectionCache: CollectionCache, values: any);
        readonly group: CampaignGroups.Entry | undefined;
        readonly option: SettlementOccupationOptions.Entry | undefined;
        readonly actingArmyFactionEffectBundle: EffectBundles.Entry | undefined;
        readonly targetSettlementFactionEffectBundle: EffectBundles.Entry | undefined;
        readonly actingArmyEffectBundle: EffectBundles.Entry | undefined;
    }
}
export default CultureSettlementOccupationOptions;
