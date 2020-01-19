import { CollectionCache, CollectionKey } from "../../../common";
import { UniqueAgents } from "./UniqueAgents";
import { CampaignCompositeScenes } from "./CampaignCompositeScenes";
export declare namespace UniqueAgentSpawnVfxJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _uniqueAgent: string;
        readonly _compositeScene: string;
        constructor(collectionCache: CollectionCache, values: any);
        get uniqueAgent(): UniqueAgents.Entry | undefined;
        get compositeScene(): CampaignCompositeScenes.Entry | undefined;
    }
}
export default UniqueAgentSpawnVfxJunctions;
