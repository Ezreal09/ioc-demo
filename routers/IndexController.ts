import { Context } from '@interfaces/IKoa';
// import { IApi } from '@interfaces/IApi';
import { GET, route } from 'awilix-koa';
// import Router from 'koa-router';

@route('/')
class ApiController {
    @route('/')
    @GET()
    async actionList(ctx: Context,next:()=> Promise<unknown>):Promise<any> {
        ctx.body = await ctx.render('index')
    }
}
export default ApiController;
