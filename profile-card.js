class ProfileCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  static get observedAttributes() {
    return ['name', 'title', 'image', 'linkedIn', 'github'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  render() {
    const name = this.getAttribute('name');
    const title = this.getAttribute('title');
    const image = this.getAttribute('image');
    let linkedIn = this.getAttribute('linkedIn');
    let github = this.getAttribute('github');

    if (linkedIn) {
       linkedIn = '<li class="linkedin_bullet" ><a href="https://linkedin.com/in/"' + linkedIn + ">"+linkedIn+"</a></li>"
    }

    if (github) {
      github = '<li class="github_bullet"><a href="https://github.com/"' + github + ">"+github+"</a></li>"
    }
    const socials = [linkedIn,github].filter(Boolean).map(x => "<li>" + x + "</li>").join("")

    this.shadowRoot.innerHTML = `
   
     <link rel="stylesheet" href="styles.css">

      <div class="profile-card">
        <img src="${image}" alt="${name}" >
        <h2>${name}</h2>
        <p>${title}</p>
        <ul>
            ${socials}
        </ul>
      </div>
    `;
  }
}

customElements.define('profile-card', ProfileCard);
