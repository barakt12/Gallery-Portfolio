var gProjs = []

gProjs = _createProjects()

function _createProjects() {
  return [
    _createProject(
      'minesweeper2',
      'Minesweeper',
      'With extra features!',
      'A remake of the classic Minesweeper game with modern design and additional features',
      'projs/Minesweeper',
      new Date('Mar 27 2022'),
      ['Matrixes', 'Games']
    ),
    _createProject(
      'geniusgenie',
      'Genius Genie',
      'Let the genie guess your character!',
      'The genie learn through your inputs after not being able to guess. Usage of Binary Tree.',
      'projs/GeniusGenie',
      new Date('03 April 2022'),
      ['Games', 'Binary Tree', 'Bootstrap', 'jQuery']
    ),
    _createProject(
      'pacman',
      'Pacman',
      'A Maze Action game',
      'A remake of pacman',
      'projs/Pacman',
      new Date('22 March 2022'),
      ['Keyboard Events', 'NPC Logic', 'Games']
    ),
  ]
}

function _createProject(id, name, title, desc, url, publishedAt, labels) {
  return {
    id,
    name,
    title,
    desc,
    url,
    publishedAt: publishedAt.toDateString(),
    labels,
  }
}

function getProjects() {
  return gProjs
}

function getProjectById(projId) {
  return gProjs.find((proj) => proj.id === projId)
}

/*
 
MODAL
    <div
      class="portfolio-modal modal fade"
      id="portfolioModal1"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <div class="lr">
              <div class="rl"></div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <div class="modal-body">
                  <!-- Project Details Go Here -->
                  <h2>Project Name</h2>
                  <p class="item-intro text-muted">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                  <img
                    class="img-fluid d-block mx-auto"
                    src="img/portfolio/01-full.jpg"
                    alt=""
                  />
                  <p>
                    Use this area to describe your project. Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit. Est blanditiis
                    dolorem culpa incidunt minus dignissimos deserunt repellat
                    aperiam quasi sunt officia expedita beatae cupiditate,
                    maiores repudiandae, nostrum, reiciendis facere nemo!
                  </p>
                  <ul class="list-inline">
                    <li>Date: January 2017</li>
                    <li>Client: Threads</li>
                    <li>Category: Illustration</li>
                  </ul>
                  <button
                    class="btn btn-primary"
                    data-dismiss="modal"
                    type="button"
                  >
                    <i class="fa fa-times"></i>
                    Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    */
