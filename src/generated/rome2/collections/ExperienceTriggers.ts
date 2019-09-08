
import { CollectionCache, CollectionKey } from "../../../common";
import { TriggerEvents } from "./TriggerEvents";
import { ExperienceTriggersTargets } from "./ExperienceTriggersTargets";

export namespace ExperienceTriggers {
  export const KEY = new CollectionKey("experience_triggers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly triggerKey: string;
    readonly _event: string;
    readonly experiencePoints: number;
    readonly condition: string;
    readonly localisedDescription: string;
    readonly _target: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.triggerKey = values["trigger_key"];
      this._event = values["event"];
      this.experiencePoints = values["experience_points"];
      this.condition = values["condition"];
      this.localisedDescription = values["localised_description"];
      this._target = values["target"];
    }
    
    get event(): TriggerEvents.Entry | undefined {
      const collection = <TriggerEvents.Entry[]>this.collectionCache.getCollection(TriggerEvents.KEY, TriggerEvents.Entry);
      return collection.find(entry => entry.event === this._event);
    }
    
    get target(): ExperienceTriggersTargets.Entry | undefined {
      const collection = <ExperienceTriggersTargets.Entry[]>this.collectionCache.getCollection(ExperienceTriggersTargets.KEY, ExperienceTriggersTargets.Entry);
      return collection.find(entry => entry.key === this._target);
    }
  }
}

export default ExperienceTriggers;
