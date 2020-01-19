import { CollectionCache, CollectionKey } from "../../../common";
import { WarscapeRigid } from "./WarscapeRigid";
export declare namespace BattleTerrainFarms {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly farm: string;
        readonly tileModel: string;
        readonly colourMapModel: string;
        readonly blendMapModel: string;
        readonly grassMapModel: string;
        readonly alternateColourMapModel: string;
        readonly alternateBlendMapModel: string;
        readonly alternateGrassMapModel: string;
        readonly roadColourMapModel: string;
        readonly roadBlendMapModel: string;
        readonly roadGrassMapModel: string;
        readonly tileMap: string;
        readonly wallTexture: string;
        readonly _wallEnd: string;
        readonly wallCrossSection: string;
        constructor(collectionCache: CollectionCache, values: any);
        get wallEnd(): WarscapeRigid.Entry | undefined;
    }
}
export default BattleTerrainFarms;
