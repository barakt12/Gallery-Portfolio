$(initPage)

function initPage() {
  renderProjects()
  submitEventListener()
}

function renderProjects() {
  var projects = getProjects()
  var strHTMLs = projects.map((proj) => {
    return `<div onclick="renderModal('${proj.id}')" class="col-md-4 col-sm-6 portfolio-item">
    <a
    class="portfolio-link"
      data-toggle="modal"
      href="#portfolioModal1"
      >
      <div class="portfolio-hover">
      <div class="portfolio-hover-content">
      <i class="fa fa-plus fa-3x"></i>
      </div>
      </div>
      <img
      class="img-fluid"
      src="img/portfolio/${proj.id}.png"
      alt=""
      />
      </a>
      <div class="portfolio-caption">
      <h4>${proj.name}</h4>
      <p class="text-muted">${proj.title}</p>
      </div>
      </div>`
  })

  $('.cards-container').html(strHTMLs)
}

function renderModal(id) {
  const proj = getProjectById(id)
  var strHTML = `
  <h2>${proj.name}</h2>
  <p class="item-intro text-muted">
  ${proj.title}
  </p>
  <button onclick="redirect('${proj.id}')"
  class="btn btn-reroute btn-success my-3"
  data-dismiss="modal"
  type="button"
  >
  Check it out!
  </button>
  <img
  onclick="redirect('${proj.id}')"
  class="img-fluid d-block mx-auto"
  src="${proj.url}"
  alt=""
  />
  <p>
  ${proj.desc}
  </p>
  
  <ul class="list-inline">
  <li>Date: ${proj.publishedAt}</li>
  <li>Category: ${proj.labels.join(', ')}</li>
  </ul>
  
  <button
  class="btn btn-primary"
  data-dismiss="modal"
  type="button"
  >
  <i class="fa fa-times"></i>
  Close Project
  </button>`
  $('.modal-body').html(strHTML)
}

function redirect(id) {
  window.location.href = `http://barakt12.github.io/${id}/`
}

function submitEventListener() {
  $('.contactform .btn').click(onSubmit)
}

function onSubmit() {
  window.open(
    `https://mail.google.com/mail/?view=cm&fs=1&to=baraktreves1@gmail.com&su=${
      $('.subject')[0].value
    }&body=${$('.textbody')[0].value}`
  )
}
