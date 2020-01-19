import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignPayloads } from "./CampaignPayloads";
import { CampaignPayloadDeathTypeComponentTypes } from "./CampaignPayloadDeathTypeComponentTypes";
import { DeathTypes } from "./DeathTypes";
export declare namespace CampaignPayloadDeathTypeComponents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _payload: string;
        readonly _component: string;
        readonly _deathType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get payload(): CampaignPayloads.Entry | undefined;
        get component(): CampaignPayloadDeathTypeComponentTypes.Entry | undefined;
        get deathType(): DeathTypes.Entry | undefined;
    }
}
export default CampaignPayloadDeathTypeComponents;
