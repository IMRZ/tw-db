import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignTreeTypes } from "./CampaignTreeTypes";
import { Cultures } from "./Cultures";
export declare namespace CampaignTreeTypeCultures {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _treeType: string;
        readonly _culture: string;
        constructor(collectionCache: CollectionCache, values: any);
        get treeType(): CampaignTreeTypes.Entry | undefined;
        get culture(): Cultures.Entry | undefined;
    }
}
export default CampaignTreeTypeCultures;
