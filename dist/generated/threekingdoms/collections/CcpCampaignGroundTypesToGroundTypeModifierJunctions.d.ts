import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroundTypes } from "./CampaignGroundTypes";
import { GroundTypes } from "./GroundTypes";
export declare namespace CcpCampaignGroundTypesToGroundTypeModifierJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGt: string;
        readonly _groundType: string;
        readonly percentage: number;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGt(): CampaignGroundTypes.Entry | undefined;
        get groundType(): GroundTypes.Entry | undefined;
    }
}
export default CcpCampaignGroundTypesToGroundTypeModifierJunctions;
