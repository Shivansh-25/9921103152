import axios from "axios";

const login = async () => {
    try {
      const response = await axios.post('http://20.244.56.144/test/auth', {
        companyName: 'Jaypee Institute Of Information Technology',
        clientID: '3d2b34fd-1318-4904-b882-9b75df279c79',
        clientSecret: 'wEuNsZAihSjERZOv',
        ownerName: 'Shivansh',
        ownerEmail: '9921103152@mail.jiit.ac.in',
        rollNo: '9921103152',
      });
      console.log(response);
      return response.data.access_token;
    } catch (error) {
      console.error(error);
    }
  };
  
  export { login };
  