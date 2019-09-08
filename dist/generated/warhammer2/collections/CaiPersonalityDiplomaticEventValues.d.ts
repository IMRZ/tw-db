import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityDiplomaticComponents } from "./CaiPersonalityDiplomaticComponents";
import { CaiPersonalityDiplomaticEvents } from "./CaiPersonalityDiplomaticEvents";
export declare namespace CaiPersonalityDiplomaticEventValues {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _componentId: string;
        readonly _eventId: string;
        readonly value: number;
        readonly falloff: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly componentId: CaiPersonalityDiplomaticComponents.Entry | undefined;
        readonly eventId: CaiPersonalityDiplomaticEvents.Entry | undefined;
    }
}
export default CaiPersonalityDiplomaticEventValues;
