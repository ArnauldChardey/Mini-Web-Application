
$(document).ready(function() {
   // Votre code ici avec les appels à la fonction $()
   
   
   $("#myForm").submit(function(){ 
	   //  $("#myForm").submit(function(){  $("#submit").click(function(){
	    var firstname = $("myName").val();
	   // var firstname = document.getElementById("firstname").value
	   var lastname = $("mylastmane").val();
	   var lastcheck = $("lastcheck").val();
	   var age = $("myage").val();
	   
	  
	   
	   localStorage.tblData="hello";
	   
	   var tblrow = "<tr><td>" +firstname+ "</td><td>"
				 +lastname+"</td><td>"
				 +lastcheck+"</td><td>"
				 +age+"</td></tr>" ;
				  
			var array=[];
           var	obj={};
            obj.firstname=	firstname;
            obj.lastname=	lastname;			
			obj.lastcheck=	lastcheck;
            obj.age=	age;	
			
			array.push( array);
			
			console.log(array);
			
				  $("tbody").append(tblrow);
				  
				   $("myName").val("");
				  // document.getElementById("firstname").value="";
	              $("mylastmane").val("");
	               $("lastcheck").val("");
	               $("myage").val("");
   });
   
    
   
});






/*
$(document).ready(function() {
   // Votre code ici avec les appels à la fonction $()
   
    $("#myForm").submit(function(){
		
		first=$(this).find("input[name=firstname]").val(); //  alle eingabe von Formular
		last=$(this).find("input[name=lastname]").val();
		lastcheck=$(this).find("input[name=date_ofmedicalcheck]").val();
		age=$(this).find("input[name=age]").val();
		
		url=$(this).attr("action");
		
		//  post request to becomme the input
		$.post( url,{firstname:first,lastname:last,date_ofmedicalcheck:lastcheck,age:age}
		,function(data){
			if(data.erreur=="no"){}
			 $("#myForm").fadeout();
			 $("#myForm").before(data.retour);
			 
			else{
				
			}
			} ,"json");
		return false;
	});
   
});

*/


/*


 let vm= new Vue({
	
	el:'#zoo',
	data:{
		
		useranimals:[]
	}
	,
	
	methods:{
		close:function(){
			
		}
	}
	
	,
	
	computed:{
		fullname:function(){
			return this.animals[firstname] + ' '+ 'the' + ' ' + this.animals[animalname]
			
		}
	}
	,
	methods:{
		addanimal:function(){
		this.animals.push='jean the peguin'
			
		}
	}
})*/

