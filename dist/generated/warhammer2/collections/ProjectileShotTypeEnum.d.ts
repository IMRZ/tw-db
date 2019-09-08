import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace ProjectileShotTypeEnum {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly requiresEffectEnabling: boolean;
        readonly supersedesShotType: string;
        readonly tooltipText: string;
        readonly onscreenName: string;
        readonly iconName: string;
        readonly uiSoundEvent: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default ProjectileShotTypeEnum;
