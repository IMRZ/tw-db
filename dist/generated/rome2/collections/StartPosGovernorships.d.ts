import { CollectionCache, CollectionKey } from "../../../common";
import { Governorships } from "./Governorships";
import { Campaigns } from "./Campaigns";
export declare namespace StartPosGovernorships {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _governorship: string;
        readonly _campaign: string;
        readonly lowerClassTaxRate: number;
        readonly upperClassTaxRate: number;
        constructor(collectionCache: CollectionCache, values: any);
        get governorship(): Governorships.Entry | undefined;
        get campaign(): Campaigns.Entry | undefined;
    }
}
export default StartPosGovernorships;
