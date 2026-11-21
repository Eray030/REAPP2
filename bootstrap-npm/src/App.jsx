import './App.scss'

function App() {
  return (
    <main className="container py-5">
      <div className="row g-3">
        <div className="col-md-6">
          <article className="card">
            <div className="card-body">
              <h4 className="card-title text-primary">Lorem ipsum dolor sit amet</h4>
              <p className="card-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae commodi tempora voluptates eos maxime inventore suscipit ipsum reiciendis, quidem quia at accusantium aliquid nihil placeat doloremque cupiditate esse ab odio?
              </p>
            </div>
          </article>
        </div>

        <div className="col-md-6">
          <article className="card">
            <div className="card-body">
              <h4 className="card-title text-secondary">Lorem ipsum dolor sit amet</h4>
              <p className="card-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae commodi tempora voluptates eos maxime inventore suscipit ipsum reiciendis, quidem quia at accusantium aliquid nihil placeat doloremque cupiditate esse ab odio?
              </p>
            </div>
          </article>
        </div>
      </div>
    </main>
  )
}

export default App
