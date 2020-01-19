import { CollectionCache, CollectionKey } from "../../../common";
import { MissionTypes } from "./MissionTypes";
export declare namespace Missions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _missionType: string;
        readonly localisedTitle: string;
        readonly localisedDescription: string;
        readonly uiImage: string;
        readonly uiIcon: string;
        readonly generate: boolean;
        readonly prioritised: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get missionType(): MissionTypes.Entry | undefined;
    }
}
export default Missions;
