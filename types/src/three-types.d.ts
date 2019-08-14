/// <reference types="react" />
import * as THREE from 'three'
import { PointerEvent } from './canvas'
export declare type NonFunctionKeys<T> = {
  [K in keyof T]: T[K] extends Function ? never : K
}[keyof T]
export declare type Overwrite<T, O> = Omit<T, NonFunctionKeys<O>> & O
export declare type ClassParams<T> = Parameters<Extract<T, (...args: any[]) => any>>
export interface ClassSignature<T> {
  new <K extends keyof T>(...args: ClassParams<T[K]>): T
}
declare type Args<T> = ConstructorParameters<ClassSignature<T>>
export declare namespace ReactThreeFiber {
  type Euler = THREE.Euler | number[]
  type Matrix4 = THREE.Matrix4 | number[]
  type Vector3 = THREE.Vector3 | number[]
  type Color = THREE.Color | number | string
  type Events = {
    onClick?: (e: PointerEvent) => void
    onPointerUp?: (e: PointerEvent) => void
    onPointerDown?: (e: PointerEvent) => void
    onPointerOver?: (e: PointerEvent) => void
    onPointerOut?: (e: PointerEvent) => void
    onPointerMove?: (e: PointerEvent) => void
    onWheel?: (e: PointerEvent) => void
  }
  type Node<T, P = Args<T>> = Overwrite<
    Partial<T>,
    {
      attach?: string
      attachArray?: string
      attachObject?: [string, string]
      args?: P
      children?: React.ReactNode
      ref?: React.Ref<React.ReactNode>
      key?: React.Key
      onUpdate?: (self: T) => void
    }
  >
  type Object3DNode<T> = Overwrite<
    Node<T>,
    {
      position?: Vector3
      up?: Vector3
      scale?: Vector3
      rotation?: Euler
      matrix?: Matrix4
      onUpdate?: (self: T) => void
    }
  > &
    ReactThreeFiber.Events
  type GeometryNode<T> = Overwrite<
    Node<T>,
    {
      vertices?: Vector3[]
    }
  >
  type MaterialNode<T, P = Args<T>> = Overwrite<
    Node<T, P>,
    {
      color?: Color
    }
  >
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      audio: ReactThreeFiber.Object3DNode<THREE.Audio>
      audioListener: ReactThreeFiber.Object3DNode<THREE.AudioListener>
      positionalAudio: ReactThreeFiber.Object3DNode<THREE.PositionalAudio>
      mesh: ReactThreeFiber.Object3DNode<THREE.Mesh>
      scene: ReactThreeFiber.Object3DNode<THREE.Scene>
      sprite: ReactThreeFiber.Object3DNode<THREE.Sprite>
      lOD: ReactThreeFiber.Object3DNode<THREE.LOD>
      skinnedMesh: ReactThreeFiber.Object3DNode<THREE.SkinnedMesh>
      skeleton: ReactThreeFiber.Object3DNode<THREE.Skeleton>
      bone: ReactThreeFiber.Object3DNode<THREE.Bone>
      lineSegments: ReactThreeFiber.Object3DNode<THREE.LineSegments>
      lineLoop: ReactThreeFiber.Object3DNode<THREE.LineLoop>
      line: ReactThreeFiber.Object3DNode<THREE.Line>
      points: ReactThreeFiber.Object3DNode<THREE.Points>
      group: ReactThreeFiber.Object3DNode<THREE.Group>
      immediateRenderObject: ReactThreeFiber.Object3DNode<THREE.ImmediateRenderObject>
      camera: ReactThreeFiber.Object3DNode<THREE.Camera>
      perspectiveCamera: ReactThreeFiber.Object3DNode<THREE.PerspectiveCamera>
      orthographicCamera: ReactThreeFiber.Object3DNode<THREE.OrthographicCamera>
      cubeCamera: ReactThreeFiber.Object3DNode<THREE.CubeCamera>
      arrayCamera: ReactThreeFiber.Object3DNode<THREE.ArrayCamera>
      geometry: ReactThreeFiber.GeometryNode<THREE.Geometry>
      instancedBufferGeometry: ReactThreeFiber.GeometryNode<THREE.InstancedBufferGeometry>
      bufferGeometry: ReactThreeFiber.GeometryNode<THREE.BufferGeometry>
      wireframeGeometry: ReactThreeFiber.GeometryNode<THREE.WireframeGeometry>
      parametricGeometry: ReactThreeFiber.GeometryNode<THREE.ParametricGeometry>
      tetrahedronGeometry: ReactThreeFiber.GeometryNode<THREE.TetrahedronGeometry>
      octahedronGeometry: ReactThreeFiber.GeometryNode<THREE.OctahedronGeometry>
      icosahedronGeometry: ReactThreeFiber.GeometryNode<THREE.IcosahedronGeometry>
      dodecahedronGeometry: ReactThreeFiber.GeometryNode<THREE.DodecahedronGeometry>
      polyhedronGeometry: ReactThreeFiber.GeometryNode<THREE.PolyhedronGeometry>
      tubeGeometry: ReactThreeFiber.GeometryNode<THREE.TubeGeometry>
      torusKnotGeometry: ReactThreeFiber.GeometryNode<THREE.TorusKnotGeometry>
      torusGeometry: ReactThreeFiber.GeometryNode<THREE.TorusGeometry>
      textGeometry: ReactThreeFiber.GeometryNode<THREE.TextGeometry>
      sphereGeometry: ReactThreeFiber.GeometryNode<THREE.SphereGeometry>
      ringGeometry: ReactThreeFiber.GeometryNode<THREE.RingGeometry>
      planeGeometry: ReactThreeFiber.GeometryNode<THREE.PlaneGeometry>
      latheGeometry: ReactThreeFiber.GeometryNode<THREE.LatheGeometry>
      shapeGeometry: ReactThreeFiber.GeometryNode<THREE.ShapeGeometry>
      extrudeGeometry: ReactThreeFiber.GeometryNode<THREE.ExtrudeGeometry>
      edgesGeometry: ReactThreeFiber.GeometryNode<THREE.EdgesGeometry>
      coneGeometry: ReactThreeFiber.GeometryNode<THREE.ConeGeometry>
      cylinderGeometry: ReactThreeFiber.GeometryNode<THREE.CylinderGeometry>
      circleGeometry: ReactThreeFiber.GeometryNode<THREE.CircleGeometry>
      boxGeometry: ReactThreeFiber.GeometryNode<THREE.BoxGeometry>
      material: ReactThreeFiber.MaterialNode<THREE.Material, [THREE.MaterialParameters]>
      shadowMaterial: ReactThreeFiber.MaterialNode<THREE.ShadowMaterial, [THREE.ShaderMaterialParameters]>
      spriteMaterial: ReactThreeFiber.MaterialNode<THREE.SpriteMaterial, [THREE.SpriteMaterialParameters]>
      rawShaderMaterial: ReactThreeFiber.MaterialNode<THREE.RawShaderMaterial, [THREE.ShaderMaterialParameters]>
      shaderMaterial: ReactThreeFiber.MaterialNode<THREE.ShaderMaterial, [THREE.ShaderMaterialParameters]>
      pointsMaterial: ReactThreeFiber.MaterialNode<THREE.PointsMaterial, [THREE.PointsMaterialParameters]>
      meshPhysicalMaterial: ReactThreeFiber.MaterialNode<
        THREE.MeshPhysicalMaterial,
        [THREE.MeshPhysicalMaterialParameters]
      >
      meshStandardMaterial: ReactThreeFiber.MaterialNode<
        THREE.MeshStandardMaterial,
        [THREE.MeshStandardMaterialParameters]
      >
      meshPhongMaterial: ReactThreeFiber.MaterialNode<THREE.MeshPhongMaterial, [THREE.MeshPhongMaterialParameters]>
      meshToonMaterial: ReactThreeFiber.MaterialNode<THREE.MeshToonMaterial, [THREE.MeshToonMaterialParameters]>
      meshNormalMaterial: ReactThreeFiber.MaterialNode<THREE.MeshNormalMaterial, [THREE.MeshNormalMaterialParameters]>
      meshLambertMaterial: ReactThreeFiber.MaterialNode<
        THREE.MeshLambertMaterial,
        [THREE.MeshLambertMaterialParameters]
      >
      meshDepthMaterial: ReactThreeFiber.MaterialNode<THREE.MeshDepthMaterial, [THREE.MeshDepthMaterialParameters]>
      meshDistanceMaterial: ReactThreeFiber.MaterialNode<
        THREE.MeshDistanceMaterial,
        [THREE.MeshDistanceMaterialParameters]
      >
      meshBasicMaterial: ReactThreeFiber.MaterialNode<THREE.MeshBasicMaterial, [THREE.MeshBasicMaterialParameters]>
      meshMatcapMaterial: ReactThreeFiber.MaterialNode<THREE.MeshMatcapMaterial, [THREE.MeshMatcapMaterialParameters]>
      lineDashedMaterial: ReactThreeFiber.MaterialNode<THREE.LineDashedMaterial, [THREE.LineDashedMaterialParameters]>
      lineBasicMaterial: ReactThreeFiber.MaterialNode<THREE.LineBasicMaterial, [THREE.LineBasicMaterialParameters]>
      light: ReactThreeFiber.Object3DNode<THREE.Light>
      spotLightShadow: ReactThreeFiber.Object3DNode<THREE.SpotLightShadow>
      spotLight: ReactThreeFiber.Object3DNode<THREE.SpotLight>
      pointLight: ReactThreeFiber.Object3DNode<THREE.PointLight>
      rectAreaLight: ReactThreeFiber.Object3DNode<THREE.RectAreaLight>
      hemisphereLight: ReactThreeFiber.Object3DNode<THREE.HemisphereLight>
      directionalLightShadow: ReactThreeFiber.Object3DNode<THREE.DirectionalLightShadow>
      directionalLight: ReactThreeFiber.Object3DNode<THREE.DirectionalLight>
      ambientLight: ReactThreeFiber.Object3DNode<THREE.AmbientLight>
      lightShadow: ReactThreeFiber.Object3DNode<THREE.LightShadow>
      ambientLightProbe: ReactThreeFiber.Object3DNode<THREE.AmbientLightProbe>
      hemisphereLightProbe: ReactThreeFiber.Object3DNode<THREE.HemisphereLightProbe>
      lightProbe: ReactThreeFiber.Object3DNode<THREE.LightProbe>
      vertexNormalsHelper: ReactThreeFiber.Object3DNode<THREE.VertexNormalsHelper>
      spotLightHelper: ReactThreeFiber.Object3DNode<THREE.SpotLightHelper>
      skeletonHelper: ReactThreeFiber.Object3DNode<THREE.SkeletonHelper>
      pointLightHelper: ReactThreeFiber.Object3DNode<THREE.PointLightHelper>
      rectAreaLightHelper: ReactThreeFiber.Object3DNode<THREE.RectAreaLightHelper>
      hemisphereLightHelper: ReactThreeFiber.Object3DNode<THREE.HemisphereLightHelper>
      gridHelper: ReactThreeFiber.Object3DNode<THREE.GridHelper>
      polarGridHelper: ReactThreeFiber.Object3DNode<THREE.PolarGridHelper>
      positionalAudioHelper: ReactThreeFiber.Object3DNode<THREE.PositionalAudioHelper>
      faceNormalsHelper: ReactThreeFiber.Object3DNode<THREE.FaceNormalsHelper>
      directionalLightHelper: ReactThreeFiber.Object3DNode<THREE.DirectionalLightHelper>
      cameraHelper: ReactThreeFiber.Object3DNode<THREE.CameraHelper>
      boxHelper: ReactThreeFiber.Object3DNode<THREE.BoxHelper>
      box3Helper: ReactThreeFiber.Object3DNode<THREE.Box3Helper>
      planeHelper: ReactThreeFiber.Object3DNode<THREE.PlaneHelper>
      arrowHelper: ReactThreeFiber.Object3DNode<THREE.ArrowHelper>
      axesHelper: ReactThreeFiber.Object3DNode<THREE.AxesHelper>
      texture: ReactThreeFiber.Node<THREE.Texture>
      videoTexture: ReactThreeFiber.Node<THREE.VideoTexture>
      dataTexture: ReactThreeFiber.Node<THREE.DataTexture>
      dataTexture3D: ReactThreeFiber.Node<THREE.DataTexture3D>
      compressedTexture: ReactThreeFiber.Node<THREE.CompressedTexture>
      cubeTexture: ReactThreeFiber.Node<THREE.CubeTexture>
      canvasTexture: ReactThreeFiber.Node<THREE.CanvasTexture>
      depthTexture: ReactThreeFiber.Node<THREE.DepthTexture>
    }
  }
}
export {}