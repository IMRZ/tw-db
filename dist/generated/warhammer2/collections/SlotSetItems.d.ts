import { CollectionCache, CollectionKey } from "../../../common";
import { SlotSets } from "./SlotSets";
import { SlotTypes } from "./SlotTypes";
import { SlotTemplates } from "./SlotTemplates";
import { BuildingLevels } from "./BuildingLevels";
import { CampaignCompositeScenes } from "./CampaignCompositeScenes";
export declare namespace SlotSetItems {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _slotSet: string;
        readonly _slotType: string;
        readonly _slotTemplate: string;
        readonly _buildingLevel: string;
        readonly _compositeScene: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly slotSet: SlotSets.Entry | undefined;
        readonly slotType: SlotTypes.Entry | undefined;
        readonly slotTemplate: SlotTemplates.Entry | undefined;
        readonly buildingLevel: BuildingLevels.Entry | undefined;
        readonly compositeScene: CampaignCompositeScenes.Entry | undefined;
    }
}
export default SlotSetItems;
