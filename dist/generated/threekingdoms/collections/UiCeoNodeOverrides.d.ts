import { CollectionCache, CollectionKey } from "../../../common";
import { CeoNodes } from "./CeoNodes";
import { CampaignGroups } from "./CampaignGroups";
export declare namespace UiCeoNodeOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _ceoNode: string;
        readonly _campaignGroup: string;
        readonly title: string;
        readonly description: string;
        readonly iconPath: string;
        constructor(collectionCache: CollectionCache, values: any);
        get ceoNode(): CeoNodes.Entry | undefined;
        get campaignGroup(): CampaignGroups.Entry | undefined;
    }
}
export default UiCeoNodeOverrides;
