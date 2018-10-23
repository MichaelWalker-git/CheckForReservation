# CheckForReservation
I was having trouble knowing when there was a reservation available at Septin. 

1) Apparently a very difficult French restaurant to get reservations to: https://module.lafourchette.com/en_GB/module/10889-d34ca#/54499/pdh

2.) Looked at the network requests and found that it was checking a "lafourchette" API. I tried looking for a developer API on their site. Didn't see any T&C regarding timeouts, cookie expirations etc.

3.) Hit that API every 5 minutes and if there is an available reservation, it will email me.

Current Implementation:
<img width="1440" alt="screen shot 2018-10-22 at 8 25 18 pm" src="https://user-images.githubusercontent.com/11032490/47333702-c1a30880-d638-11e8-93b9-030fe189bf9c.png">

<img width="1085" alt="screen shot 2018-10-22 at 8 26 16 pm" src="https://user-images.githubusercontent.com/11032490/47333703-c23b9f00-d638-11e8-8800-df341266b05c.png">
