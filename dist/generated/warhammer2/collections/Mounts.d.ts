import { CollectionCache, CollectionKey } from "../../../common";
import { BattleAnimationsTable } from "./BattleAnimationsTable";
import { BattleEntities } from "./BattleEntities";
import { AudioArmourTypes } from "./AudioArmourTypes";
import { Variants } from "./Variants";
import { AudioVoiceoverCultures } from "./AudioVoiceoverCultures";
export declare namespace Mounts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _animation: string;
        readonly _entity: string;
        readonly _audioArmourType: string;
        readonly _variant: string;
        readonly _voiceover: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly animation: BattleAnimationsTable.Entry | undefined;
        readonly entity: BattleEntities.Entry | undefined;
        readonly audioArmourType: AudioArmourTypes.Entry | undefined;
        readonly variant: Variants.Entry | undefined;
        readonly voiceover: AudioVoiceoverCultures.Entry | undefined;
    }
}
export default Mounts;
