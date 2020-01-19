
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMapAttritionTypes } from "./CampaignMapAttritionTypes";
import { CampaignMapAttritionDamages } from "./CampaignMapAttritionDamages";
import { CampaignMapAttritionApplicationPhases } from "./CampaignMapAttritionApplicationPhases";

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
    readonly isSnow: boolean;
    readonly showWarningOnMap: boolean;
    readonly _applicationPhase: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._type = values["type"];
      this._damage = values["damage"];
      this.campaignMapTooltip = values["campaign_map_tooltip"];
      this.unitCardTooltip = values["unit_card_tooltip"];
      this.unitImmunityText = values["unit_immunity_text"];
      this.isSnow = !!values["is_snow"];
      this.showWarningOnMap = !!values["show_warning_on_map"];
      this._applicationPhase = values["application_phase"];
    }
    
    get type(): CampaignMapAttritionTypes.Entry | undefined {
      const collection = <CampaignMapAttritionTypes.Entry[]>this.collectionCache.getCollection(CampaignMapAttritionTypes.KEY, CampaignMapAttritionTypes.Entry);
      return collection.find(entry => entry.key === this._type);
    }
    
    get damage(): CampaignMapAttritionDamages.Entry | undefined {
      const collection = <CampaignMapAttritionDamages.Entry[]>this.collectionCache.getCollection(CampaignMapAttritionDamages.KEY, CampaignMapAttritionDamages.Entry);
      return collection.find(entry => entry.key === this._damage);
    }
    
    get applicationPhase(): CampaignMapAttritionApplicationPhases.Entry | undefined {
      const collection = <CampaignMapAttritionApplicationPhases.Entry[]>this.collectionCache.getCollection(CampaignMapAttritionApplicationPhases.KEY, CampaignMapAttritionApplicationPhases.Entry);
      return collection.find(entry => entry.id === this._applicationPhase);
    }
  }
}

export default CampaignMapAttritions;
