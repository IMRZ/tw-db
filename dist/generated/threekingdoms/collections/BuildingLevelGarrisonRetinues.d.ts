import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { CampaignRetinueChains } from "./CampaignRetinueChains";
import { CulturesSubcultures } from "./CulturesSubcultures";
export declare namespace BuildingLevelGarrisonRetinues {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _buildingLevel: string;
        readonly _retinueChain: string;
        readonly _subculture: string;
        constructor(collectionCache: CollectionCache, values: any);
        get buildingLevel(): BuildingLevels.Entry | undefined;
        get retinueChain(): CampaignRetinueChains.Entry | undefined;
        get subculture(): CulturesSubcultures.Entry | undefined;
    }
}
export default BuildingLevelGarrisonRetinues;
