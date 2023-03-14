/*
 * @Description:gis引擎demo演示
 * @Author: yangsen
 * @Date: 2023-01-10 18:05:40
 * @LastEditors: yangsen
 * @LastEditTime: 2023-03-13 11:29:56
 */

import * as Webgis from "./build/bundle.module.js";
import { Vector3 } from "./build/bundle.module.js";
import { initLilGui } from "./lil-gui.js";

const viewer = new Webgis.Viewer("WebgisContainer");

/* 改变地面颜色 */
viewer.groundColor = new Webgis.Color(87, 96, 111, 1);
/* 坐标轴 */
viewer.axesShow = true;
viewer.axesLength = 10;
/* 加载模型 */
const modelGeometry = new Webgis.ModelGeometry();
const modelMaterial = new Webgis.ModelMaterial();
modelMaterial.url = "http://rrftdp8wq.hb-bkt.clouddn.com/housePlayground.glb.gz";
viewer.scene.primitives.append(
  new Webgis.Primitive({
    geometryInstances: new Webgis.GeometryInstance({
      geometry: modelGeometry,
    }),
    appearance: new Webgis.MaterialAppearance({
      material: modelMaterial,
    }),
    id: "modelId",
  })
);
const modelGeometryHouse = new Webgis.ModelGeometry();
modelGeometryHouse.position.set(-160, 15, 15);
const modelMaterialHouse = new Webgis.ModelMaterial();
modelMaterialHouse.url = "./assets/housePlayground.glb";
viewer.scene.primitives.append(
  new Webgis.Primitive({
    geometryInstances: new Webgis.GeometryInstance({
      geometry: modelGeometryHouse,
      rotation: new Vector3(Math.PI / 2, 0, 0),
    }),
    appearance: new Webgis.MaterialAppearance({
      material: modelMaterialHouse,
    }),
    id: "modelHouse",
  })
);

/* 拾取点 */
document.addEventListener('click', (e) => {
  const position = new Webgis.Vector2();
  position.x = e.clientX;
  position.y = e.clientY;
  if (modelGeometry.isModelReady) {
    const point = viewer.pickPosition(position);
    document.getElementById('x').innerHTML = point.x;
    document.getElementById('y').innerHTML = point.y;
    document.getElementById('z').innerHTML = point.z;
  }
});

/* 修改天空盒 */
/* viewer.setSkyBox({
  px: './assets/textures/roomBox/px.jpg',
  mx: './assets/textures/roomBox/nx.jpg',
  py: './assets/textures/roomBox/py.jpg',
  my: './assets/textures/roomBox/ny.jpg',
  pz: './assets/textures/roomBox/pz.jpg',
  mz: './assets/textures/roomBox/nz.jpg',
},true); */

/* 添加区域  */
const positionArr = [
  new Webgis.Vector2(25, 20),
  new Webgis.Vector2(15, 20),
  new Webgis.Vector2(15, 10),
  new Webgis.Vector2(20, 10),
];
const polygonGeometry = new Webgis.PolygonGeometry(positionArr);
// 设置拉伸高度
polygonGeometry.stretch(20);
const polygonMaterial = new Webgis.PolygonMaterial(
  new Webgis.Color(117, 16, 99, 0.5),
  15
);
viewer.scene.primitives.append(
  new Webgis.Primitive({
    geometryInstances: new Webgis.GeometryInstance({
      geometry: polygonGeometry,
    }),
    appearance: new Webgis.MaterialAppearance({
      material: polygonMaterial,
    }),
    id: "polygonId",
  })
);

/* 添加墙 */
const wallPosition = [
  new Webgis.Vector2(-7, 1),
  new Webgis.Vector2(-15, 1),
  new Webgis.Vector2(-15, 10),
  new Webgis.Vector2(-7, 10),
];
const wallGeometry = new Webgis.WallGeometry(wallPosition);
wallGeometry.stretch(10);
const wallMaterial = new Webgis.WallMaterial(new Webgis.Color(60, 158, 78, 1));
viewer.scene.primitives.append(
  new Webgis.Primitive({
    geometryInstances: new Webgis.GeometryInstance({
      geometry: wallGeometry,
    }),
    appearance: new Webgis.MaterialAppearance({
      material: wallMaterial,
    }),
    id: "wallId",
  })
);

/* 流体墙 */
const wallPositionFluid = [
  new Webgis.Vector2(5.5, 5.5),
  new Webgis.Vector2(-5.5, 5.5),
  new Webgis.Vector2(-5.5, -5.5),
  new Webgis.Vector2(5.5, -5.5),
];
const wallGeometryFluid = new Webgis.WallGeometry(wallPositionFluid);
wallGeometryFluid.stretch(50);
const wallMaterialFluid = new Webgis.WallMaterial(
  new Webgis.Color(60, 158, 78, 0.6)
);
wallMaterialFluid.isFluid = true;
viewer.scene.primitives.append(
  new Webgis.Primitive({
    geometryInstances: new Webgis.GeometryInstance({
      geometry: wallGeometryFluid,
    }),
    appearance: new Webgis.MaterialAppearance({
      material: wallMaterialFluid,
    }),
    id: "wallFluidId",
  })
);

