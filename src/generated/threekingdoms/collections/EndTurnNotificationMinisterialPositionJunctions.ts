
import { CollectionCache, CollectionKey } from "../../../common";
import { EndTurnNotifications } from "./EndTurnNotifications";
import { MinisterialPositions } from "./MinisterialPositions";

export namespace EndTurnNotificationMinisterialPositionJunctions {
  export const KEY = new CollectionKey("end_turn_notification_ministerial_position_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _endTurnNotification: string;
    readonly _ministerialPosition: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._endTurnNotification = values["end_turn_notification"];
      this._ministerialPosition = values["ministerial_position"];
    }
    
    get endTurnNotification(): EndTurnNotifications.Entry | undefined {
      const collection = <EndTurnNotifications.Entry[]>this.collectionCache.getCollection(EndTurnNotifications.KEY, EndTurnNotifications.Entry);
      return collection.find(entry => entry.key === this._endTurnNotification);
    }
    
    get ministerialPosition(): MinisterialPositions.Entry | undefined {
      const collection = <MinisterialPositions.Entry[]>this.collectionCache.getCollection(MinisterialPositions.KEY, MinisterialPositions.Entry);
      return collection.find(entry => entry.ministerKey === this._ministerialPosition);
    }
  }
}

export default EndTurnNotificationMinisterialPositionJunctions;
