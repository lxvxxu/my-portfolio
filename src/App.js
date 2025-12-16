import React, { useState, useEffect } from 'react';
// 사용하지 않는 Monitor, Award 아이콘 제거 (no-unused-vars 해결)
import { Github, ExternalLink, Mail, Book, Code, Layers, Gamepad2, PenTool, Smartphone, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  // activeSection은 현재 UI에서 사용되지 않으므로 주석 처리하거나 제거하여 no-unused-vars 경고 해결
  // const [activeSection, setActiveSection] = useState('home'); 
  const [scrolled, setScrolled] = useState(false);

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 네비게이션 이동
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // setActiveSection(id); // 사용하지 않으므로 주석 처리
    }
  };
  
  // 상세 보기 버튼 클릭 시 임시 로직
  const handleDetailClick = (projectName) => {
    console.log(`${projectName} 상세 보기 버튼 클릭됨.`);
    // 여기에 모달 창을 띄우거나, 상세 페이지로 라우팅하는 로직이 들어갑니다.
  };


  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-lime-400 selection:text-zinc-950">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter hover:text-lime-400 transition-colors cursor-pointer" onClick={() => scrollTo('home')}>
            Lxvxxu<span className="text-lime-400">.</span>Portfolio
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-zinc-400">
            {['About', 'Projects', 'Experience', 'Design'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="hover:text-lime-400 transition-colors uppercase tracking-widest"
              >
                {item}
              </button>
            ))}
          </div>
          <a 
            href="mailto:202210133@sangmyung.kr" 
            className="px-5 py-2 bg-lime-400 text-zinc-950 font-bold rounded-full text-sm hover:bg-lime-300 transition-transform hover:scale-105"
          >
            Contact Me
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block px-3 py-1 mb-6 border border-zinc-700 rounded-full text-xs font-mono text-lime-400 bg-zinc-900/50">
            Based in Seoul, KR 🇰🇷
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-tight mb-8">
            GAME & WEB <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">
              DEVELOPER
            </span>
            <span className="block text-xl md:text-3xl font-medium text-zinc-400 mt-6 tracking-normal">
              디자인 감각을 더해 몰입감 있는 경험을 만듭니다.
            </span>
          </h1>
          
          <div className="flex flex-wrap gap-4 mt-12">
            <a href="https://github.com/lxvxxu" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-zinc-100 text-zinc-950 px-6 py-3 rounded-xl font-bold hover:bg-zinc-200 transition-colors">
              <Github size={20} /> GitHub
            </a>
            <a href="https://lxvxxu.tistory.com/" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-zinc-900 text-zinc-100 border border-zinc-800 px-6 py-3 rounded-xl font-bold hover:border-lime-400 hover:text-lime-400 transition-colors">
              <Book size={20} /> Tistory
            </a>
          </div>
        </div>
      </section>

      {/* Bento Grid (About & Stack) */}
      <section id="about" className="py-20 px-6 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-2">
            <span className="w-2 h-8 bg-lime-400 rounded-full"></span>
            ABOUT & STACK
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Profile Card */}
            <div className="md:col-span-2 bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:border-zinc-700 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-lime-500/20 transition-all"></div>
              <h3 className="text-zinc-400 text-sm font-mono mb-4 uppercase">Profile</h3>
              <p className="text-2xl font-bold leading-relaxed">
                안녕하세요! <span className="text-lime-400">이채원</span>입니다.<br/>
                상명대학교 컴퓨터과학전공 4학년 진학 예정이며,
                <br />
                <span className="text-zinc-100">Unity, Web Front-end</span> 개발을 주력으로 합니다.<br/>
                단순한 기능 구현을 넘어 <span className="underline decoration-lime-400 decoration-2 underline-offset-4">사용자가 즐거운 인터랙티브 경험</span>을 만드는 것에 집중합니다.
              </p>
              <div className="mt-8 flex gap-3 flex-wrap">
                <span className="px-3 py-1 bg-zinc-800 rounded-lg text-xs font-mono text-zinc-300">#긍정적_에너지</span>
                <span className="px-3 py-1 bg-zinc-800 rounded-lg text-xs font-mono text-zinc-300">#책임감</span>
                <span className="px-3 py-1 bg-zinc-800 rounded-lg text-xs font-mono text-zinc-300">#협업_커뮤니케이션</span>
              </div>
            </div>

            {/* Main Stack (Game) */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:border-lime-500/50 transition-colors flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center mb-6 text-lime-400 group-hover:scale-110 transition-transform">
                  <Gamepad2 size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Game Dev</h3>
                <p className="text-zinc-400 text-sm mb-4">가상 세계와 상호작용을 설계합니다.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge text="Unity" highlight />
                <Badge text="C#" highlight />
                <Badge text="Unreal Engine" />
                <Badge text="C++" />
              </div>
            </div>

            {/* Sub Stack (Web/App) */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:border-blue-500/50 transition-colors flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
                  <Code size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Web & App</h3>
                <p className="text-zinc-400 text-sm mb-4">편리하고 아름다운 인터페이스를 구축합니다.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge text="HTML/CSS/JS" />
                <Badge text="React" />
                <Badge text="Android Studio" />
                <Badge text="Java" />
              </div>
            </div>

             {/* Education */}
             <div className="md:col-span-1 bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:border-zinc-700 transition-colors">
               <h3 className="text-zinc-400 text-sm font-mono mb-4 uppercase">Education</h3>
               <div className="mb-4">
                 <div className="text-lg font-bold">상명대학교 (서울)</div>
                 <div className="text-zinc-400 text-sm">컴퓨터과학전공 (3학년 수료)</div>
               </div>
               <div>
                  <div className="text-xs text-zinc-500 uppercase font-bold mt-4 mb-2">Certifications</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 bg-zinc-800 rounded text-zinc-300">GTQ 포토샵</span>
                    <span className="text-xs px-2 py-1 bg-zinc-800 rounded text-zinc-300">ITQ 한글</span>
                    <span className="text-xs px-2 py-1 bg-zinc-800 rounded text-zinc-300">ITQ 엑셀</span>
                    <span className="text-xs px-2 py-1 bg-zinc-800 rounded text-zinc-300">ITQ 인터넷</span>
                    <span className="text-xs px-2 py-1 bg-zinc-800 rounded text-zinc-300">SQLD(예정)</span>
                  </div>
               </div>
            </div>

            {/* Design Tools */}
            <div className="md:col-span-1 bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:border-purple-500/50 transition-colors group">
              <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
                <PenTool size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Design Tools</h3>
              <div className="flex flex-wrap gap-2">
                <Badge text="Figma" color="purple" />
                <Badge text="Photoshop" color="purple" />
                <Badge text="Illustrator" color="purple" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-2">
            <span className="w-2 h-8 bg-lime-400 rounded-full"></span>
            FEATURED PROJECTS
          </h2>

          <div className="space-y-20">
            {/* Project 1: Metaverse */}
            <div className="flex flex-col md:flex-row gap-10 group">
              <div className="md:w-1/2 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 relative aspect-video">
                {/* Placeholder for Project Image */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <div className="text-center p-6">
                    <Gamepad2 size={48} className="mx-auto mb-4 text-lime-400" />
                    <span className="text-zinc-500 font-mono text-sm">Project Screenshot Placeholder</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 flex flex-col justify-center">
                <div className="text-lime-400 font-bold font-mono mb-2">2022.11 ~ 2023.03 & 2024.11 - ~ 2025.02 </div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-lime-400 transition-colors">상명대학교 메타버스 (SMU Metaverse)</h3>
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  ZEP 플랫폼과 Unity를 연동하여 상명대학교 캠퍼스를 가상 공간에 구축했습니다.
                  <br/>
                  출시 당시 4인 팀장으로서 프로젝트를 주도했으며, 이후 단독 유지보수를 담당하여 맵 최적화와 신규 기능(방명록, 미니게임)을 개발하였습니다.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <Badge text="Unity" highlight />
                  <Badge text="C#" />
                  <Badge text="ZEP Script" />
                  <Badge text="Java Script" />
                  <Badge text="Team Leader" color="zinc" />
                </div>
                <div className="flex gap-4">
                  {/* DETAIL LINK: <a> 태그 대신 onClick 핸들러를 가진 <button> 태그를 사용했습니다. */}
                  <button 
                    onClick={() => handleDetailClick('메타버스')} 
                    className="flex items-center gap-2 text-sm font-bold border-b border-lime-400 pb-1 hover:text-lime-400 transition-colors focus:outline-none"
                  >
                    상세 보기 <ChevronRight size={16} />
                  </button>
                  <a href="https://github.com/lxvxxu/SMU_metaverse" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-zinc-500 hover:text-zinc-300 transition-colors">
                    GitHub Repo <ExternalLink size={16} />
                  </a>
                  <a href="https://zep.us/play/2NXVpX" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-zinc-500 hover:text-zinc-300 transition-colors">
                    Metaverse <ExternalLink size={16} />
                  </a>
                </div>  
              </div>
            </div>

            {/* Project 2: Gong-gang */}
            <div className="flex flex-col md:flex-row-reverse gap-10 group">
               <div className="md:w-1/2 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 relative aspect-video">
                {/* Placeholder for Project Image */}
                <div className="absolute inset-0 bg-gradient-to-bl from-zinc-800 to-zinc-950 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <div className="text-center p-6">
                    <Smartphone size={48} className="mx-auto mb-4 text-blue-400" />
                    <span className="text-zinc-500 font-mono text-sm">App Screenshot Placeholder</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 flex flex-col justify-center">
                <div className="text-blue-400 font-bold font-mono mb-2">2023 Google Play Released</div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-blue-400 transition-colors">공강이세요? (Gong-gang)</h3>
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  대학생들을 위한 시간표 및 공강 시간 공유 앱입니다.
                  Unity와 Android Studio를 연동하여 캐릭터 커스터마이징 기능과 시간표 관리 기능을 결합했습니다.
                  Google Play Store 출시 경험을 통해 배포 프로세스를 익혔습니다.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <Badge text="Android" />
                  <Badge text="Unity" />
                  <Badge text="Java" />
                  <Badge text="Google Play" />
                </div>
                <div className="flex gap-4">
                  {/* DETAIL LINK: <a> 태그 대신 onClick 핸들러를 가진 <button> 태그를 사용했습니다. */}
                  <button 
                    onClick={() => handleDetailClick('공강이세요?')} 
                    className="flex items-center gap-2 text-sm font-bold border-b border-blue-400 pb-1 hover:text-blue-400 transition-colors focus:outline-none"
                  >
                    상세 보기 <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Other Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <MiniProjectCard 
                title="몬스터 죽이기 RPG"
                desc="기본적인 RPG 게임 기능을 구현한 토이 프로젝트. 캐릭터 상태창, 인벤토리, 전투 시스템 구현."
                tags={['Unity', 'C#', 'Game Logic']}
              />
              <MiniProjectCard 
                title="제6시험실"
                desc="장애물 피하기 아케이드 게임. 스코어 시스템과 난이도 조절 알고리즘 적용."
                tags={['Unity', 'Android', 'Arcade']}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-zinc-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <span className="w-2 h-8 bg-lime-400 rounded-full"></span>
            EXPERIENCE
          </h2>

          <div className="relative border-l border-zinc-800 ml-4 space-y-12">
            <ExperienceItem 
              date="2024.01 ~ 2024.06"
              company="RAON Secure (라온시큐어)"
              role="QA Intern"
              desc={[
                "보안 솔루션 제품에 대한 QA 테스트 수행 및 버그 리포팅",
                "Jira/Confluence를 활용한 애자일 협업 프로세스 경험",
                "개발팀과 커뮤니케이션하며 결함 수정 프로세스 참여",
                "매주 팀 스터디를 통해 ISTQB 자격증 관련 지식 습득"
              ]}
            />
             <ExperienceItem 
              date="2024 ~ "
              company="상명대학교 개발 동아리 '이니로'"
              role="Member & Mentee"
              desc={[
                "HTML/CSS/JS 웹 기초 스터디",
                "알고리즘 스터디",
                "데이터분석 스터디",
                "팀 프로젝트 멘토링 및 코드 리뷰 경험"
              ]}
            />
          </div>
        </div>
      </section>

       {/* Design Section */}
      <section id="design" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-3xl font-bold flex items-center gap-2">
              <span className="w-2 h-8 bg-purple-400 rounded-full"></span>
              DESIGN WORKS
            </h2>
            <p className="text-zinc-500 text-sm hidden md:block">
              *Figma와 Adobe Tool을 활용한 작업물입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <DesignCard title="여행 코스 플래너 UI" tool="Figma" color="purple" />
            <DesignCard title="상명 아트센터 일러스트" tool="Illustrator" color="pink" />
            <DesignCard title="발표 자료 및 인포그래픽" tool="Photoshop" color="blue" />
          </div>
          
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-900 text-center">
        <div className="text-2xl font-bold tracking-tighter mb-4 text-zinc-700">
            Lxvxxu<span className="text-zinc-500">.</span>Portfolio
        </div>
        <p className="text-zinc-500 text-sm mb-6">
          Designed & Developed by Lee Chaewon.<br/>
          Built with React & Tailwind CSS.
        </p>
        <div className="flex justify-center gap-6 text-zinc-400">
           <Mail size={20} className="hover:text-lime-400 cursor-pointer" />
           <Github size={20} className="hover:text-lime-400 cursor-pointer" />
        </div>
      </footer>

    </div>
  );
};

// Components
const Badge = ({ text, highlight = false, color = 'lime' }) => {
  const colorClasses = {
    lime: highlight ? 'bg-lime-400 text-zinc-950' : 'bg-zinc-800 text-zinc-300 border border-zinc-700',
    purple: 'bg-zinc-800 text-purple-300 border border-zinc-700 hover:border-purple-400',
    blue: 'bg-zinc-800 text-blue-300 border border-zinc-700',
    zinc: 'bg-zinc-800 text-zinc-400 border border-zinc-700',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-bold font-mono transition-all cursor-default ${colorClasses[color]}`}>
      {text}
    </span>
  );
};

const MiniProjectCard = ({ title, desc, tags }) => (
  <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:bg-zinc-800/50 transition-colors group cursor-pointer">
    <div className="flex justify-between items-start mb-4">
      <h4 className="text-lg font-bold group-hover:text-lime-400 transition-colors">{title}</h4>
      <ExternalLink size={16} className="text-zinc-600 group-hover:text-lime-400 transition-colors" />
    </div>
    <p className="text-zinc-400 text-sm mb-6 line-clamp-2">{desc}</p>
    <div className="flex gap-2">
      {tags.map(tag => (
        <span key={tag} className="text-xs text-zinc-500 font-mono">#{tag}</span>
      ))}
    </div>
  </div>
);

const ExperienceItem = ({ date, company, role, desc }) => (
  <div className="relative pl-8 pb-2">
    <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-lime-400 rounded-full border-2 border-zinc-950"></div>
    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
      <h4 className="text-xl font-bold">{company}</h4>
      <span className="hidden md:block w-1 h-1 bg-zinc-600 rounded-full"></span>
      <span className="text-lime-400 font-mono text-sm">{role}</span>
    </div>
    <div className="text-zinc-500 font-mono text-xs mb-4">{date}</div>
    <ul className="space-y-2">
      {desc.map((item, i) => (
        <li key={i} className="text-zinc-400 text-sm flex items-start gap-2">
          <span className="mt-1.5 w-1 h-1 bg-zinc-600 rounded-full shrink-0"></span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const DesignCard = ({ title, tool, color }) => (
    <div className="aspect-square bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between hover:border-zinc-600 transition-all cursor-pointer group">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-zinc-800 text-${color}-400 group-hover:scale-110 transition-transform`}>
            <Layers size={20} />
        </div>
        <div>
            <div className="text-xs text-zinc-500 font-mono mb-1">{tool}</div>
            <div className="font-bold text-lg group-hover:text-white transition-colors">{title}</div>
        </div>
    </div>
);

export default Portfolio;