import React, { useState, Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  OrbitControls, 
  useGLTF, 
  Float, 
  ContactShadows, 
  Environment, 
  PresentationControls,
  Html
} from '@react-three/drei';
import { 
  HardHat, 
  Flame, 
  Sun, 
  Ship, 
  Cog, 
  RotateCw, 
  ArrowRight,
  Sparkles,
  Layers,
  ShieldCheck
} from 'lucide-react';

// 3D Models Config
const modelList = [
  {
    id: 'construction',
    name: 'Safety Helmet & Rigging',
    category: 'Construction & Manpower',
    icon: <HardHat className="w-5 h-5" />,
    url: 'https://modelviewer.dev/shared-assets/models/DamagedHelmet.glb',
    scale: 2.2,
    position: [0, 0, 0],
    desc: 'Certified safety gear and skilled workforce deployment for civil, structural and heavy scaffolding projects.',
    specs: [
      { label: 'Workforce Spectrum', val: 'Civil Engineers, Riggers & Carpenters' },
      { label: 'Standard Compliance', val: 'EN397 / ANSI Z89.1 Certified' }
    ]
  },
  {
    id: 'oilgas',
    name: 'Turnaround Shutdown Equipment',
    category: 'Turnaround & EPIC',
    icon: <Flame className="w-5 h-5" />,
    url: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Lantern/glTF-Binary/Lantern.glb',
    scale: 0.18,
    position: [0, -1.2, 0],
    desc: 'Industrial refinery overhaul tooling, bolt tensioning and heat exchanger maintenance gear in Qatar & GCC.',
    specs: [
      { label: 'Turnaround Partner', val: 'VSS Technical Services (Qatar)' },
      { label: 'Safety Record', val: 'Zero Incident HSE Framework' }
    ]
  },
  {
    id: 'solar',
    name: 'Solar PV Clean Energy Systems',
    category: 'Solar & Renewable',
    icon: <Sun className="w-5 h-5" />,
    url: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/BoomBox/glTF-Binary/BoomBox.glb',
    scale: 65,
    position: [0, 0, 0],
    desc: 'Turnkey solar photovoltaic installations, substation interconnection and certified electrical technicians.',
    specs: [
      { label: 'Scope', val: 'Commercial Rooftops & Solar Farms' },
      { label: 'Grid Level', val: 'LV / MV / HV Distribution' }
    ]
  },
  {
    id: 'marine',
    name: 'Container Ship & Marine Logistics',
    category: 'Marine & Shipyard',
    icon: <Ship className="w-5 h-5" />,
    url: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb',
    scale: 2.0,
    position: [0, -1.5, 0],
    desc: 'Certified marine 6G welders, naval mechanics and port logistics crews for drydock and cargo operations.',
    specs: [
      { label: 'Major Shipyard Client', val: 'Dubai Drydocks (UAE)' },
      { label: 'Trades Mobilized', val: '6G Welders, Fitters, Riggers' }
    ]
  },
  {
    id: 'machinery',
    name: 'Heavy Industrial Machinery',
    category: 'Industrial Machinery',
    icon: <Cog className="w-5 h-5" />,
    url: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/AntiqueCamera/glTF-Binary/AntiqueCamera.glb',
    scale: 1.8,
    position: [0, -0.4, 0],
    desc: 'Centrifugal slurry pumps, turbine mechanics and automated millwright technicians verified across India.',
    specs: [
      { label: 'Trade Test Testing', val: '6 Pan-India Testing Centers' },
      { label: 'Verification', val: '100% Practical Bench Screened' }
    ]
  }
];

