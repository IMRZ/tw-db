import { CollectionCache, CollectionKey } from "../../../common";
import { Dilemmas } from "./Dilemmas";
import { CampaignSubjects } from "./CampaignSubjects";
export declare namespace DilemmaToCampaignSubjectJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _dilemmaKey: string;
        readonly _campaignSubjectKey: string;
        readonly weighting: number;
        constructor(collectionCache: CollectionCache, values: any);
        get dilemmaKey(): Dilemmas.Entry | undefined;
        get campaignSubjectKey(): CampaignSubjects.Entry | undefined;
    }
}
export default DilemmaToCampaignSubjectJunctions;
