import Card from './components/Card';

const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/021/514/948/small/google-symbol-logo-design-illustration-free-vector.jpg",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hour",
      location: "Bengaluru, India"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/004/201/564/small/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg",
      companyName: "Meta",
      datePosted: "2 weeks ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$55/hour",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/019/136/440/small/apple-logo-apple-icon-free-free-vector.jpg",
      companyName: "Apple",
      datePosted: "10 days ago",
      post: "iOS Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$70/hour",
      location: "Bengaluru, India"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/014/018/561/small/amazon-logo-on-transparent-background-free-vector.jpg",
      companyName: "Amazon",
      datePosted: "3 weeks ago",
      post: "Backend Engineer (Node.js)",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$40/hour",
      location: "Chennai, India"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/017/396/814/non_2x/netflix-mobile-application-logo-free-png.png",
      companyName: "Netflix",
      datePosted: "1 week ago",
      post: "UI Engineer",
      tag1: "Contract",
      tag2: "Senior Level",
      pay: "$80/hour",
      location: "Remote"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/006/892/682/non_2x/microsoft-logo-icon-editorial-free-vector.jpg",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Software Engineer Intern",
      tag1: "Part Time",
      tag2: "Entry Level",
      pay: "$30/hour",
      location: "Noida, India"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/020/336/484/small/tesla-logo-tesla-icon-transparent-png-free-vector.jpg",
      companyName: "Tesla",
      datePosted: "6 weeks ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$60/hour",
      location: "Pune, India"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/021/514/769/small/ibm-brand-symbol-software-computer-logo-black-design-illustration-free-vector.jpg",
      companyName: "IBM",
      datePosted: "10 weeks ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$35/hour",
      location: "Kolkata, India"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/000/064/836/non_2x/oracle-vector.jpg",
      companyName: "Oracle",
      datePosted: "8 days ago",
      post: "Java Backend Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$65/hour",
      location: "Bengaluru, India"
    },
    {
      brandLogo: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg",
      companyName: "Salesforce",
      datePosted: "12 days ago",
      post: "Software Engineer (Platform)",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$58/hour",
      location: "Hyderabad, India"
    }
  ];

  console.log(jobOpenings);


  return (
    <div className='parent'>
      {jobOpenings.map(function(elem, index){
        return <div key={index}>
          <Card logo={elem.brandLogo} company={elem.companyName} date={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
        </div>
      })}
    </div>
  )
}

export default App 