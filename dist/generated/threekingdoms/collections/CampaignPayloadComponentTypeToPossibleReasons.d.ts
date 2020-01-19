import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignPayloadComponentTypes } from "./CampaignPayloadComponentTypes";
import { CampaignPayloadPossibleReasons } from "./CampaignPayloadPossibleReasons";
export declare namespace CampaignPayloadComponentTypeToPossibleReasons {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _type: string;
        readonly _reason: string;
        readonly localisedText: string;
        constructor(collectionCache: CollectionCache, values: any);
        get type(): CampaignPayloadComponentTypes.Entry | undefined;
        get reason(): CampaignPayloadPossibleReasons.Entry | undefined;
    }
}
export default CampaignPayloadComponentTypeToPossibleReasons;
