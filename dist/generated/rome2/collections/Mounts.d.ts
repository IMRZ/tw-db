import { CollectionCache, CollectionKey } from "../../../common";
import { BattleAnimationsTable } from "./BattleAnimationsTable";
import { BattleEntities } from "./BattleEntities";
import { Variants } from "./Variants";
import { AudioMaterialsEnums } from "./AudioMaterialsEnums";
export declare namespace Mounts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _animation: string;
        readonly _entity: string;
        readonly mountArmour: number;
        readonly _variant: string;
        readonly _audioArmourType: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly animation: BattleAnimationsTable.Entry | undefined;
        readonly entity: BattleEntities.Entry | undefined;
        readonly variant: Variants.Entry | undefined;
        readonly audioArmourType: AudioMaterialsEnums.Entry | undefined;
    }
}
export default Mounts;
