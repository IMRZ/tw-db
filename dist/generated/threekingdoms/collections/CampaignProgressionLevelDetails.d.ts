import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignLocalisedStrings } from "./CampaignLocalisedStrings";
import { EffectBundles } from "./EffectBundles";
export declare namespace CampaignProgressionLevelDetails {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _title: string;
        readonly _description: string;
        readonly _tooltip: string;
        readonly _effectBundle: string;
        readonly armyCapProvided: number;
        readonly maximumArmyCap: number;
        readonly navyCapProvided: number;
        readonly maximumNavyCap: number;
        readonly retinueCapProvided: number;
        readonly maximumRetinueCap: number;
        readonly governorCapProvided: number;
        readonly maximumGovernorCap: number;
        readonly totalAgentCapProvided: number;
        readonly maximumTotalAgentCap: number;
        readonly totalAssignmentCapProvided: number;
        readonly maximumTotalAssignmentCap: number;
        readonly levelIcon: string;
        readonly levelImage: string;
        readonly capitalChangeCooldown: number;
        readonly capitalChangeTreasuryCost: number;
        constructor(collectionCache: CollectionCache, values: any);
        get title(): CampaignLocalisedStrings.Entry | undefined;
        get description(): CampaignLocalisedStrings.Entry | undefined;
        get tooltip(): CampaignLocalisedStrings.Entry | undefined;
        get effectBundle(): EffectBundles.Entry | undefined;
    }
}
export default CampaignProgressionLevelDetails;
