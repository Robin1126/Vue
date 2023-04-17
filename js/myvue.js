// 定义一个类Vue 使用class
class Vue {
    // 定义构造函数
    // options是一个简单的js对象{}
    // option对象中有一个data配置项
    // constructor定义的是构造方法
    constructor(options) {
        // 先不管el这一项，只看data项 data ： {...} 这里的options就是一个data对象{}
        // data中有不少的属性，我们需要先把这些属性拿出来
        // this代表的是Vue对象

        // 1. 获取所有的属性名, anfn是箭头函数
        // Object.keys可以取出所有的key的名字还有对应的下标，分别对应 propertyName和index,这个名字是随意的，但是默认是第一个参数对应属性名，第二个参数对应下标
        Object.keys(options.data).forEach((propertyName) => {
            // options.data就是取出data{}里面的内容，比如msg，name，age
            // console.log(Name, jojo);
            // 要求添加的属性名和目标对象的属性名一致

            // 区分_和$开头的属性，不使用代理机制
            let firstChar = propertyName.charAt(0)
            if (firstChar !='_' && firstChar != '$') {
                Object.defineProperty(this, propertyName, {
                    // propertyName是动态的，每次循环都不一样
                    get() {
                        return options.data[propertyName]
                    },
                    set(val) {
                        options.data[propertyName] = val
                    }
                })
            }
        })
    }
}