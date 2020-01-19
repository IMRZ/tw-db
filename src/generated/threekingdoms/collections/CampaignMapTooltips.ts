
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMapTooltipTexts } from "./CampaignMapTooltipTexts";

export namespace CampaignMapTooltips {
  export const KEY = new CollectionKey("campaign_map_tooltips");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _selectContext: any;
    readonly _overContext: any;
    readonly _tooltipLine: string;
    readonly _adviceLine: string;
    readonly _mainLine: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._selectContext = values["select_context"];
      this._overContext = values["over_context"];
      this._tooltipLine = values["tooltip_line"];
      this._adviceLine = values["advice_line"];
      this._mainLine = values["main_line"];
    }
    
    get tooltipLine(): CampaignMapTooltipTexts.Entry | undefined {
      const collection = <CampaignMapTooltipTexts.Entry[]>this.collectionCache.getCollection(CampaignMapTooltipTexts.KEY, CampaignMapTooltipTexts.Entry);
      return collection.find(entry => entry.key === this._tooltipLine);
    }
    
    get adviceLine(): CampaignMapTooltipTexts.Entry | undefined {
      const collection = <CampaignMapTooltipTexts.Entry[]>this.collectionCache.getCollection(CampaignMapTooltipTexts.KEY, CampaignMapTooltipTexts.Entry);
      return collection.find(entry => entry.key === this._adviceLine);
    }
    
    get mainLine(): CampaignMapTooltipTexts.Entry | undefined {
      const collection = <CampaignMapTooltipTexts.Entry[]>this.collectionCache.getCollection(CampaignMapTooltipTexts.KEY, CampaignMapTooltipTexts.Entry);
      return collection.find(entry => entry.key === this._mainLine);
    }
  }
}

export default CampaignMapTooltips;
