import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosCharacters } from "./StartPosCharacters";
import { CampaignUnitStatBonusTypes } from "./CampaignUnitStatBonusTypes";
export declare namespace StartPosCharacterRetinueUnitStatsBonuses {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _character: number;
        readonly retinueSlotIndex: number;
        readonly _unitStartingStatBonus: string;
        readonly unitStartingStatBonusLevel: number;
        constructor(collectionCache: CollectionCache, values: any);
        get character(): StartPosCharacters.Entry | undefined;
        get unitStartingStatBonus(): CampaignUnitStatBonusTypes.Entry | undefined;
    }
}
export default StartPosCharacterRetinueUnitStatsBonuses;
