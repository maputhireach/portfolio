import React from 'react';

const Skills = () => {
  const frontendSkills = [
    { name: 'Angular', level: 60 },
    { name: 'Vue', level: 70 },
    { name: 'React', level: 80 },
    { name: 'JavaScript', level: 80 }
  ];

  const backendSkills = [
    { name: 'Node.js', level: 80 },
    { name: 'Supabase', level: 80 },
    { name: 'MongoDB', level: 80 },
    { name: 'SQL', level: 70 }
  ];

  const otherSkills = [
    { name: 'Git', level: 85 },
    { name: 'UX/UI', level: 70 },
    { name: 'Python', level: 65 },
    { name: 'C#', level: 40 },
  ];

  const SkillBar = ({ skill, level }) => (
    <div className="skill-bar-container">
      <div className="skill-info">
        <div className="skill-header">
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

  const SkillCategory = ({ title, skills }) => (
    <div className="skill-category">
      <div className="skill-category-header">
        <h3>{title}</h3>
      </div>
      <div className="skill-list">
        {skills.map((skill, index) => (
          <SkillBar 
            key={index} 
            skill={skill.name} 
            level={skill.level}
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
          />
          <SkillCategory 
            title="Backend Development" 
            skills={backendSkills}
          />
          <SkillCategory 
            title="Other Skills" 
            skills={otherSkills}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills; 