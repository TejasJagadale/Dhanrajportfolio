import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Cybersecurity",
      skills: [
        "Ethical Hacking & Penetration Testing",
        "Digital Forensics",
        "Incident Response & Threat Analysis",
        "Network Security",
        "Security Compliance & Risk Assessment"
      ]
    },
    {
      category: "Data Science & Analytics",
      skills: [
        "Data Analysis & Visualization",
        "Machine Learning",
        "Statistical Modeling",
        "Python for Data Science",
        "Predictive Analytics"
      ]
    },
    {
      category: "Cloud & Infrastructure",
      skills: [
        "Cloud Architecture (AWS/Azure)",
        "OpenStack Private Cloud",
        "Database Management",
        "System Administration",
        "Virtualization Technologies"
      ]
    },
    {
      category: "Web Technologies",
      skills: [
        "Web Application Security",
        "API Security",
        "Secure Coding Practices",
        "Frontend Development",
        "Backend Development"
      ]
    }
  ];

  return (
    <section className="mt-20 mb-20">
      <h2 className="text-6xl font-bold text-center mb-16 dark:text-light">
        Technical Expertise
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-1 gap-8">
        {skillCategories.map((category, index) => (
          <div 
            key={index}
            className="bg-light dark:bg-dark p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
            // style={{width:'300px'}}
          >
            <h3 className="text-2xl font-semibold mb-4 text-dark dark:text-light">
              {category.category}
            </h3>
            <ul className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <li 
                  key={skillIndex}
                  className="text-gray-700 dark:text-gray-300 flex items-start"
                >
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;