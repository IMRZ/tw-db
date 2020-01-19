import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMapAreasOfInterest } from "./CampaignMapAreasOfInterest";
import { CampaignGroups } from "./CampaignGroups";
import { UiColours } from "./UiColours";
export declare namespace CampaignAreasOfInterest {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _areaOfInterest: string;
        readonly _group: string;
        readonly title: string;
        readonly description: string;
        readonly icon: string;
        readonly splineMaterial: string;
        readonly _splineColour: string;
        readonly iconHeightOffset: number;
        constructor(collectionCache: CollectionCache, values: any);
        get areaOfInterest(): CampaignMapAreasOfInterest.Entry | undefined;
        get group(): CampaignGroups.Entry | undefined;
        get splineColour(): UiColours.Entry | undefined;
    }
}
export default CampaignAreasOfInterest;
