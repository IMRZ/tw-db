
import { CollectionCache, CollectionKey } from "../../../common";


export namespace MinisterialPositions {
  export const KEY = new CollectionKey("ministerial_positions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly ministerKey: string;
    readonly rank: number;
    readonly minimumAge: number;
    readonly maximumAge: number;
    readonly order: number;
    readonly cost: number;
    readonly gravitasWorth: number;
    readonly minimumTermLength: number;
    readonly maximumTermLength: number;
    readonly maximumConcurrentMinisters: number;
    readonly requiredLoyalty: number;
    readonly displayEndTurnNotificationsForPost: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.ministerKey = values["minister_key"];
      this.rank = values["rank"];
      this.minimumAge = values["minimum_age"];
      this.maximumAge = values["maximum_age"];
      this.order = values["order"];
      this.cost = values["cost"];
      this.gravitasWorth = values["gravitas_worth"];
      this.minimumTermLength = values["minimum_term_length"];
      this.maximumTermLength = values["maximum_term_length"];
      this.maximumConcurrentMinisters = values["maximum_concurrent_ministers"];
      this.requiredLoyalty = values["required_loyalty"];
      this.displayEndTurnNotificationsForPost = !!values["display_end_turn_notifications_for_post"];
    }
    
  }
}

export default MinisterialPositions;
