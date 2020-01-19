import { CollectionCache, CollectionKey } from "../../../common";
import { PlayerGameDifficultyTypes } from "./PlayerGameDifficultyTypes";
export declare namespace CampaignTaxAdministrationCosts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _difficulty: string;
        readonly regionCount: number;
        readonly administrationCost: number;
        constructor(collectionCache: CollectionCache, values: any);
        get difficulty(): PlayerGameDifficultyTypes.Entry | undefined;
    }
}
export default CampaignTaxAdministrationCosts;
