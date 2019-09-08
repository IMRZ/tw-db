
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMapAttritionTypes } from "./CampaignMapAttritionTypes";
import { CampaignMapAttritionDamages } from "./CampaignMapAttritionDamages";
import { MessageEvents } from "./MessageEvents";

export namespace CampaignMapAttritions {
  export const KEY = new CollectionKey("campaign_map_attritions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _type: string;
    readonly _damage: string;
    readonly campaignMapTooltip: string;
    readonly unitCardTooltip: string;
    readonly unitImmunityText: string;
    readonly _messageEventAssociation: string;
    readonly isSnow: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._type = values["type"];
      this._damage = values["damage"];
      this.campaignMapTooltip = values["campaign_map_tooltip"];
      this.unitCardTooltip = values["unit_card_tooltip"];
      this.unitImmunityText = values["unit_immunity_text"];
      this._messageEventAssociation = values["message_event_association"];
      this.isSnow = !!values["is_snow"];
    }
    
    get type(): CampaignMapAttritionTypes.Entry | undefined {
      const collection = <CampaignMapAttritionTypes.Entry[]>this.collectionCache.getCollection(CampaignMapAttritionTypes.KEY, CampaignMapAttritionTypes.Entry);
      return collection.find(entry => entry.key === this._type);
    }
    
    get damage(): CampaignMapAttritionDamages.Entry | undefined {
      const collection = <CampaignMapAttritionDamages.Entry[]>this.collectionCache.getCollection(CampaignMapAttritionDamages.KEY, CampaignMapAttritionDamages.Entry);
      return collection.find(entry => entry.key === this._damage);
    }
    
    get messageEventAssociation(): MessageEvents.Entry | undefined {
      const collection = <MessageEvents.Entry[]>this.collectionCache.getCollection(MessageEvents.KEY, MessageEvents.Entry);
      return collection.find(entry => entry.event === this._messageEventAssociation);
    }
  }
}

export default CampaignMapAttritions;
