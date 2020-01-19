import { CollectionCache, CollectionKey } from "../../../common";
import { MercenaryRetinueFactionGroups } from "./MercenaryRetinueFactionGroups";
import { MercenaryRetinueDetails } from "./MercenaryRetinueDetails";
import { CampaignBonusValueIdsBasic } from "./CampaignBonusValueIdsBasic";
export declare namespace MercenaryRetinueFactionGroupToMercenaryRetinueJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly autoId: number;
        readonly _factionGroup: string;
        readonly _mercenaryRetinue: string;
        readonly _levelingBonusValue: string;
        constructor(collectionCache: CollectionCache, values: any);
        get factionGroup(): MercenaryRetinueFactionGroups.Entry | undefined;
        get mercenaryRetinue(): MercenaryRetinueDetails.Entry | undefined;
        get levelingBonusValue(): CampaignBonusValueIdsBasic.Entry | undefined;
    }
}
export default MercenaryRetinueFactionGroupToMercenaryRetinueJunctions;
