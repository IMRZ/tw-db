import { CollectionCache, CollectionKey } from "../../../common";
import { CaiVariables } from "./CaiVariables";
import { Campaigns } from "./Campaigns";
import { GameDifficultyLevels } from "./GameDifficultyLevels";
export declare namespace CaiVariablesOverides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _caiVariableKey: string;
        readonly _campaignKey: string;
        readonly value: number;
        readonly _optionalDifficultyLevel: string;
        readonly optionalCampaignType: string;
        readonly round: number;
        constructor(collectionCache: CollectionCache, values: any);
        get caiVariableKey(): CaiVariables.Entry | undefined;
        get campaignKey(): Campaigns.Entry | undefined;
        get optionalDifficultyLevel(): GameDifficultyLevels.Entry | undefined;
    }
}
export default CaiVariablesOverides;
