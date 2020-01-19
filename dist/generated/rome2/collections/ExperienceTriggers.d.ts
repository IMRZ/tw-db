import { CollectionCache, CollectionKey } from "../../../common";
import { TriggerEvents } from "./TriggerEvents";
import { ExperienceTriggersTargets } from "./ExperienceTriggersTargets";
export declare namespace ExperienceTriggers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly triggerKey: string;
        readonly _event: string;
        readonly experiencePoints: number;
        readonly condition: string;
        readonly localisedDescription: string;
        readonly _target: string;
        constructor(collectionCache: CollectionCache, values: any);
        get event(): TriggerEvents.Entry | undefined;
        get target(): ExperienceTriggersTargets.Entry | undefined;
    }
}
export default ExperienceTriggers;
