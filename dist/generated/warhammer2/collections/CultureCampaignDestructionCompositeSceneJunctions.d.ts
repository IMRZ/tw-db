import { CollectionCache, CollectionKey } from "../../../common";
import { Cultures } from "./Cultures";
import { CampaignCompositeScenes } from "./CampaignCompositeScenes";
export declare namespace CultureCampaignDestructionCompositeSceneJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _culture: string;
        readonly _compositeScene: string;
        constructor(collectionCache: CollectionCache, values: any);
        get culture(): Cultures.Entry | undefined;
        get compositeScene(): CampaignCompositeScenes.Entry | undefined;
    }
}
export default CultureCampaignDestructionCompositeSceneJunctions;
