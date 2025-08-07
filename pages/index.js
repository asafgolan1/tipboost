export default function Home() {
  return (
    <div>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem 2rem',
        backgroundColor: '#f8f8f8',
        borderBottom: '1px solid #e5e5e5'
      }}>
        <h1 style={{ margin: 0 }}>TipBoost</h1>
        <ul style={{
          listStyle: 'none',
          display: 'flex',
          gap: '1.5rem',
          margin: 0,
          padding: 0
        }}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <main style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '4rem 2rem'
      }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Welcome to TipBoost!
        </h2>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', textAlign: 'center', marginBottom: '2rem' }}>
          Supercharge your fan engagement with smart automated messages, tip rewards, and behavior tracking.
        </p>
        <button style={{
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
          padding: '1rem 2rem',
          fontSize: '1rem',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          Get Started
        </button>
      </main>
    </div>
  );
}