// Inner GLTF Model Loader with rotation
function Model({ url, scale, position, autoRotate }) {
  const { scene } = useGLTF(url);
  const meshRef = useRef();

  useFrame((_, delta) => {
    if (autoRotate && meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <primitive 
      ref={meshRef} 
      object={scene.clone()} 
      scale={scale} 
      position={position} 
    />
  );
}

// 3D Canvas Fallback Loader
function CanvasLoader() {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center p-4 bg-slate-900/80 rounded-xl border border-slate-700 text-white">
        <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mb-2" />
        <span className="text-xs font-semibold text-slate-300">Loading 3D Model...</span>
      </div>
    </Html>
  );
}

const Services3DR3F = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);

  const activeModel = modelList[activeIdx];

  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Three.js / React Three Fiber Canvas</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Interactive <span className="text-emerald-400">3D Divisions</span> Visualizer
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Directly rotate, float and inspect 3D engineering models for construction, shutdown, marine, solar and machinery.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-8">
          {modelList.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveIdx(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                activeIdx === idx
                  ? 'bg-emerald-600 text-white border-emerald-400 shadow-lg shadow-emerald-600/30 scale-105'
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-800'
              }`}
            >
              {item.icon}
              <span>{item.category}</span>
            </button>
          ))}
        </div>

        {/* 3D Canvas Box + Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/90 backdrop-blur-md rounded-3xl p-6 lg:p-10 border border-slate-800 shadow-2xl">
          
          {/* Canvas Viewport (7 Cols) */}
          <div className="lg:col-span-7 relative w-full h-[400px] sm:h-[480px] bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl overflow-hidden border border-slate-800">
            <Canvas
              camera={{ position: [0, 1, 4], fov: 45 }}
              className="w-full h-full cursor-grab active:cursor-grabbing"
            >
              <ambientLight intensity={1.2} />
              <directionalLight position={[5, 10, 5]} intensity={2.0} />
              <pointLight position={[-5, -5, -5]} intensity={0.8} />

              <Suspense fallback={<CanvasLoader />}>
                <PresentationControls
                  global
                  zoom={1.2}
                  rotation={[0, 0, 0]}
                  polar={[-Math.PI / 4, Math.PI / 4]}
                  azimuth={[-Math.PI / 2, Math.PI / 2]}
                >
                  <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
                    <Model 
                      url={activeModel.url} 
                      scale={activeModel.scale} 
                      position={activeModel.position} 
                      autoRotate={autoRotate}
                    />
                  </Float>
                </PresentationControls>
                
                <ContactShadows 
                  position={[0, -1.8, 0]} 
                  opacity={0.65} 
                  scale={10} 
                  blur={2.4} 
                  far={4} 
                />
                <Environment preset="city" />
              </Suspense>

              <OrbitControls enableZoom={true} enablePan={false} />
            </Canvas>

            {/* Toggle Rotation Button */}
            <div className="absolute top-4 right-4 z-20">
              <button
                type="button"
                onClick={() => setAutoRotate(!autoRotate)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/90 text-xs font-semibold text-slate-200 border border-slate-700 hover:bg-slate-700 transition-colors"
              >
                <RotateCw className={`w-3.5 h-3.5 ${autoRotate ? 'animate-spin' : ''}`} />
                <span>{autoRotate ? 'Auto Rotate' : 'Paused'}</span>
              </button>
            </div>
          </div>

          {/* Details Column (5 Cols) */}
          <div className="lg:col-span-5 text-left space-y-6">
            <div>
              <span className="inline-block px-3 py-1 rounded-md text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-2">
                {activeModel.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {activeModel.name}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {activeModel.desc}
              </p>
            </div>

            <div className="bg-slate-950/80 rounded-2xl p-4 sm:p-5 border border-slate-800 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                <Layers className="w-4 h-4 text-emerald-400" />
                <span>Technical Specifications</span>
              </div>
              {activeModel.specs.map((spec, sIdx) => (
                <div key={sIdx} className="flex justify-between items-center py-1 border-b border-slate-800/80 last:border-0 text-xs sm:text-sm">
                  <span className="text-slate-400">{spec.label}</span>
                  <span className="text-slate-200 font-bold">{spec.val}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2.5 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Govt. License: B-0313/MUM/PER/1000+/5/8283/2008</span>
            </div>

            <div className="flex gap-3">
              <a
                href="/quote"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold shadow-lg shadow-emerald-500/25 transition-all"
              >
                <span>Request Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/sectors"
                className="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold border border-slate-700"
              >
                <span>Sectors</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Services3DR3F;
