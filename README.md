This addon will add twilio or patch it depending on your enviornment


In development/test/server builds you will get the following


```
<script type="text/javascript">
    var Twilio = {
        disconnectCallback: false,
        Device: {
            error: function() {},
            setup: function() {},
            connect: function() {},
            disconnect: function (callback) {
                if (callback) {
                    this.disconnectCallback = callback;
                } else {
                    this.disconnectCallback();
                }
            },
            disconnectAll: function() {}
        }
    };
</script>
```


In production you will get the real twilio client library


```
<script type="text/javascript" src="//static.twilio.com/libs/twiliojs/1.2/twilio.min.js"></script>
```
