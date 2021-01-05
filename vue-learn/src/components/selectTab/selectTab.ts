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

    changeActiveTab (tabName: string) {
        this.tab = tabName;
        const bar = <HTMLElement>document.getElementsByClassName('tabs-active-bar')[0];
        // ts语法需要加类型断言<HTMLElement>
        const tab = <HTMLElement>this.$refs[`tab-${tabName}`];
        if (!bar || !tab || !tab.querySelector('.text')) {
            return;
        }
        const left = tab.offsetLeft;
        // 使用非空断言符号tab.querySelector('.text')!
        const { width } = tab.querySelector('.text')!.getBoundingClientRect();
        const barWidth = bar.getBoundingClientRect().width;
        const x = left + (width - barWidth) / 2;
        bar.style.transform = `translate(${x}px)`
    }
}
