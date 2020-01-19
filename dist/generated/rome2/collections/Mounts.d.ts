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
        get animation(): BattleAnimationsTable.Entry | undefined;
        get entity(): BattleEntities.Entry | undefined;
        get variant(): Variants.Entry | undefined;
        get audioArmourType(): AudioMaterialsEnums.Entry | undefined;
    }
}
export default Mounts;
