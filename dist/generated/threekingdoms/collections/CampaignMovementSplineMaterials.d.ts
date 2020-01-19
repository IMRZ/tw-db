import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { UiColours } from "./UiColours";
export declare namespace CampaignMovementSplineMaterials {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly material: string;
        readonly width: number;
        readonly maxSubdivisions: number;
        readonly _baseColour: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGroup(): CampaignGroups.Entry | undefined;
        get baseColour(): UiColours.Entry | undefined;
    }
}
export default CampaignMovementSplineMaterials;
