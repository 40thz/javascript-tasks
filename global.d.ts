export { };

declare global {
    interface Array<T> {
        myForEach(callbackFn: (item: T, index: number, arr: T[]) => void, ctx?: any): void;
        myMap(callbackFn: (item: T, index: number, arr: T[]) => T): T[]
    }
}