
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignPayloadUiDetails {
  export const KEY = new CollectionKey("campaign_payload_ui_details");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly component: string;
    readonly description: string;
    readonly icon: string;
    readonly comment: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.component = values["component"];
      this.description = values["description"];
      this.icon = values["icon"];
      this.comment = values["comment"];
    }
    
  }
}

export default CampaignPayloadUiDetails;
