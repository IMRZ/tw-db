import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignSubjectEvolutions } from "./CampaignSubjectEvolutions";
export declare namespace CampaignSubjectEvolutionLinks {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _parent: string;
        readonly _child: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly parent: CampaignSubjectEvolutions.Entry | undefined;
        readonly child: CampaignSubjectEvolutions.Entry | undefined;
    }
}
export default CampaignSubjectEvolutionLinks;
