const BhimexchSettings = {
  title: "Bhimexch | India’s Most Trusted Online Cricket Betting Id Provider",
  favicon: "/favicon/favicon.ico",
  logo: "/logo/zetto-logo.png",
  logo1: "/logo/silver-reddyBook.png",
  SOCKET_URL: "https://socket.trovetown.co/",
  apiurl: 'https://api.10xbpexch.com/v1/',
  domainName: "Bhimexch",
  colors: {
    // "--primary": "rgb(0, 31, 63)",
    "--primary": "#D92513",
    "--secondary": "rgb(2, 255, 230)",
    "--white": "#fff",
    "--black": "#000",
    "--darkcolor": "#343435",
    "--darkred": "#8b0000",
    "--backgroundmain": "#dfe8e9",
    "--matchLagai": "#8DD9FF",
    "--matchKhai": "#FF94BC",
    "--result-color": "#355e3b",
    "--rule-bg": '#CCCCCC',
    "--sports-tab": '#266894',
    "--suspended-color": 'rgba(0,0,0,0.7)',
    "--blink-color": "#fdcf13",
    "--success-color": "#086f3f"
  },
  demoCredentials: {
    username: "demo",
    password: "1122",
    isClient: true,
    host: window.location.host,
  }
};

const SaffronExchSettings = {
  title: "SAFFRRONEXCH",
  favicon: "/favicon/favicon-32x32.png",
  logo: "/logo/safronlogo.png",
  SOCKET_URL: "https://socket.trovetown.co/",
  apiurl: "https://api.plx99.com/v1/",
  domainName: "SAFFRRONEXCH",
  colors: {
    "--primary": "#AE4600",
    "--secondary": "#B97242",
    "--matchLagai": "#72bbef",
    "--matchKhai": "#FAA9BA",
    "--result-color": "#355e3b",
    "--rule-bg": '#CCCCCC',
    "--sports-tab": '#266894',
    "--suspended-color": 'rgba(0,0,0,0.7)',
    "--blink-color": "#fdcf13",
    "--success-color": "#086f3f"
  },
  demoCredentials: {
    username: "Demo1",
    password: "1122",
    isClient: true,
    host: window.location.host,
  }


};


const domainSettings = {
  "bhimexch.com": BhimexchSettings,
  "safffronexchange.com": SaffronExchSettings,
  "localhost:3000": BhimexchSettings,

};


const currentDomain = window.location.host;
const settings = domainSettings[currentDomain] || domainSettings["localhost:3000"];
// Object.entries(settings).forEach(([key, value]) => {
//   if (key.startsWith("--")) {
//     document.documentElement.style.setProperty(key, value);
//   }
// });
export default settings;