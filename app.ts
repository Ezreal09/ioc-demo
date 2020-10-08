// import { addAliases } from 'module-alias';
// addAliases({
//     "@root":__dirname,
//     "@interfaces":`${__dirname}/interface`
// });
import Koa from 'koa';
import { createContainer, Lifetime } from 'awilix';
import { scopePerRequest, loadControllers } from 'awilix-koa';
import render from 'koa-swig';
import co from 'co';
import path from 'path';

const app = new Koa();

app.context.render = co.wrap(render({
    root: path.join(__dirname, 'views'),
    autoescape: true,
    cache: 'memory',
    ext: 'html',
    writeBody: false,
  }));
   


//创建一个基础容器，负责装载服务
const container = createContainer();
container.loadModules([`${__dirname}/services/*.ts`], {
    formatName: "camelCase",
    resolverOptions: {
        lifetime:Lifetime.SCOPED
    }
});

//把container注入到整个koa流程中
app.use(scopePerRequest(container));
app.use(loadControllers(`${__dirname}/routers/*.ts`));

app.listen("8081", () => {
    console.log('第一个ioc应用🍺');

})
