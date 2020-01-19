import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { UiColours } from "./UiColours";
export declare namespace CampaignMapZoneOfControlColourTints {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _colour: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGroup(): CampaignGroups.Entry | undefined;
        get colour(): UiColours.Entry | undefined;
    }
}
export default CampaignMapZoneOfControlColourTints;
