import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Forms Software - Sam Hodges Websites");
    }

    async getHtml() {
        return `
            	<div class="position-relative overflow-hidden p-md-5 m-md-3 bg-homepage-cover">
    <div class="col-md-8 p-lg-5 mx-auto my-5">
      <h1 class="display-3 fw-bold ms-3">Forms Software</h1>
      <h3 class="fw-normal mb-3 ms-3 text-black"> <a href="/software" class="text-decoration-none text-black" data-link>Software</a> >> Forms Software</h3>
      <div class="d-flex gap-3 justify-content-center lead fw-normal">
      </div>
    </div>
  </div>
		<div class="container">
					<div class="row">
			<div style="min-width: 300px;" class="col pt-3 pb-3">
          <h3>Sam Hodges Forms Software</p></h3>
          <p>Sam Hodges Forms Software is a modern looking and easy to use solution for anyone looking to make their web forms more efficient. Forms can have a unique design to fit your brand.</p>
		<a class="btn btn-outline-primary" href="https://forms6385.live-website.com/demo/form">Try the Demo <i class="bi bi-arrow-right"></i></a>
        </div>
			        <div style="min-width: 300px;" class="col  pb-3 d-flex justify-content-center">
          <div class="iframe-container">
<iframe id="formFrame" src="/software/formrenderer" style="width:100%; height:620px;" frameborder="0"></iframe>

<script>
  window.addEventListener('message', function (e) {
    if (e.data.height) {
      document.getElementById('formFrame').style.height = e.data.height + 'px';
    }
  });
</script>
</div>

<style>
    .iframe-container {
  position: relative;
  overflow: hidden;
  width: 100%;
}

/* Then style the iframe to fit in the container div with full height and width */
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  min-height: 100%:
  overflow: hidden;
}
</style>
						
        </div>
		</div>
      </div>
	<h2 class="text-center">Enquire Now:</h2>
	 <div class="iframe-container">
<iframe id="formFrame2" src="https://forms6385.live-website.com/sam-hodges/forms-software" style="width:100%; height:600px;" frameborder="0"></iframe></div>
	<script>
  window.addEventListener('message', function (e) {
    if (e.data.height) {
      document.getElementById('formFrame2').style.height = e.data.height + 'px';
    }
  });
</script>
        `;
    }
}