var feed = new Instafeed({
   accessToken: 'IGQVJVSTRlbVhTczJyMllyRTZAYem9TaDJUbExXS0cxbnhEdlNDa1dVWC1TY1BVa0tWeHhmWnRVR203OWdrUS1rSGNTZAjJQdnRFclFWTGVsaGN2SGxzeEtPOHEwMFk5OFJEd1EyWm9aalpaMHg4M19XNgZDZD',
   limit : 12,
   template : '<a href="{{link}}" target="_blank"><img title="{{caption}}" src="{{image}}" /></a>'
});
feed.run();