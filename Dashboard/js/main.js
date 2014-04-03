


$(document).ready(function() {

	$('#createAd').click(loadCreateAd);
	$('#dashboard').click(loadDashboard);
	$('#manageAd').click(loadManageAd);


	$('#maincontent').load('ui/dashboard.html', function(){

	});



});

loadDashboard = function() {
	$('#maincontent').load('ui/dashboard.html');
}

loadManageAd = function() {
	$('#maincontent').load('ui/manage-ad.html');
}

loadCreateAd = function() {
	$('li.active').removeClass('active', function(){
		$('#createAd').parent('li').addClass('active');
	});
	$('#maincontent').load('ui/create-ad.html');
} 