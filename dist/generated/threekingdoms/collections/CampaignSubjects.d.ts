import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignSubjectStrings } from "./CampaignSubjectStrings";
export declare namespace CampaignSubjects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _optionalName: string;
        readonly uiImage: string;
        readonly _flavourText: string;
        readonly male: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get optionalName(): CampaignSubjectStrings.Entry | undefined;
        get flavourText(): CampaignSubjectStrings.Entry | undefined;
    }
}
export default CampaignSubjects;
