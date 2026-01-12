import React, { useState, useEffect } from 'react';
/** * Lucide-React: 현대적인 UI를 위한 가벼운 아이콘 라이브러리입니다.
 * 프로젝트의 테마에 맞춰 연핑크색 포인트로 활용됩니다.
 */
import { 
  Github, 
  ExternalLink, 
  Mail, 
  Code, 
  Gamepad2, 
  PenTool, 
  Smartphone, 
  Heart,
  User,
  Layout,
  Star
} from 'lucide-react';

/**
 * @component Portfolio
 * @description 이채원(Lxvxxu) 개발자의 개인 포트폴리오 메인 페이지입니다.
 * 테마: Soft Pink & Modern White
 */
const Portfolio = () => {
  // 스크롤 여부에 따라 네비게이션 바의 배경색을 투명 또는 흰색으로 전환합니다.
  const [scrolled, setScrolled] = useState(false);

  // 윈도우 스크롤 이벤트를 감지하여 상단 바 스타일을 제어합니다.
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * @function scrollTo
   * @param {string} id - 이동할 섹션의 HTML ID
   * @description 특정 섹션으로 부드럽게 스크롤 이동을 수행합니다.
   */
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF5F7] text-slate-800 font-sans selection:bg-pink-200">
      
      {/* --- 네비게이션 영역 --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          {/* 로고 영역 */}
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => scrollTo('home')}>
            <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center text-white font-bold group-hover:rotate-12 transition-transform">
              L
            </div>
            <span className="font-bold text-xl tracking-tighter text-pink-600">LXWXXU</span>
          </div>
          
          {/* 데스크탑 메뉴 */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            {['About', 'Projects', 'Experience', 'Design'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item.toLowerCase())}
                className="hover:text-pink-500 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 transition-all group-hover:w-full"></span>
              </button>
            ))}
          </div>

          <button className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-full text-sm font-bold transition-all hover:shadow-lg hover:shadow-pink-200 active:scale-95">
            Contact Me
          </button>
        </div>
      </nav>

      {/* --- Hero: 첫 인사 섹션 --- */}
      <section id="home" className="pt-40 pb-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-pink-100 px-4 py-2 rounded-full text-pink-500 text-sm font-semibold mb-8 shadow-sm">
            <Star size={16} fill="currentColor" />
            <span>Design-driven Developer</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-slate-900 leading-tight">
            Creative <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400">
              DEVELOPER
            </span>
          </h1>
          
          <p className="text-lg text-slate-500 max-w-2xl mb-10 leading-relaxed">
            기술에 감성을 더해 더 나은 사용자 경험을 만듭니다. <br />
            Unity를 이용한 게임 개발과 React 중심의 웹 인터페이스를 전문으로 합니다.
          </p>
          
          <div className="flex items-center gap-4">
            <button className="p-3 bg-white border border-slate-200 rounded-2xl hover:border-pink-300 hover:text-pink-500 transition-all shadow-sm">
              <Github size={24} />
            </button>
            <button className="p-3 bg-white border border-slate-200 rounded-2xl hover:border-pink-300 hover:text-pink-500 transition-all shadow-sm">
              <Mail size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* --- About: 기술 역량 --- */}
      <section id="about" className="py-20 px-6 bg-white rounded-[60px] shadow-sm">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-slate-900">
                <User className="text-pink-500" /> 핵심 역량
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Unity', level: 'Main', icon: <Gamepad2 size={20} /> },
                  { name: 'React', level: 'Web', icon: <Layout size={20} /> },
                  { name: 'Android', level: 'App', icon: <Smartphone size={20} /> },
                  { name: 'Design', level: 'UI/UX', icon: <PenTool size={20} /> }
                ].map((skill) => (
                  <div key={skill.name} className="p-6 bg-[#FFF5F7] rounded-3xl border border-pink-50 group hover:bg-white hover:border-pink-200 transition-all hover:shadow-md">
                    <div className="text-pink-500 mb-4 group-hover:scale-110 transition-transform">{skill.icon}</div>
                    <h3 className="font-bold text-slate-800 mb-1">{skill.name}</h3>
                    <p className="text-xs font-medium text-pink-400 uppercase tracking-widest">{skill.level}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="w-full md:w-1/2 space-y-6">
              <div className="bg-pink-50 p-8 rounded-[40px] relative overflow-hidden">
                <Heart className="absolute -right-4 -bottom-4 text-pink-100 w-32 h-32 rotate-12" />
                <h3 className="text-xl font-bold mb-4 text-pink-700 underline underline-offset-4 decoration-pink-200">Vision</h3>
                <p className="text-slate-600 leading-relaxed relative z-10">
                  컴퓨터과학을 전공하며 단순한 코드 구현을 넘어 <strong>사용자의 심리</strong>를 이해하는 개발자가 되고자 합니다. 
                  모든 기술적 결정에는 '사람'이 있어야 한다는 철학을 가지고 프로젝트에 임합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Projects: 작업물 --- */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3 text-slate-900">
            <Code className="text-pink-500" /> 프로젝트
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard 
              title="상명대학교 메타버스"
              tag="Unity / C#"
              desc="언택트 시대에 발맞춰 캠퍼스를 가상 공간으로 재구축했습니다. 실감나는 캠퍼스 투어를 제공합니다."
              features={["Photon 기반 멀티플레이", "지형 데이터 최적화"]}
            />
            <ProjectCard 
              title="시간표 관리 솔루션"
              tag="React / Firebase"
              desc="사용자 맞춤형 시간표 조합 알고리즘을 적용하여 대학생들의 학기 설계를 돕습니다."
              features={["반응형 대시보드", "데이터 실시간 연동"]}
            />
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-16 bg-white border-t border-pink-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-400 text-sm font-medium">
            Contact: <span className="text-pink-500">your-email@example.com</span>
          </p>
          <p className="text-slate-300 text-xs mt-2 italic">Designed with Love and Code.</p>
        </div>
      </footer>
    </div>
  );
};

/**
 * @component ProjectCard
 * @description 각 프로젝트 정보를 보여주는 카드 형태의 컴포넌트입니다.
 */
const ProjectCard = ({ title, tag, desc, features }) => (
  <div className="bg-white p-8 rounded-[32px] border border-pink-50 shadow-sm hover:shadow-xl hover:shadow-pink-100/50 transition-all group cursor-default">
    <div className="flex justify-between items-start mb-6">
      <span className="px-4 py-1.5 bg-pink-50 text-pink-500 rounded-full text-[10px] font-extrabold tracking-widest uppercase">{tag}</span>
      <ExternalLink size={18} className="text-slate-300 group-hover:text-pink-400 transition-colors" />
    </div>
    <h3 className="text-2xl font-bold mb-4 text-slate-800">{title}</h3>
    <p className="text-slate-500 text-sm mb-6 leading-relaxed">{desc}</p>
    <div className="flex flex-wrap gap-2">
      {features.map(f => (
        <span key={f} className="text-[10px] font-bold text-pink-400 bg-pink-50/50 px-2 py-1 rounded-md border border-pink-50">{f}</span>
      ))}
    </div>
  </div>
);

export default Portfolio;
