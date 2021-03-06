import { CollectionCache, CollectionKey } from "../../../common";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { CampaignStances } from "./CampaignStances";
export declare namespace CaiStanceHints {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _subculture: string;
        readonly _movementStance: string;
        readonly _attackStance: string;
        constructor(collectionCache: CollectionCache, values: any);
        get subculture(): CulturesSubcultures.Entry | undefined;
        get movementStance(): CampaignStances.Entry | undefined;
        get attackStance(): CampaignStances.Entry | undefined;
    }
}
export default CaiStanceHints;
