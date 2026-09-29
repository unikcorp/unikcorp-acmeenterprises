import React, { useState, useEffect } from 'react';
import { 
  HardHat, 
  Flame, 
  Sun, 
  Ship, 
  Cog, 
  RotateCw, 
  ZoomIn, 
  Maximize2, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Layers,
  ShieldCheck
} from 'lucide-react';
import './Services3DShowcase.css';

// 3D Models configuration with public Khronos & Google GLTF/GLB sample assets
const modelCatalog = [
  {
    id: 'construction',
    title: 'Civil & Safety Equipment (Hard Hat & Gear)',
    category: 'Construction & Manpower',
    icon: <HardHat className="w-5 h-5" />,
    badgeColor: 'bg-amber-500/10 text-amber-600 border-amber-500/30',
    modelUrl: 'https://modelviewer.dev/shared-assets/models/DamagedHelmet.glb',
    posterUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    cameraOrbit: '45deg 75deg 2m',
    description: 'Specialized safety gear, rigging equipment and certified workforce mobilization for high-rise infrastructure, structural fabrication and commercial ports.',
    specs: [
      { label: 'Workforce Spectrum', value: 'Civil Engineers, Scaffolders & Riggers' },
      { label: 'Safety Rating', value: 'EN397 / ANSI Z89.1 Compliance' },
      { label: 'Mobilization Time', value: '7-14 Days Pan-India' }
    ]
  },
  {
    id: 'oilgas',
    title: 'Oil & Gas Turnaround Shutdown Equipment',
    category: 'Turnaround & EPIC',
    icon: <Flame className="w-5 h-5" />,
    badgeColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/30',
    modelUrl: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Lantern/glTF-Binary/Lantern.glb',
    posterUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    cameraOrbit: '-30deg 80deg 3m',
    description: 'Precision hydraulic torque wrenches, exchanger re-tubing tooling and high-pressure hydrocarbon pipeline maintenance gear for Qatar & GCC overhauls.',
    specs: [
      { label: 'Partnership', value: 'VSS Technical Services (Qatar)' },
      { label: 'Safety Record', value: 'Zero Lost Time Incidents (LTI)' },
      { label: 'Key Projects', value: 'Qatar Petroleum Overhauls' }
    ]
  },
  {
    id: 'solar',
    title: 'Solar PV Array & Clean Renewable Systems',
    category: 'Solar & Renewable',
    icon: <Sun className="w-5 h-5" />,
    badgeColor: 'bg-sky-500/10 text-sky-600 border-sky-500/30',
    modelUrl: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/BoomBox/glTF-Binary/BoomBox.glb',
    posterUrl: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    cameraOrbit: '0deg 60deg 2.5m',
    description: 'Utility-scale solar photovoltaic mounting arrays, DC-AC inverter substations and high-voltage grid interconnections with certified solar technicians.',
    specs: [
      { label: 'Execution Mode', value: 'EPC Turnkey & Maintenance' },
      { label: 'Grid Capability', value: 'LV / MV / HV Substation Integration' },
      { label: 'Deployment', value: 'Industrial Rooftops & Desert Solar Farms' }
    ]
  },
  {
    id: 'marine',
    title: 'Commercial Container Ship & Maritime Logistics',
    category: 'Marine & Tourism',
    icon: <Ship className="w-5 h-5" />,
    badgeColor: 'bg-indigo-500/10 text-indigo-600 border-indigo-500/30',
    modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb',
    posterUrl: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80',
    cameraOrbit: '90deg 75deg 4m',
    description: 'Drydock ship repair technicians, certified marine 6G welders, naval mechanics and luxury hospitality staff for maritime passenger fleets.',
    specs: [
      { label: 'Shipyard Clientele', value: 'Dubai Drydocks & Middle East Ports' },
      { label: 'Certification', value: 'ASME / Lloyd’s Register Welders' },
      { label: 'Crew Logistics', value: 'Seaport Stevedores & Fleet Technicians' }
    ]
  },
  {
    id: 'machinery',
    title: 'Heavy Industrial Machinery & Rotating Equipment',
    category: 'Heavy Engineering',
    icon: <Cog className="w-5 h-5" />,
    badgeColor: 'bg-rose-500/10 text-rose-600 border-rose-500/30',
    modelUrl: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/AntiqueCamera/glTF-Binary/AntiqueCamera.glb',
    posterUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    cameraOrbit: '-45deg 70deg 2m',
    description: 'Heavy duty centrifugal pumps, millwright equipment, turbine alignment tools and automated CNC machinery operators tested at our nationwide trade hubs.',
    specs: [
      { label: 'Testing Hubs', value: '6 Pan-India Centers (Delhi, Vizag, Kolkata)' },
      { label: 'Specialization', value: 'Turbines, Compressors & Slurry Pumps' },
      { label: 'Verification', value: '100% Practical Bench Tested' }
    ]
  }
];

