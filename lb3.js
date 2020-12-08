jQuery('document').ready(function(){
function randomInteger(min, max) {	
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
	jQuery('button').on('click',function(){
		var first, second;
		first=jQuery('#fr').val();
		second=jQuery('#sc').val();
		first=parseInt(first);
		second=parseInt(second);
		jQuery('#tbl').html("");
			createTable('#tbl' , first , second);
	})
function createTable(parentt, f, s){
	if (s!=0&&s>f&&s!=NaN&f!=NaN){
	var table = document.createElement('table');
	var c=0;
	var b=true;
	for (var i = 0;i< 10; i++){
		var tr = document.createElement('tr');
		tr.backgroundColor="red";
		
			b = !b;
		
		for (var j = 0;j< 10; j++){
		var td = document.createElement('td');
		var rr;
		
		rr=randomInteger(f,s);
		if(b==true){
				if(c==1){
			jQuery(td).css( "backgroundColor", "#664111");
			jQuery(td).css( "color", "white");
			c=0;
		}
		else{
			jQuery(td).css( "backgroundColor", "#bf9662");
			jQuery(td).css( "color", "black");
			c=1;
		}
		}
		if(b==false){
				if(c==0){
			jQuery(td).css( "backgroundColor", "#664111");
			jQuery(td).css( "color", "white");
			c=1;
		}
		else{
			jQuery(td).css( "backgroundColor", "#bf9662");
			jQuery(td).css( "color", "black");
			c=0;
		}
		}
		td.innerHTML=rr;
		jQuery(tr).append(td)
		}
		jQuery(table).css( "border", "ridge" );
		jQuery(table).append(tr)
	}
	jQuery(parentt).append(table)
}}
});
