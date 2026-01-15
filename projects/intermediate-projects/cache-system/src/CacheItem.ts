
/*
Represents a single cache entry.
CacheItem is an immutable-key cache
 */

export class CacheItem {
    readonly key: string; // Unique identifier for the cache entry
    private value: string; // Encapsulation

    constructor(key: string, value: string){
        this.key = key;
        this.value = value;
    }

    getValue(): string {
        return this.value;
    }

    setValue(value:string): void {
        this.value = value;
    }

}
