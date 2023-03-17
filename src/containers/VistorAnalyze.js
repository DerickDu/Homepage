import { useEffect } from 'react';
import axios from 'axios';

function MyComponent() {
  useEffect(() => {
    const sendEmail = async () => {
      try {
        const response = await axios.post('https://api.mailgun.net/v3/YOUR_DOMAIN_NAME/messages', {
          from: 'Your Name <your-email@your-domain.com>',
          to: 'admin@example.com',
          subject: 'New website visitor',
          text: `New website visitor:\nIP address: ${await getIPAddress()}\nOperating system: ${getOS()}\nTime and date of visit: ${new Date().toLocaleString()}\nGeo location: ${await getGeoLocation()}`,
        }, {
          auth: {
            username: 'api',
            password: 'YOUR_MAILGUN_API_KEY'
          }
        });
        console.log('Email sent:', response.data);
      } catch (error) {
        console.error('Failed to send email:', error);
      }
    };

    sendEmail();
  }, []);

  const getIPAddress = async () => {
    const response = await axios.get('https://api.ipify.org?format=json');
    return response.data.ip;
  };

  const getOS = () => {
    const userAgent = navigator.userAgent;
    const osList = {
      'Windows NT 10.0': 'Windows 10',
      'Windows NT 6.3': 'Windows 8.1',
      'Windows NT 6.2': 'Windows 8',
      'Windows NT 6.1': 'Windows 7',
      'Windows NT 6.0': 'Windows Vista',
      'Windows NT 5.1': 'Windows XP',
      'Windows NT 5.0': 'Windows 2000',
      'Mac OS X': 'Mac OS X',
      'Linux': 'Linux'
    };
    for (const os in osList) {
      if (userAgent.indexOf(os) !== -1) {
        return osList[os];
      }
    }
    return 'Unknown';
  };

  const getGeoLocation = async () => {
    const response = await axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=YOUR_IPGEOLOCATION_API_KEY&ip=${await getIPAddress()}`);
    return `${response.data.city}, ${response.data.region}, ${response.data.country_name}`;
  };

  return (
    // your component JSX here
  );
}
