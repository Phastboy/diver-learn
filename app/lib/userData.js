export async function fetchUser() {
    try {
        const response = await fetch('/api/user');
        if (response.ok) {
            const data= await response.json();
            return data;
        }else{
            throw new Error('Something went wrong!');
        }
    }
    catch (error) {
        console.log(error);
        throw new Error('Request failed!');
    }finally{
        console.log('Done!');
        // my data if the request fails
        const data={
            name: 'Hammed Anuoluwapo',
            picture: 'https://github.com/Phastboy.png',
            title: 'Software Engineer',
            location: 'Lagos, Nigeria',
            email: 'stationphast@gmail.com',
            phone: '+234 805 974 8347',
            description: 'I am a software engineer with 3 years of experience in building web applications with React and Nodejs. I am also a technical writer and I write about web development on my blog.',
        };
        return data;
    }
}