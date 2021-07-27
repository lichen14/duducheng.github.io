const app = new Vue({
    el: '#app',
    data: {
        hoverId: -1,
        years: [],
        selectedYear: 'All',
        tags: ["site", "about", "news", "publications", "preprints", "honors", "activities", "talks", "misc"],
        selectedTag: 'site',
        selectedList: "ul",
        showSelected: false,
        numberOfSelected: 0,
    },
    created: function () {
        for (publication of publications) {
            // console.log(publication.year);
            publication.selected = false;
            if (!this.years.includes(publication.year)) {
                this.years.push(publication.year);
            }
        }
        console.log("READY");
    },
    methods: {
        updateSelected() {
            var num = 0;
            for (publication of publications) {
                if (publication.selected) {
                    num++;
                }
            }
            this.numberOfSelected = num;
            this.$forceUpdate();
        },
        selectPublication(pid) {
            publications[pid].selected = !publications[pid].selected;
            this.updateSelected();
        },
    }
});