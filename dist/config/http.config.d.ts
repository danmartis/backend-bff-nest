export declare class HttpConfig {
    private readonly options;
    private readonly envConfig;
    constructor();
    getOptions(): any;
    private validateInput;
}
export default interface IEnvConfigInterface {
    [key: string]: string;
}
