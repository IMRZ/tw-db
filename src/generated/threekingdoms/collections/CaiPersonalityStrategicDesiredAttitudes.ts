
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityStrategicComponents } from "./CaiPersonalityStrategicComponents";

export namespace CaiPersonalityStrategicDesiredAttitudes {
  export const KEY = new CollectionKey("cai_personality_strategic_desired_attitudes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _strategicComponent: string;
    readonly bestFriendsAttitude: number;
    readonly veryFriendlyAttitude: number;
    readonly friendlyAttitude: number;
    readonly neutralAttitude: number;
    readonly unfriendlyAttitude: number;
    readonly veryUnfriendlyAttitude: number;
    readonly bitterEnemiesAttitude: number;
    readonly bestFriendsPositiveFactor: number;
    readonly veryFriendlyPositiveFactor: number;
    readonly friendlyPositiveFactor: number;
    readonly neutralPositiveFactor: number;
    readonly unfriendlyPositiveFactor: number;
    readonly veryUnfriendlyPositiveFactor: number;
    readonly bitterEnemiesPositiveFactor: number;
    readonly bestFriendsNegativeFactor: number;
    readonly veryFriendlyNegativeFactor: number;
    readonly friendlyNegativeFactor: number;
    readonly neutralNegativeFactor: number;
    readonly unfriendlyNegativeFactor: number;
    readonly veryUnfriendlyNegativeFactor: number;
    readonly bitterEnemiesNegativeFactor: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._strategicComponent = values["strategic_component"];
      this.bestFriendsAttitude = values["best_friends_attitude"];
      this.veryFriendlyAttitude = values["very_friendly_attitude"];
      this.friendlyAttitude = values["friendly_attitude"];
      this.neutralAttitude = values["neutral_attitude"];
      this.unfriendlyAttitude = values["unfriendly_attitude"];
      this.veryUnfriendlyAttitude = values["very_unfriendly_attitude"];
      this.bitterEnemiesAttitude = values["bitter_enemies_attitude"];
      this.bestFriendsPositiveFactor = values["best_friends_positive_factor"];
      this.veryFriendlyPositiveFactor = values["very_friendly_positive_factor"];
      this.friendlyPositiveFactor = values["friendly_positive_factor"];
      this.neutralPositiveFactor = values["neutral_positive_factor"];
      this.unfriendlyPositiveFactor = values["unfriendly_positive_factor"];
      this.veryUnfriendlyPositiveFactor = values["very_unfriendly_positive_factor"];
      this.bitterEnemiesPositiveFactor = values["bitter_enemies_positive_factor"];
      this.bestFriendsNegativeFactor = values["best_friends_negative_factor"];
      this.veryFriendlyNegativeFactor = values["very_friendly_negative_factor"];
      this.friendlyNegativeFactor = values["friendly_negative_factor"];
      this.neutralNegativeFactor = values["neutral_negative_factor"];
      this.unfriendlyNegativeFactor = values["unfriendly_negative_factor"];
      this.veryUnfriendlyNegativeFactor = values["very_unfriendly_negative_factor"];
      this.bitterEnemiesNegativeFactor = values["bitter_enemies_negative_factor"];
    }
    
    get strategicComponent(): CaiPersonalityStrategicComponents.Entry | undefined {
      const collection = <CaiPersonalityStrategicComponents.Entry[]>this.collectionCache.getCollection(CaiPersonalityStrategicComponents.KEY, CaiPersonalityStrategicComponents.Entry);
      return collection.find(entry => entry.id === this._strategicComponent);
    }
  }
}

export default CaiPersonalityStrategicDesiredAttitudes;
