
(async () => {

        const date = new Date();
        function getTimeHHMMSS() {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            return `${hours}${minutes}${seconds}`;
        }
        const time = getTimeHHMMSS();
        
        var archive = "https://archive.is/";
        var dateFormat = date.getFullYear().toString()
        +((date.getMonth()<10)? "0"+(date.getMonth()+1).toString() : (date.getMonth()+1).toString())
        +((date.getDate()<10)? "0"+(date.getDate()+1).toString() : (date.getDate()+1).toString())+time+"/"
            
            chrome.tabs.query({
                'active': true,
                'windowId': chrome.windows.WINDOW_ID_CURRENT
            }, function (tabs) {
                chrome.tabs.create({
                    url: archive+dateFormat + tabs[0].url
                });
            });

  
  })();

