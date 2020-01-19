import { CollectionCache, CollectionKey } from "../../../common";
import { BattlefieldSiegeVehicles } from "./BattlefieldSiegeVehicles";
import { EffectBundles } from "./EffectBundles";
import { UiSiegeItemDetails } from "./UiSiegeItemDetails";
export declare namespace CampaignSiegeConstructionItems {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _battlefieldSiegeVehicle: string;
        readonly _besiegingForceEffectBundle: string;
        readonly besiegingForceEffectBundleTurns: number;
        readonly _besiegedGarrisonEffectBundle: string;
        readonly besiegedGarrisonEffectBundleTurns: number;
        readonly siegeEffortCost: number;
        readonly aiSelectionPriority: number;
        readonly recruitmentCap: number;
        readonly _uiSiegeItemDetails: string;
        readonly wallBreachesCausedWhenCompleted: number;
        constructor(collectionCache: CollectionCache, values: any);
        get battlefieldSiegeVehicle(): BattlefieldSiegeVehicles.Entry | undefined;
        get besiegingForceEffectBundle(): EffectBundles.Entry | undefined;
        get besiegedGarrisonEffectBundle(): EffectBundles.Entry | undefined;
        get uiSiegeItemDetails(): UiSiegeItemDetails.Entry | undefined;
    }
}
export default CampaignSiegeConstructionItems;
