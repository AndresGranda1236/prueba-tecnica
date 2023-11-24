// Elements
const tableContent = document.getElementById('table-content')

async function getUsers() {
    const response = await fetch('https://api.escuelajs.co/api/v1/users')
    return await response.json()
}

// Event listener
window.addEventListener('load', async () => {
    const data = await getUsers()
    data.forEach((item) => generateHTML(tableContent, item))
})

function generateHTML(parentEl, dataEl) {
    const html = `
    <tr>
        <td>
            <img src="${dataEl.avatar}" alt="${dataEl.name} photo" width="50">
        </td>
        <td>
            ${dataEl.name}
        </td>
        <td>
            ${dataEl.role}
        </td>
        <td>
            ${dataEl.email}
        </td>
    </tr>
    `
    return parentEl.insertAdjacentHTML('beforeend', html);
}