'use strict';

/**
 * post controller
 */


const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::post.post',({strapi}) => ({
   idComments: async(ctx) => {
        const {id} = ctx.params;

        const entries = await strapi.entityService.findMany('api::post.post' , {
            populate: 'comments',
            filters:{id}
        });
        
        return entries[0].comments;

   } 
}));
