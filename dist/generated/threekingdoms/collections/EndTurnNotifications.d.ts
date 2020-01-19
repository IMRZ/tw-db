import { CollectionCache, CollectionKey } from "../../../common";
import { UiEndTurnNotificationSeverityLevelEnums } from "./UiEndTurnNotificationSeverityLevelEnums";
export declare namespace EndTurnNotifications {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
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
        constructor(collectionCache: CollectionCache, values: any);
        get severityLevel(): UiEndTurnNotificationSeverityLevelEnums.Entry | undefined;
    }
}
export default EndTurnNotifications;
