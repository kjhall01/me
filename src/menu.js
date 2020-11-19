import React, { useRef, useEffect, useState } from "react";
import "./menu.css";
import "./bg.css";
import FadeInSection from './fade-in-section.js';
import headshot from './assets/kjch_headshot.jpeg';

const getDimensions = (ele) => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom
  };
};

const scrollTo = (ele) => {
	console.log('clicked')
  ele.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
};

function Menu() {
  const [visibleSection, setVisibleSection] = useState();

  const headerRef = useRef(null);
  const leadershipRef = useRef(null);
  const providerRef = useRef(null);
  const operationsRef = useRef(null);

  const sectionRefs = [
    { section: "Leadership", ref: leadershipRef },
    { section: "Providers", ref: providerRef },
    { section: "Operations", ref: operationsRef }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);
  return (
		<div>
				<div className="bg-img">
					<div className='titleholder'>
								Kyle Hall
					</div>
				</div>
	      <div className="content">
					<div className="top-spacer"> </div>
				        	<div className="sticky">
							          	<div className="header" ref={headerRef}>
																	<button type="button" className={`header_link ${visibleSection === "Leadership" ? "selected" : ""}`} onClick={() => {scrollTo(leadershipRef.current);}}>
																		KJCH
																	</button>
																	<p style={{width:'80vw'}}/>
																	<button type="button" className={`header_link ${visibleSection === "Leadership" ? "selected" : ""}`} onClick={() => {scrollTo(leadershipRef.current);}}>
										              	Dingus
										            	</button>
																	<button type="button" className={`header_link ${visibleSection === "Providers" ? "selected" : ""}`} onClick={() => {scrollTo(providerRef.current);}}>
										              	Pringus
											            </button>
																	<button type="button" className={`header_link ${visibleSection === "Operations" ? "selected" : ""}`} onClick={() => {scrollTo(operationsRef.current);}}>
											              Onk
											            </button>
							          	</div>
				        	</div>
					        <div className="section-1" id="Leadership" ref={leadershipRef}>
											<FadeInSection>
											<div className="bio">
												<img className='headshot' src={headshot}/>
												<div className="abtme">
													<h1 className="aboutme">About Me</h1>
													<p className='aboutme_text'>I'll be forever striving to lead a values-consistent life- that's why, two years ago, I left a lucrative position in the healthcare industry to study climate change full-time. Now, I'm working to make climate justice a priority in government and the climate services industry. My data science skills have come in handy- I've used them to collaborate with scientists at Columbia's Earth Institute to build seasonal climate forecasting systems that enable citizen science around the world. In class, I've worked with other climate change leaders to tackle tough policy issues, and discussed legislative approaches to climate change mitigation with the world's top climate lawyers. Along the way, I managed to squeeze in some extracurriculars- I led hard conversations on identity with Columbia University Life, interned with Senator Warren's presidential campaign, received the David L. Boren Fellowship for Indonesian Language, achieved an ACTFL Level 2 proficiency in Bahasa Indonesa- all over zoom, once the pandemic hit. Outside of that, I baked a LOT of bread.           </p>
												</div>
											</div>
											</FadeInSection>


									</div>
									<div className="spacer"/>
					        <div className="section-2" id="Providers" ref={providerRef} />
									<div className="spacer"/>
					        <div className="section-3" id="Operations" ref={operationsRef} />
					<div className="bottom-spacer"></div>
			</div>
		</div>

  );
}

export default Menu;
