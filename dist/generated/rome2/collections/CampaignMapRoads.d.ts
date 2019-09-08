import { CollectionCache, CollectionKey } from "../../../common";
import { Campaigns } from "./Campaigns";
export declare namespace CampaignMapRoads {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _campaign: string;
        readonly threshold: number;
        readonly turnsRequiredToUpgradeTo: number;
        readonly turnsRequiredToDowngradeFrom: number;
        readonly movementCost: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly campaign: Campaigns.Entry | undefined;
    }
}
export default CampaignMapRoads;
