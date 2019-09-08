import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsProvinceInitiatives } from "./CampaignBonusValueIdsProvinceInitiatives";
import { ProvincialInitiativeRecords } from "./ProvincialInitiativeRecords";
export declare namespace EffectBonusValueProvinceInitiativeJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _provinceInitiative: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly effect: Effects.Entry | undefined;
        readonly bonusValueId: CampaignBonusValueIdsProvinceInitiatives.Entry | undefined;
        readonly provinceInitiative: ProvincialInitiativeRecords.Entry | undefined;
    }
}
export default EffectBonusValueProvinceInitiativeJunctions;
