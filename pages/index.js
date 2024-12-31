// pages/index.js
import styles from "@/styles/Home.module.css";

const Home = ({ companies }) => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  return (
    <div className={styles.container}>
      <h1
        className={styles.title}
        style={{ textAlign: "center", marginTop: "50px" }}
      >
        Company Directory
      </h1>
      <div className="card-container">
        {companies.map((company) => (
          <div
            key={company.id}
            className="card"
            onClick={() => setSelectedCompany(company)}
          >
            <div className="card-icon">🏢</div>
            <div className="card-title">{company.name}</div>
            <div className="card-description">
              {selectedCompany?.id === company.id ? (
                <>
                  <p>{company.description}</p>
                  <h3>Directors</h3>
                  <ul>
                    {company.directors.map((director, index) => (
                      <li key={index}>{director}</li>
                    ))}
                  </ul>
                </>
              ) : (
                <p>{company.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3000/api/companies");
  const data = await response.json();

  return {
    props: {
      companies: data,
    },
  };
};

export default Home;
