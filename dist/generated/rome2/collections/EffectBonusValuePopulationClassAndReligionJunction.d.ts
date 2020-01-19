import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsPopulationClassAndReligion } from "./CampaignBonusValueIdsPopulationClassAndReligion";
import { PopulationClasses } from "./PopulationClasses";
import { Religions } from "./Religions";
export declare namespace EffectBonusValuePopulationClassAndReligionJunction {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _populationClass: string;
        readonly _religion: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effect(): Effects.Entry | undefined;
        get bonusValueId(): CampaignBonusValueIdsPopulationClassAndReligion.Entry | undefined;
        get populationClass(): PopulationClasses.Entry | undefined;
        get religion(): Religions.Entry | undefined;
    }
}
export default EffectBonusValuePopulationClassAndReligionJunction;
