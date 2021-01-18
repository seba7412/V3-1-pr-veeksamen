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
            this.input.date = Date.parse(new Date) / 1000;
            this.notes.push(Object.assign({}, this.input));
            // this.notes.push(this.input);
            localStorage.setItem("moodAppNotes", JSON.stringify(this.notes));
            this.mainPageTrue();

            // test
            console.log(this.input)
            // console.log(this.notes)
            // console.log(this.noNotes)
            // console.log(this.notes.length)
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
        noteAge(date) {
            if (date < 60) {
                return Date.parse(new Date) / 1000 - date + "seconds ago"
            }
            else if (date / 60 < 60) {
                return Date.parse(new Date) / 1000 - date + "minutes ago"
            }
            return Date.parse(new Date) / 1000 - date
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

    mounted() {
        if (localStorage.getItem("moodAppNotes") != null) {
            this.notes = JSON.parse(localStorage.getItem("moodAppNotes"));
        }
    },
});

app.mount("#app");