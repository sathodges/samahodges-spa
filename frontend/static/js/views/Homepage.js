import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Homepage - Sam Hodges Websites");
    }

    async getHtml() {
        return `
<div class="position-relative overflow-hidden p-md-5 m-md-3 text-center bg-homepage-cover">
    <div class="col-md-6 p-lg-5 mx-auto my-5">
      <h1 class="display-3 fw-bold">Welcome to Sam Hodges Websites</h1>
      <h3 class="fw-normal mb-3">Websites to fit your needs</h3>
      <div class="d-flex gap-3 justify-content-center lead fw-normal">
		<a class="icon-link text-decoration-none text-info" href="/software" data-link>
          Software
        </a>
        <a class="icon-link text-decoration-none text-info" href="#work" data-link>
          My Work
        </a>
        <a class="icon-link text-decoration-none text-info" href="#contact" data-link>
          Contact Me        
		</a>
      </div>
    </div>
  </div>
		<div class="container pt-4" id="work">
			<h1 class="text-center pb-1">My Work:</h1>
			<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col" style="min-width: 350px;">
    <div class="card">
		<img src="/static/uploads/club-707-logo.png" height="100px" class="card-img-top responsive" alt="Club 707 logo">
      <div class="card-body">
        <h5 class="card-title text-center">Club 707</h5>
        <p class="card-text">I am the website manager for Club 707 and I've designed many of their pages. Thanks to me managing their website, they've found that more functionalliy has been added.<br><br><br><br></p>
<a href="//club707.co.uk" class="text-center text-decoration-none text-black">Visit Website <i class="bi bi-arrow-right"></i></a>
      </div>
    </div>
  </div>
  <div class="col" style="min-width: 350px;">
    <div class="card">
	<img src="/static/uploads/bethel-logo.png" height="100px" class="card-img-top responsive" alt="Bethel Logo">
      <div class="card-body">
        <h5 class="card-title text-center">Bethel Penyrheol</h5>
        <p class="card-text">I re-built the website for Bethel Penyrheol in August 2024, as they had an old website that was poorly optimised for mobile devices and looked out of date. Since I've re-built their website, they have found it much easier to manage and make small tweaks here and there.</p>
		  <a href="//bethelpenyrheol.org" class="text-center text-decoration-none text-black">Visit Website <i class="bi bi-arrow-right"></i></a>
      </div>
    </div>
  </div>
  <div class="col" style="min-width: 350px;">
    <div class="card">
		<img src="/static/uploads/train-and-car-model-auction-logo.png" height="100px" class="card-img-top responsive" alt="Train & Car Model Auction Wales Logo">
      <div class="card-body">
        <h5 class="card-title text-center">Train &amp; Car Model Auction</h5>
        <p class="card-text">Building the website for Train &amp; Car Model Auction was no easy task. It needed a complex system to store all of the data from the auctions and ensure that the auctions could be carried out smoothly<br><br><br></p>
<a href="//trainandcarmodelauction.wales" class="text-center text-decoration-none text-black">Visit Website <i class="bi bi-arrow-right"></i></a>
      </div>
    </div>
  </div>
  <div class="col" style="min-width: 350px;">
    <div class="card">
		<img src="/static/uploads/trainspottingtwins.jpeg" height="100px" class="card-img-top responsive" alt="Trainspotting Twins Logo">
      <div class="card-body">
        <h5 class="card-title text-center">The Trainspotting Twins</h5>
        <p class="card-text">The Trainspotting Twins was built as a simple website to provide information to fellow train enthusiasts. This is owned directly by me and my friend therefore we will also try and experiment with it to help future clients of mine with new designs etc.<br><br><br></p>
<a href="//sites.google.com/view/trainspottingtwins" class="text-center text-decoration-none text-black">Visit Website <i class="bi bi-arrow-right"></i></a>
      </div>
    </div>
  </div>
</div>
		</div>
		<div class="container pt-5" id="contact">
			<h1 class="text-center">Contact Me</h1>
					<p>To contact me, please email <a href="mailto:samhodgeswebsites@gmail.com" class="text-decoration-none">samhodgeswebsites@gmail.com</a>, or use the form below.</p>
					<div class="iframe-container">
<iframe loading="lazy" id="formFrame" src="https://forms6385.live-website.com/sam-hodges/contact-form" style="width:100%; height:600px;" frameborder="0"></iframe>

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
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  min-height: 100%;
  overflow: hidden;
}
tyle>
		</div>
        `;
    }
}