export async function fetchData(){
    const response = await fetch('/api', {
        method: 'GET'
    });
    console.log(response)
    const data = await response.json();
    return data
}

export async function postData(message, sender){
    const entry = {
        message: message,
        sender: sender
    }
    const response = await fetch('/api', {
        method: 'POST',
    })
}