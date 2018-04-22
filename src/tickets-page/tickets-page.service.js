export default function() {
    return fetch("./tickets.json").then(response => {
        return response.json();
    });
};