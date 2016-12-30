function determineTimeLeft()
{
		var today = new Date();
		var competitionDate = new Date("02/11/2017");
		var time = competitionDate - today;
		
		if (time <= 0)
		{
			// gold = #CFB53B
			document.getElementById("timeLeft").innerHTML = "000" + " : " + "00" + " : " + "00" + " : " + "00";
			return;
		}

		var days = Math.floor(time/(1000*60*60*24));
		var remainder1 = time%(1000*60*60*24);
		var hours = Math.floor(remainder1/(1000*60*60));
		var remainder2 = remainder1%(1000*60*60);
		var minutes = Math.floor(remainder2/(1000*60));
		var remainder3 = remainder2%(1000*60);
		var seconds = Math.floor(remainder3/(1000));
		
		if (days < 100)
		{
			days = "0" + days;
		}
		else if (days < 10)
		{
			days = "00" + days;
		}
		
		if (hours < 10)
		{
			hours = "0" + hours;
		}
		
		if (minutes < 10)
		{
			minutes = "0" + minutes;
		}
		
		if (seconds < 10)
		{
			seconds = "0" + seconds;
		}

		document.getElementById("timeLeft").innerHTML = days + " : " + hours + " : " + minutes + " : " + seconds;
}
setInterval(determineTimeLeft, 1000);

