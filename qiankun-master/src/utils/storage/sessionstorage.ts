/**
 * 存储分装对外提供统一的方法及接口使用
 * sessionStorage 存储到客户端
 */
class SessionStorageAPI {
    set(key: string, value: string): void {
        return sessionStorage.setItem(key, value);
    }

    get(key: string): string | null {
        return sessionStorage.getItem(key);
    }

    remove(key: string): void {
        return sessionStorage.removeItem(key);
    }
}
export { SessionStorageAPI };
