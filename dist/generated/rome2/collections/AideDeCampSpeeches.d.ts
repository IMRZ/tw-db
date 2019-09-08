import { CollectionCache, CollectionKey } from "../../../common";
import { BattleCinematicEvents } from "./BattleCinematicEvents";
export declare namespace AideDeCampSpeeches {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly text: string;
        readonly pictureInPicture: boolean;
        readonly offsetAngle: number;
        readonly offsetRange: number;
        readonly circumventCooldown: boolean;
        readonly _cinematicEvent: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly cinematicEvent: BattleCinematicEvents.Entry | undefined;
    }
}
export default AideDeCampSpeeches;
