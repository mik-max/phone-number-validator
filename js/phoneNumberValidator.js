function verifyPhoneNumbers(){
      var rawNumbers = document.getElementById('output').value;
      rawNumbers += '';
     console.log(rawNumbers);
     var arrayOfNumbers = [];
     arrayOfNumbers = rawNumbers.split(",");
     console.log(arrayOfNumbers); 
     var length = arrayOfNumbers.length;
     var arrayOfValidCode = [
         "0803","0806","0816","0814","0810","0813","0703","0706","0903","0906","0809",
         "0817","0908","0909","0802", "0808","0812", "0708","0701","0902","0901","0907",
         "0805","0807","0811","0815","0705","0905","0702", "0704", "0913", "0916" , "0904", "0907", "0912" , "0818"
     ];
     arrayOfMtnCode = ["0803","0806","0814","0810","0813","0816","0703","0706","0903","0906","0702", "0704", "0913", "0916"]; 
     arrayOfAirtelCode = ["0802","0808","0812","0708","0701","0902","0901","0907", "0904",  "0912"];
     arrayOfGloCode = ["0805","0807","0811","0815","0705","0905", "0915"];
     arrayOf9MobileCode = ["0809", "0818","0817", "0908","0909"];
     var validNigerianPhoneNumbers = [];
     var invalidNigerianPhoneNumbers = [];
     var invalidNumber = [];
     var providerPhoneNumbers = {
          mtn : {
               providerName : "",
               arrayOfProviderNumbers : []
          },
          airtel : {
               providerName : "",
               arrayOfProviderNumbers : []
          },
          glo : {
               providerName : "",
               arrayOfProviderNumbers : []
          },
          _9Mobile : {
               providerName : "",
               arrayOfProviderNumbers : []
          }
     };
     
     for(var index = 0; index < length; index++){ 
          var secondLevelValidityChecker = arrayOfNumbers[index];
          var validPhoneNumberCode = secondLevelValidityChecker.slice(0 , 4); 
         if(arrayOfNumbers[index].length === 11){ 
             var isValidCode = checkAvailability(arrayOfValidCode, validPhoneNumberCode);
          
             if(isValidCode === true){
                 validNigerianPhoneNumbers.push(secondLevelValidityChecker);
             }else{
                 invalidNigerianPhoneNumbers.push(secondLevelValidityChecker);
             }  
             var isMTN = checkAvailability(arrayOfMtnCode, validPhoneNumberCode); 
             var isAirtel = checkAvailability(arrayOfAirtelCode, validPhoneNumberCode); 
             var isGlo = checkAvailability(arrayOfGloCode, validPhoneNumberCode); 
             var is9Mobile = checkAvailability(arrayOf9MobileCode, validPhoneNumberCode); 

             if (isMTN === true){
               providerPhoneNumbers.mtn.providerName = "MTN";
               providerPhoneNumbers.mtn.arrayOfProviderNumbers.push(secondLevelValidityChecker);
             }else if(isAirtel === true){
               providerPhoneNumbers.airtel.providerName = "Airtel";
               providerPhoneNumbers.airtel.arrayOfProviderNumbers.push(secondLevelValidityChecker);
             }else if(isGlo === true){
               providerPhoneNumbers.glo.providerName = "Glo";
               providerPhoneNumbers.glo.arrayOfProviderNumbers.push(secondLevelValidityChecker);
             }else if(is9Mobile === true){
               providerPhoneNumbers._9Mobile.providerName = "9Mobile";
               providerPhoneNumbers._9Mobile.arrayOfProviderNumbers.push(secondLevelValidityChecker);
             };
             
          }else{
               invalidNumber.push(secondLevelValidityChecker);
          }; 
        
         
     }
     // Output Table Functions.
     if(rawNumbers === ""){
          alert('You have not added any number');
     } else{
          var table = document.getElementById('tableBody');
          providerPhoneNumbers.mtn.arrayOfProviderNumbers.forEach(element => {
               var mtnLogo = "<img src ='images/mtn.png' style = ' width: 50px;  padding-right:20px;'>";
               var row = "<tr>" + 
                              "<td>" + mtnLogo + providerPhoneNumbers.mtn.providerName + "</td>" + 
                              "<td>" + element + "</td>" + 
                         "</tr>" 
               table.innerHTML += row;
          });
          providerPhoneNumbers.airtel.arrayOfProviderNumbers.forEach(element => {
               var airtelLogo = "<img src ='images/airtel.jpg  ' style = ' width: 50px;  padding-right:20px;'>";
               var row = "<tr>" + 
                              "<td>" + airtelLogo + providerPhoneNumbers.airtel.providerName + "</td>" + 
                              "<td>" + element + "</td>" + 
                         "</tr>" 
               table.innerHTML += row;
          });
          providerPhoneNumbers.glo.arrayOfProviderNumbers.forEach(element => {
               var gloLogo = "<img src ='images/glo.jpg' style = ' width: 50px;  padding-right:20px;'>";
               var row = "<tr>" + 
                              "<td>" + gloLogo + providerPhoneNumbers.glo.providerName + "</td>" + 
                              "<td>" + element + "</td>" + 
                         "</tr>" 
               table.innerHTML += row;
          });
          providerPhoneNumbers._9Mobile.arrayOfProviderNumbers.forEach(element => {
               var _9MobileLogo = "<img src ='images/_9mobile.png' style = ' width: 50px;  padding-right:20px;'>";
               var row = "<tr>" + 
                              "<td>" + _9MobileLogo + providerPhoneNumbers._9Mobile.providerName + "</td>" + 
                              "<td>" + element + "</td>" + 
                         "</tr>" 
               table.innerHTML += row;
          });
          // output Text Functions
          var invalidNumberHeader = document.getElementById('invalidNigerianNumbersHeader');
          var header = "<h4 class = 'responsiveHeader'>"+ "List Of Invalid Nigerian Numbers" +"</h4>";
          $('#invalidNigerianNumbersHeader').addClass('bg-secondary mb-2 p-2 text-center text-white')
          invalidNumberHeader.innerHTML += header;

          var invalidNumberOutput = document.getElementById('invalidPhoneNumbers');
          invalidNigerianPhoneNumbers.forEach(element => {
               var banImage = "<i class='fa fa-ban text-secondary px-2' aria-hidden='true' style = 'font-size: 20px; '></i>";
               var paragraph = "<p>" + banImage + element + " is an invalid Nigerian number." + "</p>";
               invalidNumberOutput.innerHTML += paragraph; 
          });

          var invalidHeader = document.getElementById('notANumberHeader');
          var header = "<h4 class = 'responsiveHeader'>"+ "List Of Invalid  Numbers" +"</h4>";
          $('#notANumberHeader').addClass('bg-danger text-center mb-1 p-2  text-white')
          invalidHeader.innerHTML += header;

          var notANumber = document.getElementById('notANumber');
          invalidNumber.forEach(element => {
               var cancleImage = "<i class='fa fa-times-circle-o text-danger px-2' aria-hidden='true' style = 'font-size: 20px; '></i>";
               var notANumberParagraph = "<p>" + cancleImage + element + " is invalid." + "</p>";
               notANumber.innerHTML += notANumberParagraph; 
          });
          if(invalidNigerianPhoneNumbers.length === 0){
               document.getElementById('ifEmpty').innerHTML = "There are no invalid Nigerian numbers in the list";
          }else if(invalidNumber === 0){
               document.getElementById('ifVoid').innerHTML = "There are no invalid phone numbers in the list";
          }
          document.getElementById('records').innerText = "There are " + validNigerianPhoneNumbers.length + " records in the table";
     }
     
    
     
     console.log(invalidNigerianPhoneNumbers.length);

 }
 


 function checkAvailability(arrayToCheck, searchValue) {
     return arrayToCheck.some(function (arrayValues) {
         return searchValue === arrayValues;
     });
 }