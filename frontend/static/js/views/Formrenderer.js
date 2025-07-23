import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Form Renderer - Sam Hodges Websites");
    }

    async getHtml() {
        return `
        <script>
           window.onload = function () {
  const height = document.documentElement.scrollHeight;
  parent.postMessage({ height }, '*');
};
    </script>
    <style>
        /* 1. Define the keyframes */
@keyframes fadeSlideIn {
  0% {
    opacity: 0;
    transform: translateY(-20px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

      form {
  max-width: 500px;
  margin: 40px auto;
  padding: 30px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 12px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
    animation: fadeSlideIn 0.8s ease-out forwards;
  opacity: 0; /* start invisible until animation kicks in */

}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #333;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  margin-bottom: 20px;
  box-sizing: border-box;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

input[type="text"]:focus,
input[type="email"]:focus,
textarea:focus {
  border-color: #0078d4;
  box-shadow: 0 0 0 3px rgba(0, 120, 212, 0.2);
  outline: none;
}

input[type="submit"] {
  background-color: #0078d4;
  color: #fff;
  border: none;
  padding: 14px 24px;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

input[type="submit"]:hover {
  background-color: #005ea6;
      }
    </style>
    <form>
  		<label for="name">Name:</label><br />
  		<input disabled type="text" name="name" required><br />

  		<label for="email">Email:</label><br />
  		<input disabled type="email" name="email" required><br />

  		<label for="message">Message:</label><br />
  		<textarea disabled name="message" required></textarea><br />

  		<input disabled type="submit" value="Send">
	</form>
        `;
    }
}