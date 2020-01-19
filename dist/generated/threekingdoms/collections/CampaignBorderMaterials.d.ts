import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { UiColours } from "./UiColours";
export declare namespace CampaignBorderMaterials {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _group: string;
        readonly material: string;
        readonly overlayMaterial: string;
        readonly _colour1: string;
        readonly _colour2: string;
        readonly _colour3: string;
        constructor(collectionCache: CollectionCache, values: any);
        get group(): CampaignGroups.Entry | undefined;
        get colour1(): UiColours.Entry | undefined;
        get colour2(): UiColours.Entry | undefined;
        get colour3(): UiColours.Entry | undefined;
    }
}
export default CampaignBorderMaterials;
