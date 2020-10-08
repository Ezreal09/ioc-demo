declare module 'koa-swig' {
    function render<T>(value: T | render.DefaultSettings):any;
    namespace render {
        interface DefaultSettings {
            root: string,
            autoescape: boolean,
            cache: string | boolean,
            ext: string,
            writeBody: boolean,
        }
    }
    export default render;
}