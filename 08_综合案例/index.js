Vue.createApp({
    template: "#my-app",
    data(){
        return {
            books: [
                {
                    id: 1,
                    name: '《算法导论》',
                    date: '2006-9',
                    price: 85.00,
                    count: 1
                },
                {
                    id: 2,
                    name: '《UNIX编程艺术》',
                    date: '2006-2',
                    price: 59.00,
                    count: 1
                },
                {
                    id: 3,
                    name: '《编程珠玑》',
                    date: '2008-10',
                    price: 39.00,
                    count: 1
                },
                {
                    id: 4,
                    name: '《数据结构》',
                    date: '2010-2',
                    price: 58.00,
                    count: 1
                },
            ]
        }
    },
    methods:{
        increment(index){
            // 通过索引值获取到对象
            console.log(index);
            this.books[index].count++;
        },
        decrement(index){
            this.books[index].count--;
        },
        removeBook(index){
            this.books.splice(index,1);
        },
        formatPrice(price){
            return '￥' + price;
        }
    },
    computed:{
        totalPrice(){
            let finalPrice=0;
            for (let book of this.books){
                finalPrice+=book.price * book.count;
            }
            return finalPrice;
        },
        // vue3不支持过滤器，推荐两种做法：使用计算属性/使用全局的方法
        filterBooks(){
            return this.books.map(item => {
                const newItem=Object.assign({},item);
                newItem.price = '￥' + item.price;
                return newItem;
            });
        }
    }
}).mount("#app");