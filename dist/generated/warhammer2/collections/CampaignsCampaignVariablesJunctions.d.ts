import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignVariables } from "./CampaignVariables";
import { Campaigns } from "./Campaigns";
export declare namespace CampaignsCampaignVariablesJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _variableKey: string;
        readonly _campaignName: string;
        readonly value: number;
        readonly optionalDifficultyLevel: string;
        readonly optionalCampaignType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get variableKey(): CampaignVariables.Entry | undefined;
        get campaignName(): Campaigns.Entry | undefined;
    }
}
export default CampaignsCampaignVariablesJunctions;
