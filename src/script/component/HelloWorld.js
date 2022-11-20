class HelloWorld extends HTMLElement {
    connectedCallback () {
        this.render()
    }

    render () {
        this.innerHTML = `
            <h2>Hello World</h2>
        `
    }
}

customElements.define('hello-world', HelloWorld)
