"use strict";
(function() {
	var socket = io('192.168.254.167:8080');

	socket.on('disconnect', function() {
      		$('#content').html('');
   	});

	socket.on('connection-status', function(){

		$('#content').append("<div id='side-bar'></div>");
		$('#content').append("<div id='data'></div>");

		// ***** CHIPID
		$('#side-bar').append("<div class='menu' id='ci-header'></div>");
		$('#ci-header').append("<div class='header'>CHIPID</div>");
		$('#ci-header').append("<div class='addr'>0x00h</div>");
		// ***** PPATH
		$('#side-bar').append("<div class='menu' id='pp-header'></div>");
		$('#pp-header').append("<div class='header'>PPATH</div>");
		$('#pp-header').append("<div class='addr'>0x01h</div>");
		// ***** INT
		$('#side-bar').append("<div class='menu' id='int-header'></div>");
		$('#int-header').append("<div class='header'>INT</div>");
		$('#int-header').append("<div class='addr'>0x02h</div>");
		// ***** CHGCONFIG0
		$('#side-bar').append("<div class='menu' id='cc0-header'></div>");
		$('#cc0-header').append("<div class='header'>CHGCONFIG0</div>");
		$('#cc0-header').append("<div class='addr'>0x03h</div>");
		// ***** CHGCONFIG1
		$('#side-bar').append("<div class='menu' id='cc1-header'></div>");
		$('#cc1-header').append("<div class='header'>CHGCONFIG1</div>");
		$('#cc1-header').append("<div class='addr'>0x04h</div>");
		// ***** CHGCONFIG2
		$('#side-bar').append("<div class='menu' id='cc2-header'></div>");
		$('#cc2-header').append("<div class='header'>CHGCONFIG2</div>");
		$('#cc2-header').append("<div class='addr'>0x05h</div>");
		// ***** CHGCONFIG3
		$('#side-bar').append("<div class='menu' id='cc3-header'></div>");
		$('#cc3-header').append("<div class='header'>CHGCONFIG3</div>");
		$('#cc3-header').append("<div class='addr'>0x06h</div>");
		// ***** WLEDCTRL1
		$('#side-bar').append("<div class='menu' id='wl1-header'></div>");
		$('#wl1-header').append("<div class='header'>WLEDCTRL1</div>");
		$('#wl1-header').append("<div class='addr'>0x07h</div>");
		// ***** WLEDCTRL2
		$('#side-bar').append("<div class='menu' id='wl2-header'></div>");
		$('#wl2-header').append("<div class='header'>WLEDCTRL2</div>");
		$('#wl2-header').append("<div class='addr'>0x08h</div>");
		// ***** MUXCTRL
		$('#side-bar').append("<div class='menu' id='mxc-header'></div>");
		$('#mxc-header').append("<div class='header'>MUXCTRL</div>");
		$('#mxc-header').append("<div class='addr'>0x09h</div>");
		// ***** STATUS
		$('#side-bar').append("<div class='menu' id='sts-header'></div>");
		$('#sts-header').append("<div class='header'>STATUS</div>");
		$('#sts-header').append("<div class='addr'>0x0Ah</div>");
		// ***** PASSWORD
		$('#side-bar').append("<div class='menu' id='psw-header'></div>");
		$('#psw-header').append("<div class='header'>PASSWORD</div>");
		$('#psw-header').append("<div class='addr'>0x0Bh</div>");
		// ***** PGOOD
		$('#side-bar').append("<div class='menu' id='pgd-header'></div>");
		$('#pgd-header').append("<div class='header'>PGOOD</div>");
		$('#pgd-header').append("<div class='addr'>0x0Ch</div>");
		// ***** DEFPG
		$('#side-bar').append("<div class='menu' id='dpg-header'></div>");
		$('#dpg-header').append("<div class='header'>DEFPG</div>");
		$('#dpg-header').append("<div class='addr'>0x0Dh</div>");
		// ***** DEFDCDC1
		$('#side-bar').append("<div class='menu' id='dc1-header'></div>");
		$('#dc1-header').append("<div class='header'>DEFDCDC1</div>");
		$('#dc1-header').append("<div class='addr'>0x0Eh</div>");
		// ***** DEFDCDC2
		$('#side-bar').append("<div class='menu' id='dc2-header'></div>");
		$('#dc2-header').append("<div class='header'>DEFDCDC2</div>");
		$('#dc2-header').append("<div class='addr'>0x0Fh</div>");
		// ***** DEFDCDC3
		$('#side-bar').append("<div class='menu' id='dc3-header'></div>");
		$('#dc3-header').append("<div class='header'>DEFDCDC3</div>");
		$('#dc3-header').append("<div class='addr'>0x10h</div>");
		// ***** DEFSLEW
		$('#side-bar').append("<div class='menu' id='dfs-header'></div>");
		$('#dfs-header').append("<div class='header'>DEFSLEW</div>");
		$('#dfs-header').append("<div class='addr'>0x11h</div>");
		// ***** DEFLDO1
		$('#side-bar').append("<div class='menu' id='ld1-header'></div>");
		$('#ld1-header').append("<div class='header'>DEFLDO1</div>");
		$('#ld1-header').append("<div class='addr'>0x12h</div>");
		// ***** DEFLDO2
		$('#side-bar').append("<div class='menu' id='ld2-header'></div>");
		$('#ld2-header').append("<div class='header'>DEFLDO2</div>");
		$('#ld2-header').append("<div class='addr'>0x13h</div>");
		// ***** DEFLS1
		$('#side-bar').append("<div class='menu' id='ls1-header'></div>");
		$('#ls1-header').append("<div class='header'>DEFLS1</div>");
		$('#ls1-header').append("<div class='addr'>0x14h</div>");
		// ***** DEFLS2
		$('#side-bar').append("<div class='menu' id='ls2-header'></div>");
		$('#ls2-header').append("<div class='header'>DEFLS2</div>");
		$('#ls2-header').append("<div class='addr'>0x15h</div>");
		// ***** ENABLE
		$('#side-bar').append("<div class='menu' id='er-header'></div>");
		$('#er-header').append("<div class='header'>ENABLE</div>");
		$('#er-header').append("<div class='addr'>0x16h</div>");
		// ***** DEFUVLO
		$('#side-bar').append("<div class='menu' id='ucr-header'></div>");
		$('#ucr-header').append("<div class='header'>DEFUVLO</div>");
		$('#ucr-header').append("<div class='addr'>0x18h</div>");
		// ***** SEQ1
		$('#side-bar').append("<div class='menu' id='se1-header'></div>");
		$('#se1-header').append("<div class='header'>SEQ1</div>");
		$('#se1-header').append("<div class='addr'>0x19h</div>");
		// ***** SEQ2
		$('#side-bar').append("<div class='menu' id='se2-header'></div>");
		$('#se2-header').append("<div class='header'>SEQ2</div>");
		$('#se2-header').append("<div class='addr'>0x1Ah</div>");
		// ***** SEQ3
		$('#side-bar').append("<div class='menu' id='se3-header'></div>");
		$('#se3-header').append("<div class='header'>SEQ3</div>");
		$('#se3-header').append("<div class='addr'>0x1Bh</div>");
		// ***** SEQ4
		$('#side-bar').append("<div class='menu' id='se4-header'></div>");
		$('#se4-header').append("<div class='header'>SEQ4</div>");
		$('#se4-header').append("<div class='addr'>0x1Ch</div>");
		// ***** SEQ5
		$('#side-bar').append("<div class='menu' id='se5-header'></div>");
		$('#se5-header').append("<div class='header'>SEQ5</div>");
		$('#se5-header').append("<div class='addr'>0x1Dh</div>");
		// ***** SEQ6
		$('#side-bar').append("<div class='menu' id='se6-header'></div>");
		$('#se6-header').append("<div class='header'>SEQ6</div>");
		$('#se6-header').append("<div class='addr'>0x1Eh</div>");		

	});
	
	$('body').on('click', 'div.menu', function() {
    		var ele = $(this).find('.addr');
    		var addr = parseInt(ele.html().replace('h', ''), 16);

    		socket.emit('pmic-read', addr);
	});

	socket.on('pmic-register', function(obj){
		
		$('#data').html("<div class='info' id='tbl-hdr'></div>");
		$('#tbl-hdr').append("<div class='col-60-hdr'>Bit</div>");
		$('#tbl-hdr').append("<div class='col-80-hdr'>Field</div>");
		$('#tbl-hdr').append("<div class='col-100-hdr'>Binary</div>");
		$('#tbl-hdr').append("<div class='col-300-hdr'>Value</div>");

		var addr = parseInt(obj.address);
		var value = parseInt(obj.register, 16);
		
		var bits = {};
		value & (1 << 0) ? bits.bit0 = '1' : bits.bit0 = '0';
		value & (1 << 1) ? bits.bit1 = '1' : bits.bit1 = '0';
		value & (1 << 2) ? bits.bit2 = '1' : bits.bit2 = '0';
		value & (1 << 3) ? bits.bit3 = '1' : bits.bit3 = '0';
		value & (1 << 4) ? bits.bit4 = '1' : bits.bit4 = '0';
		value & (1 << 5) ? bits.bit5 = '1' : bits.bit5 = '0';
		value & (1 << 6) ? bits.bit6 = '1' : bits.bit6 = '0';
		value & (1 << 7) ? bits.bit7 = '1' : bits.bit7 = '0';

		var html = {};
		var data = {};

		data.voltage1 = {"000000" : "0.900V", "010000" : "1.300V", "100000" : "1.900V", "110000" : "2.700V",
			    	 "000001" : "0.925V", "010001" : "1.325V", "100001" : "1.950V", "110001" : "2.750V",
			    	 "000010" : "0.950V", "010010" : "1.350V", "100010" : "2.000V", "110010" : "2.800V",
			    	 "000011" : "0.975V", "010011" : "1.375V", "100011" : "2.050V", "110011" : "2.850V",
			    	 "000100" : "1.000V", "010100" : "1.400V", "100100" : "2.100V", "110100" : "2.900V",
			    	 "000101" : "1.025V", "010101" : "1.425V", "100101" : "2.150V", "110101" : "3.000V",
			    	 "000110" : "1.050V", "010110" : "1.450V", "100110" : "2.200V", "110110" : "3.100V",
			    	 "000111" : "1.075V", "010111" : "1.475V", "100111" : "2.250V", "110111" : "3.200V",
			    	 "001000" : "1.100V", "011000" : "1.500V", "101000" : "2.300V", "111000" : "3.300V",
			    	 "001001" : "1.125V", "011001" : "1.550V", "101001" : "2.350V", "111001" : "3.300V",
			    	 "001010" : "1.150V", "011010" : "1.600V", "101010" : "2.400V", "111010" : "3.300V",
			    	 "001011" : "1.175V", "011011" : "1.650V", "101011" : "2.450V", "111011" : "3.300V",
			    	 "001100" : "1.200V", "011100" : "1.700V", "101100" : "2.500V", "111100" : "3.300V",
			    	 "001101" : "1.225V", "011101" : "1.750V", "101101" : "2.550V", "111101" : "3.300V",
			    	 "001110" : "1.250V", "011110" : "1.800V", "101110" : "2.600V", "111110" : "3.300V",
			    	 "001111" : "1.275V", "011111" : "1.850V", "101111" : "2.650V", "111111" : "3.300V"};
		
		data.voltage2 = {"00000" : "1.50V", "10000" : "2.55V", "00001" : "1.55V", "10001" : "2.60V",
				 "00010" : "1.60V", "10010" : "2.65V", "00011" : "1.65V", "10011" : "2.70V",
				 "00100" : "1.70V", "10100" : "2.75V", "00101" : "1.75V", "10101" : "2.80V",
				 "00110" : "1.80V", "10110" : "2.85V", "00111" : "1.85V", "10111" : "2.90V",
				 "01000" : "1.90V", "11000" : "2.95V", "01001" : "2.00V", "11001" : "3.00V", 
				 "01010" : "2.10V", "11010" : "3.05V", "01011" : "2.20V", "11011" : "3.10V",
				 "01100" : "2.30V", "11100" : "3.15V", "01101" : "2.40V", "11101" : "3.20V",
				 "01110" : "2.45V", "11110" : "3.25V", "01111" : "2.50V", "11111" : "3.30V"};
		
		if(addr === 0){
			data.pmic 	= {"1110" : "TPS65217C"};
			html.bit 	= "7-4";
			html.field 	= "CHIP";
			html.binary 	= bits.bit7 + bits.bit6 + bits.bit5 + bits.bit4;
			html.value 	= data.pmic[html.binary];

			add_row('chipid' , html);
			
			data.rev 	= {"0010" : "Revision 1.2"};
			html.bit 	= "3-0";
			html.field 	= "REV";
			html.binary 	= bits.bit3 + bits.bit2 + bits.bit1 + bits.bit0;
			html.value 	= data.rev[html.binary];

			add_row('rev' , html);
		}
		if(addr === 1){
			data.acsink = {"0" : "AC sink enabled", "1" : "AC sink disabled"};
			html.bit 	= "7";
			html.field 	= "ACSINK";
			html.binary 	= bits.bit7;
			html.value 	= data.acsink[html.binary];

			add_row('acsink' , html);

			data.usbsink = {"0" : "USB sink enabled", "1" : "USB sink disabled"};
			html.bit 	= "6";
			html.field 	= "USBSINK";
			html.binary 	= bits.bit6;
			html.value 	= data.usbsink[html.binary];

			add_row('usbsink' , html);

			data.acen = {"0" : "AC power input is turned off", "1" : "AC power input is turned on"};
			html.bit 	= "5";
			html.field 	= "AC_EN";
			html.binary 	= bits.bit5;
			html.value 	= data.acen[html.binary];

			add_row('acen' , html);

			data.usben = {"0" : "USB power input is turned off (USB suspend mode)", "1" : "USB power input is turned on"};
			html.bit 	= "4";
			html.field 	= "USB_EN";
			html.binary 	= bits.bit4;
			html.value 	= data.usben[html.binary];

			add_row('usben' , html);

			data.iac = {"00" : "100 mA", "01" : "500 mA", "10" : "1300 mA", "11" : "2500 mA"};
			html.bit 	= "3-2";
			html.field 	= "IAC";
			html.binary 	= bits.bit3 + bits.bit2;
			html.value 	= "AC input current limit: " + data.iac[html.binary];

			add_row('iac' , html);

			data.iusb = {"00" : "100 mA", "01" : "500 mA", "10" : "1300 mA", "11" : "1800 mA"};
			html.bit 	= "1-0";
			html.field 	= "IUSB";
			html.binary 	= bits.bit1 + bits.bit0;
			html.value 	= "USB input current limit: " + data.iusb[html.binary];

			add_row('iusb' , html);
		}
		if(addr === 2){
			data.int7 	= {};
			html.bit 	= "7";
			html.field 	= "";
			html.binary 	= "";
			html.value 	= "Reserved";

			add_row('int7' , html);

			data.acm = {"0" : "interrupt is issued when power to AC input is applied or removed",
				    "1" : "no interrupt is issued when power to AC input is applied or removed"};
			html.bit 	= "6";
			html.field 	= "ACM";
			html.binary 	= bits.bit6;
			html.value 	= data.acm[html.binary];

			add_row('acm' , html);

			data.usbm = {"0" : "interrupt is issued when power to USB input is applied or removed",
				    "1" : "no interrupt is issued when power to USB input is applied or removed"};
			html.bit 	= "4";
			html.field 	= "USBM";
			html.binary 	= bits.bit4;
			html.value 	= data.usbm[html.binary];

			add_row('usbm' , html);

			data.res2 = {};
			html.bit 	= "3";
			html.field 	= "";
			html.binary 	= ""
			html.value 	= "Reserved"

			add_row('res2' , html);

			data.pbi 	= {"0" : "no change in status",
				    	   "1" : "pushbutton status change (PB_IN changed high to low or low to high)"};
			html.bit 	= "2";
			html.field 	= "PBI";
			html.binary 	= bits.bit2;
			html.value 	= data.pbi[html.binary];

			add_row('pbi' , html);

			data.aci 	= {"0" : "no change in status",
				    	   "1" : "AC power status change (power to AC pin has either been applied or removed)"};
			html.bit 	= "1";
			html.field 	= "ACI";
			html.binary 	= bits.bit1;
			html.value 	= data.aci[html.binary];

			add_row('aci' , html);

			data.usbi 	= {"0" : "no change in status",
				    	   "1" : "USB power status change (power to USB pin has either been applied or removed)"};
			html.bit 	= "0";
			html.field 	= "USBI";
			html.binary 	= bits.bit0;
			html.value 	= data.usbi[html.binary];

			add_row('usbi' , html);
		}
		if(addr === 3){
			data.treg 	= {"0" : "charger is in normal operation",
				    	   "1" : "charge current is reduced due to high chip temperature"};
			html.bit 	= "7";
			html.field 	= "TREG";
			html.binary 	= bits.bit7;
			html.value 	= data.treg[html.binary];

			add_row('treg' , html);

			data.dppm 	= {"0" : "DPPM loop is not active",
				    	   "1" : "DPPM loop is active; charge current is reduced to support the load with the current required"};
			html.bit 	= "6";
			html.field 	= "DPPM";
			html.binary 	= bits.bit6;
			html.value 	= data.dppm[html.binary];

			add_row('dppm' , html);

			data.tsusp 	= {"0" : "charging is allowed",
				    	   "1" : "charging is momentarily suspended because battery temperature is out of range"};
			html.bit 	= "5";
			html.field 	= "TSUSP";
			html.binary 	= bits.bit5;
			html.value 	= data.tsusp[html.binary];

			add_row('tsusp' , html);

			data.termi 	= {"0" : "charging, charge termination current threshold has not been crossed",
				    	   "1" : "charge termination current threshold has been crossed and charging has" +
				    	   " been stopped. This can be due to a battery reaching full capacity or to a battery"+
				    	   " removal condition"};
			html.bit 	= "4";
			html.field 	= "TERMI";
			html.binary 	= bits.bit4;
			html.value 	= data.termi[html.binary];

			add_row('termi' , html);

			data.active 	= {"0" : "charger is not charging",
				    	   "1" : "charger is charging (DPPM or thermal regulation may be active)"};
			html.bit 	= "3";
			html.field 	= "ACTIVE";
			html.binary 	= bits.bit3;
			html.value 	= data.active[html.binary];

			add_row('active' , html);

			data.chgtout 	= {"0" : "charging, timers did not time out",
				    	   "1" : "one of the timers has timed out and charging has been terminated"};
			html.bit 	= "2";
			html.field 	= "CHGTOUT";
			html.binary 	= bits.bit2;
			html.value 	= data.chgtout[html.binary];

			add_row('chgtout' , html);

			data.pchgtout 	= {"0" : "charging, pre-charge timer did not time out",
				    	   "1" : "pre-charge timer has timed out and charging has been terminated"};
			html.bit 	= "1";
			html.field 	= "PCGTOUT";
			html.binary 	= bits.bit1;
			html.value 	= data.pchgtout[html.binary];

			add_row('pchgtout' , html);

			data.battemp 	= {"0" : "battery temperature is in the allowed range for charging",
				    	   "1" : "no temperature sensor detected or battery temperature outside valid charging range"};
			html.bit 	= "0";
			html.field 	= "BATTEMP";
			html.binary 	= bits.bit0;
			html.value 	= data.battemp[html.binary];

			add_row('battemp' , html);
		}
		if(addr === 4){
			data.timer 	= {"00" : "4h", "01" : "5h", "10" : "6h", "11" : "8h"};
			html.bit 	= "7-6";
			html.field 	= "TIMER";
			html.binary 	= bits.bit7 + bits.bit6;
			html.value 	= "Charge safety timer setting: " + data.timer[html.binary];

			add_row('timer' , html);

			data.tmren 	= {"0" : "pre-charge timer and fast charge timer are disabled",
				    	   "1" : "pre-charge timer and fast charge time are enabled"};
			html.bit 	= "5";
			html.field 	= "TMR_EN";
			html.binary 	= bits.bit5;
			html.value 	= data.tmren[html.binary];

			add_row('tmren' , html);

			data.ntctype 	= {"0" : "100k (curve 1, B = 3960)", "1" : "10k (curve 2, B = 3480)"};
			html.bit 	= "4";
			html.field 	= "NTC_TYPE";
			html.binary 	= bits.bit4;
			html.value 	= data.ntctype[html.binary];

			add_row('ntctype' , html);

			data.reset 	= {"0" : "inactive",
					   "1" : "Reset active. This Bit must be set and then reset via the serial" +
					   " interface to restart the charge algorithm"};
			html.bit 	= "3";
			html.field 	= "RESET";
			html.binary 	= bits.bit3;
			html.value 	= data.reset[html.binary];

			add_row('reset' , html);

			data.term 	= {"0" : "charge termination enabled, based on timers and termination current",
					   "1" : "current-based charge termination will not occur and the charger will always be on"};
			html.bit 	= "2";
			html.field 	= "TERM";
			html.binary 	= bits.bit2;
			html.value 	= data.term[html.binary];

			add_row('term' , html);

			data.susp 	= {"0" : "Safety Timer and Pre-Charge timers are not suspended",
					   "1" : "Safety Timer and Pre-Charge timers are suspended"};
			html.bit 	= "1";
			html.field 	= "SUSP";
			html.binary 	= bits.bit1;
			html.value 	= data.susp[html.binary];

			add_row('susp' , html);

			data.chgen 	= {"0" : "charger is disabled",
					   "1" : "charger is enabled"};
			html.bit 	= "0";
			html.field 	= "CHG_EN";
			html.binary 	= bits.bit0;
			html.value 	= data.chgen[html.binary];

			add_row('chgen' , html);
		}
		if(addr === 5){
			data.dyntmr 	= {"0" : "safety timers run with their nominal clock speed",
					   "1" : "clock speed is divided by 2 if thermal loop or DPPM loop is active"};
			html.bit 	= "7";
			html.field 	= "DYNTMR";
			html.binary 	= bits.bit7;
			html.value 	= data.dyntmr[html.binary];

			add_row('dyntmr' , html);

			data.vprechg 	= {"0" : "pre-charge to fast charge transition voltage is 2.9V",
					   "1" : "pre-charge to fast charge transition voltage is 2.5V"};
			html.bit 	= "6";
			html.field 	= "VPRECHG";
			html.binary 	= bits.bit6;
			html.value 	= data.vprechg[html.binary];

			add_row('vprechg' , html);

			data.voreg 	= {"00" : "4.10V", "01" : "4.15V", "10" : "4.20V", "11" : "4.25V"};
			html.bit 	= "5-4";
			html.field 	= "VOREG";
			html.binary 	= bits.bit5 + bits.bit4;
			html.value 	= "Charge voltage selection: " + data.voreg[html.binary];

			add_row('voreg' , html);

			data.res1 	= {};
			html.bit 	= "3-0";
			html.field 	= "";
			html.binary 	= "";
			html.value 	= " Reserved";

			add_row('res1' , html);
		}
		if(addr === 6){
			data.ichrg 	= {"00" : "300mA", "01" : "400mA", "10" : "500mA", "11" : "700mA"};
			html.bit 	= "7-6";
			html.field 	= "ICHRG";
			html.binary 	= bits.bit7 + bits.bit6;
			html.value 	= "Charge current setting: " + data.ichrg[html.binary];

			add_row('ichrg' , html);

			data.dppmth 	= {"00" : "3.5V", "01" : "3.7V", "10" : "4.0V", "11" : "4.2V"};
			html.bit 	= "5-4";
			html.field 	= "DPMTH";
			html.binary 	= bits.bit5 + bits.bit4;
			html.value 	= "Power path DPPM threshold: " + data.dppmth[html.binary];

			add_row('dppmth' , html);

			data.pchrgt 	= {"0" : "30 min", "1" : "60 min"};
			html.bit 	= "3";
			html.field 	= "PCHRGT";
			html.binary 	= bits.bit3;
			html.value 	= "Pre-charge time: " + data.pchrgt[html.binary];

			add_row('pchrgt' , html);

			data.termif 	= {"00" : "2.5%", "01" : "7.5%", "10" : "15%", "11" : "18%"};
			html.bit 	= "2-1";
			html.field 	= "TERMIF";
			html.binary 	= bits.bit2 + bits.bit1;
			html.value 	= "Termination current factor: " + data.termif[html.binary];

			add_row('termif' , html);

			data.trange 	= {"0" : "0°C-45°C", "1" : "0°C-60°C"};
			html.bit 	= "0";
			html.field 	= "TRANGE";
			html.binary 	= bits.bit0;
			html.value 	= "Temperature range for charging: " + data.trange[html.binary];

			add_row('trange' , html);
		}
		if(addr === 7){
			data.res1 	= {};
			html.bit 	= "7-4";
			html.field 	= "";
			html.binary 	= "";
			html.value 	= "Reserved";

			add_row('res1' , html);

			data.isinken 	= {"0" : "current sink is disabled (OFF)", "1" : "current sink is enabled (ON)"};
			html.bit 	= "3";
			html.field 	= "ISINK_EN";
			html.binary 	= bits.bit3;
			html.value 	= data.isinken[html.binary];

			add_row('isinken' , html);

			data.isel 	= {"0" : " low-level (define by ISET1 pin)", "1" : "high-level (defined by ISET2 pin)"};
			html.bit 	= "2";
			html.field 	= "ISEL";
			html.binary 	= bits.bit2;
			html.value 	= data.isel[html.binary];

			add_row('isel' , html);

			data.fdim 	= {"00" : "100Hz", "01" : "200Hz", "10" : "500Hz", "11" : "1000Hz"};
			html.bit 	= "1-0";
			html.field 	= "FDIM";
			html.binary 	= bits.bit1 + bits.bit0;
			html.value 	= "PWM dimming frequency: " + data.fdim[html.binary];

			add_row('fdim' , html);
		}
		if(addr === 8){
			data.res1 	= {};
			html.bit 	= "7";
			html.field 	= "";
			html.binary 	= "";
			html.value 	= "Reserved";

			add_row('res1' , html);

			data.duty 	= {};
			html.bit 	= "6-0";
			html.field 	= "DUTY";
			html.binary 	= bits.bit6 + bits.bit5 + bits.bit4 + bits.bit3 + bits.bit2 + bits.bit1 + bits.bit0;
			var value 	= parseInt(html.binary, 2);
			html.value 	= "Duty cycle: " + (value + 1) + "%";

			add_row('duty' , html);
		}
		if(addr === 9){
			data.res1 	= {};
			html.bit 	= "7-3";
			html.field 	= "";
			html.binary 	= "";
			html.value 	= "Reserved";

			add_row('res1' , html);

			data.mux 	= {"000" : "MUX is disabled, output is HiZ", "001" : "VBAT", "010" : "VSYS", "011" : "VTS",
					   "100" : "VICHARGE", "101" : "MUX_IN (external input)", "110" : "MUX is disabled, output is HiZ",
					   "111" : "MUX is disabled, output is HiZ"};
			html.bit 	= "2-0";
			html.field 	= "MUX";
			html.binary 	= bits.bit2 + bits.bit1 + bits.bit0;
			html.value 	= "Analog multiplexer selection: " + data.mux[html.binary];

			add_row('mux' , html);
		}
		if(addr === 10){
			data.off 	= {};
			html.bit 	= "7";
			html.field 	= "OFF";
			html.binary 	= bits.bit7;
			html.value 	= "OFF bit. Set this bit to 1 to enter OFF state when PWR_EN pin is pulled low." +
					  "Bit is automatically reset to 0.";

			add_row('off' , html);

			data.res1 	= {};
			html.bit 	= "6-4";
			html.field 	= "";
			html.binary 	= "";
			html.value 	= "Reserved";

			add_row('res1' , html);

			data.acpwr 	= {"0" : "AC power is not present and/or not in the range valid for charging", 
					   "1" : "AC source is present and in the range valid for charging"};
			html.bit 	= "3";
			html.field 	= "ACPWR";
			html.binary 	= bits.bit3;
			html.value 	= data.acpwr[html.binary];

			add_row('acpwr' , html);

			data.usbpwr 	= {"0" : "USB power is not present and/or not in the range valid for charging", 
					   "1" : "USB source is present and in the range valid for charging"};
			html.bit 	= "2";
			html.field 	= "USBPWR";
			html.binary 	= bits.bit2;
			html.value 	= data.usbpwr[html.binary];

			add_row('usbpwr' , html);

			data.res2 	= {};
			html.bit 	= "1";
			html.field 	= "";
			html.binary 	= "";
			html.value 	= "Reserved";

			add_row('res2' , html);

			data.pb 	= {"0" : "Push Button is inactive (PB_IN is pulled high)", 
					   "1" : "Push Button is active (PB_IN is pulled low)"};
			html.bit 	= "0";
			html.field 	= "PB";
			html.binary 	= bits.bit0;
			html.value 	= data.pb[html.binary];

			add_row('pb' , html);
		}
		if(addr === 11){
			data.pwrd 	= {"00000000" : "Password protected registers are locked for write access",
					   "01111100" : "Password protected registers are locked for write access",
					   "01111101" : "Allows writing to a password protected register in the next write cycle",
					   "01111110" : "Password protected registers are locked for write access",
					   "11111111" : "Password protected registers are locked for write access"};
			html.bit 	= "7-0";
			html.field 	= "PWRD";
			html.binary 	= bits.bit7 + bits.bit6 + bits.bit5 + bits.bit4 + bits.bit3 + bits.bit2 + bits.bit1 + bits.bit0;
			html.value 	= data.pwrd[html.binary];;

			add_row('pwrd' , html);
		}
		if(addr === 12){
			data.res1 	= {};
			html.bit 	= "7";
			html.field 	= "";
			html.binary 	= "";
			html.value 	= "Reserved";

			add_row('res1' , html);

			data.ldo3pg 	= {"0" : "LDO is either disabled or not in regulation)", 
					   "1" : "LDO is in regulation or LS1/LDO3 is configured as switch"};
			html.bit 	= "6";
			html.field 	= "LDO3_PG";
			html.binary 	= bits.bit6;
			html.value 	= data.ldo3pg[html.binary];

			add_row('ldo3pg' , html);

			data.ldo4pg 	= {"0" : "LDO is either disabled or not in regulation)", 
					   "1" : "LDO is in regulation or LS2/LDO4 is configured as switch"};
			html.bit 	= "5";
			html.field 	= "LDO4_PG";
			html.binary 	= bits.bit5;
			html.value 	= data.ldo4pg[html.binary];

			add_row('ldo4pg' , html);

			data.dc1pg 	= {"0" : "DCDC is either disabled or not in regulation)", 
					   "1" : "DCDC is in regulation"};
			html.bit 	= "4";
			html.field 	= "DC1_PG";
			html.binary 	= bits.bit4;
			html.value 	= data.dc1pg[html.binary];

			add_row('dc1pg' , html);

			data.dc2pg 	= {"0" : "DCDC is either disabled or not in regulation)", 
					   "1" : "DCDC is in regulation"};
			html.bit 	= "3";
			html.field 	= "DC2_PG";
			html.binary 	= bits.bit3;
			html.value 	= data.dc2pg[html.binary];

			add_row('dc2pg' , html);

			data.dc3pg 	= {"0" : "DCDC is either disabled or not in regulation)", 
					   "1" : "DCDC is in regulation"};
			html.bit 	= "2";
			html.field 	= "DC3_PG";
			html.binary 	= bits.bit2;
			html.value 	= data.dc3pg[html.binary];

			add_row('dc3pg' , html);

			data.ldo1pg 	= {"0" : "LDO is either disabled or not in regulation)", 
					   "1" : "LDO is in regulation"};
			html.bit 	= "1";
			html.field 	= "LDO1_PG";
			html.binary 	= bits.bit1;
			html.value 	= data.ldo1pg[html.binary];

			add_row('ldo1pg' , html);

			data.ldo2pg 	= {"0" : "LDO is either disabled or not in regulation)", 
					   "1" : "LDO is in regulation"};
			html.bit 	= "0";
			html.field 	= "LDO2_PG";
			html.binary 	= bits.bit0;
			html.value 	= data.ldo2pg[html.binary];

			add_row('ldo2pg' , html);
		}
		if(addr === 13){
			data.res1 	= {};
			html.bit 	= "7-4";
			html.field 	= "";
			html.binary 	= "";
			html.value 	= "Reserved";

			add_row('res1' , html);

			data.ldo1pgm 	= {"0" : "PGOOD pin is pulled low if LDO1_PG is low", 
					   "1" : "LDO1_PG status does not affect the status of the PGOOD output pin"};
			html.bit 	= "3";
			html.field 	= "LDO1PGM";
			html.binary 	= bits.bit3;
			html.value 	= data.ldo1pgm[html.binary];

			add_row('ldo1pgm' , html);

			data.ldo2pgm 	= {"0" : "PGOOD pin is pulled low if LDO2_PG is low", 
					   "1" : "LDO2_PG status does not affect the status of the PGOOD output pin"};
			html.bit 	= "2";
			html.field 	= "LDO2PGM";
			html.binary 	= bits.bit2;
			html.value 	= data.ldo2pgm[html.binary];

			add_row('ldo2pgm' , html);

			data.pgdly 	= {"00" : "20ms", "01" : "100ms", "10" : "200ms", "11" : "400ms"};
			html.bit 	= "1-0";
			html.field 	= "PGDLY";
			html.binary 	= bits.bit1 + bits.bit0;
			html.value 	= "Power Good delay: " + data.pgdly[html.binary];

			add_row('pgdly' , html);
		}
		if(addr === 14){
			data.xadj1 	= {"0" : "Output voltage is adjusted through register setting", 
					   "1" : "Output voltage is externally adjusted"};
			html.bit 	= "7";
			html.field 	= "XADJ1";
			html.binary 	= bits.bit7;
			html.value 	= data.xadj1[html.binary];

			add_row('xadj1' , html);

			data.res1 	= {};
			html.bit 	= "6";
			html.field 	= "";
			html.binary 	= "";
			html.value 	= "Reserved";

			add_row('res1' , html);

			data.dcdc1 	= {};
			html.bit 	= "5-0";
			html.field 	= "DCDC1";
			html.binary 	= bits.bit5 + bits.bit4 + bits.bit3 + bits.bit2 + bits.bit1 + bits.bit0;
			html.value 	= "DCDC1 output voltage setting: " + data.voltage1[html.binary];

			add_row('dcdc1' , html);
		}
		if(addr === 15){
			data.xadj2 	= {"0" : "Output voltage is adjusted through register setting", 
					   "1" : "Output voltage is externally adjusted"};
			html.bit 	= "7";
			html.field 	= "XADJ2";
			html.binary 	= bits.bit7;
			html.value 	= data.xadj2[html.binary];

			add_row('xadj2' , html);

			data.res1 	= {};
			html.bit 	= "6";
			html.field 	= "";
			html.binary 	= "";
			html.value 	= "Reserved";

			add_row('res1' , html);

			data.dcdc2 	= {};
			html.bit 	= "5-0";
			html.field 	= "DCDC2";
			html.binary 	= bits.bit5 + bits.bit4 + bits.bit3 + bits.bit2 + bits.bit1 + bits.bit0;
			html.value 	= "DCDC2 output voltage setting: " + data.voltage1[html.binary];

			add_row('dcdc2' , html);
		}
		if(addr === 16){
			data.xadj3 	= {"0" : "Output voltage is adjusted through register setting", 
					   "1" : "Output voltage is externally adjusted"};
			html.bit 	= "7";
			html.field 	= "XADJ3";
			html.binary 	= bits.bit7;
			html.value 	= data.xadj3[html.binary];

			add_row('xadj3' , html);

			data.res1 	= {};
			html.bit 	= "6";
			html.field 	= "";
			html.binary 	= "";
			html.value 	= "Reserved";

			add_row('res1' , html);

			data.dcdc3 	= {};
			html.bit 	= "5-0";
			html.field 	= "DCDC3";
			html.binary 	= bits.bit5 + bits.bit4 + bits.bit3 + bits.bit2 + bits.bit1 + bits.bit0;
			html.value 	= "DCDC3 output voltage setting: " + data.voltage1[html.binary];

			add_row('dcdc3' , html);
		}
		if(addr === 17){
			data.go 	= {"0" : "no change", 
					   "1" : "Initiates the transition from present state to the output "+
					   "voltage setting currently stored in DEFDCDCx register"};
			html.bit 	= "7";
			html.field 	= "GO";
			html.binary 	= bits.bit7;
			html.value 	= data.go[html.binary];

			add_row('go' , html);

			data.godsbl 	= {"0" : "enabled", 
					   "1" : "disabled; DCDCx output voltage changes whenever set-point" + 
					   "is updated in DEFDCDCx register without having to write to the" +
					   "GO bit. SLEW[2:0] setting does apply"};
			html.bit 	= "6";
			html.field 	= "GODSBL";
			html.binary 	= bits.bit6;
			html.value 	= data.godsbl[html.binary];

			add_row('godsbl' , html);

			data.pfmen1 	= {"0" : "DCDC converter operates in PWM / PFM mode, depending on load", 
					   "1" : "DCDC converter is forced into fixed frequency PWM mode"};
			html.bit 	= "5";
			html.field 	= "PFM_EN1";
			html.binary 	= bits.bit5;
			html.value 	= data.pfmen1[html.binary];

			add_row('pfmen1' , html);

			data.pfmen2 	= {"0" : "DCDC converter operates in PWM / PFM mode, depending on load", 
					   "1" : "DCDC converter is forced into fixed frequency PWM mode"};
			html.bit 	= "4";
			html.field 	= "PFM_EN2";
			html.binary 	= bits.bit4;
			html.value 	= data.pfmen2[html.binary];

			add_row('pfmen2' , html);

			data.pfmen3 	= {"0" : "DCDC converter operates in PWM / PFM mode, depending on load", 
					   "1" : "DCDC converter is forced into fixed frequency PWM mode"};
			html.bit 	= "3";
			html.field 	= "PFM_EN3";
			html.binary 	= bits.bit3;
			html.value 	= data.pfmen3[html.binary];

			add_row('pfmen3' , html);

			data.slew 	= {"000" : "224 µs/step (0.11 mV/µs at 25 mV per step)", 
				           "001" : "112 µs/step (0.22 mV/µs at 25 mV per step)",
				           "010" : "56 µs/step (0.45 mV/µs at 25 mV per step)",
				           "011" : "28 µs/step (0.90 mV/µs at 25 mV per step)",
				           "100" : "14 µs/step (1.80 mV/µs at 25 mV per step)",
				           "101" : "7 µs/step (3.60 mV/µs at 25 mV per step)",
				           "110" : "3.5 µs/step (7.2 mV/µs at 25 mV per step)",
				           "111" : "Immediate; Slew rate is only limited by control loop"};
			html.bit 	= "2-0";
			html.field 	= "SLEW";
			html.binary 	= bits.bit2 + bits.bit1 + bits.bit0;
			html.value 	= data.slew[html.binary];

			add_row('slew' , html);
		}
		if(addr === 18){
			data.res1 	= {};
			html.bit 	= "7-4";
			html.field 	= "";
			html.binary 	= "";
			html.value 	= "Reserved";

			add_row('res1' , html);

			data.ldo1 	= {"0000" : "1.00V", "1000" : "1.60V", "0001" : "1.10V", "1001" : "1.80V",
					   "0010" : "1.20V", "1010" : "2.50V", "0011" : "1.25V", "1011" : "2.75V",
					   "0100" : "1.30V", "1100" : "2.80V", "0101" : "1.35V", "1101" : "3.00V",
					   "0110" : "1.40V", "1110" : "3.10V", "0111" : "1.50V", "1111" : "3.30V"};
			html.bit 	= "3-0";
			html.field 	= "LDO1";
			html.binary 	= bits.bit3 + bits.bit2 + bits.bit1 + bits.bit0;
			html.value 	= "LDO1 output voltage setting: " + data.ldo1[html.binary];

			add_row('ldo1' , html);

		}
		if(addr === 19){
			data.res1 	= {};
			html.bit 	= "7";
			html.field 	= "";
			html.binary 	= "";
			html.value 	= "Reserved";

			add_row('res1' , html);

			data.track 	= {"0" : "Output voltage is defined by LDO2[5:0] bits",
					   "1" : "Output voltage follows DCDC3 voltage setting (DEFDCDC3 register)"};
			html.bit 	= "6";
			html.field 	= "TRACK";
			html.binary 	= bits.bit6;
			html.value 	= data.track[html.binary];

			add_row('track' , html);

			data.ldo2 	= {};
			html.bit 	= "5-0";
			html.field 	= "LDO2";
			html.binary 	= bits.bit5 + bits.bit4 + bits.bit3 + bits.bit2 + bits.bit2 + bits.bit0;
			html.value 	= "LDO2 output voltage setting: " + data.voltage1[html.binary];

			add_row('ldo2' , html);
		}
		if(addr === 20){
			data.res1 	= {};
			html.bit 	= "7-6";
			html.field 	= "";
			html.binary 	= "";
			html.value 	= "Reserved";

			add_row('res1' , html);

			data.ls1ldo3 	= {"0" : "FET functions as load switch (LS1)",
					   "1" : "FET is configured as LDO3"};
			html.bit 	= "5";
			html.field 	= "LS1LDO3";
			html.binary 	= bits.bit5;
			html.value 	= data.ls1ldo3[html.binary];

			add_row('ls1ldo3' , html);

			data.ldo3 	= "";
			html.bit 	= "4-0";
			html.field 	= "LDO3";
			html.binary 	= bits.bit4 + bits.bit3 + bits.bit2 + bits.bit2 + bits.bit0;
			html.value 	= "LDO3 output voltage setting: " + data.voltage2[html.binary];

			add_row('ldo3' , html);
		}
		if(addr === 21){
			data.res1 	= {};
			html.bit 	= "7-6";
			html.field 	= "";
			html.binary 	= "";
			html.value 	= "Reserved";

			add_row('res1' , html);

			data.ls2ldo4 	= {"0" : "FET functions as load switch (LS2)",
					   "1" : "FET is configured as LDO4"};
			html.bit 	= "5";
			html.field 	= "LS2LDO4";
			html.binary 	= bits.bit5;
			html.value 	= data.ls2ldo4[html.binary];

			add_row('ls2ldo4' , html);

			data.ldo4 	= "";
			html.bit 	= "4-0";
			html.field 	= "LDO4";
			html.binary 	= bits.bit4 + bits.bit3 + bits.bit2 + bits.bit2 + bits.bit0;
			html.value 	= "LDO4 output voltage setting: " + data.voltage2[html.binary];

			add_row('ldo4' , html);
		}
		if(addr === 22){
			data.res1 	= {};
			html.bit 	= "7";
			html.field 	= "";
			html.binary 	= "";
			html.value 	= "Reserved";

			add_row('res1' , html);

			data.ls1en 	= {"0" : "disabled", "1" : "enabled"};
			html.bit 	= "6";
			html.field 	= "LS1_EN";
			html.binary 	= bits.bit6;
			html.value 	= "Load Switch1/LDO3 enable bit: " + data.ls1en[html.binary];

			add_row('ls1en' , html);

			data.ls2en 	= {"0" : "disabled", "1" : "enabled"};
			html.bit 	= "5";
			html.field 	= "LS2_EN";
			html.binary 	= bits.bit5;
			html.value 	= "Load Switch2/LDO4 enable bit: " + data.ls2en[html.binary];

			add_row('ls2en' , html);

			data.dc1en 	= {"0" : "disabled", "1" : "enabled"};
			html.bit 	= "4";
			html.field 	= "DC1_EN";
			html.binary 	= bits.bit4;
			html.value 	= "DCDC1 enable bit: " + data.dc1en[html.binary];

			add_row('dc1en' , html);

			data.dc2en 	= {"0" : "disabled", "1" : "enabled"};
			html.bit 	= "3";
			html.field 	= "DC2_EN";
			html.binary 	= bits.bit3;
			html.value 	= "DCDC2 enable bit: " + data.dc2en[html.binary];

			add_row('dc2en' , html);

			data.dc3en 	= {"0" : "disabled", "1" : "enabled"};
			html.bit 	= "2";
			html.field 	= "DC3_EN";
			html.binary 	= bits.bit2;
			html.value 	= "DCDC3 enable bit: " + data.dc3en[html.binary];

			add_row('dc3en' , html);

			data.ldo1en 	= {"0" : "disabled", "1" : "enabled"};
			html.bit 	= "1";
			html.field 	= "LDO1_EN";
			html.binary 	= bits.bit1;
			html.value 	= "LDO1 enable bit: " + data.ldo1en[html.binary];

			add_row('ldo1en' , html);

			data.ldo2en 	= {"0" : "disabled", "1" : "enabled"};
			html.bit 	= "0";
			html.field 	= "LDO2_EN";
			html.binary 	= bits.bit0;
			html.value 	= "LDO2 enable bit: " + data.ldo2en[html.binary];

			add_row('ldo2en' , html);
		}
		if(addr === 24){
			data.res1 	= {};
			html.bit 	= "7-2";
			html.field 	= "";
			html.binary 	= "";
			html.value 	= "Reserved";

			add_row('res1' , html);

			data.uvlo 	= {"00" : "2.73V", "01" : "2.89V", "10" : "3.18V", "11" : "3.30V"};
			html.bit 	= "1-0";
			html.field 	= "UVLO";
			html.binary 	= bits.bit1 + bits.bit0;
			html.value 	= "Under Voltage Lock Out setting: " + data.uvlo[html.binary];

			add_row('uvlo' , html);
		}
		if(addr === 25){
			data.dc1seq 	= {"0000" : "rail is not controlled by sequencer",
					   "0001" : "enable at STROBE1", "0010" : "enable at STROBE2",
					   "0011" : "enable at STROBE3", "0100" : "enable at STROBE4",
					   "0101" : "enable at STROBE5", "0110" : "enable at STROBE6",
					   "0111" : "enable at STROBE7"};
			html.bit 	= "7-4";
			html.field 	= "DC1_SEQ";
			html.binary 	= bits.bit7 + bits.bit6 +bits.bit5 + bits.bit4;
			html.value 	= data.dc1seq[html.binary];

			add_row('dc1seq' , html);

			data.dc2seq 	= {"0000" : "rail is not controlled by sequencer",
					   "0001" : "enable at STROBE1", "0010" : "enable at STROBE2",
					   "0011" : "enable at STROBE3", "0100" : "enable at STROBE4",
					   "0101" : "enable at STROBE5", "0110" : "enable at STROBE6",
					   "0111" : "enable at STROBE7"};
			html.bit 	= "3-0";
			html.field 	= "DC2_SEQ";
			html.binary 	= bits.bit3 + bits.bit2 +bits.bit1 + bits.bit0;
			html.value 	= data.dc2seq[html.binary];

			add_row('dc2seq' , html);
		}
		if(addr === 26){
			data.dc3seq 	= {"0000" : "rail is not controlled by sequencer",
					   "0001" : "enable at STROBE1", "0010" : "enable at STROBE2",
					   "0011" : "enable at STROBE3", "0100" : "enable at STROBE4",
					   "0101" : "enable at STROBE5", "0110" : "enable at STROBE6",
					   "0111" : "enable at STROBE7"};
			html.bit 	= "7-4";
			html.field 	= "DC3_SEQ";
			html.binary 	= bits.bit7 + bits.bit6 +bits.bit5 + bits.bit4;
			html.value 	= data.dc3seq[html.binary];

			add_row('dc3seq' , html);

			data.ldo1seq 	= {"0000" : "rail is not controlled by sequencer",
					   "0001" : "enable at STROBE1", "0010" : "enable at STROBE2",
					   "0011" : "enable at STROBE3", "0100" : "enable at STROBE4",
					   "0101" : "enable at STROBE5", "0110" : "enable at STROBE6",
					   "0111" : "enable at STROBE7", "1110" : "enable at STROBE14",
					   "1111" : "enabled at STROBE15 (with SYS)"};
			html.bit 	= "3-0";
			html.field 	= "LDO1_SEQ";
			html.binary 	= bits.bit3 + bits.bit2 +bits.bit1 + bits.bit0;
			html.value 	= data.ldo1seq[html.binary];

			add_row('ldo1seq' , html);
		}
		if(addr === 27){
			data.ldo2seq 	= {"0000" : "rail is not controlled by sequencer",
					   "0001" : "enable at STROBE1", "0010" : "enable at STROBE2",
					   "0011" : "enable at STROBE3", "0100" : "enable at STROBE4",
					   "0101" : "enable at STROBE5", "0110" : "enable at STROBE6",
					   "0111" : "enable at STROBE7", "1110" : "enable at STROBE14",
					   "1111" : "enabled at STROBE15 (with SYS)"};
			html.bit 	= "7-4";
			html.field 	= "LDO2_SEQ";
			html.binary 	= bits.bit7 + bits.bit6 +bits.bit5 + bits.bit4;
			html.value 	= data.ldo2seq[html.binary];

			add_row('ldo2seq' , html);

			data.ldo3seq 	= {"0000" : "rail is not controlled by sequencer",
					   "0001" : "enable at STROBE1", "0010" : "enable at STROBE2",
					   "0011" : "enable at STROBE3", "0100" : "enable at STROBE4",
					   "0101" : "enable at STROBE5", "0110" : "enable at STROBE6",
					   "0111" : "enable at STROBE7"};
			html.bit 	= "3-0";
			html.field 	= "LDO3_SEQ";
			html.binary 	= bits.bit3 + bits.bit2 +bits.bit1 + bits.bit0;
			html.value 	= data.ldo3seq[html.binary];

			add_row('ldo3seq' , html);
		}
		if(addr === 28){
			data.ldo4seq 	= {"0000" : "rail is not controlled by sequencer",
					   "0001" : "enable at STROBE1", "0010" : "enable at STROBE2",
					   "0011" : "enable at STROBE3", "0100" : "enable at STROBE4",
					   "0101" : "enable at STROBE5", "0110" : "enable at STROBE6",
					   "0111" : "enable at STROBE7"};
			html.bit 	= "7-4";
			html.field 	= "LDO4_SEQ";
			html.binary 	= bits.bit7 + bits.bit6 +bits.bit5 + bits.bit4;
			html.value 	= data.ldo4seq[html.binary];

			add_row('ldo4seq' , html);

			data.res1 	= {};
			html.bit 	= "3-0";
			html.field 	= "";
			html.binary 	= "";
			html.value 	= "Reserved";

			add_row('res1' , html);
		}
		if(addr === 29){
			data.dly1 	= {"00" : "1ms", "01" : "2ms", "10" : "5ms", "11" : "10ms"};
			html.bit 	= "7-6";
			html.field 	= "DLY1";
			html.binary 	= bits.bit7 + bits.bit6;
			html.value 	= "Delay1 time: " + data.dly1[html.binary];

			add_row('dly1' , html);

			data.dly2 	= {"00" : "1ms", "01" : "2ms", "10" : "5ms", "11" : "10ms"};
			html.bit 	= "5-4";
			html.field 	= "DLY2";
			html.binary 	= bits.bit5 + bits.bit4;
			html.value 	= "Delay2 time: " + data.dly2[html.binary];

			add_row('dly2' , html);

			data.dly3 	= {"00" : "1ms", "01" : "2ms", "10" : "5ms", "11" : "10ms"};
			html.bit 	= "3-2";
			html.field 	= "DLY3";
			html.binary 	= bits.bit3 + bits.bit2;
			html.value 	= "Delay3 time: " + data.dly3[html.binary];

			add_row('dly3' , html);

			data.dly4 	= {"00" : "1ms", "01" : "2ms", "10" : "5ms", "11" : "10ms"};
			html.bit 	= "1-0";
			html.field 	= "DLY4";
			html.binary 	= bits.bit1 + bits.bit0;
			html.value 	= "Delay4 time: " + data.dly4[html.binary];

			add_row('dly4' , html);
		}
		if(addr === 30){
			data.dly5 	= {"00" : "1ms", "01" : "2ms", "10" : "5ms", "11" : "10ms"};
			html.bit 	= "7-6";
			html.field 	= "DLY5";
			html.binary 	= bits.bit7 + bits.bit6;
			html.value 	= "Delay5 time: " + data.dly5[html.binary];

			add_row('dly5' , html);

			data.dly6 	= {"00" : "1ms", "01" : "2ms", "10" : "5ms", "11" : "10ms"};
			html.bit 	= "5-4";
			html.field 	= "DLY6";
			html.binary 	= bits.bit5 + bits.bit4;
			html.value 	= "Delay6 time: " + data.dly6[html.binary];

			add_row('dly6' , html);

			data.res1 	= {};
			html.bit 	= "3";
			html.field 	= "";
			html.binary 	= "";
			html.value 	= "Reserved";

			add_row('res1' , html);

			data.sequp 	= {};
			html.bit 	= "2";
			html.field 	= "SEQUP";
			html.binary 	= bits.bit2;
			html.value 	= "Set this bit to 1 to trigger a power-up sequence. Bit is automatically reset to 0";

			add_row('sequp' , html);

			data.seqdown 	= {};
			html.bit 	= "1";
			html.field 	= "SEQDOWN";
			html.binary 	= bits.bit2;
			html.value 	= "Set this bit to 1 to trigger a power-down sequence. Bit is automatically reset to 0";

			add_row('seqdown' , html);

			data.instdwn 	= {"0" : "shut-down follows reverse power-up sequence",
					   "1" : "all delays are bypassed and all rails are shut-down"};
			html.bit 	= "0";
			html.field 	= "INSTDWN";
			html.binary 	= bits.bit0;
			html.value 	= data.instdwn[html.binary];

			add_row('instdwn' , html);
		}	
	});

	function add_row(id , html){
		$('#data').append("<div class='info'" + "id='" + id + "'></div>");
		$('#' + id).append("<div class='col-60'>" + html.bit + "</div>");
		$('#' + id).append("<div class='col-80'>" + html.field + "</div>");
		$('#' + id).append("<div class='col-100'>" + html.binary + "</div>");
		$('#' + id).append("<div class='col-300'>" + html.value + "</div>");
	}

	function pad(num, size) {
    		var s = num+"";
    		while (s.length < size) s = "0" + s;
    		return s;
	}

})();