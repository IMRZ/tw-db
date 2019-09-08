import { CollectionCache, CollectionKey } from "../../../common";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { Campaigns } from "./Campaigns";
export declare namespace CampaignCulturalRelations {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _source: string;
        readonly _target: string;
        readonly positiveAttitudeMultiplier: number;
        readonly negativeAttitudeMultiplier: number;
        readonly attitudeBase: number;
        readonly _campaign: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly source: CulturesSubcultures.Entry | undefined;
        readonly target: CulturesSubcultures.Entry | undefined;
        readonly campaign: Campaigns.Entry | undefined;
    }
}
export default CampaignCulturalRelations;
