import { CollectionCache, CollectionKey } from "../../../common";
import { Climates } from "./Climates";
import { CampaignGroundTypes } from "./CampaignGroundTypes";
export declare namespace CampaignGroundTypesClimateOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _climate: string;
        readonly _groundType: string;
        readonly onscreenNameOverride: string;
        readonly iconOverride: string;
        constructor(collectionCache: CollectionCache, values: any);
        get climate(): Climates.Entry | undefined;
        get groundType(): CampaignGroundTypes.Entry | undefined;
    }
}
export default CampaignGroundTypesClimateOverrides;
