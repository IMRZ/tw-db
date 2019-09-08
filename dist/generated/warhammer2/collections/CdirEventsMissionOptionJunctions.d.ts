import { CollectionCache, CollectionKey } from "../../../common";
import { Missions } from "./Missions";
import { CdirEventsOptions } from "./CdirEventsOptions";
import { TexcExpansions } from "./TexcExpansions";
export declare namespace CdirEventsMissionOptionJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _missionKey: string;
        readonly _optionKey: string;
        readonly value: string;
        readonly _gameExpansionKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly missionKey: Missions.Entry | undefined;
        readonly optionKey: CdirEventsOptions.Entry | undefined;
        readonly gameExpansionKey: TexcExpansions.Entry | undefined;
    }
}
export default CdirEventsMissionOptionJunctions;
