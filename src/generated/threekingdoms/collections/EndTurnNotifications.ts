
import { CollectionCache, CollectionKey } from "../../../common";
import { UiEndTurnNotificationSeverityLevelEnums } from "./UiEndTurnNotificationSeverityLevelEnums";

export namespace EndTurnNotifications {
  export const KEY = new CollectionKey("end_turn_notifications");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly icon: string;
    readonly displayText: string;
    readonly enabledByDefault: boolean;
    readonly blocking: boolean;
    readonly important: boolean;
    readonly title: string;
    readonly detailedDescription: string;
    readonly _severityLevel: string;
    readonly canBeSupressedByPlayer: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.icon = values["icon"];
      this.displayText = values["display_text"];
      this.enabledByDefault = !!values["enabled_by_default"];
      this.blocking = !!values["blocking"];
      this.important = !!values["important"];
      this.title = values["title"];
      this.detailedDescription = values["detailed_description"];
      this._severityLevel = values["severity_level"];
      this.canBeSupressedByPlayer = !!values["can_be_supressed_by_player"];
    }
    
    get severityLevel(): UiEndTurnNotificationSeverityLevelEnums.Entry | undefined {
      const collection = <UiEndTurnNotificationSeverityLevelEnums.Entry[]>this.collectionCache.getCollection(UiEndTurnNotificationSeverityLevelEnums.KEY, UiEndTurnNotificationSeverityLevelEnums.Entry);
      return collection.find(entry => entry.severityLevel === this._severityLevel);
    }
  }
}

export default EndTurnNotifications;
