class ProfileCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  static get observedAttributes() {
    return ['name', 'title', 'image'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  render() {
    const name = this.getAttribute('name');
    const title = this.getAttribute('title');
    const image = this.getAttribute('image');

    this.shadowRoot.innerHTML = `
   
     <link rel="stylesheet" href="styles.css">

      <div class="profile-card">
        <img src="${image}" alt="${name}" >
        <h2>${name}</h2>
        <p>${title}</p>
      </div>
    `;
  }
}

customElements.define('profile-card', ProfileCard);
