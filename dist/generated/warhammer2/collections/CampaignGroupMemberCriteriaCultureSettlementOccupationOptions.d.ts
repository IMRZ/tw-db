import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { CultureSettlementOccupationOptions } from "./CultureSettlementOccupationOptions";
export declare namespace CampaignGroupMemberCriteriaCultureSettlementOccupationOptions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _cultureSettlementOccupationOption: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly member: CampaignGroupMembers.Entry | undefined;
        readonly cultureSettlementOccupationOption: CultureSettlementOccupationOptions.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaCultureSettlementOccupationOptions;
