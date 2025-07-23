import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Software - Sam Hodges Websites");
    }

    async getHtml() {
        return `
<div class="position-relative overflow-hidden p-md-5 m-md-3 bg-homepage-cover">
    <div class="col-md-8 p-lg-5 mx-auto my-5">
      <h1 class="display-3 fw-bold ms-3">Software</h1>
      <h3 class="fw-normal mb-3 ms-3 text-black"><a class="text-decoration-none text-black" href="/" data-link>Home</a> >> Software</h3>
      <div class="d-flex gap-3 justify-content-center lead fw-normal">
      </div>
    </div>
  </div>
		<div class="container">
     
			<div class="row">
			<div style="min-width: 300px;" class="col pt-3 pb-3">
          <h3>Sam Hodges Forms Software</p></h3>
          <p>Sam Hodges Forms Software is a modern looking and easy to use solution for anyone looking to make their web forms more efficient. Forms can have a unique design to fit your brand. Click on "Find out more" to try the demo!</p>
		<a class="btn btn-outline-primary" href="/software/forms-software" data-link>Find out more <i class="bi bi-arrow-right"></i></a>
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
		 <div class="row">
        <div style="min-width: 300px;" class="col pt-3 pb-3 d-flex justify-content-center">
          <img class="responsive" src="/static/uploads/qrcode.png" alt="QR Code" max-width="568px" height="auto">
        </div>
        <div style="min-width: 300px;" class="col pt-3 pb-3">
          <h3>QR Code Generator<p>by Sam Hodges.</p></h3>
          <p>QR Code Generator by Sam Hodges is a free and easy to use QR Code Generator. There are no subscriptions and no limit on how long a QR Code can be used for. To create a QR Code, press on the button below</p>
		<a class="btn btn-outline-primary" href="https://qr.samahodges.com">Generate a QR Code <i class="bi bi-box-arrow-up-right"></i></a>
        </div>
      </div>
		</div>
        `;
    }
}