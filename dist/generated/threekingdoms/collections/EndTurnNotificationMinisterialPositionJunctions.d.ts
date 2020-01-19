import { CollectionCache, CollectionKey } from "../../../common";
import { EndTurnNotifications } from "./EndTurnNotifications";
import { MinisterialPositions } from "./MinisterialPositions";
export declare namespace EndTurnNotificationMinisterialPositionJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _endTurnNotification: string;
        readonly _ministerialPosition: string;
        constructor(collectionCache: CollectionCache, values: any);
        get endTurnNotification(): EndTurnNotifications.Entry | undefined;
        get ministerialPosition(): MinisterialPositions.Entry | undefined;
    }
}
export default EndTurnNotificationMinisterialPositionJunctions;
