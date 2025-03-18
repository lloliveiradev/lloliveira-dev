export default interface Technology {
    id: number
    name: string
    description: string
    image: string
    highlight: boolean
}

const t: Partial<Technology> = {
    name: 'JavaScript',
    description: 'JavaScript is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    highlight: true
}

console.log(t);