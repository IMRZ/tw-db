import { CollectionCache, CollectionKey } from "../../../common";
import { Religions } from "./Religions";
import { Campaigns } from "./Campaigns";
export declare namespace CampaignReligiousRelations {
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
        get source(): Religions.Entry | undefined;
        get target(): Religions.Entry | undefined;
        get campaign(): Campaigns.Entry | undefined;
    }
}
export default CampaignReligiousRelations;
