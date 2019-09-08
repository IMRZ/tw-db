import { CollectionCache, CollectionKey } from "../../../common";
import { Dilemmas } from "./Dilemmas";
export declare namespace TreasureHuntExtraInformations {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _treasureHuntDilemmaKey: string;
        readonly option1Images: string;
        readonly option2Images: string;
        readonly option3Images: string;
        readonly option4Images: string;
        readonly overlayImage: string;
        readonly colorBlindModeOverlay: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly treasureHuntDilemmaKey: Dilemmas.Entry | undefined;
    }
}
export default TreasureHuntExtraInformations;
