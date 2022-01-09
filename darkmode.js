function darkmode_init()
{
	let darkmodeSwitch = document.querySelector('.darkmodetrigger');
	
	let darkmodeCookie = {
		set:function(key,value,time,path,secure=false)
		{
			let expires = new Date();
			expires.setTime(expires.getTime() + time);
			var path   = (typeof path !== 'undefined') ? pathValue = 'path=' + path + ';' : '';
			var secure = (secure) ? ';secure' : '';
			
			document.cookie = key + '=' + value + ';' + path + 'expires=' + expires.toUTCString() + secure;
		},
		get:function()
		{
			let keyValue = document.cookie.match('(^|;) ?darkmodetrigger=([^;]*)(;|$)');
			return keyValue ? keyValue[2] : null;
		},
		remove:function()
		{
			document.cookie = 'darkmodetrigger=; Max-Age=0; path=/';
		}
	};
	
	
	if(darkmodeCookie.get() == 'true')
	{
		darkmodeSwitch.classList.add('active');
		document.body.classList.add('darkmodetrigger');
	}
	
	
	darkmodeSwitch.addEventListener('click', (event) => {
		event.preventDefault();
		event.target.classList.toggle('active');
		document.body.classList.toggle('darkmodetrigger');
		
		if(document.body.classList.contains('darkmodetrigger'))
		{
			darkmodeCookie.set('darkmodetrigger','true',2628000000,'/',false);
		}
		else
		{
			darkmodeCookie.remove();
		}
	});
}
