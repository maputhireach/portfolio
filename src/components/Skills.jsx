import React from 'react';

const Skills = () => {
  const frontendSkills = [
    { name: 'Angular', level: 60, icon: '🅰️' },
    { name: 'Vue', level: 70, icon: '⚡' },
    { name: 'React', level: 80, icon: '⚛️' },
    { name: 'JavaScript', level: 80, icon: '📜' }
  ];

  const backendSkills = [
    { name: 'Node.js', level: 80, icon: '🟢' },
    { name: 'Supabase', level: 80, icon: '🔥' },
    { name: 'MongoDB', level: 80, icon: '🍃' },
    { name: 'SQL', level: 70, icon: '🗄️' }
  ];

  const otherSkills = [
    { name: 'Git', level: 85, icon: '📦' },
    { name: 'Docker', level: 70, icon: '🐳' },
    { name: 'AWS', level: 65, icon: '☁️' },
    { name: 'Linux', level: 75, icon: '🐧' }
  ];

  const SkillBar = ({ skill, level, icon }) => (
    <div className="skill-bar-container">
      <div className="skill-info">
        <div className="skill-header">
          <span className="skill-icon">{icon}</span>
          <span className="skill-name">{skill}</span>
        </div>
        <span className="skill-percentage">{level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress" 
          style={{ width: `${level}%` }}
          data-level={level}
        ></div>
      </div>
    </div>
  );

  const SkillCategory = ({ title, skills, icon }) => (
    <div className="skill-category">
      <div className="skill-category-header">
        <span className="category-icon">{icon}</span>
        <h3>{title}</h3>
      </div>
      <div className="skill-list">
        {skills.map((skill, index) => (
          <SkillBar 
            key={index} 
            skill={skill.name} 
            level={skill.level} 
            icon={skill.icon}
          />
        ))}
      </div>
    </div>
  );

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2>My Skills</h2>
        <p className="skills-intro">
          Here are the technologies and tools I work with
        </p>
        <div className="skills-grid">
          <SkillCategory 
            title="Frontend Development" 
            skills={frontendSkills} 
            icon="🎨"
          />
          <SkillCategory 
            title="Backend Development" 
            skills={backendSkills} 
            icon="⚙️"
          />
          <SkillCategory 
            title="Other Skills" 
            skills={otherSkills} 
            icon="🛠️"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills; 