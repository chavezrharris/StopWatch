type Time = {
    second: number,
    minute: number,
    hour: number
}

export const LocalStorageManager = {

    setItem: (key: string, item: string) => {
        localStorage.setItem(key, item);
    },

    getItem: (key: string): string | null => {
        const item = localStorage.getItem(key);
        if (item) {
            return item;
        }
        return null;
    },

    setTime: (key: string, timer: Time) => {
        const stringifyTimer = JSON.stringify(timer);
        localStorage.setItem(key, stringifyTimer);
    },

    getTime: (key: string): Time => {
        const stringifyTimer = localStorage.getItem(key);
        if (stringifyTimer) {
            return JSON.parse(stringifyTimer);
        }
        return {
            second: 0,
            minute: 0,
            hour: 0
        }
    },
    removeItem: (key: string): void => {
        localStorage.removeItem(key);
    }
}