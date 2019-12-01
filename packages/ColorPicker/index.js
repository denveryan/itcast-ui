// 导入组件，组件必须声明 name
import ColorPicker from './src/color-picker'
// 为组件提供 install 安装方法，供按需引入
ColorPicker.install = function (Vue) {
  Vue.component(ColorPicker.name, ColorPicker)
}
// 默认导出组件
export default ColorPicker
