
async function fetchProfileData(){
    const src = './assets/JSON/profile.json';

    

    const fetching = await fetch(src);
    return await fetching.json()
}

