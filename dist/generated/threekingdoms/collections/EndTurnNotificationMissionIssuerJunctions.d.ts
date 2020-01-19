import { CollectionCache, CollectionKey } from "../../../common";
import { EndTurnNotifications } from "./EndTurnNotifications";
import { MissionIssuers } from "./MissionIssuers";
export declare namespace EndTurnNotificationMissionIssuerJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _endTurnNotification: string;
        readonly _missionIssuer: string;
        constructor(collectionCache: CollectionCache, values: any);
        get endTurnNotification(): EndTurnNotifications.Entry | undefined;
        get missionIssuer(): MissionIssuers.Entry | undefined;
    }
}
export default EndTurnNotificationMissionIssuerJunctions;
