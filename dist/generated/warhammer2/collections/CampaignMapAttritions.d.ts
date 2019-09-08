import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMapAttritionTypes } from "./CampaignMapAttritionTypes";
import { CampaignMapAttritionDamages } from "./CampaignMapAttritionDamages";
import { MessageEvents } from "./MessageEvents";
export declare namespace CampaignMapAttritions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _type: string;
        readonly _damage: string;
        readonly campaignMapTooltip: string;
        readonly unitCardTooltip: string;
        readonly unitImmunityText: string;
        readonly _messageEventAssociation: string;
        readonly isSnow: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly type: CampaignMapAttritionTypes.Entry | undefined;
        readonly damage: CampaignMapAttritionDamages.Entry | undefined;
        readonly messageEventAssociation: MessageEvents.Entry | undefined;
    }
}
export default CampaignMapAttritions;
