import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignPayloads } from "./CampaignPayloads";
import { CampaignPayloadSiegeEquipmentComponentTypes } from "./CampaignPayloadSiegeEquipmentComponentTypes";
import { CampaignSiegeConstructionItems } from "./CampaignSiegeConstructionItems";
export declare namespace CampaignPayloadSiegeEquipmentComponents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _payload: string;
        readonly _componentType: string;
        readonly _siegeConstructionItem: string;
        constructor(collectionCache: CollectionCache, values: any);
        get payload(): CampaignPayloads.Entry | undefined;
        get componentType(): CampaignPayloadSiegeEquipmentComponentTypes.Entry | undefined;
        get siegeConstructionItem(): CampaignSiegeConstructionItems.Entry | undefined;
    }
}
export default CampaignPayloadSiegeEquipmentComponents;
