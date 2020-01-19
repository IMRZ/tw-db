
import { CollectionCache, CollectionKey } from "../../../common";
import { EndTurnNotifications } from "./EndTurnNotifications";
import { MissionIssuers } from "./MissionIssuers";

export namespace EndTurnNotificationMissionIssuerJunctions {
  export const KEY = new CollectionKey("end_turn_notification_mission_issuer_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _endTurnNotification: string;
    readonly _missionIssuer: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._endTurnNotification = values["end_turn_notification"];
      this._missionIssuer = values["mission_issuer"];
    }
    
    get endTurnNotification(): EndTurnNotifications.Entry | undefined {
      const collection = <EndTurnNotifications.Entry[]>this.collectionCache.getCollection(EndTurnNotifications.KEY, EndTurnNotifications.Entry);
      return collection.find(entry => entry.key === this._endTurnNotification);
    }
    
    get missionIssuer(): MissionIssuers.Entry | undefined {
      const collection = <MissionIssuers.Entry[]>this.collectionCache.getCollection(MissionIssuers.KEY, MissionIssuers.Entry);
      return collection.find(entry => entry.issuerKey === this._missionIssuer);
    }
  }
}

export default EndTurnNotificationMissionIssuerJunctions;
