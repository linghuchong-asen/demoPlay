import { GUI } from "./build/bundle.module.js";
import { flyToFun, highLightFun } from "./index.js";

const gui = new GUI();

export const initLilGui = () => {
  // 创建要监听的对象
  const observeObj = {
    // lil-gui会根据传入的属性类型自动决定显示哪种组件，这里就会创建一个函数的按钮
    flyTo: function () {
      flyToFun()
    },
    highLight: function () {
      highLightFun()
    },

  }

  gui.add(observeObj, "flyTo");
  gui.add(observeObj, "highLight");


}

