const app = Vue.createApp({
    data() {
        return {
            div1Selected: false,
            div2Selected: false,
            div3Selected: false
        }
    },
    methods: {
        divSelected(divId) {
            if (divId === 1) {
                this.div1Selected = !this.div1Selected;
            } else if (divId === 2) {
                this.div2Selected = !this.div2Selected;
            } else  if (divId === 3) {
                this.div3Selected = !this.div3Selected;
            } 
        }
    },
    computed: {
        div1Classes() {
            return {isSelected:this.div1Selected};
        },
        div2Classes() {
            return {isSelected:this.div2Selected};
        },
        div3Classes() {
            return {isSelected:this.div3Selected};
        }
    }
}).mount("#app");