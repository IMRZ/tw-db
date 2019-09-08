import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignSubjectStrings } from "./CampaignSubjectStrings";
import { Factions } from "./Factions";
export declare namespace CampaignSubjects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _optionalName: string;
        readonly _optionalNameSourceFaction: string;
        readonly uiImage: string;
        readonly _flavourText: string;
        readonly male: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly optionalName: CampaignSubjectStrings.Entry | undefined;
        readonly optionalNameSourceFaction: Factions.Entry | undefined;
        readonly flavourText: CampaignSubjectStrings.Entry | undefined;
    }
}
export default CampaignSubjects;
