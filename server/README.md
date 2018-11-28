# CheckForReservation
I was having trouble knowing when there was a reservation available at Septin. 

1) Apparently a very difficult French restaurant to get reservations to: https://module.lafourchette.com/en_GB/module/10889-d34ca#/54499/pdh

2.) Looked at the network requests and found that it was checking a "lafourchette" API. I tried looking for a developer API on their site. Didn't see any T&C regarding timeouts, cookie expirations etc.

3.) Hit that API every 5 minutes and if there is an available reservation, it will email me.
