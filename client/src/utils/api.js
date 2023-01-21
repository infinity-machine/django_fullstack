export async function fetchData(){
    const response = await fetch('/api', {
        method: 'GET'
    });
    const data = await response.json();
    console.log(data)
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