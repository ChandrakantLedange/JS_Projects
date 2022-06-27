class GitHub {
    constructor(){
        this.client_id = '63368130e99de08f5198';
        this.client_secret = 'b7c41b10c1393f240c0abfed13d6bb0f2af5bf16';

    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();

        return {
            profile:profileData,
            
        }
    }
}