export default {
    path:"/ucenter",
    name:"ucenter",
    component:()=>import('../views/ucenter/ucenter.vue'),
    redirect:'ucenter/index',
    children:[{
        path:"index",
        name:"index",
        component:()=>import("../views/ucenter/index/index.vue")
    },{
        path:"infos",
        name:"infos",
        component:()=>import("../views/ucenter/infos/infos.vue")
    },{
        path:"collect",
        name:"collect",
        component:()=>import("../views/ucenter/collect/collect.vue")
    }]
}