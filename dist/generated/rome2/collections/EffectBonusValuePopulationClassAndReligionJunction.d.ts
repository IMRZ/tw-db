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
        readonly effect: Effects.Entry | undefined;
        readonly bonusValueId: CampaignBonusValueIdsPopulationClassAndReligion.Entry | undefined;
        readonly populationClass: PopulationClasses.Entry | undefined;
        readonly religion: Religions.Entry | undefined;
    }
}
export default EffectBonusValuePopulationClassAndReligionJunction;
