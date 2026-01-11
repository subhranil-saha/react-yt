import Card from "./assets/components/Card"

const App = () => {

  const profiles = [
    {
      status: "available",
      pay: "$55/hr",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Wade Wilson",
      role: "UI/UX Designer",
      skills: ["UI", "UX", "Photoshop", "+4"],
      about: "Wade is a 32-year-old UI/UX designer with a strong portfolio and user-first mindset."
    },
    {
      status: "",
      pay: "$40/hr",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      name: "Emily Carter",
      role: "Frontend Developer",
      skills: ["HTML", "CSS", "JavaScript", "+2"],
      about: "Emily specializes in building responsive and accessible web interfaces."
    },
    {
      status: "available",
      pay: "$70/hr",
      image: "https://randomuser.me/api/portraits/men/18.jpg",
      name: "Liam Anderson",
      role: "App Developer",
      skills: ["React Native", "Android", "iOS", "+3"],
      about: "Liam develops high-performance mobile apps with clean architecture."
    },
    {
      status: "",
      pay: "$65/hr",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      name: "Sophia Brown",
      role: "Product Designer",
      skills: ["Figma", "Wireframing", "Prototyping", "+5"],
      about: "Sophia bridges business goals and user needs through thoughtful design."
    },
    {
      status: "available",
      pay: "$80/hr",
      image: "https://randomuser.me/api/portraits/men/76.jpg",
      name: "Noah Patel",
      role: "Full Stack Developer",
      skills: ["React", "Node.js", "MongoDB", "+4"],
      about: "Noah builds scalable full-stack applications with modern tech stacks."
    },
    {
      status: "",
      pay: "$50/hr",
      image: "https://randomuser.me/api/portraits/women/66.jpg",
      name: "Ava Johnson",
      role: "Graphic Designer",
      skills: ["Illustrator", "Branding", "Photoshop", "+2"],
      about: "Ava creates visually compelling brand identities and graphics."
    },
    {
      status: "available",
      pay: "$60/hr",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
      name: "Ethan Miller",
      role: "Backend Developer",
      skills: ["Node.js", "Express", "PostgreSQL", "+3"],
      about: "Ethan focuses on secure, efficient server-side systems."
    },
    {
      status: "",
      pay: "$45/hr",
      image: "https://randomuser.me/api/portraits/women/29.jpg",
      name: "Isabella Moore",
      role: "Content Designer",
      skills: ["UX Writing", "SEO", "Research", "+1"],
      about: "Isabella crafts clear, user-friendly content for digital products."
    },
    {
      status: "available",
      pay: "$90/hr",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
      name: "James Rodriguez",
      role: "DevOps Engineer",
      skills: ["AWS", "Docker", "CI/CD", "+4"],
      about: "James automates deployment pipelines and cloud infrastructure."
    },
    {
      status: "",
      pay: "$35/hr",
      image: "https://randomuser.me/api/portraits/women/81.jpg",
      name: "Mia Thompson",
      role: "Junior UI Designer",
      skills: ["UI", "Figma", "Canva", "+1"],
      about: "Mia is passionate about clean interfaces and design systems."
    },
    {
      status: "available",
      pay: "$75/hr",
      image: "https://randomuser.me/api/portraits/men/54.jpg",
      name: "Benjamin Lee",
      role: "Data Analyst",
      skills: ["Python", "SQL", "Tableau", "+3"],
      about: "Benjamin turns complex data into actionable business insights."
    },
    {
      status: "",
      pay: "$85/hr",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      name: "Olivia Martin",
      role: "Project Manager",
      skills: ["Agile", "Scrum", "Planning", "+2"],
      about: "Olivia ensures projects are delivered on time and within scope."
    }
  ];

  return (
    <div className="parent">
      {profiles.map(function(profile, index) {
        return <div key={index}>
          <Card status={profile.status} pay={profile.pay} image={profile.image} name={profile.name} role={profile.role} skills={profile.skills} about={profile.about} />
        </div>
      })}
    </div>
  )
}

export default App