const Services3DShowcase = () => {
  const [activeModelIndex, setActiveModelIndex] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const currentModel = modelCatalog[activeModelIndex];

  // Dynamically load Google's @google/model-viewer custom element if not already present
  useEffect(() => {
    if (!customElements.get('model-viewer')) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js';
      document.head.appendChild(script);
    }
  }, []);

  const handleSelectModel = (index) => {
    setIsLoading(true);
    setActiveModelIndex(index);
  };

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Interactive 3D Equipment & Sector Visuals</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Explore Our Core Divisions in <span className="text-emerald-400">Real-Time 3D</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Rotate, zoom and inspect the equipment, technical domains and workforce safety standards deployed across ACME's global operations.
          </p>
        </div>

        {/* 5-Category Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {modelCatalog.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => handleSelectModel(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 border ${
                activeModelIndex === idx
                  ? 'bg-emerald-600 text-white border-emerald-400 shadow-lg shadow-emerald-600/30 scale-105'
                  : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-600'
              }`}
            >
              {item.icon}
              <span>{item.category}</span>
            </button>
          ))}
        </div>

        {/* 3D Viewer & Specification Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-800/60 backdrop-blur-md rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-700/80 shadow-2xl">
          
          {/* Left Column: Interactive 3D Canvas / Model Viewer (7 Cols) */}
          <div className="lg:col-span-7 relative w-full h-[380px] sm:h-[460px] lg:h-[500px] bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl overflow-hidden border border-slate-700 flex items-center justify-center group">
            
            {/* 3D Model Element */}
            <model-viewer
              key={currentModel.id}
              src={currentModel.modelUrl}
              poster={currentModel.posterUrl}
              alt={currentModel.title}
              auto-rotate={autoRotate ? "true" : undefined}
              rotation-per-second="25deg"
              camera-controls="true"
              camera-orbit={currentModel.cameraOrbit}
              shadow-intensity="1.5"
              shadow-softness="1"
              environment-image="neutral"
              exposure="1.2"
              interaction-prompt="auto"
              loading="eager"
              ar="true"
              ar-modes="webxr scene-viewer quick-look"
              onLoad={() => setIsLoading(false)}
              className="w-full h-full cursor-grab active:cursor-grabbing outline-none"
              style={{ width: '100%', height: '100%' }}
            >
              {/* Fallback Slot for unsupported browsers */}
              <div slot="poster" className="w-full h-full flex items-center justify-center bg-slate-900">
                <img src={currentModel.posterUrl} alt={currentModel.title} className="w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/60">
                  <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mb-3" />
                  <span className="text-sm font-medium text-slate-300">Loading 3D Model...</span>
                </div>
              </div>
            </model-viewer>

            {/* Top Interactive Controls Toolbar */}
            <div className="absolute top-4 right-4 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md border border-slate-700 p-1.5 rounded-xl z-20">
              <button
                type="button"
                onClick={() => setAutoRotate(!autoRotate)}
                className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  autoRotate ? 'bg-emerald-500 text-white' : 'text-slate-400 hover:text-white bg-slate-800'
                }`}
                title="Toggle Auto-Rotation"
              >
                <RotateCw className={`w-4 h-4 ${autoRotate ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }} />
                <span className="hidden sm:inline">{autoRotate ? 'Auto' : 'Paused'}</span>
              </button>
            </div>

            {/* Bottom Hint Callout */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-400 bg-slate-900/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-slate-700/60 pointer-events-none">
              <span className="flex items-center gap-1.5">
                <RotateCw className="w-3.5 h-3.5 text-emerald-400" /> Click & drag to rotate 360°
              </span>
              <span className="hidden sm:flex items-center gap-1.5">
                <ZoomIn className="w-3.5 h-3.5 text-sky-400" /> Scroll to zoom
              </span>
            </div>
          </div>

          {/* Right Column: Dynamic Specifications & Actions (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left space-y-6">
            
            {/* Category Tag & Title */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold border ${currentModel.badgeColor}`}>
                  {currentModel.icon}
                  <span>{currentModel.category}</span>
                </span>
                <span className="text-xs text-slate-400 font-medium">Model {activeModelIndex + 1} of 5</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">
                {currentModel.title}
              </h3>
              
              <p className="text-slate-300 text-sm leading-relaxed">
                {currentModel.description}
              </p>
            </div>

            {/* Key Technical Specifications Grid */}
            <div className="space-y-3 bg-slate-900/60 rounded-2xl p-4 sm:p-5 border border-slate-700/60">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4 text-emerald-400" />
                <span>Sector Specifications</span>
              </div>
              
              {currentModel.specs.map((spec, sIdx) => (
                <div key={sIdx} className="flex justify-between items-center py-1.5 border-b border-slate-800 last:border-0 text-xs sm:text-sm">
                  <span className="text-slate-400 font-medium">{spec.label}</span>
                  <span className="text-slate-200 font-bold text-right">{spec.value}</span>
                </div>
              ))}
            </div>

            {/* Trust Assurance Strip */}
            <div className="flex items-center gap-3 text-xs text-slate-400 pt-1">
              <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span>Government Registered • MEA License No. B0313/MUM/8283/2008</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="/quote"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold shadow-lg shadow-emerald-500/25 transition-all hover:-translate-y-0.5"
              >
                <span>Requisition This Division</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/sectors"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold border border-slate-700 transition-colors"
              >
                <span>View All Trades</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Services3DShowcase;
