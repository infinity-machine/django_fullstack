export default async function fetchApi(){
    const response = await fetch('/api', {
        method: 'GET'
    });
    const data = await response.json();
    console.log(data)
}