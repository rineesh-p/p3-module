class Logger {
    static tag = () => ["Game", "background:#e8e9a1;color:#312c51;padding:1px 4px;border-radius:4px"];

    static log = (msg:string) => {
        const tags = Logger.tag();
        console.log(`%c${tags[0]}%c ${msg}`, tags[1], "color:#a3ddcb");
    };

    static error = (msg:string) => {
        const tags = Logger.tag();
        console.log(`%c${tags[0]}%c ${msg}`, tags[1], "color:#e5707e");
    };

    static warning = (msg:string) => {
        const tags = Logger.tag();
        console.log(`%c${tags[0]}%c ${msg}`, tags[1], "color:#e6b566");
    };
}
export {Logger};