var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('offline', this.onOffline, false);
        document.addEventListener('online', this.onOnline, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    onOffline: function() {
        app.receivedEvent('offline');
    },
    onOnline: function() {
        app.receivedEvent('online');
    },
    receivedEvent: function(id) {
		switch(id) {
		case 'deviceready':
			check_network();
			break;
		case 'offline':
			check_network();
			break;
		case 'online':
			check_network();
			break;
		}
    }
};
app.initialize();
function CloseApp() {
	if(navigator.app) {navigator.app.exitApp();} else if (navigator.device) {navigator.device.exitApp();}
}
function check_network() {
    var networkState = navigator.network.connection.type;
    var states = {};
    states[Connection.UNKNOWN]  = 'Inconnu';
    states[Connection.ETHERNET] = 'Ethernet';
    states[Connection.WIFI]     = 'WiFi';
    states[Connection.CELL_2G]  = '2G';
    states[Connection.CELL_3G]  = '3G';
    states[Connection.CELL_4G]  = '4G';
    states[Connection.NONE]     = 'Non connecté';
    document.getElementById('cnType').innerHTML = '<span class="'+states[networkState]=='Non connecté'?'rouge':'vert'+'">'+states[networkState]+'</span>';
}
function ShowProduits() {
	$.ajax({
		type: "POST",
		url: "http://www.candicar.eu/Prod/ajaxPhoneGap.php",
		data: "name=John&location=Boston",
		success: function(Ret) {
			$('#Produits').append(Ret);
		},
		error: function(Ret) {
			$('#Produits').append('Une erreur est survenue');
		}
	});	
}