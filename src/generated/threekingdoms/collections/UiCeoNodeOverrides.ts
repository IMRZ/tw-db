
import { CollectionCache, CollectionKey } from "../../../common";
import { CeoNodes } from "./CeoNodes";
import { CampaignGroups } from "./CampaignGroups";

export namespace UiCeoNodeOverrides {
  export const KEY = new CollectionKey("ui_ceo_node_overrides");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _ceoNode: string;
    readonly _campaignGroup: string;
    readonly title: string;
    readonly description: string;
    readonly iconPath: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._ceoNode = values["ceo_node"];
      this._campaignGroup = values["campaign_group"];
      this.title = values["title"];
      this.description = values["description"];
      this.iconPath = values["icon_path"];
    }
    
    get ceoNode(): CeoNodes.Entry | undefined {
      const collection = <CeoNodes.Entry[]>this.collectionCache.getCollection(CeoNodes.KEY, CeoNodes.Entry);
      return collection.find(entry => entry.key === this._ceoNode);
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
  }
}

export default UiCeoNodeOverrides;
