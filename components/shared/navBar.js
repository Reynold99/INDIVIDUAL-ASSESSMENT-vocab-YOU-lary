import renderToDOM from '../../utils/renderToDom';

const navBar = () => {
  const domString = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
    <div class="container-fluid">
        <a class="navbar-brand title" href="" id="logo">Reynold Anthony Vocabulary</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#" id="create-entry">
                CREATE CARDS <span class="sr-only">(current)</span>
              </a>
            </li>
            <div class="main-container">
  <button type="button" id="python" class="btn btn-outline-primary">Python</button>
  <button type="button" id="javascript" class="btn btn-outline-secondary">JavaScript</button>
  <button type="button" id="css" class="btn btn-outline-success">CSS</button>
  <button type="button" id="html" class="btn btn-outline-info">HTML</button>
  </div>
          </ul>
          <span class="navbar-text">
            <div id="cart-button"></div>
            <div id="logout-button">
            <button type="button" class="btn btn-danger">Log Out</button>
            </div>
          </span>
        </div>
        </div>
      </nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;
