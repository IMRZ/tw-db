import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsPopulationClass } from "./CampaignBonusValueIdsPopulationClass";
import { PopulationClasses } from "./PopulationClasses";
export declare namespace EffectBonusValuePopulationClassJunction {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _populationClass: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effect(): Effects.Entry | undefined;
        get bonusValueId(): CampaignBonusValueIdsPopulationClass.Entry | undefined;
        get populationClass(): PopulationClasses.Entry | undefined;
    }
}
export default EffectBonusValuePopulationClassJunction;
