import Vue from 'vue'
import { Component, Prop, Watch, Mixins } from 'vue-property-decorator'
import template from './testChild.vue'


@Component({
    name: 'testChild',
    mixins: [template]
})

export default class TestChild extends Vue {
    data () {
        return {
            value: [],
            data: []
        }
    }
}
