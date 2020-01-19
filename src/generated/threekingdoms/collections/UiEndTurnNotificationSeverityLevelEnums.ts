
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UiEndTurnNotificationSeverityLevelEnums {
  export const KEY = new CollectionKey("ui_end_turn_notification_severity_level_enums");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly severityLevel: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.severityLevel = values["severity_level"];
    }
    
  }
}

export default UiEndTurnNotificationSeverityLevelEnums;
