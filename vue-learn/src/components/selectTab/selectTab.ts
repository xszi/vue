import Vue from 'vue'
import { Component, Prop, Watch, Mixins } from 'vue-property-decorator'
import template from './selectTab.vue'

@Component({
    name: 'selectTab',
    mixins: [template],
    components: {
    }
})

export default class SelectTab extends Vue {

    tab = 'first';

    changeActiveTab () {
        console.log(123456);
    }
}
