const app = Vue.createApp({
    data() {
        return {
            mainpage: true,
            notes: [],
        };
    },

    methods: {
        mainPageTrue() {
            this.mainpage = true;
        },
        mainPageFalse() {
            this.mainpage = false;
        },
        aa() {
            // console.log(" aaaaaayyy  " + this.notes.length
            // return true;
        }
    },
});

app.mount("#app");