/* 添加线 */
const polylineGeometry = new Webgis.PolylineGeometry();
// 设置路径点
const polyline = [
  new Webgis.Vector3(-10, 0, 10),
  new Webgis.Vector3(10, 10, 0),
  new Webgis.Vector3(10, 0, 0),
];
polylineGeometry.setPath(polyline);
const polylineMaterial = new Webgis.PolylineMaterial([147, 172, 130]);
// 设置线宽
polylineMaterial.lineWidth = 10;
// 设置颜色
// 设置线类型（实线/虚线）
viewer.scene.primitives.append(
  new Webgis.Primitive({
    geometryInstances: new Webgis.GeometryInstance({
      geometry: polylineGeometry,
    }),
    appearance: new Webgis.MaterialAppearance({
      material: polylineMaterial,
    }),
  })
);

/* 添加点 */
const pointGeometry = new Webgis.PointGeometry();
pointGeometry.position = new Webgis.Vector3(6, 15, 15);
const pointMaterial = new Webgis.PointMaterial();
pointMaterial.size = 5;
pointMaterial.color = new Webgis.Color(187, 79, 189, 1);
pointMaterial.setOpacity(0.9);
viewer.scene.primitives.append(
  new Webgis.Primitive({
    geometryInstances: new Webgis.GeometryInstance({
      geometry: pointGeometry,
      /* 点不支持缩放，旋转 */
    }),
    appearance: new Webgis.MaterialAppearance({
      material: pointMaterial,
    }),
    id: "pointId",
  })
);

/* 广告牌 */
const billboardGeometry = new Webgis.BillboardGeometry();
// 位置
billboardGeometry.position = new Webgis.Vector3(10, 10, 10);
const billboardMaterial = new Webgis.BillboardMaterial();
// 贴图
billboardMaterial.image = "./assets/icon/1.png";
viewer.scene.primitives.append(
  new Webgis.Primitive({
    geometryInstances: new Webgis.GeometryInstance({
      geometry: billboardGeometry,
      scale: new Webgis.Vector3(6, 6, 6),
      /* 广告牌不支持旋转 */
    }),
    appearance: new Webgis.MaterialAppearance({
      material: billboardMaterial,
    }),
    id: "billboard",
  })
);

/* 文字 */
const labelGeometry = new Webgis.LabelGeometry();
// 位置
labelGeometry.position = new Webgis.Vector3(10, 10, 10);
const labelMaterial = new Webgis.LabelMaterial();
// 文字内容
labelMaterial.text = "Label文字";
// 粗细 大小 字体
labelMaterial.font = "normal 200px 微软雅黑";
// 颜色
labelMaterial.fillColor = new Webgis.Color(109, 139, 241, 1);
// 添加边框
labelMaterial.isOutline = true;
// 边框颜色
labelMaterial.outlineColor = new Webgis.Color(238, 121, 89, 1);
// 边框宽度
labelMaterial.outlineWidth = 5;
viewer.scene.primitives.append(
  new Webgis.Primitive({
    geometryInstances: new Webgis.GeometryInstance({
      geometry: labelGeometry,
      // 平移
      translate: new Webgis.Vector3(0, 0, -6),
      // 缩放 注意：缩放要和文字大小配合使用，如果放大很大，而文字大小很小会出现文字模糊现象
      scale: new Webgis.Vector3(5, 5, 5),
      /* 文字不支持旋转 */
    }),
    appearance: new Webgis.MaterialAppearance({
      material: labelMaterial,
    }),
    show: true, // 显示隐藏
    id: "labelId",
    select: false,
  })
);

/* 根据id获取primitive */
const labelPrimitive = viewer.scene.getPrimitiveById("labelId");
const pointPrimitive = viewer.scene.getPrimitiveById("pointId");
const modelPrimitive = viewer.scene.getPrimitiveById("modelId");
const modelHousePrimitive = viewer.scene.getPrimitiveById("modelHouse");
const billboard = viewer.scene.getPrimitiveById("billboard");
const polygonPrimitive = viewer.scene.getPrimitiveById("polygonId");
const wallPrimitive = viewer.scene.getPrimitiveById("wallId");

/* 相机飞行 */
let flyFlag = true;
export const flyToFun = () => {
  if (flyFlag) {
    viewer.flyTo(modelHousePrimitive, { during: 2000, cameraPosition: new Vector3(100, 100, 300) });
    flyFlag = false;
  } else {
    viewer.flyTo(modelPrimitive, { during: 2000, cameraPosition: new Vector3(100, 100, 300) });
    flyFlag = true;
  }
};

/* 图元高亮 */
let highFlag = true;
export const highLightFun = () => {
  if (highFlag) {
    viewer.highLight([polygonPrimitive]);
    highFlag = false;
  } else {
    viewer.highLight([]);
    highFlag = true;
  }
};

/* lil-gui部分 */
initLilGui();
