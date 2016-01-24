import * as React  from 'react';

export default class BaseComponent<P, S> extends React.Component<P, S> {
    private static baseDir: string;
    public static setBaseDir(baseDir: string) {
        if (BaseComponent.baseDir == null || BaseComponent.baseDir == undefined) {
            BaseComponent.baseDir = baseDir;
        }
    }
    public static getBaseDir() {
        return BaseComponent.baseDir;
    }

    private static isLogedIn: boolean;
    public static setIsLogedIn(isLogedIn: boolean) {
        if (BaseComponent.isLogedIn == null || BaseComponent.isLogedIn == undefined) {
            BaseComponent.isLogedIn = isLogedIn;
        }
    }
    public static  getIsLogedIn() :boolean{
        return BaseComponent.isLogedIn;
    }
};
