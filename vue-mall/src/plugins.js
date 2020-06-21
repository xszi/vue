export const useEchartsComponent = {
    install: function(Vue) {
        Vue.component('echart', {
            mounted() {
                const $el = document.getElementById('echarts')
                const mychart = echarts.init($el)
            },
            render(createElement) {
                return createElement{
                    'div',
                    { 
                        attrs: {
                            id: 'echarts'
                        }
                    }
                }
            }
        })
    }
}