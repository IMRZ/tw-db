import { CollectionCache, CollectionKey } from "../../../common";
import { BattleCinematicEvents } from "./BattleCinematicEvents";
import { AudioVoAideDeCampStates } from "./AudioVoAideDeCampStates";
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
        readonly iconName: string;
        readonly uiDurationMs: number;
        readonly hasWorldspaceUiPing: boolean;
        readonly _voiceover: string;
        constructor(collectionCache: CollectionCache, values: any);
        get cinematicEvent(): BattleCinematicEvents.Entry | undefined;
        get voiceover(): AudioVoAideDeCampStates.Entry | undefined;
    }
}
export default AideDeCampSpeeches;
