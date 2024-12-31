// pages/api/companies.js
export default function handler(req, res) {
    const companies = [
      {
        id: 1,
        name: "Tech Solutions",
        description: "A leading tech company specializing in software development.",
        directors: ["Alice Johnson", "Bob Smith"],
      },
      {
        id: 2,
        name: "Green Energy Co.",
        description: "Innovators in renewable energy solutions.",
        directors: ["Carol Lee", "David Brown"],
      },
      {
        id: 3,
        name: "Global Logistics",
        description: "Providing logistics and transportation services worldwide.",
        directors: ["Eve Davis", "Frank Wilson"],
      },
    ];
  
    res.status(200).json(companies);
  }
  