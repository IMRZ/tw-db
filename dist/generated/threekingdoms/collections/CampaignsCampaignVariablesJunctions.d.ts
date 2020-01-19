import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignVariables } from "./CampaignVariables";
import { Campaigns } from "./Campaigns";
import { GameDifficultyLevels } from "./GameDifficultyLevels";
import { GameModes } from "./GameModes";
export declare namespace CampaignsCampaignVariablesJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _variableKey: string;
        readonly _campaignName: string;
        readonly value: number;
        readonly _optionalGameDifficultyLevel: string;
        readonly optionalCampaignType: string;
        readonly _optionalGameMode: string;
        readonly round: number;
        constructor(collectionCache: CollectionCache, values: any);
        get variableKey(): CampaignVariables.Entry | undefined;
        get campaignName(): Campaigns.Entry | undefined;
        get optionalGameDifficultyLevel(): GameDifficultyLevels.Entry | undefined;
        get optionalGameMode(): GameModes.Entry | undefined;
    }
}
export default CampaignsCampaignVariablesJunctions;
