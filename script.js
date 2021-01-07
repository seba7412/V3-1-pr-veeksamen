const app = Vue.createApp({
    data() {
        return {
            mainpage: true,
            notes: [],
            input: {},
        };
    },

    methods: {
        mainPageTrue() {
            this.mainpage = true;
        },
        mainPageFalse() {
            this.mainpage = false;
        },

        // inputs
        saveInput() {
            this.input.date = Date.parse(new Date);
            this.notes.push(Object.assign({}, this.input));
            this.mainPageTrue();
            localStorage.setItem("moodAppNotes", this.notes);

            // test
            console.log(this.input)
            console.log(this.notes)
            console.log(this.noNotes)
            console.log(this.notes.length)
        },
        titleInput(event) {
            this.input.title = event.target.value;
        },
        moodInput(moodNum) {
            this.input.mood = moodNum;
        },
        descriptionInput(event) {
            this.input.description = event.target.value;
        },

        // emoji color
        emojiColor(emojiNum) {
            if (emojiNum === this.input.mood) {
                return "#ffff00";
            }
        },

        // test
        test(date) {
            console.log(Date.parse(new Date))

            // return Math.round(Date.parse(new Date) - date)
            return Date.parse(new Date) - date
        },

        load() {
            this.notes = localStorage.getItem("moodAppNotes");
            console.log(localStorage.getItem("moodAppNotes"))
        }
    },

    computed: {
        noNotes() {
            if (this.notes.length > 0) {
                return false;
            }
            else {
                return true;
             }
        }
    },
});

app.mount("#app");