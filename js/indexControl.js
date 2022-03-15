(function(root) {
    function Index(len) {
        this.index = 0; //当前的索引值
        this.len = len; //数据的长度，用于判断
    }

    Index.prototype = {
        //取上一个索引（上一首）
        prev: function() {
            return this.get(-1); //切到上一首
        },

        //取下一个索引（下一首）
        next: function() {
            return this.get(1); //切到下一首
        },

        //获取索引，参数为+1或者-1
        get: function(val) {
            this.index = (this.index + val + this.len) % this.len;
            return this.index;
        }
    }

    root.controlIndex = Index; //把构造函数暴露出去，因为实例对象需要传参
})(window.player || (window.player = {}));