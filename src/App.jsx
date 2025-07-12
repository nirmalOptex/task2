import Card from '/component/card.jsx';

function App() {
  return (
    <>
    <div className=" flex flex-col items-left text-left mx-102  mb-10 ">
      <h1 className='text-xl mt-10' >Your SkillShikshya Journey</h1>
      <h3 className='text-3xl font-bold' ><span className='text-[#1DA077]'>Step</span> In. <span className='text-[#1DA077]'>Skil</span> Up. <span className='text-[#1DA077]'>Stand</span> Out. 🚀</h3>
    </div>
    <div className="flex flex-wrap w-full max-w-6xl mx-auto px-4 gap-8">
      {/* Hover-enabled card */}
      <Card
        imgSrc="/img1.png"
        title="Start with Clarity"
        content="Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth."
        hoverTitle="Clarity unlocked—stickers, sips, and skills all in one go!"
        bgColor="#F45B5B"
        hoverImgSrc="/group 1.png"
        secondaryTitle="step into a better learning path."
        hoverBgColor="#F45B5B"
        enableHover={true}
        className="img1 "
        textstyle="text1-style"
      />
      <Card
        imgSrc="/img2.png"
       title="Learn by Doing"
        secondaryTitle="Practical skills, real projects."
        content={`{}Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.`}
        hoverTitle="Focused faces—learning mode: ON! !"
        hoverContent="You hovered over me!"
        bgColor="#5492A0"
        hoverBgColor="#5492A0"
        hoverImgSrc="/group2.png"
        enableHover={true}
        className="img2 "
        textstyle="text2-style"
        containerstyler=""
       
      />
      <Card
        imgSrc="/img3.png"
        title="Get Mentored & Supported"
        secondaryTitle="You're not learning alone."
        content="Stuck or need feedback? SkillShikshya’s community of mentors and learners has your back with live support, interactive discussions, and expert insights. You’re never on your own."
        hoverTitle="Hovered!"
        hoverContent="You hovered over me!"
        bgColor="#6C64A8"
        enableHover={false}
        className="img3"
        textstyle="text3-style"
        containerstyler="container-style"

      />

      
      <Card
        imgSrc="/img4.png"
        title="Achieve & Showcase"
        secondaryTitle="Build your portfolio, get job-ready."
        content="Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture."
        hoverTitle="Hovered!"
        hoverContent="You hovered over me!"
        bgColor="#A88964"
        hoverBgColor="blue"
        enableHover={false}
        className="img4"
        textstyle="text4-style"

        
      />
    </div>
    </>
  );
}

export default App;
