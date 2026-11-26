
import './App.css'

function App() {
  const photos = [
    {
      id: 1,
      category: 'Nature',
      image: '/images/nature.jpg'
    },
    {
      id: 2,
      category: 'Weddings',
      image: '/images/wedding.jpg'
    },
    {
      id: 3,
      category: 'Lifestyle',
      image: '/images/lifestyle.jpg'
    }
  ]

  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar">
        <h2 className="logo">Captured Moments.</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#gallery">Gallery</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Homepage */}
      <section id="home" className="hero">
        <div className="hero-content">
          <span>THE ART OF PHOTOGRAPHY</span>

          <h1>Every moment tells a story.</h1>

          <p>
            Capturing the beauty in life's
            unforgettable moments.
          </p>

          <a href="#gallery" className="btn">
            Explore Portfolio
          </a>
        </div>
      </section>

      {/* Photography Gallery */}
      <section id="gallery" className="gallery">
        <span>SELECTED WORKS</span>

        <h2>Photography Gallery</h2>

        <p>A collection of moments worth remembering.</p>

        <div className="gallery-grid">
          {photos.map((photo) => (
            <div className="photo-card" key={photo.id}>
              <img
                src={photo.image}
                alt={photo.category}
              />
              <h3>{photo.category}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <span>BEHIND THE LENS</span>

        <h2>About Us</h2>

        <p>
          We believe photography is more than
          taking pictures. It is about preserving
          emotions, experiences and meaningful
          memories.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Let's create something beautiful.</h2>

        <p>
          Get in touch to discuss your next
          photography session.
        </p>
      </section>

      {/* Footer */}
      <footer>
        <p>
          &copy; {new Date().getFullYear()}
          {' '}Captured Moments Photography.
        </p>
      </footer>
    </>
  )
}

export default App
