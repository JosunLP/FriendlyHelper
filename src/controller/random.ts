class Random {
    
    public generateString(length: number): string {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    public generateNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    public generateBoolean(): boolean {
        return Math.random() >= 0.5;
    }

    public generateDate(min: Date, max: Date): Date {
        const diff = max.getTime() - min.getTime();
        return new Date(min.getTime() + Math.random() * diff);
    }

    public generateArray(length: number): string[] {
        const result = [];
        for (let i = 0; i < length; i++) {
            result.push(this.generateString(this.generateNumber(5, 10)));
        }
        return result;
    }

    public generateEnum(enumeration: any): any {
        const keys = Object.keys(enumeration);
        return enumeration[keys[this.generateNumber(0, keys.length - 1)]];
    }

    // generate a method that retunrs a random object based
    // on the given class
    public generateObject<T>(classType: { new(): T }): T {
        const instance = new classType();
        const keys = Object.keys(instance);
        for (const key of keys) {
            const value = instance[key];
            if (typeof value === 'string') {
                instance[key] = this.generateString(this.generateNumber(5, 10));
            } else if (typeof value === 'number') {
                instance[key] = this.generateNumber(0, 100);
            } else if (typeof value === 'boolean') {
                instance[key] = this.generateBoolean();
            } else if (value instanceof Date) {
                instance[key] = this.generateDate(new Date(0), new Date());
            } else if (value instanceof Array) {
                instance[key] = this.generateArray(this.generateNumber(5, 10));
            } else if (typeof value === 'object') {
                instance[key] = this.generateObject(value.constructor);
            }
        }
        return instance;
    }
}