export default function HTML( props = {}) {

    const {
        title = '',
        html = ''
    } = props

    return `
    <!DOCTYPE html>
    <body>
        <main>
            <h1>${title}</h1>
            <div>
                ${html}
            </div>
        </main>
    </body>
    </html>
    `
}