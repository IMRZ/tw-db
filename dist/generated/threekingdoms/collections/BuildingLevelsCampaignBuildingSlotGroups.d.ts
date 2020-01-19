import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { BuildingSlotGroups } from "./BuildingSlotGroups";
import { BmdExportTypes } from "./BmdExportTypes";
import { UiColours } from "./UiColours";
export declare namespace BuildingLevelsCampaignBuildingSlotGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _buildingLevel: string;
        readonly _groupKey: string;
        readonly prefabName: string;
        readonly _levelBmdExportType: string;
        readonly _tintColour: string;
        constructor(collectionCache: CollectionCache, values: any);
        get buildingLevel(): BuildingLevels.Entry | undefined;
        get groupKey(): BuildingSlotGroups.Entry | undefined;
        get levelBmdExportType(): BmdExportTypes.Entry | undefined;
        get tintColour(): UiColours.Entry | undefined;
    }
}
export default BuildingLevelsCampaignBuildingSlotGroups;
