import { CollectionCache, CollectionKey } from "../../../common";
import { CaiVariables } from "./CaiVariables";
import { Campaigns } from "./Campaigns";
export declare namespace CaiVariablesOverides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _caiVariableKey: string;
        readonly _campaignKey: string;
        readonly value: number;
        readonly optionalDifficultyLevel: string;
        readonly optionalCampaignType: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly caiVariableKey: CaiVariables.Entry | undefined;
        readonly campaignKey: Campaigns.Entry | undefined;
    }
}
export default CaiVariablesOverides;
