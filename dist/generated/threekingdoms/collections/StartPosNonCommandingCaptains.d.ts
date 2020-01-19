import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosCharacters } from "./StartPosCharacters";
import { Retinues } from "./Retinues";
export declare namespace StartPosNonCommandingCaptains {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _generalCommandingForce: number;
        readonly _captainRetinue: string;
        readonly captainRetinueId: number;
        constructor(collectionCache: CollectionCache, values: any);
        get generalCommandingForce(): StartPosCharacters.Entry | undefined;
        get captainRetinue(): Retinues.Entry | undefined;
    }
}
export default StartPosNonCommandingCaptains;
