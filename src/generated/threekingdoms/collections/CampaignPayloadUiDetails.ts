
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignPayloadUiDetails {
  export const KEY = new CollectionKey("campaign_payload_ui_details");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly component: string;
    readonly description: string;
    readonly icon: string;
    readonly comment: string;
    readonly sortOrder: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.component = values["component"];
      this.description = values["description"];
      this.icon = values["icon"];
      this.comment = values["comment"];
      this.sortOrder = values["sort_order"];
    }
    
  }
}

export default CampaignPayloadUiDetails;
