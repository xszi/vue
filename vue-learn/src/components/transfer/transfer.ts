import Vue from 'vue'
import { Component, Prop, Watch, Mixins } from 'vue-property-decorator'
import template from './transfer.vue'


@Component({
    name: 'transfer',
    mixins: [template]
})

export default class Transfer extends Vue {
    
}
